import { prop, Ref, getModelForClass } from '@typegoose/typegoose';

export class Product {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public brand!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public expiryDate!: Date;

  @prop({ required: true })
  public price!: number;

  @prop({ required: true, unique: true })
  public barCode!: number;

  @prop({ required: true })
  public img!: string;

  @prop()
  public business?: string; //Ref<Business>[]  //Business?
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: {
    timestamps: true,
  },
});
