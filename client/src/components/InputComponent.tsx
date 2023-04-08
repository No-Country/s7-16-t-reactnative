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
        className="w-full text-caption font-caption border h-13 rounded-lg pl-2"
        secureTextEntry={type}
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
              color: "#f66",
              fontWeight: "800",
              top: -22,
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
