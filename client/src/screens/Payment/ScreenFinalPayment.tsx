import {
  View,
  StyleSheet,
  Dimensions,
  //Image,
  Text,
  Linking,
} from "react-native";
import { useCartStore } from "../../store/CartStore";
import { OrangeButton } from "../../components/OrangeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ScrollView } from "react-native";
import CardProduct from "../../components/CardProduct";
import { Product } from "../../utils/interfaces/api.interfaces";
//import { SafeAreaView } from "react-native-safe-area-context";
import { UseUserStore } from "../../store/UserStore";

const ScreenFinalPayment = () => {
  const products = useCartStore((state) => state.products);
  //const totalPrices = useCartStore((state) => state.totalPrice);
  const idCart = UseUserStore((state) => state.user);
  //   const carts = idCart?.carts;
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  const generatePaymentLink = async () => {
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
        }
      );
      const mercadoPagoLink = response.data.link;
      console.log(products);
      console.log(totalPrice);
      console.log(idCart?.carts[0]);

      return mercadoPagoLink;
    } catch (error) {
      return "";
    }
  };

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
    // if (res.status === 200) {
    //   generatePaymentLink();
    //   console.log(products);
    //   console.log(totalPrice);
    // }
    return res.status;
    console.log("TERMINO");
  };
  return (
    <>
      <View style={styles.container}>
        {/* <View className="flex flex-col"> */}
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
        {/* </View> */}

        <View className="justify-center items-center my-2 py-1">
          {products.length > 0 && (
            <View className="container mx-auto flex-row justify-around mb-3">
              <Text className="text-grayApp font-semibold text-xl">Total:</Text>
              <Text className="font-semibold text-2xl">
                $ {totalPrice.toFixed(2)}
              </Text>
            </View>
          )}
          <OrangeButton
            text="Procesar Pago"
            onPress={async () => {
              const resp = await sendCart(
                products,
                totalPrice,
                idCart?.carts[0]
              );
              if (resp === 200) {
                const mercadoPagoLink = await generatePaymentLink();
                Linking.openURL(mercadoPagoLink);
              }
            }}
            disabled={products.length > 0 ? true : false}
          />
        </View>
      </View>
    </>
  );
};

export default ScreenFinalPayment;

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
