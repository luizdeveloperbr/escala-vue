/*configuraçoes do framework Vue.js*/
var app = new Vue({
  el: '#app',
  data: {
    datadomingo: function () {

    return moment('20190630').weekday()
},
    domingo1: '',
    domingo2: '',
    domingo3: '',
    domingo4: '',
    folgadomingo1:''
  },
  computed: {
  	tempo: function () {
  	return moment(this.datadomingo).format('ddd')
  }
}
});
/*configuraçoes da biblioteca moment.js*/
var time = moment();
time.format();
time.locale('pt-br')
/*configuraçoes gerais de dados*/
