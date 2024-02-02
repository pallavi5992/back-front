import * as Yup from "yup";
const { array } = Yup;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Login Schema
export const loginSchema = Yup.object({
  emailId: Yup.string()
    .trim("The email number cannot include space(s) at start and end.")
    .strict(true)
    .required("Please enter email.")
    .matches(emailRegex, "Please enter your valid email"),
  password: Yup.string()
    .required("Please enter Password.")
    .trim("Password cannot include space")
    .min(3, "Password length greater than 4 character.")
    .max(15, "Password length less than 15 character."),
  captcha: Yup.string()
    .required("Please Enter captcha.")
    .trim("Captcha cannot include space"),
});

// forgotPassword
export const  forgotPasswordSchema= Yup.object({
  emailId: Yup.string()
    .trim("The email number cannot include space(s) at start and end.")
    .strict(true)
    .required("Please enter email.")
    .matches(emailRegex, "Please enter your valid email"),
  captcha: Yup.string()
    .required("Please Enter captcha.")
    .trim("Captcha cannot include space"),
});

// resetPassword
export const  resetPasswordSchema= Yup.object({
  Password: Yup.string()
  .required("Please enter Password.")
  .trim("Password cannot include space")
  .min(4, "Password length greater than 4 character.")
  .max(15, "Password length less than 15 character."),
    confirmPassword: Yup.string()
    .required("Please enter confirm password.")
    .oneOf([Yup.ref('Password'), null], 'Password must match')
    .trim("Confirm password cannot include space")
    .min(4, "Confirm password length greater than 4 character.")
    .max(15, "Confirm password length less than 15 character."),
  captcha: Yup.string()
    .required("Please Enter captcha.")
    .trim("Captcha cannot include space"),
});

// user Schema
export const userSchema = Yup.object({
  UserType: Yup.string().required("Please select user's role."),
  User_Name: Yup.string().required("Please enter name."),
  Email_Id: Yup.string()
    .trim("Email cannot include space(s) at start and end.")
    .strict(true)
    .required("Please enter Email Address.")
    .matches(emailRegex, "Please enter your valid email"),
    Mobile_No: Yup.string()
    .trim("Mobile number cannot include start and end spaces")
    .strict(true)
    .matches(phoneRegExp, "Mobile number is not valid")
    .min(10, "Mobile number must be atleast 10 characters long")
    .max(10, "Mobile number can't be greater than 10 digits.")
    .required("Please enter your number."),
  Password: Yup.string()
    .required("Please enter Password.")
    .trim("Password cannot include space")
    .min(4, "Password length greater than 4 character.")
    .max(15, "Password length less than 15 character."),
  Organisation: Yup.string()
    .trim("organisation name cannot include space(s) at start and end.")
    .required("Please enter organisation name."),
  Designation: Yup.string().trim().required("Please enter designation."),
  captcha: Yup.string().trim().required("Please enter captcha."),
  confirmPassword: Yup.string()
    .required("Please enter confirm password.")
    .oneOf([Yup.ref('Password'), null], 'Password must match')
    .trim("Confirm password cannot include space")
    .min(4, "Confirm password length greater than 4 character.")
    .max(15, "Confirm password length less than 15 character."),
});

export const UpdateUserSchemaSelf=Yup.object({
  userName:Yup.string()
  .trim("Mobile number cannot include start and end spaces"),
  Mobile_No: Yup.string()
    .trim("Mobile number cannot include start and end spaces")
    .matches(phoneRegExp, "Mobile number is not valid")
    .min(10, "Mobile number must be atleast 10 characters long")
    .max(10, "Mobile number can't be greater than 10 digits."),
    oldPassword:Yup.string()
    .trim("Password cannot include space")
    .min(4, "Password length greater than 4 character.")
    .max(15, "Password length less than 15 character."),
    newPassword: Yup.string()
    .trim("Password cannot include space")
    .min(4, "Password length greater than 4 character.")
    .max(15, "Password length less than 15 character."),
  Organisation: Yup.string()
    .trim("organisation name cannot include space(s) at start and end."),
  Designation: Yup.string().trim(),
  captcha: Yup.string().trim().required("Please enter captcha."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'New Password must match with confirm Password.')
    .trim("Confirm password cannot include space")
    .min(4, "Confirm password length greater than 4 character.")
    .max(15, "Confirm password length less than 15 character."),
});

export const addAccessAssessmentSchema = Yup.object({
  UserID: Yup.string().required("Please select user."),
  ModuleID: Yup.array().required("Please checked module."),
 
});

export const addOraganisationSchema= Yup.object({
  Code : Yup.string().required("Please enter short name."),
  Name: Yup.string().required("Please enter organisation name."),
  PublicSector:Yup.string().required("Please select sector."),
});


export const addModuleConfigSchema= Yup.object({
  // ModuleID : Yup.string().required("Please select module."),
  DataYearID: Yup.string().required("Please select data year."),
  TargetYearID:Yup.string().required("Please select target year."),
  DataRefershFrequency : Yup.string().required("Please select data frequency."),
  // StartupEngaged : Yup.string().required("Please enter short name."),
  // ContractsSigned : Yup.string().required("Please enter short name."),
  // ConsolidatedMonth : Yup.string().required("Please enter short name."),
  // TargetFor : Yup.string().required("Please enter short name."),
});