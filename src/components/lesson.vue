<template>
<div>
<v-container>
 
    <div>
    <v-row >
      <v-col id="col">
  <v-card class="pa-6 ma-12"
    flat 
    color="#ffffff60"
     align="center"
     width="700px"
  >
    <v-list-item two-line>
      <v-list-item-content>
      <router-link to="/lessons"> <v-list-item-title id="les-title" class="mb-4 headline font-weight-regular">{{lesson.headline}}</v-list-item-title></router-link> 
        <v-divider></v-divider> 
        <v-card-text id="card-desc" class="subtitle-1 mt-6">{{lesson.description}}</v-card-text>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col id="card-text" class="subtitle-1" cols="6"> 
          Visit us on: <br> <br>
      {{lesson.days}}
         from {{lesson.time}} <br>
         <p class="mt-12 font-weight-light"> {{lesson.price}} DKK/lesson</p> <br>
           <v-btn to="/cart"  @click="addToBasket(lesson)" class="btn font-weight-light" rounded color="white" text>
            Book lesson
      </v-btn>
        </v-col>
      <v-col cols="6">
            <router-link to="/lessons"> <v-img
            v-bind:src="lesson.image"
            width="200"
          ></v-img> </router-link>
        </v-col>
        
      </v-row>
    </v-card-text>
  </v-card>
  </v-col>


 </v-row>

    </div>
     </v-container>
     </div>
</template>

<script>
import { dbLessonAdd, dbOrders } from '../firebase'
    export default {
        data() {
          var lesson = this.$route.params
          return {
           basketDump: [],
            show: false,
            messages: 0,     
          lesson: {
            id: lesson.id,
            headline: lesson.headline,
            description: lesson.description,
            days: lesson.days,
            time: lesson.time,
            price: lesson.price,
            image: lesson.image,
        },
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
}
.btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 #card-text {
 color: rgb(83, 39, 94);
}
#card-desc {
  color: rgba(16, 0, 188, 0.616);
}
a {
text-decoration: none!important;
}
#back {
  background-color: #ffffff00;
}
#line {
  line-height: 8px;
}
i {
  color:rgba(184, 147, 198);
  cursor: pointer;
}
i:hover {
   color: #1100BC;
   cursor: pointer;
}
.btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 .btn:hover {
     background-color: #1100BC;
 }
 #btn:hover {
   background-color: rgba(184, 147, 198, 0.4);
   color: #1100BC;
 }
#col {
  margin-left: 200px;
}
</style>