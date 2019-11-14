import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont:
      'mdi'
  },
  theme: {
    themes: {
      light: {
        blue: '#1100BC',
        purple: '#B893C6',
        lightblue: '#6E98D2',
        darkpurple: '#53275E',
        white:'#ffffff',
        complete: '#138E61',
        inprogress: '#C9B128',
        incomplete: '#C63030',
      },
    },
  },
});
