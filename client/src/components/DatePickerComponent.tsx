import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useField } from "formik";

interface MyDateTimePickerProps {
  name: string;
  label?: string;
  mode: "date" | "time" | "datetime";
}

const DateTimePickerComponent: React.FC<MyDateTimePickerProps> = ({
  name,
  label,
  mode,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const [showPicker, setShowPicker] = useState(false);

  const handlePickerChange = (event: any, selectedDate: any) => {
    setShowPicker(false);
    if (selectedDate) {
      helpers.setValue(selectedDate);
    }
  };

  const formatDate = (value: string | undefined): string => {
    if (!value) return "";

    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().substr(-2);
    return `${day}-${month}-${year}`;
  };

  const formattedDate = field.value ? formatDate(field.value) : "";

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10,
        borderWidth: 1,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 25,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
        borderColor: "#50505060",
      }}
    >
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <View>
          {!field.value && <Text>{label}</Text>}
          {field.value && <Text>Fecha de Nacimiento: {formattedDate}</Text>}
        </View>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={field.value || new Date()}
          mode={mode}
          onChange={handlePickerChange}
          {...props}
        />
      )}
      {meta.error && meta.touched && (
        <Text style={{ color: "red" }}>{meta.error}</Text>
      )}
    </View>
  );
};

export default DateTimePickerComponent;
