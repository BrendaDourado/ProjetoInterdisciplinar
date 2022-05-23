<template>
<div class="barlog" >
    <v-app-bar
  color="blue"
  elevation="4"
>
<v-icon x-large aria-hidden="false">
  mdi-account
</v-icon>

<div class="userdata" >
  <h3 class="username">{{name}}</h3>
  <span>{{email}}</span>
</div>
<v-spacer />
<v-icon x-large aria-hidden="false">
  mdi-hand-coin-outline
</v-icon> 
<h3>Saldo</h3>

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
    <v-btn class="mb-4"
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
        textinho que o kelvin vai mandar pra gente
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
      email: localStorage.getItem("email")
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
    margin-top:-20px;
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
</style>