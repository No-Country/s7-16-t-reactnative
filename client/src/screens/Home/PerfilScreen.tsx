import React, { useState } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { NavigateButton } from "../../components/NavigateButton";
import { ModalAlert } from "../../components/ModalAlert";
export const PerfilScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <ScrollView>
        <View className="flex-1 container mx-auto py-10 items-center">
          <Image
            source={require("../../assets/logo.png")}
            className="w-[129] h-[61] mb-14"
          />

          <View className="justify-center items-center mb-14">
            <Image
              source={require("../../assets/perfil.png")}
              className="w-[84] h-[84] rounded-full mb-3"
            />
            <Text className="uppercase tracking-widest font">Perfil</Text>
          </View>

          <View>
            <NavigateButton
              text="Mis datos"
              onPress={() => console.log("Mis datos")}
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
      </ScrollView>

      {modalVisible && (
        <ModalAlert
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // blurContainer: {
  //   width: "80%",
  //   height: "50%",
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   overflow: "hidden",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   ...StyleSheet.absoluteFillObject,
  //   backdropFilter: "blur(10px)",
  // },
  // text: {
  //   color: "black",
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
});
