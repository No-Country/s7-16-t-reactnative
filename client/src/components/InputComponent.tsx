import { View, Text, TextInput, TextInputProps } from "react-native";
import { useField } from "formik";

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
  return (
    <View>
      {label !== undefined && (
        <Text className="py-2 font-body text-body-bold">{label}</Text>
      )}
      <TextInput
        className="border-azulLogo text-azulLogo w-full border h-13 rounded-lg pl-2"
        secureTextEntry={type}
        placeholder={placeholder}
        placeholderTextColor="rgba(10, 76, 134, 1)"
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      <View>
        {meta.touched && meta.error ? (
          <Text
            style={{
              fontSize: 10,
              position: "absolute",
              textAlign: "center",
              color: "#f66",
              fontWeight: "800",
              top: -20,
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
