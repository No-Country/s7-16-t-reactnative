import { mongoose } from '@typegoose/typegoose';
import * as z from 'zod';

export const newCartSchema = {
  body: z
    .object({
      userId: z.instanceof(mongoose.Schema.Types.ObjectId),
    })
    .refine((data) => mongoose.Schema.Types.ObjectId, {
      message: 'You must assign the cart to a user.',
      path: ['userId'],
    }),
};

export type NewCartBody = z.TypeOf<typeof newCartSchema.body>;
