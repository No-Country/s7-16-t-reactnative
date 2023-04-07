import { Text, View, StyleSheet, TextInput } from "react-native";
import { NormalBtn } from "../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";

export const Register2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estamos felices de que seas parte</Text>
      <View>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Apellido" />
        <TextInput style={styles.input} placeholder="Tipo de Documento" />
        <TextInput style={styles.input} placeholder="Número de Documento" />
        <TextInput style={styles.input} placeholder="Sexo" />
        <TextInput style={styles.input} placeholder="Fecha de Nacimiento" />
        <TextInput style={styles.input} placeholder="Número de Celular" />
      </View>
      <View style={styles.buttons}>
        <NormalBtn
          text="REGISTRARME"
          onPress={() => navigation.navigate("Login" as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: "5%",
    marginBottom: "2%",
  },
  input: {
    width: 312,
    height: 52,
    margin: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3.5,
    alignSelf: "center",
    padding: 15,
  },
});
