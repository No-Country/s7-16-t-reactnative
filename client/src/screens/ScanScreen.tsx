import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import { getOneProduct } from "../utils/api/smartShopDB";
import { ModalProduct } from "../components/ModalProduct";
import { Product } from "../utils/interfaces/api.interfaces";
import CardProduct from "../components/CardProduct";
import { ScrollView } from "react-native";
import { useCartStore } from "../store/CartStore";
import { OrangeButton } from "../components/OrangeButton";
import axios from "axios";
import { Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [scanning, setScanning] = useState<boolean>(false);

  const productosPrueba = {
    products: [
      { productId: "642db013abd8df7c53eb20ed", quantity: "6" },
      { productId: "642db013abd8df7c53eb20ed", quantity: "5" },
    ],
    totalPrice: 300,
  };

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
  const totalPrices = useCartStore((state) => state.totalPrice);
  const totalProcudtPrice = useCartStore((state) => state.totalAmount);

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
    return (
      <Text className="self-center top-52">
        Requesting for camera permission
      </Text>
    );
  }

  if (hasPermission === false) {
    return <Text className="self-center top-52">No access to camera</Text>;
  }
  const imprimir = () => {
    console.log(
      products.map((product) => ({
        productId: product._id,
        quantity: product.amount,
      }))
    );
    // console.log(product?.amount);
    console.log(totalPrices);
  };

  const generatePaymentLink = async (
    products: Product[],
    totalPrice: number
  ): Promise<string> => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.get(
        "https://s7-16-t-ts-dep-production.up.railway.app/api/cart/checkout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/json",
          },
          // params: {
          //   // productosPrueba,
          //   products: JSON.stringify(
          //     products.map((product) => ({
          //       productId: product._id,
          //       quantity: product.amount,
          //     }))
          //   ),
          //   totalPrice: totalPrice,
          // },
        }
      );
      const mercadoPagoLink = response.data.link;
      // console.log(response.data);
      // console.log(mercadoPagoLink);
      console.log(totalPrice);
      imprimir();
      return mercadoPagoLink;
    } catch (error) {
      return "";
    }
  };

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
            style={{ width: 129, height: 61, top: 6 }}
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
              // onPress={() => imprimir()}
              onPress={async () => {
                const mercadoPagoLink = await generatePaymentLink(
                  products,
                  totalPrices
                );
                Linking.openURL(mercadoPagoLink);
              }}
              // onPress={() => alert("terminar compra")}
              disabled={products.length > 0 ? true : false}
            />
          </View>
          {/* <View>
            <OrangeButton
              text="Terminar compra"
              onPress={() => handlePayment}
              disabled={products.length > 0 ? true : false}
            />
          </View> */}
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
