<template>
  <v-container>
    <div class="mt-5 home-img">
    <!-- <img src=" " alt="Pascoa" /> --> 
    </div>
    <p class="text-home text-justify mt-5 ml-4 mr-4">
      descrição da ideia, com dashboards no futuro
    </p>
    <v-btn @click="delay" color="blue" class="mr-4" type="submit"> Clique Aqui </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
     name: "HomeIn",
  }),
methods: {
    submit() {
      this.$refs.observer.validate();
      
    },
      delay(){
        setTimeout(()=>{
          this.$router.push('/cadastrocliente')
          
          },100)

  },
}
}
</script>

<style>
.home-img {
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 300px;
}
.text-home {
  font-size: 14px;
}
.form {
  display: flex;
  justify-content: center;
}
</style>
