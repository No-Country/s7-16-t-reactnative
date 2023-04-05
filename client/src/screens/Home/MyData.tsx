import { View } from "react-native";
import InputComponent from "../../components/InputComponent";
import { Formik } from "formik";
import { AppButton } from "../../components/AppButton";
import TextTitle from "../../components/TextTitle";

interface MyDartaValues {
  name?: string;
  lastname?: string;
  cuit_dni?: string;
  email?: string;
  cellphone?: string;
}

const initialValues: MyDartaValues = {
  name: "Victor",
  lastname: "Romero Juarez",
  cuit_dni: "123456",
  email: "victor@gmail.com",
  cellphone: "987654321",
};
const MyData = () => {
  return (
    <View className="w-full">
      {/* VIEW PARA LAS IMAGENES */}
      <View className="flex flex-row justify-center">
        <TextTitle title="MIS DATOS" />
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
  );
};

export default MyData;
