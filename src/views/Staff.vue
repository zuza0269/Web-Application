<template>
    <div>
            
     
      
<v-row >
    
    
    <v-col  >
     
      <v-card flat color="#ffffff00" class="pa-2 ml-4"
  >
    <v-card-title class="font-weight-light" > <span id="cardtitle" > MEET OUR </span> <span class="ml-2" id="cardtitl"> TRAINERS</span>
      </v-card-title>
    <v-card-text color="blue" id="cardtext" > <p class="font-weight-light">Perfectly qualified for their lesson.</p> 
    </v-card-text>
  </v-card>
     
    </v-col> 
   
</v-row>
<v-row>
      <v-col
          cols="6"
        md="4"
      >
       <v-img class="ml-12" height="165px" width="185px" src="../assets/kasper.jpg"></v-img>
      </v-col>
      <v-col
      cols="12"
        md="8"
      
      >
        <v-card
          class="pa-2"
          tile
          flat
          color="#ffffff60"
        >
           <v-card-title id="cardtitle2" class='font-weight-light'>KASPER JONASEN</v-card-title>
          <v-card-text id="cardtext" class='font-weight-light'>Kasper was a Olympic champion in 2000, now he is training all artistic and rhytmic gymnastics here.</v-card-text>
           <v-card-text id="cardtext2" class='font-weight-light'>Contact: kasperjonas@gmail.com</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="6"
        md="4"
      >
       <v-img class="ml-12" height="165px" width="185px" src="../assets/kristina.jpg"></v-img>
      </v-col>
      <v-col
      cols="12"
        md="8"
      
      >
        <v-card
          class="pa-2"
          tile
          flat
          color="#ffffff60"
        >
           <v-card-title id="cardtitle2" class='font-weight-light'>KRISTINA SKOLDOWA</v-card-title>
          <v-card-text id="cardtext" class='font-weight-light'>Kristina is highly experienced in Pole dance, currently also competing for our district in all Denmark. </v-card-text>
        <v-card-text id="cardtext2" class='font-weight-light'>Contact: kristinskola@gmail.com</v-card-text>
        </v-card>
      </v-col>
    </v-row>
     <v-row>
      <v-col
          cols="6"
        md="4"
      >
       <v-img class="ml-12" height="165px" width="185px" src="../assets/janine.jpg"></v-img>
      </v-col>
      <v-col
      cols="12"
        md="8"
      
      >
        <v-card
          class="pa-2"
          tile
          flat
          color="#ffffff60"
        >
           <v-card-title id="cardtitle2" class='font-weight-light'>JANINE SOLANE</v-card-title>
          <v-card-text id="cardtext" class='font-weight-light'>Janine is training jumping the rope, her skills are outstanding and the lessons with her are fun. </v-card-text>
        <v-card-text id="cardtext2" class='font-weight-light'>Contact: janinesol@gmail.com</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#cardtitle {
     color: #1100BC;
 }
 #cardtitl {
     color: #B893C6;
 }
 #cardtext {
     color: rgb(16, 0, 188);
     font-size: 2.3vh;
 }
 #cardtitle2 {
     color: #B893C6;
     font-size: 20px;
 }
 #cardtext2 {
      color: #1100BC;
     font-size: 2vh;
 }
</style>