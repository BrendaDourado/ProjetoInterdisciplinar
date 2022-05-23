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
    </div>
</template>

<script>
export default {
    data() {
        return{
            name: localStorage.getItem("nome"),
            email: localStorage.getItem("email")
        }  
    },
}
</script>
<style scoped>

.barlog {
    margin-top:-16px;
}
.userdata {
    display: flex; 
    flex-direction: column; 
    margin-left:5px;
}
.username {
    text-align:left
}

</style>