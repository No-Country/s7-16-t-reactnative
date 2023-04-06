import axios, { AxiosInstance } from "axios";
import {
  LoginData,
  LoginRes,
  Product,
  Products,
  RegisterData,
  RegisterRes,
} from "../interfaces/api.interfaces";

const api: AxiosInstance = axios.create({
  baseURL: "https://s7-16-t-ts-dep-production.up.railway.app/api",
});

export const getProducts = async () => {
  try {
    const res = await api.get<Products>("/product");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = async (barcode: number) => {
  try {
    const res = await api.get<Product>(`/product/${barcode}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (data: LoginData) => {
  try {
    const res = await api.post<LoginRes>(`/auth/login`, { data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (data: RegisterData) => {
  try {
    const res = await api.post<RegisterRes>(`/auth/register`, { data });
    return res;
  } catch (error) {
    console.log(error);
  }
};
