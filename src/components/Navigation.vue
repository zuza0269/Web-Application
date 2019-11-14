<template>
    <v-app>
         <v-navigation-drawer
      v-model="drawer"
      app
      text
      color="white"
    > <!--flat could be called text-->
    <div v-if="currentUser">
      <div  class="mt-10 ml-12 mr-0 mb-0">
       <v-avatar  class="ml-12 mb-4">
      <img
     
        src="../assets/zuzana.jpg"
        alt="Zuzana"
      >
    </v-avatar>

    <h4 class="mb-4 darkpurple--text font-weight-regular">{{currentUser.email}}</h4>
    </div>
    <v-divider></v-divider>
    </div>
      <ul>
    <router-link class="text-uppercase font-weight-light" tag="li" to="/">Home</router-link>
    <router-link class="text-uppercase font-weight-light" tag="li" to="/lessons">Lessons</router-link>
    <router-link class="text-uppercase font-weight-light" tag="li" to="/about">About us</router-link>
    <router-link class="text-uppercase font-weight-light" tag="li" to="/staff">Trainers</router-link>
    <router-link class="text-uppercase font-weight-light" tag="li" to="/contact">Contact</router-link>
      </ul>
           
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#ffffff00"
      dark
      flat
    >
        <v-app-bar-nav-icon color="blue" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        
         <v-img class="ml-4"
      src="../assets/g.png"
      aspect-ratio="1"
      max-width="50"
      max-height="50"
    ></v-img>
     
 <v-spacer></v-spacer>
   <router-link id="admin" class="font-weight-light mr-8" to="/login">Admin-Log</router-link>
   <router-link id="admin" v-if="currentUser" class="font-weight-light mr-8" to="/orders">Orders</router-link>
    <router-link id="admin" v-if="currentUser" class="font-weight-light mr-8" to="/admin">Admin</router-link>
 <router-link to="/cart">  <v-badge
        color="purple"
        overlap
      >
        <template v-slot:badge>
          <span v-if="messages > 0">{{ messages }}</span>
        </template>
     <i class="fab fa-opencart fa-2x"></i>
      </v-badge></router-link>


    </v-app-bar>

   
    </v-app>
</template>

<script>
import { db } from '../firebase'
import firebase from 'firebase'
import 'firebase/firestore'
import store from '../store.js'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUser', user)
  } else {
     store.dispatch('setUser', null)
  }
});

    export default {
         props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    },
      methods: {
            logIn() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                    this.$router.replace('/admin')
                })
                .catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert ("Wrong password")
                    } else {
                        alert (errorMessage)
                    }
                    console.log(error)
                })
            },
             logOut() {
                  firebase.auth().signOut().then(() => {
                      alert('Logged Out');
                      this.$router.replace('/')
                  }).catch(error => {
                      alert(error)
                  })
            }
        }

    }
   
</script>

<style lang="scss" scoped>
$colorz: (
    blue: #1100BC,
    purple: #B893C6,
    lightblue: #6E98D2,
    darkpurple: #53275E,
    white:#ffffff,
 );
 nav ul {
  padding: 0;
  margin-top: 20px;
  text-decoration: none;
}
nav li {
  color: map-get($colorz, blue);
  margin-left: 15%;
  padding: 15px 20px;
  list-style-type: none;
  cursor: pointer;
}
nav li:hover {
  color: map-get($colorz , purple )
}
nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: map-get($colorz, lightblue );
}
nav li:last-child:hover {
  color: map-get($colorz, darkpurple );
}
i {
  color: map-get($colorz, purple);
}
i:hover {
  color: map-get($colorz, lightblue);
}
#admin {
  text-decoration: none;
  color: map-get($colorz, purple);
}
#admin:hover {
    color: map-get($colorz, lightblue);

}
</style>