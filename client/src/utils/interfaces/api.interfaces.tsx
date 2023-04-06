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
}

export interface LoginRes {
  _id: string;
  email: string;
}

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
  dni: string;
  email: string;
  password: string;
  confirmPassword: string;
}
