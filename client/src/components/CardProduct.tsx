import { View, Text, Image, TouchableOpacity } from "react-native";
import CounterComponent from "./CounterComponent";
import { Product } from "../utils/interfaces/api.interfaces";
import { useCounter } from "../hooks/useCounter";
import { SwipeListView } from "react-native-swipe-list-view";
import { useCartStore } from "../store/CartStore";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  const { counter, decrementCounter, incrementCounter } = useCounter(
    product.amount
  );
  const deleteProduct = useCartStore((state) => state.removeProduct);

  const renderHiddenItem = (item: Product) => {
    return (
      <TouchableOpacity
        className="bg-acento h-28 shadow-2xl shadow-gray-800 rounded-2xl my-2 "
        onPress={() => deleteProduct(item._id)}
      >
        <View className="self-end top-10 mr-5">
          <Ionicons name="trash-outline" size={32} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View className="flex flex-row h-28 shadow-2xl shadow-gray-800 rounded-2xl w-full justify-evenly bg-white my-2  ">
        <View className="">
          <Image className="w-16 h-24 m-2" source={{ uri: item.photo }} />
        </View>
        <View className="flex flex-col w-36 justify-center">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-base">{item.brand}</Text>
        </View>
        <View className="flex flex-col justify-center items-center w-20 gap-4">
          <CounterComponent
            counter={counter}
            decrementCounter={decrementCounter}
            incrementCounter={incrementCounter}
          />
          <Text>$ {(item.price * counter).toFixed(2)}</Text>
        </View>
      </View>
    );
  };

  return (
    <SwipeListView
      data={[product]}
      renderItem={renderItem}
      renderHiddenItem={() => renderHiddenItem(product)}
      rightOpenValue={-75}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={1000}
      useNativeDriver={false}
      disableRightSwipe
    />
  );
};

export default CardProduct;
