import { View, Text, TextInput, TextInputProps } from "react-native";
import { useField } from "formik";

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  typePassword?: boolean;
  placeholder?: string;
}

const InputComponent: React.FC<InputProps> = ({
  typePassword,
  label,
  name,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <View>
      {/* <Text className="py-2 font-body text-body-bold">{label}</Text> */}
      <TextInput
        className="w-full text-caption font-caption border h-13 rounded-lg pl-2"
        secureTextEntry={typePassword}
        placeholder={placeholder}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      <View>
        {meta.touched && meta.error ? (
          <Text
            style={{
              position: "absolute",
              textAlign: "center",
              color: "#fb8500",
              fontWeight: "800",
              top: -37,
              left: 40,
              right: 40,
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
