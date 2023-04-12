import * as z from 'zod';

export const registerUserSchema = {
  body: z
    .object({
      firstName: z.string({
        required_error: 'firstName is required',
        invalid_type_error: 'firstName must be a string',
      }),
      lastName: z.string({
        required_error: 'lastName is required',
        invalid_type_error: 'lastName must be a string',
      }),
      photo: z.string({
        required_error: 'Profile pic is required',
        invalid_type_error: 'Profile pic must be a string of url',
      }),
      phNumber: z.number({
        required_error: 'Phone number is required',
        invalid_type_error: 'Phone number must be a number',
      }),
      dni: z.number({
        required_error: 'dni is required',
        invalid_type_error: 'dni must be a string',
      }),
      birthdate: z.date({
        required_error: 'Birthdate is required',
        invalid_type_error: 'Birthdate must be a valid Date',
      }),
      email: z
        .string({
          required_error: 'email is required',
        })
        .email('must be a valid email'),
      password: z
        .string({
          required_error: 'password is required',
        })
        .min(6, 'Password must be at least 6 characters long')
        .max(64, 'Password should not be longer than 64 characters'),
      confirmPassword: z.string({
        required_error: 'confirmPassword is required',
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }),
};

export type RegisterUserBody = z.TypeOf<typeof registerUserSchema.body>;
