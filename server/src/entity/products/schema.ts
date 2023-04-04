import * as z from 'zod';

export const newProductSchema = {
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    brand: z.string({
      required_error: 'Brand is required',
      invalid_type_error: 'Brand must be a string',
    }),
    description: z.string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    }),
    expiryDate: z.coerce.date({
      required_error: 'expiryDate is required',
      invalid_type_error: 'expiryDate must be a valid date',
    }),
    price: z.coerce.number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a string',
    }),
    barCode: z.coerce.number({
      required_error: 'BarCode is required',
      invalid_type_error: 'BarCode must be a string',
    }),
    photo: z.string({
      required_error: 'A image is required',
      invalid_type_error: 'Image must be a string of url',
    }),
  }),
};

export type NewProductBody = z.TypeOf<typeof newProductSchema.body>;
