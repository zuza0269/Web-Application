<template>
    <v-app>

   <v-content>
          
      <v-container class="fill-height" fluid>
        <navigation />
      <router-view></router-view>
      </v-container>
      </v-content>
      </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
 components: {
   Navigation,
 },
   props: {
      source: String,
    },
    data() {
        return {
       
        }
       
    }
};
</script>
<style lang="scss">

main {
    background-image: url('./assets/back.png');
    background-size: cover;
}
</style>
