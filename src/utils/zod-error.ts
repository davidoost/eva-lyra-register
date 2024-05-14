import { ZodError } from "zod";

export const parseZodFormErrors = <T>(error: ZodError<T>) => {
  const errors: any = {};
  const addError = (key: string, message: string) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!errors.hasOwnProperty(key)) {
      errors[key] = message;
    } else {
      if (!Array.isArray(errors[key])) {
        errors[key] = [errors[key]];
      }
      errors[key].push(message);
    }
  };
  for (const issue of error.issues) {
    const { message, path } = issue;
    const key = path.join(".");
    addError(key, message);
  }

  return errors;
};
