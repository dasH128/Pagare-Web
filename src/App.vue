<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1 v-if="userActual">{{userActual.razonSocial}}</h1>
        <h1 v-if="!userActual">Grupo Finanzas</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
      >
      <span class="mr-2" v-if="userActual">Cerrar Sesión</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapState([
      'userActual'
    ]),
  }
};
</script>
