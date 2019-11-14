<template>
    <div>
        <v-container>
            <v-row no-gutters >
    
    
    <v-col  >
     
      <v-card flat color="#ffffff00" class="pa-2 ml-4">
    <v-card-title > <span id="cardtitle" class="font-weight-light">GYMNAST</span> <span id="x">X</span></v-card-title> <br>
    <v-card-text color="blue" id="cardtext" > <p class="font-weight-light">GymnastiX is a new sports company which focuses mostly on 18+ women, who wants to keep in shape, have fun and be part of a community.</p> 
    <p class="font-weight-light">There are four lessons to choose from: acrobatic gymnastics, rhythmic gymnastics, jumping the rope and pole dance. The prices vary from equipment and time needed for each.</p>
    <p class="font-weight-light">We have newest gymnastic equipment, from soft jumpy floor mat to long trampolines.</p>
    <p class="font-weight-light">Our trainers are perfectly qualified. Jenny Sean had been Denmark’s champion in Gymnastics and now she wants to enjoy teaching what she have learned over the years of practice.</p>
        <p>Don't hesitate and <v-btn to="/lessons" class="ml-2 pl-4 pr-4 btn font-weight-light" rounded color="white" text>Join us</v-btn> </p>
    </v-card-text>
   
     
  
  </v-card>
     
    </v-col> 





 
   
</v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#x {
     color: #B893C6;
 }
 #cardtitle {
     color: #1100BC;
 }
 #cardtext {
      color: #1100BC;
      font-size: 2.2vh;
 }
 .btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 .btn:hover {
     background-color: #1100BC;
 }
</style>