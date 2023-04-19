import { Image, ScrollView, View, StyleSheet } from "react-native";
import InputComponent from "../../components/InputComponent";
import { Formik } from "formik";
import TextTitle from "../../components/TextTitle";
import { UseUserStore } from "../../store/UserStore";
import { GuardarBtn } from "../../components/LoginButton";

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
      <ScrollView className="bg-white">
        <View className="w-ful mt-32">
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
              <View className="flex flex-col gap-5 self-center">
                {/* VIEW PARA LOS INPUTS */}
                <View className="top-10">
                  <InputComponent
                    name="name"
                    placeholder="Nombre"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    style={styles.input}
                  />
                  <InputComponent
                    name="lastname"
                    placeholder="Apellido"
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                    style={styles.input}
                  />
                  <InputComponent
                    name="cuit_dni"
                    placeholder="Cuit/Dni"
                    onChangeText={handleChange("cuit_dni")}
                    onBlur={handleBlur("cuit_dni")}
                    value={values.cuit_dni}
                    style={styles.input}
                  />
                  <InputComponent
                    name="email"
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    style={styles.input}
                  />
                  <InputComponent
                    name="cellphone"
                    placeholder="Teléfono"
                    onChangeText={handleChange("cellphone")}
                    onBlur={handleBlur("cellphone")}
                    value={values.cellphone}
                    style={styles.input}
                  />
                </View>
                {/* VIEW PARA EL BOTON */}
                <View className="self-center">
                  <GuardarBtn
                    text="GUARDAR"
                    width={100}
                    marginTop={170}
                    icon={undefined}
                    onPress={() => handleSubmit()}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 43.88,
    width: 306.12,
    marginBottom: 10,
  },
});
export default MyData;
