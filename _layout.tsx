import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [display, setDisplay] = useState("0");
  function handlePress(value) {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  }

  function calcular() {
    try {
      const resultado = eval(display);
      setDisplay(String(resultado));
    } catch (e) {
      setDisplay("Erro");
    }
  }

  function limpar() {
    setDisplay("0");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.row}>
        {["7", "8", "9"].map((num) => (
          <TouchableOpacity key={num} style={styles.botao} onPress={() => handlePress(num)}>
            <Text style={styles.botaoTexto}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.botaoOperador} onPress={() => handlePress("/")}>
          <Text style={styles.botaoTexto}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {["4", "5", "6"].map((num) => (
          <TouchableOpacity key={num} style={styles.botao} onPress={() => handlePress(num)}>
            <Text style={styles.botaoTexto}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.botaoOperador} onPress={() => handlePress("*")}>
          <Text style={styles.botaoTexto}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {["1", "2", "3"].map((num) => (
          <TouchableOpacity key={num} style={styles.botao} onPress={() => handlePress(num)}>
            <Text style={styles.botaoTexto}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.botaoOperador} onPress={() => handlePress("-")}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.botaoTexto}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => handlePress("0")}>
          <Text style={styles.botaoTexto}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={calcular}>
          <Text style={styles.botaoTexto}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperador} onPress={() => handlePress("+")}>
          <Text style={styles.botaoTexto}>+</Text>
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
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  display: {
    backgroundColor: "#333",
    width: "17%",
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
  row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  botao: {
    backgroundColor: "#4e9cff",
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoOperador: {
    backgroundColor: "#ff6b6b",
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
