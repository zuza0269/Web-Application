<template>
    <div>
        <v-container fluid>
                  <v-snackbar
                  color="white"
                  class="blue--text"
      v-model="updatedSuccess"
    >
      {{ updatedText }}
      <v-btn
        color="purple"
        text
        @click="updatedSuccess = false"
      >
        Close
      </v-btn>
    </v-snackbar>
         <v-btn to="/add" class="mt-2 add font-weight-light" rounded color="white" text >+ ADD NEW LESSON</v-btn> 
<v-row  >

<v-col offset-sm order-sm="3" order-xs="1" align-self="center"  col="12" v-for="(lesson, index) in lessonItems" :key="index">
<v-card
    class="pa-6 ma-2"
    flat 
    color="#ffffff60"
     align="center"
  >
      <v-btn id="edit" depressed color="transparent"  @click.stop="dialog = true" @click="editItem(lesson)"><i id="edit" class="fas fa-pencil-alt fa-lg"></i> </v-btn>
     
     <v-btn id="trash" depressed color="transparent" @click="deleteItem(lesson.id)"><i  class="fas fa-trash-alt fa-lg"></i>
     </v-btn> 
 <v-img 
  v-bind:src="lesson.image"
  width="125px"
  height="220px"
  >

  </v-img>
    <v-card-text id="les-title" class="title font-weight-regular">{{lesson.headline}}
    </v-card-text>
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
<v-row>
   <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card class="pa-8">
         <p color="blue" class="title blue--text font-weight-light">
            EDIT LESSON
             </p>
    <v-list-item two-line>
      <v-list-item-content>
       <v-list-item-title id="les-title" class="mb-4 headline font-weight-regular"> 
         <v-text-field label="Lesson headline" color="blue" outlined v-model="lesson.headline"></v-text-field>
         </v-list-item-title>
        <v-divider></v-divider> 
        <v-list-item-subtitle id="card-desc" class="subtitle-1 mt-6">
          <v-text-field label="Description" color="blue" v-model="lesson.description"></v-text-field>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col id="card-text" class="subtitle-1" cols="6"> 
          <br>
        <v-text-field color="blue" label="Days" required v-model="lesson.days"></v-text-field>
         <v-text-field color="blue" label="Times" required v-model="lesson.time"></v-text-field> 
         <br>
         <p class="mt-12 font-weight-light">  <v-text-field color="blue" label="Price" outlined required v-model="lesson.price"></v-text-field> </p>
         <v-btn   class="btn font-weight-light" rounded color="white" text @click="updateItem()" @click.stop="dialog = false">
       Edit
      </v-btn>
      <v-btn id="close"   @click.stop="dialog = false" text class="white--text ml-2 font-weight-light" rounded>
       Close
      </v-btn>
        </v-col>
         <v-col cols="6">
         <v-file-input class="ml-8"
         v-model="lesson.image"
         rounded
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Add image"
          prepend-icon="mdi-camera"

  ></v-file-input>
        </v-col>
        
      </v-row>
    </v-card-text>
      </v-card>
    </v-dialog>
</v-row>
</v-container>
    </div>
</template>

<script>
import { dbLessonAdd } from '../firebase'
    export default {
        data() {
          return {
            basket: [],
            dialog: false,
            lesson: [],
            activeEditItem: null,
            updatedSuccess: false,
            updatedText: 'Lesson has been updated'
          }
        },
        beforeCreate() {
          this.$store.dispatch('setLessonItems')
        },
        
        methods: {
          editItem(lesson) {
            this.lesson = lesson
            this.activeEditItem = lesson.id
          },
          updateItem() {
            dbLessonAdd.doc(this.activeEditItem).update(this.lesson)
              .then(() => {
                this.updatedSuccess = true;
                  console.log("Document successfully updated!");
              })
              .catch(function(error) {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
              });
          },
          deleteItem(id) {
            if(id) {
              dbLessonAdd.doc(id).delete().then(function() {
              // console.log("Document successfully deleted!");
                }).catch(function(error) {
              // console.error("Error removing document: ", error);
                });

            }
          }
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
#edit {
    float: right;
    color:#1100BC;;
}
#trash {
     float: left;
    color: rgb(83, 39, 94);
}
.add {
     background-color: #1100BC;
}
.add:hover {
     background-color: rgba(184, 147, 198, 0.600);
}
#close {
  background-color: #1100BC;
}
#close:hover {
   background-color: rgba(184, 147, 198, 0.600);
}
</style>