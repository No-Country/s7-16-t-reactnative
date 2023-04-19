import React from "react";
import { Image, Text, View } from "react-native";
import { Product } from "../utils/interfaces/api.interfaces";

interface Props {
  compra: Product[];
}

interface PropCompra {
  product: Product;
}

const CardCompra = ({ product }: PropCompra) => {
  return (
    <View className="flex-row items-center justify-between my-3">
      <View>
        <Image
          source={{
            uri: product.photo,
          }}
          style={{ width: 56, height: 56 }}
        />
      </View>

      <View className="flex-1 px-1">
        <Text className="font-medium text-sm">{product.name}</Text>
        <Text className="font-base text-sm">{product.brand}</Text>
      </View>

      <View>
        {product.amount > 1 && (
          <Text className="font-medium text-sm text-grayApp text-right">
            x{product.amount}
          </Text>
        )}

        <Text className="font-medium text-sm">
          ${product.price * product.amount}
        </Text>
      </View>
    </View>
  );
};

export const CardMisCompras = ({ compra }: Props) => {
  const totalPrice = compra.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  return (
    // Contenedor card productos
    <View className="shadow-2xl rounded-lg border border-gray-200 my-2">
      <View className="px-5">
        {/* card producto individual*/}

        {compra.map((prod) => (
          <CardCompra product={prod} key={prod._id} />
        ))}
      </View>
      <View className="w-full bg-blueApp flex-row px-5 py-3 justify-between items-center rounded-b-lg">
        <Text className="font-medium text-white">Hoy</Text>
        <Text className="font-medium text-white">${totalPrice}</Text>
      </View>
    </View>
  );
};
