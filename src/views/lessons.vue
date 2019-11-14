<template>
    <div>
        <v-container fluid>
         <v-row>
           <v-col
           col="12">
           <p color="blue" class="text-justify blue--text font-weight-light">
             We offer lessons for adult women of any age. <br><br>
             Step by step for begginers and more skills for advanced. <br>
             Pick a lesson and come to visit <br> <br>
                <b>  Today, we have special offer: 30% discount if you buy lessons for 250 DKK or more.</b>
             </p>
           </v-col>
         </v-row>
<v-row  >
  
<v-col offset-sm order-sm="3" order-xs="1" align-self="center"  col="12" v-for="(lesson, index) in lessonItems" :key="index">
<v-card
    class="pa-6 ma-2"
    flat 
    color="#ffffff60"
     align="center"
  >
  <router-link v-bind:to="{name:'lesson', params: { 
    id: lesson.id,
    headline: lesson.headline,
    description: lesson.description,
    days: lesson.days,
    time: lesson.time,
    description: lesson.description,
    price: lesson.price,
    image: lesson.image,
  }}"><v-img 
  v-bind:src="lesson.image"
  width="125px"
  height="220px"
  >

  </v-img>
    <v-card-text id="les-title" class="title font-weight-regular">{{lesson.headline}}
    </v-card-text></router-link>
    <v-card-text id="card-text"> <span>{{lesson.days}}</span>
    <br>
     <span>{{lesson.time}}</span>
    </v-card-text>
      <v-btn class="mt-2 btn font-weight-light" rounded color="white" text  v-bind:to="{name:'lesson', params: { 
    id: lesson.id,
    headline: lesson.headline,
    description: lesson.description,
    days: lesson.days,
    time: lesson.time,
    description: lesson.description,
    price: lesson.price,
    image: lesson.image,
  }}" depressed  >More info</v-btn>
  </v-card>
    </v-col>
 
</v-row>
</v-container>
    </div>
</template>

<script>
import { dbLessonAdd } from '../firebase'
    export default {
        data() {
          return {
        
          }
        },
        
 beforeCreate() {
          this.$store.dispatch('setLessonItems')
        },
           computed: {
          lessonItems() {
            return this.$store.getters.getLessonItems
          },
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
#les-title {
color: map-get($colorz , blue );
text-decoration: none;
}
#card-text {
 color: rgba(83, 39, 94, 0.8);
}
.btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 .btn:hover {
     background-color: #1100BC;
 }
a {
text-decoration: none!important;
}
</style>