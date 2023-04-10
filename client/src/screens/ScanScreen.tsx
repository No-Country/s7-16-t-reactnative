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

export const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [scanning, setScanning] = useState<boolean>(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async (result: BarCodeScannerResult) => {
    if (scanning || scanned) {
      return;
    }

    setScanning(true);

    const res = await getOneProduct(Number(result.data));

    if (res && res.status === 200 && res.data) {
      setScanned(true);
      alert(`${res?.data.product.name}: ${res?.data.product.description}`);
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
        <View style={{ backgroundColor: "#D9D9D9", paddingVertical: 7 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Escanea el producto
          </Text>
        </View>
      </View>
    </View>
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
