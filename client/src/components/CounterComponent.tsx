import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  decrementCounter: () => void;
  incrementCounter: () => void;
  counter: number;
}

const CounterComponent = ({
  counter,
  decrementCounter,
  incrementCounter,
}: Props) => {
  return (
    <View className="flex flex-row w-20 h-8 bg-counter justify-around items-center rounded-xl">
      <View className="w-6 h-6 rounded-full bg-gray-200 items-center justify-center">
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 32,
            height: 32,
          }}
          onPress={decrementCounter}
        >
          <Ionicons className="" name="md-remove" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <Text>{counter}</Text>
      <View className="w-6 h-6 rounded-full bg-gray-200 items-center justify-center">
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 32,
            height: 32,
          }}
          onPress={incrementCounter}
        >
          <Ionicons name="add" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterComponent;
