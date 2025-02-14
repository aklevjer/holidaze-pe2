import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "@/components/forms/LoginForm";

describe("LoginForm", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call onSubmit when valid form data is submitted", async () => {
    const onSubmitMock = vi.fn();

    render(
      <BrowserRouter>
        <LoginForm onSubmit={onSubmitMock} isPending={false} />
      </BrowserRouter>,
    );

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "valid@stud.noroff.no" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const [formData] = onSubmitMock.mock.calls[0];
      expect(formData).toEqual({
        email: "valid@stud.noroff.no",
        password: "validpassword123",
      });
    });
  });

  it("should display validation errors on empty form submission", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={() => {}} isPending={false} />
      </BrowserRouter>,
    );

    const submitButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(submitButton);

    const emailError = await screen.findByText("Please enter a valid @stud.noroff.no email");
    const passwordError = await screen.findByText("Password must be at least 8 characters");

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("should disable the submit button when the form is submitting", () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={() => {}} isPending={true} />
      </BrowserRouter>,
    );

    const submitButton = screen.getByRole("button", { name: "Login" });
    expect(submitButton).toBeDisabled();
  });
});
