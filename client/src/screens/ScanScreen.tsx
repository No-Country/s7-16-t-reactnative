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
import { Loader } from "../components/Loader";
import { useLoader } from "../hooks/useLoader";
import { useHasPermission } from "../hooks/useHasPermission";
import { ModalAlert } from "../components/ModalAlert";
import { useNavigation } from "@react-navigation/native";
import { UseUserStore } from "../store/UserStore";
// import { UseUserStore } from "../store/UserStore";

export const ScanScreen = () => {
  const [scanned, setScanned] = useState<boolean>(false);

  // Modal
  const [product, setProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [modalAlertVisible, setModalAlertVisible] = useState<boolean>(false);

  const { openLoader, closeLoader, isLoading } = useLoader(true);

  const { hasPermission } = useHasPermission();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      closeLoader();
    }, 1200);
  }, []);

  const products = useCartStore((state) => state.products);
  const totalPrices = useCartStore((state) => state.totalPrice);
  const totalProcudtPrice = useCartStore((state) => state.totalAmount);
  const cart = UseUserStore((state) => state.user);
  // const user = UseUserStore((state) => state.user);

  const handleBarCodeScannedDebounced = async (
    result: BarCodeScannerResult
  ) => {
    if (scanned) {
      return;
    }

    openLoader();

    const res = await getOneProduct(Number(result.data));

    // SI scanned ES TRUE, NO ME DEJA SCANEAR

    if (res && res.status === 200 && res.data) {
      setScanned(true);
      setProduct(res.data.product);

      setModalVisible(true); // muestra la vista previa del producto encontrado
    } else {
      setScanned(true);
      setModalAlertVisible(true);
    }

    closeLoader();
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
    // console.log(
    //   products.map((product) => ({
    //     productId: product._id,
    //     quantity: product.amount,
    //   }))
    // );
    // console.log(product?.amount);
    // console.log(user?.carrito);
    // console.log(totalPrice);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );
  useCartStore.setState({ totalPrice: totalPrice });

  const sendCart = async (
    products: Product[],
    totalPrice: number,
    cart: string | undefined
  ) => {
    const token = await AsyncStorage.getItem("token");

    const res = await axios.put(
      `https://s7-16-t-ts-dep-production.up.railway.app/api/cart/${cart}`,
      {
        products,

        totalPrice,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.status);
    if (res.status === 200) {
      navigation.navigate("ScreenFinalPayment" as never);
      res.data;
      console.log(products);
      console.log(totalPrice);
    }
    console.log("TERMINO");
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
          {!isLoading && (
            <>
              <BarCodeScanner
                onBarCodeScanned={
                  scanned ? undefined : handleBarCodeScannedDebounced
                }
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
            </>
          )}
        </View>

        <View style={{ flex: 3, backgroundColor: "white" }}>
          <View className="bg-gray-300 py-2">
            <Text className="text-center font-medium text-base">
              Escanea el producto
            </Text>
          </View>
          {/* Productos */}

          <ScrollView className="bg-white">
            {products.length > 0 && (
              <Text className="text-center text-acento">
                Deslizá para eliminar productos de tu carrito
              </Text>
            )}

            {products.length > 0 &&
              products.map((prod: Product) => (
                <CardProduct key={prod._id} product={prod} />
              ))}
          </ScrollView>

          {/* Terminar compra */}
          <View className="justify-center items-center my-2 py-1">
            {products.length > 0 && (
              <View className="container mx-auto flex-row justify-around mb-3">
                <Text className="text-grayApp font-semibold text-xl">
                  Total:
                </Text>
                <Text className="font-semibold text-2xl">
                  $ {totalPrice.toFixed(2)}
                </Text>
              </View>
            )}
          </View>
          <View>
            <OrangeButton
              text="Terminar Compra"
              onPress={() => sendCart(products, totalPrice, cart?.carts[0])}
              // onPress={() => console.log("HOLA")}
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
        {modalAlertVisible && (
          <ModalAlert
            title="¡Atención!"
            modalVisible={modalAlertVisible}
            body="No fue posible encontrar el producto scaneado, por favor intente nuevamente."
            closeModal={() => setModalAlertVisible(false)}
            confirm={() => setModalAlertVisible(false)}
          />
        )}
      </View>
      <Loader isLoading={isLoading} />
    </>
  );
};

const { width } = Dimensions.get("window");
const height = width * 1.33; // aspect ratio 4:3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  scanbar: {
    height: height,
    width: width,
  },
});
