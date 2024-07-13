import * as Yup from "yup";

const registerSchema = Yup.object({
  fullName: Yup.string().min(3).max(31).required("Full Name is required"),
  email: Yup.string().email().required("Email address is required"),
  birth_date: Yup.string().required("Birth Date is required"),
  phone: Yup.string().min(10).max(12).required("Phone Number is required"),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const loginSchema = Yup.object({
  email: Yup.string().email().required("Email address is required"),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
});

const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Email address is required"),
  code: Yup.string().min(6).max(6).required("Code is required"),
});

export { registerSchema, loginSchema, forgotPasswordSchema };
