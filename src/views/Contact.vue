<template>
    <v-container>
    <v-row no-gutters>
      <v-col
         cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          flat
          tile
          color="transparent"
        >
          <v-card-title class="mb-6 font-weight-light darkpurple--text">CONTACT US</v-card-title>
          <v-card-text><i class="fas fa-map-marker-alt fa-2x"></i> <span class="ml-4  ">Jernbanegade 14</span> <br>
          <span class="ml-9">6700 Esbjerg, Denmark</span> </v-card-text>
             <v-card-text><i class="fas fa-envelope fa-2x"></i><span class="ml-4  ">gymnastix@gmail.com</span> </v-card-text>
              <v-card-text><i class="fas fa-phone-alt fa-2x"></i><span class="ml-4  ">+ 45 25 63 25 24</span> </v-card-text>
        </v-card>
      </v-col>
      <v-col
      class="ml-12"
       cols="12"
        sm="6"
        md="6"
      
      >
        <v-card
          class="pa-2"
          flat
          tile
          color="#ffffff60"
        >
          <v-card-title class="mb-6 font-weight-light darkpurple--text">GET IN TOUCH</v-card-title>
          <form>
               <v-col
        cols="12"
        sm="6"
      >
    <v-text-field
        class="font-weight-light"
      v-model="name"
      label="Name"
      required
      outlined
    ></v-text-field>
    <v-text-field
        class="font-weight-light"
      v-model="email"
      label="E-mail"
      required
      outlined
    ></v-text-field>
               </v-col>
                <v-col cols="12">
        <v-textarea
        class="font-weight-light"
          outlined
          name="input-7-4"
          label="Message"
          value="Your message..."
        ></v-textarea>
         <v-btn id="btn" text color="white" rounded class="font-weight-light mr-4 pl-8 pr-8" @click="send">send</v-btn>
      </v-col>
    
  </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
i {
     color:rgba(184, 147, 198, 0.5);
}
span {
   color: #6E98D2;
}
#btn {
     background-color: rgb(16, 0, 188);
  
 }
 #btn:hover {
      background-color: rgba(184, 147, 198, );
 }
</style>