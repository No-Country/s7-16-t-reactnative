import { mongoose } from '@typegoose/typegoose';
import { User, UserModel } from '../user/model';
import { Cart, CartModel } from './model';

const ObjectId = mongoose.Types.ObjectId;

interface IProducts {
  products: {
    productId: mongoose.Types.ObjectId;
    name: string;
    brand: string;
    description: string;
    expiryDate: Date;
    price: number;
    barCode: number;
    photo: string;
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
  return newCart;
}

export async function getCarts() {
  return CartModel.find({});
}

export async function getCart(userId: string) {
  const objectId = new ObjectId(userId);
  const responseCart = await CartModel.find({ userId: objectId });
  if (!responseCart) {
    throw new Error(`Cart ${userId} not found`);
  }
  return responseCart;
}

export async function getOpenCart(userId: string) {
  const objectId = new ObjectId(userId);
  const responseCart = await CartModel.findOne({ userId: objectId }).where({ status: 'open' });
  if (!responseCart) {
    throw new Error(`Cart ${userId} not found`);
  }
  return responseCart;
}

export async function getSuccesCart(id: string) {
  const objectId = new ObjectId(id);
  const responseCart = await CartModel.find({ userId: objectId }).where({ status: 'approved' });

  if (!responseCart) {
    throw new Error(`Cart ${id} not found`);
  }
  return responseCart;
}

export async function updateCart(id: string, userId: mongoose.Types.ObjectId, data: IProducts) {
  const responseCarts = await CartModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  }).where({ status: 'open' });
  let newCart: any;
  if (!responseCarts) {
    const objectId = new ObjectId(userId);
    newCart = await CartModel.findOne({ userId: objectId }).where({ status: 'open' });
    if (!newCart) {
      newCart = await createCart(userId);
    }
    return await CartModel.findOneAndUpdate({ _id: newCart._id }, data, {
      new: true,
    }).where({ status: 'open' });
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
