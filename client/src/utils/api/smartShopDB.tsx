import axios, { AxiosInstance } from "axios";
import {
  BusinessResponse,
  LoginData,
  LoginResponse,
  ProductResponse,
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
    const res = await api.get<ProductResponse>(`/product/${barcode}`);
    return res;
  } catch (error) {
    console.log(error);
    alert("No se encontró el producto. Vuelve a intentarlo");
  }
};

export const Login = async ({ email, password }: LoginData) => {
  try {
    const res = await api.post<LoginResponse>(`/auth/login`, {
      email,
      password,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (data: RegisterData) => {
  try {
    const res = await api.post<RegisterRes>(`/auth/register`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getOneTienda = async (qrcode: string) => {
  console.log(qrcode);
  try {
    const res = await api.get<BusinessResponse>(`/business/${qrcode}`);
    return res;
  } catch (error) {
    console.log(error);
    alert("No se encontró la tienda. Vuelve a intentarlo");
  }
};
