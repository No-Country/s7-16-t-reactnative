export interface Products {
  products: Product[];
}

export interface Product {
  _id: string;
  name: string;
  brand: string;
  description: string;
  expDate: string;
  price: number;
  barCode: number;
  photo: string;
  amount: number;
}
// export interface CheckoutData {
//   products: Product[];
//   totalPrice: number;
// }

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterRes {
  error: boolean;
  message: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phNumber: number | string;
  birthdate: Date;
  documentType: string;
  dni: number | string;
  genre: string;
}

export interface ProductResponse {
  product: Product;
}

// Login response
export interface LoginResponse {
  message: string;
  userResponse: UserResponse;
  token: string;
}

export interface UserResponse {
  carts: string[];
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  dni: number;
  phNumber: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Business response
export interface BusinessResponse {
  business: Business;
}

export interface Business {
  _id: string;
  names: string;
  email: string;
  password: string;
  cuit: string;
  address: string;
  qrCode: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Compras response

export interface ComprasResponse {
  cart: Cart[];
}

export interface Cart {
  _id: string;
  userId: string;
  products: Product[];
  totalPrice: number;
  status: string;
  payment_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
