import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { CardMisCompras } from "../../components/CardMisCompras";
import { UseUserStore } from "../../store/UserStore";

export const MisComprasScreen = () => {
  const compras = [
    [
      {
        _id: "642db013abd8df7c53eb20f0",
        name: "Mermelada de fresa",
        brand: "Smucker's",
        description: "Mermelada de fresa sin azúcar añadido",
        expDate: "2024-12-31T00:00:00.000Z",
        price: 3.49,
        barCode: 51500243705,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2FMermelada%20de%20fresa%20Smucker's.jpg?alt=media&token=fabb41ba-5c0e-4a00-a191-e711ecd838ac",
        amount: 3,
      },
      {
        _id: "642db013abd8df7c53eb20d9",
        name: "Salsa de soja",
        brand: "Kikkoman",
        description: "Salsa de soja fermentada naturalmente",
        expDate: "2023-09-18T00:00:00.000Z",
        price: 4.25,
        barCode: 3800015610907,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2Fkikoman.jpg?alt=media&token=f4d75610-0a6e-47f6-abfc-f4f173f2f7d2",
        amount: 1,
      },
      {
        _id: "642db013abd8df7c53eb20d5",
        name: "Cereal de maíz",
        brand: "Kellogg's",
        description: "Cereal de maíz con azúcar",
        expDate: "2023-08-15T00:00:00.000Z",
        price: 3.99,
        barCode: 387781100397,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2Fkellogs.png?alt=media&token=0aec17dd-6709-4fd9-a019-cad677f93879",
        amount: 1,
      },
    ],
    [
      {
        _id: "642db013abd8df7c53eb20ea",
        name: "Leche descremada",
        brand: "Parmalat",
        description: "Leche descremada UHT sin lactosa",
        expDate: "2024-12-31T00:00:00.000Z",
        price: 1.5,
        barCode: 704040042081,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2Fparmalat.png?alt=media&token=a6cb790a-9ad9-45f3-a499-f33f0f0202fe",
        amount: 2,
      },
      {
        _id: "642db013abd8df7c53eb20d8",
        name: "Barrita energética",
        brand: "Clif Bar",
        description: "Barrita energética de avena y chocolate",
        expDate: "2024-03-12T00:00:00.000Z",
        price: 1.75,
        barCode: 760502003298,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2FBarrita%20energ%C3%A9tica%20Clif%20Bar.png?alt=media&token=35cefa3f-48ec-47f3-84aa-cb9b08ffc9cf",
        amount: 1,
      },
    ],
    [
      {
        _id: "642db013abd8df7c53eb20d8",
        name: "Barrita energética",
        brand: "Clif Bar",
        description: "Barrita energética de avena y chocolate",
        expDate: "2024-03-12T00:00:00.000Z",
        price: 1.75,
        barCode: 760502003298,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2FBarrita%20energ%C3%A9tica%20Clif%20Bar.png?alt=media&token=35cefa3f-48ec-47f3-84aa-cb9b08ffc9cf",
        amount: 2,
      },
      {
        _id: "642db013abd8df7c53eb20da",
        name: "Té verde",
        brand: "Lipton",
        description: "Té verde con sabor a menta",
        expDate: "2024-06-30T00:00:00.000Z",
        price: 2.99,
        barCode: 8000219080437,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2FT%C3%A9%20verde%20Lipton.png?alt=media&token=fdad54ce-ca24-4b5a-8b9f-98afc3ff4ccf",
        amount: 1,
      },
      {
        _id: "642db013abd8df7c53eb20ed",
        name: "Atún en conserva",
        brand: "Bumble Bee",
        description: "Atún en agua",
        expDate: "2024-12-31T00:00:00.000Z",
        price: 1.99,
        barCode: 515002437056,
        photo:
          "https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2FAt%C3%BAn%20en%20conserva%20Bumble%20Bee.jpeg?alt=media&token=ba12a155-82ce-4bba-8d7e-a8669287acbb",
        amount: 3,
      },
    ],
  ];

  //   Aca debo recibir del backend totas las compras realizadas por el usuario
  // y por cada compra renderizar una card
  //   carrito debe ser un array de carritos o sea de compras
  const user = UseUserStore.getState().user;
  return (
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {compras.map((compra, index) => (
          <CardMisCompras compra={compra} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
