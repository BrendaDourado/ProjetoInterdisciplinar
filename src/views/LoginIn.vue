<template>
  <v-container>
    <div class="inputs">
      <v-text-field v-model="login" label="E-mail"> </v-text-field>
      <v-text-field
        type="password"
        v-model="password"
        label="Senha"
      ></v-text-field>
    </div>
    <div class="botoes">

      <v-btn class="mb-4 btn" @click="btnLogin"> LOGIN </v-btn>


      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title
              style="display: flex; justify-content: center"
              class="text-h5 grey lighten-2"
            >
              Usuário ou senha incorreta
            </v-card-title>

            <v-card-text style="margin-top: 1rem">
              Caso seja seu primeiro acesso, clique no link abaixo para se cadastrar <br>
              senão, tente realizar o login novamente.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#002960" text @click="dialog = false"> ok </v-btn>
              <v-btn color="#002960" text @click="$router.push('/CadastroCliente')">

                CADASTRAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-alert v-if="blogin" type="error"> Usuário não cadastrado !</v-alert>

      <v-btn class="btn" @click="$router.push('/CadastroCliente')"> CADASTRE-SE </v-btn>

    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      login: "",
      password: "",
    };
  },
  methods: {
    btnLogin() {
      console.log(localStorage.email);
      console.log(this.login);
      console.log(localStorage.senha);
      console.log(this.password);

      if ((this.login != localStorage.email) && (this.password != localStorage.senha )) {
          this.dialog = true;

      } else {
        this.$router.push("/DoarView");
        this.$auth = true;
      }
    },
  },
};
</script>

<style scoped>
.inputs {
  text-align: center;
}
.btn{
  background-color: #002960 !important;
  color: #fff;
}
.botoes {
  display: flex;
  flex-direction: column;
}
</style>
