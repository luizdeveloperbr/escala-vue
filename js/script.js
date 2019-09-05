Vue.component('dateDom', {
	template: '<p>{{daydomshow}}</p>',
	props: ['qntWeeks', 'monthy'],
	computed: {
		daydomshow: function () {
			return moment(this.fullDate).add(this.qntWeeks, 'week').format('L')
		},
		initDate: function () {
			return moment({
				year: 2019,
				month: this.monthy
			}).startOf('month').toObject()
		},
		fullDate: function () {
			if (moment(this.initDate).weekday() == 0) {
				return moment(this.initDate).toObject()
			} else {
				return moment(this.initDate).startOf('week').add(1, 'week').toObject()
			}
		},
	}
});
Vue.component('timeEntrance', {
		template:'<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="width:100%">{{selec}}</button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li v-for="i in timee"><a href="#" @click="selec = 1">{{i}}</a></li></ul></div>',
		props: ['timee'],
		data: function (){
			return {selec: 0}
		},
	}
);
Vue.component('folgga', {
	template: '<button type="button" class="btn btn-default" data-toggle="popover" data-html="true" data-placement="top" :data-content=fSeg>0</button>',
	props: ['ddom', 'monthf'],
	computed: {
		fSeg: function () {
			var objDate = {day: this.ddom, month: this.monthf, year: 2019};
			var beginButton = '<a href="#" class="link btn btn-sm btn-primary">';
			return '<div class="btn-group" role="group">' + beginButton + moment(objDate).add(1, 'day').format("DD/MMM") + '</a>' + beginButton + moment(objDate).add(2, 'day').format("DD/MMM") + '</a></div>';
		},
	},
});
var app = new Vue({
	el: '#app',
	data: {
		monthpick: 0,
		organico: [{
				mat: 62136,
				nome: 'elton dos santos do nascimento'
			},
			{
				mat: 41949,
				nome: 'elimacio dias do nascimento'
			}
		],
		timeList:['08:00-14:15', '12:00-18:00', '16:00-19:00']
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
		firstweek: function() {
			return 'null'
		},
	}
});
var time = moment().format();
moment().locale('pt-br');
