import { mongoose } from '@typegoose/typegoose';
import { User, UserModel } from '../user/model';
import { Cart, CartModel } from './model';

const ObjectId = mongoose.Types.ObjectId;

interface IProducts {
  products: {
    productId: mongoose.Types.ObjectId;
    quantity: Number;
  };
  totalPrice: Number;
}

export async function createCart(userId: mongoose.Types.ObjectId) {
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

export async function updateCart(id: string, data: IProducts) {
  const responseCarts = await CartModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!responseCarts) {
    throw new Error(`Cart ${id} not found`);
  }

  return responseCarts;
}

export async function deleteCart(userId: string) {
  const responseCarts = await CartModel.deleteOne({ userId: userId });
  if (!responseCarts.deletedCount) {
    throw new Error(`Cart ${userId} not found`);
  }
  return responseCarts;
}
