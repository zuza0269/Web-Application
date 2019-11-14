<template>
    <v-container>
       <v-row>
      <v-col
        cols="12"
        md="7"
        sm="12"
        
      >
        <v-card
          flat
           color="#ffffff60"
           class="pa-6"
        >
         <p align="center" class="headline" id="cardtitle">Booking list</p>
      <v-divider></v-divider>
         
              <v-card-text   v-for="(lesson, index) in lessonItems" :key="index">
      <v-row align="center">
        <v-col cols="2">
            <v-avatar   width="72px"
  height="100px"> <v-img 
  v-bind:src="lesson.image">
  </v-img></v-avatar>
        </v-col>
        <v-col cols="4">
         <span id="les-title" class=" ml-4 font-weight-light"> {{lesson.headline}}</span>
        </v-col>
         <v-col cols="4">
         <span id="les-price" class=" ml-4 font-weight-light"> {{lesson.price}} kr / lesson</span>
        </v-col>
               <v-col>
  <i @click="addToBasket(lesson)" cols="1" class=" fas fa-cart-plus fa-2x"></i>
  </v-col>
      </v-row>

    </v-card-text>

 

        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="5"
        sm="12"
      >
        <v-card
         color="#ffffff60"
          class="pa-6"
          flat
          align="center"
        >
         <v-list-item two-line>
      <v-list-item-content>
     <v-list-item-title id="les-title" class="mb-4 headline font-weight-regular">Basket</v-list-item-title>
        <v-divider></v-divider> 
        <v-list-item-subtitle v-if="basket.length > 0" id="card-desc" class="subtitle-1 mt-6">Selected items</v-list-item-subtitle>
          <v-list-item-subtitle v-else id="card-desc" class="subtitle-1 mt-6" > The basket is empty</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

<v-simple-table id="back" v-if="basket.length > 0">
        <thead>
          <tr >
            <th align="left" class="caption text-left darkpurple--text" style="width:30%">Quantity</th>
               <th align="left" class="caption text-left darkpurple--text"  style="width:50%">Name</th>
            <th align="right"  class="caption  text-left darkpurple--text"  style="width:20%">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lesson in basket " :key="lesson.headline">
            <td class="blue--text" ><i @click="increaseQnt(lesson)" class="fas fa-plus-circle"></i> {{lesson.quantity}} <i @click="decreaseQnt(lesson)" class="fas fa-minus-circle"></i>
            </td>
             <td align="left"  class="body-2 blue--text text-left"> {{ lesson.headline }}</td>
            <td align="right"  class="body-2 blue--text text-left">{{ lesson.price }}</td>
          </tr>
        </tbody>
</v-simple-table>

<v-row  class="mt-6">
  <v-col align="left">
    <p id="line" class="body-2 darkpurple--text">Subtotal:</p>
     <p class="body-2 darkpurple--text">Discount:</p>
      <p class="body-2 darkpurple--text">Total amount:</p>
  </v-col>
  <v-col align="right">
    <p id="line" class="body-2 darkpurple--text">{{subTotal}} DKK</p>
    <p id="line" class="body-2 darkpurple--text">{{discount}} %</p>
     <p class="body-2 font-weight-bold darkpurple--text">{{total}} DKK</p>
  </v-col>
</v-row>
<v-row>
  <v-col align="right">
    <v-btn id="btn" @click="addCheckoutItem()" text rounded depressed outlined color="blue" class="font-weight-light">
      Checkout
    </v-btn>
  </v-col>
</v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbLessonAdd } from '../firebase'

    export default {
     data() {
       
      return {
            basketDump: [],
            show: false,
            messages: 0,
      }    
     },
      beforeCreate() {
          this.$store.dispatch('setLessonItems')
        },

     methods: {
       addCheckoutItem(){
          this.$store.dispatch('setCheckoutItem')
       },
          addToBasket(lesson){
           /* if(this.basket.find(lessonInArray => lesson.headline == lessonInArray.headline)) {
            lesson = this.basket.find(lessonInArray => lesson.headline === lessonInArray.headline)
            this.increaseQnt(lesson);
           }  else {
           this.basket.push({
             headline: lesson.headline,
             price: lesson.price,
             quantity: 1,
              })
             }*/ 
             this.basketDump.push({
             headline: lesson.headline,
             price: lesson.price,
             quantity: 1,
              }),
              this.$store.commit("addBasketLessons", this.basketDump);
             this.basketDump = [];

             },
          increaseQnt(lesson) {
            lesson.quantity++
          },
          decreaseQnt(lesson) {
            lesson.quantity--;
            if(lesson.quantity === 0) {
              this.basket.splice(this.basket.indexOf(lesson), 1)
            }
          }
           },
           computed: {
               lessonItems() {
            return this.$store.getters.getLessonItems
          },
             basket() {
              //return this.$store.state.basketLessons
              return this.$store.getters.getBasketLessons
             },
             subTotal() {
               var subCost = 0;
               for(var lessons in this.basket) {
                 var indLesson = this.basket[lessons];
                 subCost += indLesson.quantity * indLesson.price
               }
               return subCost
             },
             discount() {
               var qDiscount;
                 if (this.subTotal > 250) {
                qDiscount =  30 
               }  else  {
                 qDiscount = 0
               }
              return qDiscount
             },
             total() {
               var qntDiscount
                   if (this.subTotal > 250) {
                qntDiscount =  0.7 
               }  else  {
                 qntDiscount = 1
               }

               var totalCost = this.subTotal
               return Math.round(totalCost * qntDiscount)
             }
           
           },
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
i {
    color: map-get($colorz , darkpurple );
}
i:hover {
   color: map-get($colorz , purple );
   cursor: pointer;
}
span {
   color: #6E98D2;
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
 #cardtitle {
     color: #1100BC;
 }
 #les-title {
color: map-get($colorz , blue );
text-decoration: none;
font-size: 17px;
}
 #les-price {
color: map-get($colorz , darkpurple );
text-decoration: none;
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
</style>
   