<template>
  <v-container>
    <!-- Telas pequenas e dispositivos moveis-->
    <div v-if="screenWidth > 600" class="inputs">
      <v-col cols="auto"> </v-col>
      <v-col cols="auto">
        <v-row>
          <v-col cols="10">
            <v-text-field v-model="name" label="Nome Completo" />
          </v-col>
          <v-col cols="2">
            <v-text-field type="date" label="Data de Nascimento" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field label="CPF" />
          </v-col>
          <v-col cols="4">
            <v-text-field label="Gênero" />
          </v-col>
          <v-col cols="4">
            <v-text-field label="Telefone" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="email" label="Email" />
          </v-col>
          <v-col cols="4">
            <v-text-field type="password" label="Senha" />
          </v-col>
          <v-col cols="4">
            <v-text-field type="password" label="Confirmação de Senha" />
          </v-col>
        </v-row>
        <v-row class="endereço">
          <v-col cols="3">
            <v-text-field
              v-model="cep"
              @focusout="valueInputs"
              @keyup="searchCep()"
              label="CEP"
            />
          </v-col>
          <v-col cols="7">
            <v-text-field
              type="text"
              :value="logradouro"
              label="Endereço"
              readonly
            />
          </v-col>
          <v-col cols="2">
            <v-text-field type="text" label="Numero" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-text-field label="Complemento" :value="complemento" />
          </v-col>
          <v-col cols="3">
            <v-text-field label="Bairro" :value="bairro" readonly />
          </v-col>
          <v-col cols="3">
            <v-text-field label="Cidade" :value="cidade" readonly />
          </v-col>
          <v-col cols="1">
            <v-text-field label="UF" :value="uf" readonly />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="auto"> </v-col>
    </div>
    <!-- Telas maiores e desktops-->
    <div v-else class="inputs">
      <v-col cols="auto"> </v-col>

      <v-col cols="auto">
        <v-text-field v-model="name" label="Nome Completo" />
        <v-text-field type="date" label="Data de Nascimento" />
        <v-text-field label="CPF" />
        <v-text-field label="Gênero" />
        <v-text-field label="Telefone" />
        <v-text-field v-model="email" label="Email" />
        <v-text-field type="password" label="Senha" />
        <v-text-field type="password" label="Confirmação de Senha" />
        <v-text-field
          v-model="cep"
          @focusout="valueInputs"
          @keyup="searchCep()"
          label="CEP"
        />
        <v-text-field
          type="text"
          :value="logradouro"
          label="Endereço"
          readonly
        />
        <v-text-field type="text" label="Numero" />
        <v-text-field label="Complemento" :value="complemento" />
        <v-text-field label="Bairro" :value="bairro" readonly />
        <v-text-field label="Cidade" :value="cidade" readonly />
        <v-text-field label="UF" :value="uf" readonly />
      </v-col>

      <v-col cols="auto"> </v-col>
    </div>
    <div class="botoes">
      <v-btn @click="signup" class="mb-4 btn-cadastro"> Cadastrar </v-btn>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      name: null,
      cep: null,
      data: null,
      messageCep: null,
      logradouro: null,
      complemento: null,
      bairro: null,
      cidade: null,
      uf: null,
      screenWidth: window.screen.width,
    };
  },
  methods: {
    valueInputs() {
      console.log(this.data);
      this.logradouro = this.data["logradouro"];
      this.complemento = this.data["complemento"];
      this.bairro = this.data["bairro"];
      this.cidade = this.data["localidade"];
      this.uf = this.data["uf"];
      console.log(this.screenWidth);
    },
    searchCep() {
      const axios = require("axios").default;

      if (this.cep.length == 8) {
        axios
          .get(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then((response) => (this.data = response.data))
          .catch((error) => console.log(error));
      }
    },
    saveData() {
      localStorage.setItem("email", this.$data.email);
      localStorage.setItem("nome", this.$data.name);
      localStorage.setItem("senha", this.$data.senha);
    },
    signup() {
      if (!this.$data.email || !this.$data.name) {
        return alert("dados inválidos");
      }
      this.saveData();
      this.$auth = true;
      setTimeout(() => {
        window.location.href = "/ConfirmaCadastro";
      }, 100);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
}

.container {
  margin-bottom: 80px;
  padding: 0 10;
  width: 100%;
  height: 100vh;
}
.btn-cadastro{
  background-color: #002960 !important;
  color: #fff;
}
</style>
