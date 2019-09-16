Vue.component('dateDom', {
	template: '<p>{{daydomshow}}</p>',
	props: ['qntWeeks', 'monthy'],
	computed: {
		daydomshow: function () {
			return moment(this.fullDate).add(this.qntWeeks, 'week').format('L')
		},
		fullDate: function () {
			var initDate = moment({year: 2019,month: this.monthy}).startOf('month').toObject();
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
       '<a :href="t.cod">{{t.hora}}</a>'+
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
	template: '<input type="text" class="flat" v-model="fDate">',
	props: ['fDate'],
	computed: {
        fTer: function (){
			return moment(this.fDate).add(2, 'day').format("DD/MMM");
        },
	},
});
var app = new Vue({
	el: '#app',
	pouchdb:{
        	horarios:{
        		localDB: "horarios",
        	}
        },
	data: {
		monthpick: 0,
        domOne: 'teste',
		organico: [{
				mat: 62136,
				nome: 'elton dos santos do nascimento'
			},
			{
				mat: 41949,
				nome: 'elimacio dias do nascimento'
			}
		],
		//timeList:[{cod: 3526, hora:'08:00-14:15'}, {cod: 6985, hora:'12:00-18:00'}, {cod: 8563, hora:'16:00-19:00'}, {cod: 83945, hora:'07:00-11:15'}]
	},
	methods:{
		addHorario: function(){
			return this.$pouchdbRefs.horarios.put('timeList', {cod: 895, hora: "teste"})
		},
	},
	computed: {
		condFivDom: function () {
			if (moment({
				year: 2019,
				month: this.monthpick
			}).startOf('month').weekday() == 0) {
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