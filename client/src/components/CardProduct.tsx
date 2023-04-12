import { View, Text, Image, ImageSourcePropType } from "react-native";
import CounterComponent from "./CounterComponent";
import { useState } from "react";
import { AppButton } from "./AppButton";

interface Product {
  name: string;
  description: string;
  price: number;
  img: ImageSourcePropType; //Esto es provicional posterior se cambia a string ya que debe ser una url
}

const initialProduct: Product = {
  name: "Coca cola",
  description: "Lata de Coca Cola de 354 ml",
  price: 300,
  img: require("../assets/coca.png"),
};

const CardProduct = () => {
  const { name, description, price, img } = initialProduct;
  const [counterProduct, setCounterProduct] = useState(0);

  const updateCounter = (counter: number) => {
    setCounterProduct(counter);
  };
  return (
    <View>
      <View className="flex flex-row h-28 shadow-2xl shadow-gray-800 rounded-2xl w-full justify-evenly bg-white">
        <View className="">
          <Image className="w-16 h-24" source={img} />
        </View>
        <View className="flex flex-col w-36 justify-center">
          <Text className="text-xl">{name}</Text>
          <Text className="text-base">{description}</Text>
        </View>
        <View className="flex flex-col justify-center items-center w-20 gap-4">
          <CounterComponent updateCounter={updateCounter} />
          <Text>$ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardProduct;
