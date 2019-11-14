import Vue from 'vue'
import Vuex from 'vuex'
import { dbLessonAdd, dbOrders } from './firebase'

import firebase from 'firebase';
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketLessons: [
     
    ],
    lessonItems: [],
    orderItems: [],
    currentUser: null,
  },
  mutations: {
    addCheckoutItem: (state, basketLessons) => {
      dbOrders.add({
        orderNumber: 1,
        status: "incomplete",
        orderLines: state.lessonItems
      })
    },
    addBasketLessons: (state, basketLessons) => {
      if(basketLessons instanceof Array ) {
      basketLessons.forEach(lesson => {
        if(state.basketLessons.find(lessonInArray => lesson.headline == lessonInArray.headline)) {
          lesson = state.basketLessons.find(lessonInArray => lesson.headline === lessonInArray.headline)
          lesson.quantity++;
         }  else {
          state.basketLessons.push({
           headline: lesson.headline,
           price: lesson.price,
           quantity: 1,
            })
           }
      })
    }
  },
  userStatus(state, user) {
    if(user) {
      state.currentUser = user
    }
    else {
      state.currentUser = null
    }
  },

  setLessonItems: state => {
    let lessonItems = []
    dbLessonAdd.onSnapshot((snapshotLessons) => {
      lessonItems = []
      snapshotLessons.forEach((doc) => {
        var lessonItemData = doc.data();
        lessonItems.push({
         ...lessonItemData,
         id: doc.id
        })
      })
      state.lessonItems = lessonItems
    })
  },
  setOrderItems: state => {
    let orderItems = []
    dbOrders.onSnapshot((snapshotLessons) => {
      orderItems = []
      snapshotLessons.forEach((doc) => {
        var orderItemData = doc.data();
        orderItems.push({
         ...orderItemData,
         id: doc.id
        })
      })
      state.orderItems = orderItems
    })
  },
},

  actions: {
    setCheckoutItem(context) {
      context.commit('addCheckoutItem')
    },
    setUser(context, user) {
      context.commit('userStatus', user)
    },
    setLessonItems: context => {
      context.commit('setLessonItems')
    },
    setOrderItems: context => {
      context.commit('setOrderItems')
    }
  },
  getters: {
    getBasketLessons: state => state.basketLessons,
    currentUser: state => state.currentUser,
    getLessonItems: state => state.lessonItems,
    getOrderItems: state => state.orderItems,
  }
})
