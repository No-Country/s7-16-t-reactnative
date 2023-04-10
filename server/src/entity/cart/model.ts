import { prop, Ref, getModelForClass, mongoose } from '@typegoose/typegoose';

export class Cart {
  @prop({ required: true })
  public userId: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'User';
  };

  @prop()
  public products?: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId;
        ref: 'Product';
        required: true;
      };
      quantity: {
        type: Number;
        required: true;
      };
    },
  ];
}

export const CartModel = getModelForClass(Cart, {
  schemaOptions: {
    timestamps: true,
  },
});
