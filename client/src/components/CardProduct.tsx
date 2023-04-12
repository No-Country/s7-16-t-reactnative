import { View, Text, Image } from "react-native";
import CounterComponent from "./CounterComponent";
import { useState } from "react";
import { Product } from "../utils/interfaces/api.interfaces";

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  const [counterProduct, setCounterProduct] = useState(0);

  const updateCounter = (counter: number) => {
    setCounterProduct(counter);
  };
  return (
    <View className="flex flex-row h-28 shadow-2xl shadow-gray-800 rounded-2xl w-full justify-evenly bg-white my-2">
      <View className="">
        <Image className="w-16 h-24" source={{ uri: product.photo }} />
      </View>
      <View className="flex flex-col w-36 justify-center">
        <Text className="text-xl">{product.name}</Text>
        <Text className="text-base">{product.brand}</Text>
      </View>
      <View className="flex flex-col justify-center items-center w-20 gap-4">
        <CounterComponent updateCounter={updateCounter} />
        <Text>$ {product.price}</Text>
      </View>
    </View>
  );
};

export default CardProduct;
