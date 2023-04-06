import { Formik } from "formik";
import InputComponent from "./components/InputComponent";
import { Text, View, TouchableOpacity } from "react-native";
import { AppButton } from "./components/AppButton";
interface MyFormValues {
  firstName: string;
  password: string;
}

const Example: React.FC = () => {
  const initialValues: MyFormValues = { firstName: "", password: "" };
  return (
    <View className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className=" bg-white flex flex-col gap-5 justify-center">
            <View className="flex pl-5 pr-5">
              <InputComponent
                // type={true}
                label="Username"
                name="firstName"
                placeholder="Username"
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
              />
              <InputComponent
                type={true}
                label="Password"
                name="password"
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View className="flex justify-center items-center">
              <AppButton text="PRESIONAR" onPress={() => handleSubmit()} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default Example;
