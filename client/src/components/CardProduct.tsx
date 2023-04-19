import { View, Text, Image } from "react-native";
import CounterComponent from "./CounterComponent";
import { Product } from "../utils/interfaces/api.interfaces";
import { useCounter } from "../hooks/useCounter";

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  const { counter, decrementCounter, incrementCounter } = useCounter(
    product.amount,
    product._id
  );
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
        <CounterComponent
          counter={counter}
          decrementCounter={() => decrementCounter(product.price)}
          incrementCounter={() => incrementCounter(product.price)}
        />
        <Text>$ {product.price * counter}</Text>
      </View>
    </View>
  );
};

export default CardProduct;
