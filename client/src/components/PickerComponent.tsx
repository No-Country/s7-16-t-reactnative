import { View, Text, TextInput, TextInputProps } from "react-native";
import { useField } from "formik";
import { Picker, PickerProps } from "@react-native-picker/picker";

interface itemList {
  id: number;
  nombre: string;
}

interface MyPickerProps extends PickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  isSubmmiting: number;
  list?: itemList[];
}

const PickerComponent: React.FC<MyPickerProps> = ({
  label,
  name,
  placeholder,
  list,
  isSubmmiting,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#50505060",
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Picker
        placeholder={placeholder}
        onValueChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        selectedValue={field.value}
        {...props}
        style={{
          height: 50,
          width: "100%",
          fontSize: 12,
        }}
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label={label} value="" />
        {list.map((item) => (
          <Picker.Item
            style={{
              height: 50,
              width: "100%",
              fontSize: 14,
              fontWeight: "100",
              fontVariant: "normal",
            }}
            key={item.id}
            label={item.nombre}
            value={item.id}
          />
        ))}
      </Picker>
      <View>
        {meta.error && isSubmmiting > 0 ? (
          <Text
            style={{
              fontSize: 13,
              position: "absolute",
              textAlign: "left",
              color: "#f66",
              fontWeight: "800",
              top: -32,
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

export default PickerComponent;
