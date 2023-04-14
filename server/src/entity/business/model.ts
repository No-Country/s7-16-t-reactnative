import { prop, Ref, getModelForClass } from '@typegoose/typegoose';

export class Business {
  @prop({ required: true })
  public names!: string;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ required: true, unique: true })
  public cuit!: string;

  @prop({ required: true })
  public address!: string;

  @prop({ required: true, default: process.env.DEF_QR_CODE })
  public qrCode!: string;

  @prop({ required: false })
  public photo?: string;

  @prop()
  public owners?: string; //Ref<User>[]  //User?
}

export const BusinessModel = getModelForClass(Business, {
  schemaOptions: {
    timestamps: true,
  },
});
