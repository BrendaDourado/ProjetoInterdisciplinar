<template>
  <!-- Desktop-->
  <v-container v-if="screenWidth > 900">
    <v-col>
      <v-row>
        <v-col cols="6">
          <v-card class="home-left" elevation="4"> </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="home-right" elevation="4">
            <div class="div-card-right">
              <h1>
                O donaverse é um universo de doações, ou poderiamos dizer...
                <br />um Multiverso?!
              </h1>
              <p>
                Somos um grupo de estudante na área de tecnologia, esta
                aplicação voltado para doação é para tornar dinâmico a forma de
                ajudar o próximo .
              </p>
              <v-btn @click="delay" class="mr-4 btn-doar" type="submit">
                VENHA DOAR
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
  <!--Mobile e telas menores-->
  <v-container v-else>
    <v-col>
      <v-row>
        <v-card class="home-right" elevation="4">
          <div class="div-card-right">
            <h1>
              O Donaverse é o universo de doações, ou poderiamos dizer...
              <br />um Multiverso?!
            </h1>
            <p>
              Somos um grupo de estudante na área de tecnologia, esta aplicação
              feita para doação, foi totalmente pensada para dinamizar a ajuda
              ao próximo.
            </p>
            <v-btn @click="delay" class="mr-4 btn-doar" type="submit">
              VENHA DOAR
            </v-btn>
          </div>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "HomeIn",
    screenWidth: window.screen.width,
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    delay() {
      setTimeout(() => {
        this.$router.push(this.$auth ? "/DoarView" : "/LoginIn");
      }, 100);
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #002960;
}
img {
  max-width: 100%;
  margin-top: 4rem;
}
.text-home {
  font-size: 14px;
}
.form {
  display: flex;
  justify-content: center;
}
.btn-doar {
  background-color: #002960 !important;
  color: #fff !important;
}
.home-right {
  margin-top: -1rem;
  background-color: #f5f5f5 !important;
  height: 84vh;
  border-radius: 12px !important;
  display: flex;
  padding: 20vh 2rem;
}

.home-left {
  margin-top: -1rem;
  background-color: #f5f5f5 !important;
  height: 84vh;
  border-radius: 12px !important;
  padding: 20vh 2rem;
  background-image: url(https://images.pexels.com/photos/6347730/pexels-photo-6347730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-position-y: -60px;
}
</style>
