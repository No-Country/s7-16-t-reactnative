import React from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export const ModalAlert = ({ modalVisible, closeModal }: Props) => {
  const confirm = () => {
    console.log("confirm");

    closeModal();
  };

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
          className=" bg-white shadow-2xl w-[280] h-[171] justify-center"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 3,
            },
          }}
        >
          <Text className="text-xl font-medium text-center mb-3">
            ¡Atención!
          </Text>
          <Text className="text-grayApp text-center mx-5 text-base mb-5">
            ¿Estás seguro que deseas cerrar sesión en “SmartShop?
          </Text>

          <View className="items-end">
            <View className="flex-row justify-around items-center w-3/4">
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
