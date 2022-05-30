<template>
<div class="barlog" >
    <v-app-bar
  elevation="4"
  class="app-bar" 
>
<v-icon color="#fff" x-large aria-hidden="false">
  mdi-account
</v-icon>

<div class="userdata" >
  <h3 class="username">{{name}}</h3>
  <span>{{email}}</span>
</div>
<v-spacer />
<v-icon color="#fff" x-large aria-hidden="false">
  mdi-hand-coin-outline
</v-icon> 
<p style="margin-top: 1.9rem; margin-left: 0.7rem">Saldo: {{amount}}</p>

</v-app-bar> 
  <v-container fluid>
    <div class="titulo">
      <h1>O que você vai doar ?!</h1>
      <p>Detalhar o que vai ser doado com checkbox</p>
    </div>
    <div class="form">
      <v-col>
        <v-row class="checkbox">
          <v-checkbox
            class="v-checkbox"
            v-model="checkbox1"
            :label="`Agasalho`"
          ></v-checkbox>
          <v-checkbox
            class="v-checkbox"
            v-model="checkbox2"
            :label="`Alimento`"
          ></v-checkbox>
        </v-row>

        <v-row>
          <v-col>
              <v-text-field v-if="checkbox1" label="Peças" solo></v-text-field>

              <v-text-field v-if="checkbox2" label="Kg" solo></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </div>
    <v-btn class="mb-4 btn"
         @click="dialog=true"
        >
          DOAR
        </v-btn>
        <div class="text-center">
   
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          MUITO OBRIGADA POR DOAR
        </v-card-title>

        <v-card-text>
        <h1>Instituição mais próxima :</h1> 
        <h3>CRECHE COMUNITÁRIA RAIO DE SOL.</h3>
        <br>
        <h1>Data para doação:</h1>
        <h3> Você tem entre 1 a 15 de junho das 8 horas às 18 horas para realizar a sua entrega</h3>
        <br>
        <h1>PARABÉNS COM ESSA DOAÇÃO VOCÊ RECEBERÁ:</h1>
        <br>
        <h1>148 DONAPOINTS !!!!</h1>
        <br>
        <h1>E AINDA FARÁ UMA CRIANÇA FELIZ !!! </h1>
        <h3>
        Mais informações contate :  0800 7070</h3>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      dialog: false,
      name: localStorage.getItem("nome"),
      email: localStorage.getItem("email"),
      amount: "999"
    };
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.$router.push("/analisesugestao");
      }, 100);
    },
  },
};
</script>

<style scoped>
.barlog {
    margin-top: -1.2rem;
}
.app-bar{ 
  background-color: #002960 !important;
  color: #fff
}
.btn{
  background-color: #002960 !important;
  color: #fff;
}
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
.username {
  text-align: left;
}
.form {
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
}
.checkbox {
  justify-content: center;
  margin: 10px;
}
.v-checkbox {
  margin-right: 1rem;
}
@media screen and (max-width: 959px) {
  .barlog {
    margin-top: -1.7rem;
  }
}
</style>