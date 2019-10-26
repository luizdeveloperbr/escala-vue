Vue.component('domingo', {
	template: '<p>{{display}}</p>',
	props: ['addWeeks', 'getDate'],
	computed: {
		display: function () {
			return moment(this.validateDate).add(this.addWeeks, 'week').format('L')
		},
        wn:function(){
        var day = moment(this.display, "DD/MM/YYYY").format('WW');
        return day-1
        },
		validateDate: function () {
			var initDate = moment(this.getDate, "MMMM YYYY").startOf('month').toDate();
			if (moment(initDate).weekday() == 0) {
				return initDate
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toDate()
			}
		},
	},
});
Vue.component('timeEntrance', {
		template:'<div class="dropdown is-hoverable">'+
  '<div class="dropdown-trigger">'+
    '<button class="button is-paddingless" aria-haspopup="true" aria-controls="dropdown-menu3">'+
      '<span class="is-size-7">cod: {{cod}} <br/> {{hora}}</span>'+
    '</button>'+
  '</div>'+
  '<div class="dropdown-menu" id="dropdown-menu3" role="menu">'+
    '<div class="dropdown-content">'+
      '<div class="dropdown-item" v-for="t in timelist">'+
       '<a href="#" @click="cod = t.cod;hora = t.hora">{{t.hora}}</a>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>',
		props: ['timelist'],
		data: function (){
			return {
				cod: "",
                hora: "",
			}

		},
	}
);
Vue.component('folga', {
	template: '<div style="width: 55px;margin: auto;"><flat-pickr :config="config" v-model="input" class="input is-size-7"></flat-pickr></div>',
	props: ['addWeeks', 'getFolga'],
    data: function(){
        return {
            input: "",
        }
    },
        computed: {
        config: function(){
            return {
                dateFormat: "d/M",
                minDate: this.minDate,
                defaultDate: this.getFolga,
                maxDate: this.maxDate,
                locale: "pt"
            }
        },
        minDate: function() {
            return moment(this.getFolga,"DD/MMM", "pt-br").subtract(9, 'day').toDate()},
        maxDate: function (){
			return moment(this.getFolga, "DD/MMM", "pt-br").add(9, 'day').toDate();
        },
	},
    components:{vuefp},
});
var vuefp = Vue.component('flat-pickr', VueFlatpickr);
var app = new Vue({
    el: '#app',
	pouchdb:{
        	horarios:{
        		localDB: "horarios",
        	}
        },
	data: {
        modal: false,
        add: 0,
        hmodal: false,
        horaCod:null,
        horaEscrito:"",
        colabMat: null,
        colabNome: "",
        mconfig:{
            locale: "pt",
            plugins:[new monthSelectPlugin({
            dateFormat: "F Y", //defaults to "F Y"
        })
    ]},
		monthpick: new Date(),
	},
	methods:{
        relo: () => setTimeout(function(){return window.location.reload()}, 1000),
		addHorario: function(){
			return this.$pouchdbRefs.horarios.put('timeList', {cod: this.horaCod, hora: this.horaEscrito})
		},
        addColab:function(){
            return this.$pouchdbRefs.horarios.put('colabList', {mat: this.colabMat, nome: this.colabNome, weeks:[{dia:"21/Out",horario:{cod:123,hora:"testehora"}}]})
        },
	},
	computed: {
		condFivDom: function () {
			if (moment(this.monthpick, "MMMM YYYY", "pt-br").startOf('month').weekday() == 0) {
				return true
			} else {
				return false
			}
		},
		timeList: function() {
			return this.horarios.timeList
		},
        colabList:function(){
            return this.horarios.colabList
        },
	},
});
moment().locale('pt-br');