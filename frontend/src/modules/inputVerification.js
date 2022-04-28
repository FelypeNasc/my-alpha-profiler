export function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/; // 6-20 characters, letters, numbers, and underscores
  return usernameRegex.test(username);
}

export function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/; // 8+ characters, at least one lowercase letter, one uppercase letter, one number, special characters allowed

  return passwordRegex.test(password);
}

