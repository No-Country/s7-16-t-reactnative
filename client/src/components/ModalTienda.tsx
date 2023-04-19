import { BlurView } from "expo-blur";
import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Business } from "../utils/interfaces/api.interfaces";

interface Props {
  modalVisible: boolean;
  closeModal: () => void; // cierra el modal
  title: string; // titulo de la alerta
  confirm: () => void; // funcion que se ejecuta al tocar aceptar
  tienda: Business;
}

export const ModalTienda = ({
  modalVisible,
  closeModal,
  title,
  confirm,
  tienda,
}: Props) => {
  const { width } = Dimensions.get("window");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <BlurView
        intensity={120}
        tint="light"
        className="flex-1 justify-center items-center"
      >
        <View
          className=" bg-white shadow-2xl py-7 justify-center rounded-md"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 3,
            },
            width: width * 0.8,
          }}
        >
          <Text className="text-xl font-medium text-center mb-3">{title}</Text>
          <Text className="text-grayApp text-center mx-5 text-base mb-2">
            Estas por ingresar a tienda "{tienda.names}"
          </Text>
          <Text className="text-grayApp text-center mx-5 text-base mb-5">
            ¿Desea empezar a comprar?
          </Text>

          <View className="container mx-auto w-2/3">
            <View className="flex-row justify-around items-center">
              <TouchableOpacity activeOpacity={0.5} onPress={closeModal}>
                <Text className="font-medium text-sm text-acento uppercase">
                  Cancelar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={confirm}>
                <Text className="font-medium text-sm text-grayApp uppercase">
                  Aceptar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
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
