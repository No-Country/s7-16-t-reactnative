import { Image, ScrollView, View } from "react-native";
import InputComponent from "../../components/InputComponent";
import { Formik } from "formik";
import { AppButton } from "../../components/AppButton";
import TextTitle from "../../components/TextTitle";
import { Ionicons } from "@expo/vector-icons";
import { UseUserStore } from "../../store/UserStore";

interface MyDataValues {
  img?: string;
  name?: string;
  lastname?: string;
  cuit_dni?: string;
  email?: string;
  cellphone?: string;
}

const MyData = () => {
  const user = UseUserStore.getState().user;

  const initialValues: MyDataValues = {
    img:
      user?.profilePic ??
      "https://cdn.pixabay.com/photo/2023/03/27/13/48/squirrel-7880791_960_720.jpg",
    name: user?.firstName ?? "Nombre",
    lastname: user?.lastName ?? "Apellido",
    cuit_dni: user?.dni.toString() ?? "12435679",
    email: user?.email ?? "mail@mail.com",
    cellphone: user?.phNumber.toString() ?? "0800555123",
  };

  return (
    <>
      <ScrollView className="w-full pb-5">
        <View className="pb-5">
          <View className="flex flex-row py-14 gap-28 w-full justify-start">
            <Ionicons name="chevron-back" size={24} color="black" />
            <Image
              className="flex w-32 h-14 justify-center"
              source={require("../../assets/logo.png")}
            />
          </View>
          {/* VIEW PARA LAS IMAGENES */}
          <View className="flex flex-col gap-4 justify-center items-center">
            <Image
              className="w-20 h-20 rounded-full"
              source={{ uri: initialValues.img }}
            />
            <View>
              <TextTitle title="MIS DATOS" />
            </View>
          </View>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <View className="bg-white flex flex-col gap-5 justify-center">
                {/* VIEW PARA LOS INPUTS */}
                <View className="flex pl-5 pr-5">
                  <InputComponent
                    label="Nombre"
                    name="name"
                    placeholder="name"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  <InputComponent
                    label="Apellido"
                    name="lastname"
                    placeholder="lastname"
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                  />
                  <InputComponent
                    label="Cuit/dni"
                    name="cuit_dni"
                    placeholder="cuit_dni"
                    onChangeText={handleChange("cuit_dni")}
                    onBlur={handleBlur("cuit_dni")}
                    value={values.cuit_dni}
                  />
                  <InputComponent
                    label="Email"
                    name="email"
                    placeholder="email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  <InputComponent
                    label="Celular"
                    name="cellphone"
                    placeholder="cellphone"
                    onChangeText={handleChange("cellphone")}
                    onBlur={handleBlur("cellphone")}
                    value={values.cellphone}
                  />
                </View>
                {/* VIEW PARA EL BOTON */}
                <View className="flex justify-center items-center">
                  <AppButton text="GUARDAR" onPress={() => handleSubmit()} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default MyData;
