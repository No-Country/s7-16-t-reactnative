import { Text, View } from "react-native";

interface TextTitle {
  title?: string;
  paragraph?: string;
  paragraphSecond?: string;
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
