<template>
  <v-container>
    <div class="inputs">
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
      </v-col>

      <v-col cols="auto"> </v-col>
      <v-text-field label="CEP" />
    </div>
    <div class="botoes">
      <v-btn @click="signup" class="mb-4"> Enviar </v-btn>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      name: "",
    };
  },
  methods: {
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
      setTimeout(() => {
        this.$router.push("/ConfirmaCadastro");
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
</style>
