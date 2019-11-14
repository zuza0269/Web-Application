<template>
    <div >   
      
        <v-row>
              <v-img id="img" src="../assets/backimg.png"
      aspect-ratio="1"
      width="400"
      height="500">
     </v-img>
        </v-row> 
     
      
<v-row no-gutters >
    
    
    <v-col  >
     
      <v-card flat color="#ffffff00" class="pa-2 ml-4"
  >
    <v-card-title > <span id="cardtitle" class="font-weight-light">GYMNAST</span> <span id="x">X</span></v-card-title>
    <v-card-text color="blue" id="cardtext" > <p class="font-weight-light">Join one of the best gymnastic clubs and make it your hobby.</p> 
    <div class="font-weight-light">We take all. From beginners to professionals.</div>
    </v-card-text>
    <v-card-actions>
      <v-btn to="/lessons" class="mt-6 pl-4 pr-4 btn font-weight-light" rounded color="white" text>See all lessons</v-btn>
    </v-card-actions>
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

.btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 .btn:hover {
     background-color: #1100BC;
 }
 #x {
     color: #B893C6;
 }
 #cardtitle {
     color: #1100BC;
 }
 #cardtext {
     color: rgb(16, 0, 188);
     font-size: 2.5vh;
 }
 #img {
position: absolute;
  top: 0%;
  left: 60%;
 }
 
</style>