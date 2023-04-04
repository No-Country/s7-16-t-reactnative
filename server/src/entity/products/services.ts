import { Product, ProductModel } from './model';

export async function createProduct(product: Product) {
  return ProductModel.create(product);
}

export async function getProducts() {
  return ProductModel.find({});
}

export async function getProduct(barCode: String) {
  const responseProduct = await ProductModel.findOne({ barCode });
  if (!responseProduct) {
    throw new Error(`Product ${barCode} not found`);
  }
  return responseProduct;
}

export async function updateProduct(id: string, data: Product) {
  const responseProducts = await ProductModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseProducts;
}

export async function deleteProduct(id: string) {
  const responseProducts = await ProductModel.deleteOne({ _id: id });
  if (!responseProducts.deletedCount) {
    throw new Error(`Product ${id} not found`);
  }
  return responseProducts;
}
