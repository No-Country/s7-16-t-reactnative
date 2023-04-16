import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useField } from "formik";
import { Ionicons } from "@expo/vector-icons";
interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  type?: boolean;
  placeholder?: string;
}

const InputComponent: React.FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickEyeIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      {label !== undefined && (
        <Text className="py-2 font-body text-body-bold">{label}</Text>
      )}
      <TextInput
        className={`w-full border-gray-300 h-13 rounded-lg pl-2 ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
        secureTextEntry={type && !showPassword}
        placeholder={placeholder}
        placeholderTextColor={"rgba(0, 0, 0, 0.87)"}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {type && (
        <TouchableWithoutFeedback onPress={handleClickEyeIcon}>
          <View style={{ position: "relative" }}>
            {showPassword ? (
              <Ionicons
                style={styles.eye}
                name="eye-outline"
                size={24}
                color="black"
              />
            ) : (
              <Ionicons
                style={styles.eye}
                name="eye-off"
                size={24}
                color="black"
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
      <View>
        {meta.touched && meta.error ? (
          <Text
            style={{
              fontSize: 13,
              position: "absolute",
              textAlign: "left",
              color: "#f66",
              fontWeight: "800",
              top: -21,
              left: 35,
              right: 35,
              padding: 1,
            }}
          >
            {meta.error}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  eye: {
    position: "absolute",
    right: 25,
    top: -63,
    backgroundColor: "white",
    padding: 5,
  },
});
