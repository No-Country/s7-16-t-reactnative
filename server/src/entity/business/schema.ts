import * as z from 'zod';

export const newBusinessSchema = {
  body: z.object({
    email: z.string({
      required_error: 'E-mail is required',
      invalid_type_error: 'E-mail must be a string',
    }),
    password: z.string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    }),
    names: z.string({
      required_error: 'Company names is required',
      invalid_type_error: 'Company names must be a string',
    }),
    cuit: z.string({
      required_error: 'Cuit is required',
      invalid_type_error: 'Cuit must be a valid number',
    }),
    address: z.string({
      required_error: 'Address is required',
      invalid_type_error: 'Cddress must be a string',
    }),
    qrCode: z.string({
      required_error: 'qrCode is required',
      invalid_type_error: 'A qrCode must be provided',
    }),
    photo: z.string({
      required_error: 'Photo is required',
      invalid_type_error: 'A photo must be provided',
    }),
  }),
};

export type NewBusinessBody = z.TypeOf<typeof newBusinessSchema.body>;
