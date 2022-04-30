export function fullnameValidate(fullname) {
  const fullnameRegex = /^[a-zA-Z ]{2,30}$/; // 2-30 characters, letters, spaces

  return fullnameRegex.test(fullname);
}

export function usernameValidate(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/; // 6-20 characters, letters, numbers, and underscores

  return usernameRegex.test(username);
}

export function passwordValidate(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/; // 8+ characters, at least one lowercase letter, one uppercase letter, one number, special characters allowed

  return passwordRegex.test(password);
}

export function confirmPasswordValidate(password, confirmPassword) {
  return password === confirmPassword;
}

export function emailValidate(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // email address

  return emailRegex.test(email);
}

export function birthdayValidate(birthday) {
  const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD

  return birthdayRegex.test(birthday);
}

export default function registerValidate(
  fullname,
  username,
  password,
  confirmPassword,
  email,
  birthday
) {
  const fullnameValidated = fullnameValidate(fullname);
  const usernameValidated = usernameValidate(username);
  const passwordValidated = passwordValidate(password);
  const confirmPasswordValidated = confirmPasswordValidate(password, confirmPassword);
  const emailValidated = emailValidate(email);
  const birthdayValidated = birthdayValidate(birthday);

  if (!!fullnameValidated) {
    return { error: "Fullname is invalid" };
  }

  if (!!usernameValidated) {
    return { error: "Username is invalid" };
  }

  if (!!passwordValidated) {
    return { error: "Password is invalid" };
  }

  if (!!confirmPasswordValidated) {
    return { error: "Passwords do not match" };
  }

  if (!!emailValidated) {
    return { error: "Email is invalid" };
  }

  if (!!birthdayValidated) {
    return { error: "Birthday is invalid" };
  }
}