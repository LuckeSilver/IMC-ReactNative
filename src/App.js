import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props); //Repassando as propriedas para a classe pai
    this.state = { altura: 0, peso: 0, resultado: 0, resultadoText: "" };
    //this.state é o estado da minha app onde todas as variáveis ficam gravadas
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);

    let estado = this.state;
    estado.resultado = imc;

    if (estado.resultado < 16) {
      estado.resultadoText = "Magreza Grave";
    } else if (estado.resultado < 17) {
      estado.resultadoText = "Magreza Moderada";
    } else if (estado.resultado < 18.5) {
      estado.resultadoText = "Magreza Leve";
    } else if (estado.resultado < 25) {
      estado.resultadoText = "Saudável";
    } else if (estado.resultado < 30) {
      estado.resultadoText = "Sobrepeso";
    } else if (estado.resultado < 35) {
      estado.resultadoText = "Obesidade Grau I";
    } else if (estado.resultado < 40) {
      estado.resultadoText = "Obesidade Grau II";
    } else {
      estado.resultadoText = "Obesidade Grau III";
    }

    this.setState(estado);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput
            placeholder="Peso"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={peso => {
              this.setState({ peso });
            }}
          />
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={altura => {
              this.setState({ altura });
            }}
          />
        </View>
        <TouchableOpacity onPress={this.calcular} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 35 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#032066"
  },

  entradas: {
    flexDirection: "row",
    justifyContent: "center"
  },

  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 50,
    marginBottom: 50,
    color: "#fff"
  },

  button: {
    backgroundColor: "#2CD697",
    borderRadius: 5,
    width: "50%",
    height: 50,
    alignSelf: "center",
    marginBottom: 50
  },

  buttonText: {
    alignSelf: "center",
    padding: 8,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  },

  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 60,
    padding: 15
  }
});
