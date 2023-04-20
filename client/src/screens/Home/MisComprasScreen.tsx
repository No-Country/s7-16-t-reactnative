import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { CardMisCompras } from "../../components/CardMisCompras";
import { Loader } from "../../components/Loader";
import { useCompras } from "../../hooks/useCompras";

export const MisComprasScreen = () => {
  const { compras, isLoading, user } = useCompras();

  return (
    <>
      <View className="container mx-auto px-6 pt-24 flex-1 bg-white">
        <View className="flex-row items-center justify-between my-12">
          {user ? (
            <Image
              source={{
                uri: user?.profilePic,
              }}
              className="w-[70] h-[70] rounded-full"
            />
          ) : (
            <Image source={require("../../assets/perfil.png")} />
          )}

          <View className="flex-1">
            <Text className="text-lg uppercase tracking-widest px-4">
              Mis compras
            </Text>
          </View>
        </View>
        {/* compras */}
        <View className="mb-4">
          <Text className="font-medium text-base">Historial de consumo</Text>
        </View>

        {compras && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {compras.map((compra) => (
              <CardMisCompras
                products={compra.products}
                totalPrice={compra.totalPrice.toFixed(2)}
                key={compra._id}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <Loader isLoading={isLoading} />
    </>
  );
};
