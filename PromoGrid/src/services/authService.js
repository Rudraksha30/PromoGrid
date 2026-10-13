export function validateRegistration(form) {
  const errors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (form.fullName.trim().length < 2) {
    errors.fullName = "Name must contain at least 2 characters.";
  } else if (!/^[a-zA-Z ]+$/.test(form.fullName.trim())) {
    errors.fullName = "Use letters and spaces only.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.username.trim()) {
    errors.username = "Please enter a username.";
  } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(form.username)) {
    errors.username = "Use 3–20 letters, numbers, or underscores.";
  }

  if (!form.role) {
    errors.role = "Please select an account role.";
  }

  if (!form.password) {
    errors.password = "Please enter a password.";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/.test(
      form.password,
    )
  ) {
    errors.password =
      "Use 8+ characters with uppercase, lowercase, number, and symbol.";
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!form.acceptTerms) {
    errors.acceptTerms = "Please accept the terms to continue.";
  }

  return errors;
}
