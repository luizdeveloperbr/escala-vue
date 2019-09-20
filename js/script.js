Vue.component('domingo', {
	template: '<p>{{display}}</p>',
	props: ['addWeeks', 'getDate'],
	computed: {
		display: function () {
			return moment(this.validateDate).add(this.addWeeks, 'week').format('L')
		},
		validateDate: function () {
			var initDate = moment(this.getDate).startOf('month').toObject();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toObject()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toObject()
			}
		},
	},
});
Vue.component('timeEntrance', {
		template:'<div class="dropdown is-hoverable">'+
  '<div class="dropdown-trigger">'+
    '<button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">'+
      '<span>{{selec}}</span>'+
      '<span class="icon is-small">'+
        '<i class="fas fa-angle-down" aria-hidden="true"></i>'+
      '</span>'+
    '</button>'+
  '</div>'+
  '<div class="dropdown-menu" id="dropdown-menu4" role="menu">'+
    '<div class="dropdown-content">'+
      '<div class="dropdown-item" v-for="t in timee">'+
       '<a href="#" @click="selec = t.cod">{{t.hora}}</a>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>',
		props: ['timee'],
		data: function (){
			return {
				selec: "horario"
			}

		},
	}
);
Vue.component('folgga', {
	template: '<div><flat-pickr :config="config" :class="input"></flatpickr></div>',//<input type="text" class="flat input" v-model="fDate">
	props: ['getdate'],
    data: function(){
        return {
            input: "input",
            }
    },
	computed: {
        config:function(){
            return {
                dateFormat: "D d/M",
                minDate: this.getdate,
                maxDate: this.fTer,
                locale: "pt"
            }
        },
        fTer: function (){
			return moment(this.getdate).add(9, 'day').format("YYYY-MM-DD");
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
		monthpick: null,
        domOne: 'teste',
		organico: [{
				mat: 62136,
				nome: 'elton dos santos do nascimento'
			},
			{
				mat: 41949,
				nome: 'elimacio dias do nascimento',
			}
		],
	},
	methods:{
		addHorario: function(){
			return this.$pouchdbRefs.horarios.put('timeList', {cod: 895, hora: "teste"})
		},
	},
	computed: {
		condFivDom: function () {
			if (moment(this.monthpick).startOf('month').weekday() == 0) {
				return true
			} else {
				return false
			}
		},
		timeList: function() {
			return this.horarios.timeList
		}
	},
});
var time = moment().format();
moment().locale('pt-br');