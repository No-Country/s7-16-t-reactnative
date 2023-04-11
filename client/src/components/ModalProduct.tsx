import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Product } from "../utils/interfaces/api.interfaces";

interface Props {
  product: Product | null;
  // modalVisible: boolean
}

export const ModalProduct = ({ product }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
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
                  uri: product!.photo,
                }}
              />
              <View>
                <Text className="font-bold text-lg">{product!.name}</Text>
                <Text className="text-lg">{product!.description}</Text>
              </View>
            </View>

            {/* Footer */}
            <View className="w-3/4 flex-row items-center justify-center mb-4">
              {/* Contador */}
              <View className=" flex-row w-1/2 items-center justify-between">
                <TouchableOpacity>
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-lg">1</Text>
                <TouchableOpacity>
                  <MaterialIcons name="add-circle" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View className="items-end w-1/2">
                <Text className="text-xl font-bold">$ {product!.price}</Text>
              </View>
            </View>

            {/* Botones */}
            <View className="w-3/4 flex-row items-center justify-evenly">
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text className="font-medium text-lg">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                className="bg-orange-400 rounded-2xl py-2 px-3"
              >
                <Text className="font-medium text-lg text-white">
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Boton que despliega el modal */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});
