Vue.component('domingo', {
	template: '<p>{{display}}</p>',
	props: ['addWeeks', 'getDate'],
	computed: {
		display: function () {
			return moment(this.validateDate).add(this.addWeeks, 'week').format('L')
		},
		validateDate: function () {
			var initDate = moment(this.getDate, "MMMM YYYY", "pt-br").startOf('month').toObject();
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
				selec: ""
			}

		},
	}
);
Vue.component('folgga', {
	template: '<div><flat-pickr :config="config" :class="input"></flat-pickr></div>',
	props: ['getDate', 'addWeeks'],
    data: function(){
        return {
            input: "input",
            }
    },
	computed: {
        config:function(){
            return {
                dateFormat: "d/M",
                minDate: this.minDate,
                maxDate: this.maxDate,
                locale: "pt"
            }
        },
        minDate: function () {
			var initDate = moment(this.getDate, "MMMM YYYY", "pt-br").startOf('month').toObject();
			if (moment(initDate).weekday() == 0) {
				var fiveDom =  moment(initDate).subtract(1, 'week').toDate();
               return moment(fiveDom).add(this.addWeeks, 'week').toDate()
			} else {
				return moment(initDate).startOf('week').add(this.addWeeks, 'week').toDate()
			}
		},
        maxDate: function (){
			return moment(this.minDate).add(9, 'day').toDate();
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
        mclass: "input",
        modal: false,
        mconfig:{
            locale: "pt",
            plugins:[new monthSelectPlugin({
            dateFormat: "F Y", //defaults to "F Y"
        })
    ]},
		monthpick: null,
	},
	methods:{
		addHorario: function(){
			return this.$pouchdbRefs.horarios.put('timeList', {cod: 895, hora: "teste"})
		},
        addColab:function(){
            return this.$pouchdbRefs.horarios.put('colabList', {mat: this.colabMat, nome: this.colabNome})
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