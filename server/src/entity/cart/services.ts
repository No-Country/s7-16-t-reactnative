import { mongoose } from '@typegoose/typegoose';
import { User, UserModel } from '../user/model';
import { Cart, CartModel } from './model';

const ObjectId = mongoose.Types.ObjectId;

export async function createCart(userId: mongoose.Schema.Types.ObjectId) {
  const user = await UserModel.findById(userId);

  const newCart = new CartModel({
    userId: user?._id,
    products: [],
  });

  await newCart.save();
  user?.carts.push(newCart._id);
  await user?.save();
}

export async function getCarts() {
  return CartModel.find({});
}

export async function getCart(userId: string) {
  const objectId = new ObjectId(userId);
  const responseCart = await CartModel.findOne({ userId: objectId });
  if (!responseCart) {
    throw new Error(`Cart ${userId} not found`);
  }
  return responseCart;
}

export async function updateCart(id: string, data: Cart) {
  const responseCarts = await CartModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //modify later in order to add products and its quantity
  });
  return responseCarts;
}

export async function deleteCart(userId: string) {
  const responseCarts = await CartModel.deleteOne({ userId: userId });
  if (!responseCarts.deletedCount) {
    throw new Error(`Cart ${userId} not found`);
  }
  return responseCarts;
}
