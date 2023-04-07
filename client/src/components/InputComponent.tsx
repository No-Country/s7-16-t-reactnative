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
    <View className="flex flex-col w-full">
      <View className="flex flex-col justify-center">
        <Text className="py-2 font-body text-body-bold">{label}</Text>
        <TextInput
          className="w-full text-caption font-caption border h-10 rounded-lg pl-2"
          secureTextEntry={type}
          placeholder={placeholder}
          onChangeText={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          {...props}
        />
      </View>
    </View>
  );
};

export default InputComponent;
