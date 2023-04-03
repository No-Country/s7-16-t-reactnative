import { StyleSheet, Text, View } from "react-native";

interface TextTitle {
  title: string | null;
  paragraph: string | null;
  paragraphSecond: string | null;
}

const TextTitle = ({ title, paragraph, paragraphSecond }: TextTitle) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>
        {paragraph}
        <Text>{paragraphSecond}</Text>
      </Text>
    </View>
  );
};

export default TextTitle;
