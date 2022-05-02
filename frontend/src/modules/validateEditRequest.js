import { photoValidate, passwordValidate, emailValidate } from './inputValidation';
export default function validateEditRequest(photo = null, email = null, password = null) {
  const photoValidated = photo != null && photoValidate(photo);
  const emailValidated = email != null && emailValidate(email);
  const passwordValidated = password != null && passwordValidate(password);
  const validated = {};
  if (photoValidated) {
    validated.photo = photo;
  }
  if (emailValidated) {
    validated.email = email;
  }
  if (passwordValidated) {
    validated.password = password;
  }
  if (Object.keys(validated).length > 0) {
    return validated;
  } else {
    return { error: 'No data to update' };
  }
}
