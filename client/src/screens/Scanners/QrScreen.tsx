import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { ModalTienda } from "../../components/ModalTienda";
import { UseUserStore } from "../../store/UserStore";
import { getOneTienda } from "../../utils/api/smartShopDB";
import { Business } from "../../utils/interfaces/api.interfaces";
import { useLoader } from "../../hooks/useLoader";
import { Loader } from "../../components/Loader";
import { useNavigation } from "@react-navigation/native";
import { useHasPermission } from "../../hooks/useHasPermission";
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";

export const QrScreen = () => {
  const [scanned, setScanned] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [tienda, setTienda] = useState<Business | null>(null);
  const { openLoader, closeLoader, isLoading } = useLoader();
  const navigation = useNavigation();
  const user = UseUserStore((state) => state.user);

  const { hasPermission } = useHasPermission();

  const handleBarCodeScanned = async (result: BarCodeScannerResult) => {
    if (scanned) {
      return;
    }

    openLoader();

    const res = await getOneTienda(result.data);

    if (res && res.status === 200 && res.data) {
      setScanned(true);
      setTienda(res.data.business);

      setModalVisible(true);
    } else {
      showMessage({
        message:
          "No fue posible encontrar la tienda. Por favor intente nuevamente.",
        type: "warning",
        duration: 4000,
        floating: false,
      });
      setScanned(true);
    }

    closeLoader();
  };

  const confirm = () => {
    navigation.navigate("ScanScreen" as never);

    setModalVisible(false);
  };

  if (hasPermission === null) {
    return (
      <Text className="self-center top-52">
        Requesting for camera permission
      </Text>
    );
  }
  if (hasPermission === false) {
    return <Text className="self-center top-52">No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          type={BarCodeScanner.Constants.Type.back}
        />
        <View
          style={{
            borderWidth: 2,
            borderColor: "white",
            alignItems: "center",
            alignSelf: "center",
            width: "80%",
            height: "40%",
            bottom: 250,
          }}
        ></View>
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>

      {modalVisible && (
        <ModalTienda
          title={`Bienvenido ${user?.firstName}`}
          closeModal={() => setModalVisible(!modalVisible)}
          modalVisible={modalVisible}
          confirm={confirm}
          tienda={tienda!}
        />
      )}
      <FlashMessage position="bottom" />
      <Loader isLoading={isLoading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
