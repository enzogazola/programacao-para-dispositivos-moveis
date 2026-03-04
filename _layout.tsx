import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";

export default function RootLayout() {
  const [n1, setN1] = useState("0");
  const [n2, setN2] = useState("0");
  const [resultado, setResultado] = useState(0);

  function Adicao() {
    setResultado(parseFloat(n1) + parseFloat(n2));
  }

  function Subtracao() {
    setResultado(parseFloat(n1) - parseFloat(n2));
  }

  function Multiplicacao() {
    setResultado(parseFloat(n1) * parseFloat(n2));
  }

  function Divisao() {
    setResultado(parseFloat(n1) / parseFloat(n2));
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{resultado}</Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={n1}
          onChangeText={setN1}
          placeholder="Número 1"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={n2}
          onChangeText={setN2}
          placeholder="Número 2"
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.botao} onPress={Adicao}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={Subtracao}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.botao} onPress={Multiplicacao}>
          <Text style={styles.botaoTexto}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={Divisao}>
          <Text style={styles.botaoTexto}>÷</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  display: {
    backgroundColor: "#333",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "flex-end",
  },
  displayText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
  },
  botao: {
    backgroundColor: "#4e9cff",
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  botaoTexto: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
