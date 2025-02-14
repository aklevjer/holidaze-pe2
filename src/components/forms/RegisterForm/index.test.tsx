import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "@/components/forms/RegisterForm";

describe("RegisterForm", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call onSubmit when valid form data is submitted", async () => {
    const onSubmitMock = vi.fn();

    render(
      <BrowserRouter>
        <RegisterForm onSubmit={onSubmitMock} isPending={false} />
      </BrowserRouter>,
    );

    const nameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const venueManagerCheckbox = screen.getByLabelText("I want to be a venue manager");
    const submitButton = screen.getByRole("button", { name: "Register" });

    fireEvent.change(nameInput, { target: { value: "validusername" } });
    fireEvent.change(emailInput, { target: { value: "valid@stud.noroff.no" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword123" } });
    fireEvent.click(venueManagerCheckbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      const [formData] = onSubmitMock.mock.calls[0];
      expect(formData).toEqual({
        name: "validusername",
        email: "valid@stud.noroff.no",
        password: "validpassword123",
        venueManager: true,
      });
    });
  });

  it("should display validation errors on empty form submission", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={() => {}} isPending={false} />
      </BrowserRouter>,
    );

    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    const nameError = await screen.findByText("Username is required");
    const emailError = await screen.findByText("Please enter a valid @stud.noroff.no email");
    const passwordError = await screen.findByText("Password must be at least 8 characters");

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("should disable the submit button when the form is submitting", () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={() => {}} isPending={true} />
      </BrowserRouter>,
    );

    const submitButton = screen.getByRole("button", { name: "Register" });
    expect(submitButton).toBeDisabled();
  });
});
