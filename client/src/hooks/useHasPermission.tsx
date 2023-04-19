import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect } from "react";
import { usePermissionStore } from "../store/PermissionStore";

export const useHasPermission = () => {
  const { hasPermission, setPermission } = usePermissionStore();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === "granted");
    };

    if (hasPermission === null) {
      getBarCodeScannerPermissions();
    }
  }, [hasPermission, setPermission]);

  return { hasPermission };
};
