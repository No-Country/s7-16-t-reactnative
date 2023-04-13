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

  const handlePickerChange = (event: unknown, selectedDate: unknown) => {
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
    <TouchableOpacity
      style={{
        width: "100%",
        margin: 0,
        paddingTop: 25,
        marginBottom: 25,
      }}
      onPress={() => setShowPicker(true)}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 10,
          borderWidth: 1,
          marginLeft: 22,
          marginRight: 22,
          marginTop: -25,
          marginBottom: 0,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 8,
          borderColor: "#50505060",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!field.value && (
            <Text style={{ paddingLeft: 5, fontSize: 14, letterSpacing: 0 }}>
              {label}
            </Text>
          )}
          {field.value && (
            <>
              <Text style={{ paddingLeft: 5, fontSize: 14, letterSpacing: 0 }}>
                {formattedDate}
              </Text>
            </>
          )}
        </View>
        {showPicker && (
          <DateTimePicker
            value={field.value || new Date()}
            mode={mode}
            onChange={handlePickerChange}
            {...props}
          />
        )}
      </View>
      {meta.error && meta.touched && (
        <Text
          style={{
            position: "absolute",
            top: 52,
            fontSize: 12,
            color: "red",
            paddingLeft: 35,
          }}
        >
          {meta.error}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default DateTimePickerComponent;
