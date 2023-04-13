import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Product } from "../utils/interfaces/api.interfaces";
import { useCartStore } from "../store/CartStore";
import CounterComponent from "./CounterComponent";

interface Props {
  product: Product | null;
  modalVisible: boolean;
  closeModal: () => void;
}

export const ModalProduct = ({ modalVisible, closeModal, product }: Props) => {
  const addToCart = useCartStore((state) => state.addProduct); // zustand

  const [counterPrduct, setCounterProduct] = useState(1);

  const updateProductCounter = (amount: number) => {
    const updatedProducts = {
      ...product,
      amount: amount,
    };
    useCartStore.getState().updateProduct(product?._id ?? " ", updatedProducts);
  };

  const updateCounter = (counter: number) => {
    setCounterProduct(counter);
    updateProductCounter(counter);
  };

  const confirm = (product: Product) => {
    addToCart(product);

    closeModal();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className="text-xl text-center mb-4 font-bold">
              Agregar ítem
            </Text>

            {/* Card */}
            <View className="flex-row items-center justify-center mb-4">
              <Image
                className="w-[100] h-[100]"
                source={{
                  uri: product?.photo,
                }}
              />
              <View>
                <Text className="font-bold text-lg">{product?.name}</Text>
                <Text className="text-lg">{product?.brand}</Text>
              </View>
            </View>

            {/* Footer */}
            <View className="w-3/4 flex-row items-center justify-center mb-4">
              {/* Contador */}
              <CounterComponent updateCounter={updateCounter} />
              {/* <View className=" flex-row w-1/2 items-center justify-between">
                <TouchableOpacity>
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-lg">1</Text>
                <TouchableOpacity>
                  <MaterialIcons name="add-circle" size={24} color="black" />
                </TouchableOpacity>
              </View> */}
              <View className="items-end w-1/2">
                <Text className="text-xl font-bold">$ {product?.price}</Text>
              </View>
            </View>

            {/* Botones */}
            <View className="flex-row items-center justify-around">
              <TouchableOpacity onPress={closeModal}>
                <Text className="font-medium text-lg">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => confirm(product!)}
                className="bg-orange-400 rounded-2xl py-2 px-3 "
              >
                <Text className="font-medium text-lg text-white">
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
