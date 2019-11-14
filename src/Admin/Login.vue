<template>
    <div>
        <v-container class="ml-8" fluid>
           
                <v-col col="12">
               
  
    <h2 id="cardtitle" class="font-weight-light">ADMINISTRATOR LOGIN</h2>
                 <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
       
        >
         <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
           <v-btn depressed id="btn1" class=" white--text font-weight-light mr-4 mt-2"
      @click.prevent="logIn()"
    >
      Login
    </v-btn>

    <v-btn
      depressed id="btn2" class=" white--text font-weight-light mr-4 mt-2"
         @click.prevent="logOut()"
    >
     Logout
    </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
                </v-col>
         
        </v-container>

    </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
    export default {
        data() {
            return {
                email: '',
                emailRules: [
                     v => !!v || 'E-mail is required',
            ],
                password: '',
                 passwordRules: [
                     v => !!v || 'Password is required',
            ],
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
 #cardtitle {
     color: #1100BC;
 }
 #btn1 {
    background-color:  #1100BC;
 }
 #btn1:hover {
     background-color: rgba(184, 147, 198, 0.600);
 }
 #btn2 {
    background-color:  rgba(184, 147, 198);
 }
 #btn2:hover {
     background-color: rgba(16, 0, 188, 0.500); 
 }
</style>