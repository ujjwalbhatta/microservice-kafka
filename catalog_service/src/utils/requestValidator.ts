import { ClassConstructor, plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";

const validationError = async (
  input: any
): Promise<ValidationError[] | false> => {
  const errors = await validate(input, {
    validationError: { target: true },
  });

  if (errors.length > 0) {
    return errors;
  }

  return false;
};

export const RequestValidator = async <T>(
  type: ClassConstructor<T>,
  body: any
): Promise<{ errors: boolean | string; input: T }> => {
  const input = plainToClass(type, body);
  const errors = await validationError(input);

  if (errors) {
    const errorMessages = errors
      .map((err: ValidationError) => (Object as any).values(err.constraints))
      .join(", ");

    return {
      errors: errorMessages,
      input,
    };
  }

  return {
    errors: false,
    input,
  };
};
