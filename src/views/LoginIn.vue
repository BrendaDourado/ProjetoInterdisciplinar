<template>
<v-container>
  <div class="inputs">
    <v-text-field
      label="LOGIN"
    >
    </v-text-field>
    <v-text-field 
    label="SENHA"></v-text-field>
  </div>
<div class= "botoes">
   <v-btn class="mb-4"
         @click="dialog=true"
        >
          LOGIN
        </v-btn>

 <div class="text-center">
   
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Usuário não cadastrado
        </v-card-title>

        <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perspiciatis itaque voluptas numquam quae cum repellendus iusto nulla assumenda, recusandae libero quidem hic eum, neque deserunt vero repellat vel alias.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            ok
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            CADASTRAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <v-alert v-if="blogin"
  type="error"
  > Usuário não cadastrado !</v-alert>
  <v-btn @click="$router.push('/CadastroCliente')">
    CADASTRE-SE
  </v-btn>
</div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}

</script>

<style scoped>

.inputs {
  text-align: center;
}
.botoes { 
  display: flex;
  flex-direction: column;
}

</style>