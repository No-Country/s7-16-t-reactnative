import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { NavigateButton } from "../../components/NavigateButton";
import { ModalAlert } from "../../components/ModalAlert";
import { useNavigation } from "@react-navigation/native";
export const PerfilScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const navigation = useNavigation();

  return (
    <>
      <View className="flex-1 container mx-auto pt-20 items-center bg-white">
        <View className="justify-center items-center my-14">
          <Image
            source={require("../../assets/perfil.png")}
            className="w-[84] h-[84] rounded-full mb-3"
          />
          <Text className="uppercase tracking-widest font">Perfil</Text>
        </View>

        <View>
          <NavigateButton
            text="Mis datos"
            onPress={() => navigation.navigate("MyData" as never)}
          />
          <NavigateButton
            text="Mis compras"
            onPress={() => console.log("Mis compras")}
          />
          <NavigateButton
            text="Privacidad y seguridad"
            onPress={() => console.log("Privacidad y seguridad")}
          />
          <NavigateButton
            text="Cerrar sesión"
            onPress={() => setModalVisible(true)}
            cancel
          />
        </View>
      </View>

      {modalVisible && (
        <ModalAlert
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </>
  );
};
