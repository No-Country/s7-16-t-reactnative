import { prop, Ref, getModelForClass, mongoose } from '@typegoose/typegoose';
import { Product } from '../products/model';

export class Cart {
  @prop({ required: true })
  public userId: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'User';
  };

  @prop({ required: false })
  public products?: [
    {
      productId: Ref<Product>;
      quantity: Number;
    },
  ];

  @prop({ required: true, default: 0 })
  public totalPrice!: Number;

  @prop({ required: true, default: "open" })
  public status!: string;

}

export const CartModel = getModelForClass(Cart, {
  schemaOptions: {
    timestamps: true,
  },
});
