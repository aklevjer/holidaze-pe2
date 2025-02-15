import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import VenueForm from "@/components/forms/VenueForm";

describe("VenueForm", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call onSubmit when valid form data is submitted", async () => {
    const onSubmitMock = vi.fn();

    render(<VenueForm onSubmit={onSubmitMock} isPending={false} error={null} />);

    const nameInput = screen.getByLabelText("Venue Name");
    const descriptionInput = screen.getByLabelText("Description");
    const priceInput = screen.getByLabelText("Price /Night");
    const guestsInput = screen.getByLabelText("Max Guests");
    const submitButton = screen.getByRole("button", { name: "Add venue" });

    fireEvent.change(nameInput, { target: { value: "Test Venue" } });
    fireEvent.change(descriptionInput, { target: { value: "Modern and well-equipped." } });
    fireEvent.change(priceInput, { target: { value: "200" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const [formData] = onSubmitMock.mock.calls[0];
      expect(formData).toMatchObject({
        name: "Test Venue",
        description: "Modern and well-equipped.",
        price: 200,
        maxGuests: 4,
      });
    });
  });

  it("should display validation errors on empty form submission", async () => {
    render(<VenueForm onSubmit={() => {}} isPending={false} error={null} />);

    const submitButton = screen.getByRole("button", { name: "Add venue" });
    fireEvent.click(submitButton);

    const nameError = await screen.findByText("Please enter a venue name");
    const descriptionError = await screen.findByText("Please enter a description");
    const priceError = await screen.findByText("Price must be at least 1");
    const guestsError = await screen.findByText("Guests must be at least 1");

    expect(nameError).toBeInTheDocument();
    expect(descriptionError).toBeInTheDocument();
    expect(priceError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
  });

  it("should disable the submit button when the form is submitting", () => {
    render(<VenueForm onSubmit={() => {}} isPending={true} error={null} />);

    const submitButton = screen.getByRole("button", { name: "Add venue" });
    expect(submitButton).toBeDisabled();
  });

  it("should display an error alert when provided with an error", async () => {
    render(
      <VenueForm onSubmit={() => {}} isPending={false} error={new Error("Something went wrong")} />,
    );

    const errorAlert = await screen.findByText("Something went wrong");
    expect(errorAlert).toBeInTheDocument();
  });
});
