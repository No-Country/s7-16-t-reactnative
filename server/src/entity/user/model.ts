import { prop, Ref, getModelForClass, pre } from '@typegoose/typegoose';
import argon2 from 'argon2';

@pre<User>('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const hash = await argon2.hash(this.password);

    this.password = hash;

    return next();
  }
})
export class User {
  @prop({ lowercase: true, required: true, unique: true })
  public email!: string;

  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ required: true, unique: true })
  public dni!: number;

  @prop() //{ ref:()=>Cart }
  public cart: string; //Ref<Cart>[]  //User

  public async comparePassword(password: string): Promise<boolean> {
    return argon2.verify(this.password, password);
  }
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});
