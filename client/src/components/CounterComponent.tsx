import { View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  updateCounter: (counter: number) => void;
};

const CounterComponent = (props: Props) => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
    props.updateCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      props.updateCounter(counter + 1);
    }
  };

  return (
    <View className="flex flex-row w-20 h-8 bg-counter justify-around items-center rounded-xl">
      <View className="w-6 h-6 rounded-full bg-gray-200 items-center justify-center">
        <TouchableOpacity onPress={incrementCounter}>
          <Ionicons name="add" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <Text>{counter}</Text>
      <View className="w-6 h-6 rounded-full bg-gray-200 items-center justify-center">
        <TouchableOpacity onPress={decrementCounter}>
          <Ionicons name="md-remove" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterComponent;
