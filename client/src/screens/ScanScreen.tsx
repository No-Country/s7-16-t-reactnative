import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { getOneProduct } from "../utils/api/smartShopDB";
import { ModalProduct } from "../components/ModalProduct";
import { Product } from "../utils/interfaces/api.interfaces";
import CardProduct from "../components/CardProduct";
import { ScrollView } from "react-native";
import { useCartStore } from "../store/CartStore";
import { OrangeButton } from "../components/OrangeButton";

export const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [scanning, setScanning] = useState<boolean>(false);

  // Modal
  const [product, setProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const products = useCartStore((state) => state.products);

  const handleBarCodeScanned = async (result: BarCodeScannerResult) => {
    if (scanning || scanned) {
      return;
    }

    setScanning(true);

    const res = await getOneProduct(Number(result.data));

    if (res && res.status === 200 && res.data) {
      setScanned(true);
      setProduct(res.data.product);

      setModalVisible(true);
    }

    setScanning(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 129, height: 61 }}
          />
        </View>

        <View style={{ flex: 2, backgroundColor: "white", width: "100%" }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject, styles.scanbar]}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
            type={BarCodeScanner.Constants.Type.back}
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderColor: "white",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "70%",
              }}
            ></View>
            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => setScanned(false)}
              />
            )}
          </View>
        </View>

        <View style={{ flex: 3, backgroundColor: "white" }}>
          <View className="bg-gray-300 py-2 mb-3">
            <Text className="text-center font-medium text-base">
              Escanea el producto
            </Text>
          </View>
          {/* Productos */}
          <ScrollView className="bg-white">
            {products.length > 0 &&
              products.map((prod: Product) => (
                <CardProduct key={prod._id} product={prod} />
              ))}
          </ScrollView>

          {/* Terminar compra */}
          <View className="justify-center items-center my-2">
            <OrangeButton
              text="Terminar compra"
              onPress={() => alert("terminar compra")}
              disabled={products.length > 0 ? true : false}
            />
          </View>
        </View>

        {modalVisible && (
          <ModalProduct
            modalVisible={modalVisible}
            product={product}
            closeModal={() => setModalVisible(!modalVisible)}
          />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  scanbar: {
    height: Dimensions.get("window").height - 100,
  },
});
