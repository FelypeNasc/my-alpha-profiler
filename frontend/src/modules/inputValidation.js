export function usernameValidate(username) {
  const regex = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/; // 8-20 characters, no underscore, no double underscore
  if (regex.test(username)) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: 'Username must be between 8 and 20 characters, no underscore, no double underscore',
    };
  }
}

export function passwordValidate(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/; // 8+ characters, at least one lowercase letter, one uppercase letter, one number, special characters allowed
  if (passwordRegex.test(password)) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error:
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number',
    };
  }
}

export function emailValidate(email) {
  const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,4})+$/; // eslint-disable-line
  if (emailRegex.test(email)) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: 'Email address is not valid',
    };
  }
}

export function birthdateValidate(birthdate) {
  const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
  if (birthdayRegex.test(birthdate)) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: 'Birthdate is not valid',
    };
  }
}

export function photoValidate(base64Photo) {
  const photoRegex = /^data:image\/(png|jpg|jpeg);base64,/; // base64 photo
  if (photoRegex.test(base64Photo)) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: 'Photo is not valid',
    };
  }
}

export default function registerValidate(username, password, confirmPassword, email, birthdate) {
  const usernameValidation = usernameValidate(username);
  const passwordValidation = passwordValidate(password, confirmPassword);
  const emailValidation = emailValidate(email);
  const birthdateValidation = birthdateValidate(birthdate);
  return {
    isValid:
      usernameValidation.isValid &&
      passwordValidation.isValid &&
      emailValidation.isValid &&
      birthdateValidation.isValid,
    error:
      usernameValidation.error ||
      passwordValidation.error ||
      emailValidation.error ||
      birthdateValidation.error,
  };
}
