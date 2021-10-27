var API_URL = 'https://www.moogleapi.com/api/v1';

var app = new Vue({
	el: '#app',
	data: {
		step: 1,
		meninos: [],
		meninas: [],
		acoes: [],
		partes: [],
		bebidas: [],
		bandas: [],
		frases1: '',
		frases2: '',
		frases3: '',
		frases4: '',
		frases5: '',
		popup: false,
	},
	methods: {
	    gerar: function(event) {
	    	shuffle(this.meninos);
	    	shuffle(this.meninas);
	    	shuffle(this.acoes);
	    	shuffle(this.partes);
	    	shuffle(this.bebidas);
	    	shuffle(this.bandas);

	    	this.frases1 = this.meninos[0] + ' ' + this.acoes[0] + ' ' + this.meninas[0] + '\'s ' + this.partes[0] + ' drinking ' + this.bebidas[0] + ' listening to ' + this.bandas[0];
	    	this.frases2 = this.meninos[1] + ' ' + this.acoes[1] + ' ' + this.meninas[1] + '\'s ' + this.partes[1] + ' drinking ' + this.bebidas[1] + ' listening to ' + this.bandas[1];
	    	this.frases3 = this.meninos[2] + ' ' + this.acoes[2] + ' ' + this.meninas[2] + '\'s ' + this.partes[2] + ' drinking ' + this.bebidas[2] + ' listening to ' + this.bandas[2];
	    	this.frases4 = this.meninos[3] + ' ' + this.acoes[3] + ' ' + this.meninas[3] + '\'s ' + this.partes[3] + ' drinking ' + this.bebidas[3] + ' listening to ' + this.bandas[3];
	    	this.frases5 = this.meninos[4] + ' ' + this.acoes[4] + ' ' + this.meninas[4] + '\'s ' + this.partes[4] + ' drinking ' + this.bebidas[4] + ' listening to ' + this.bandas[4];  	
			
			this.step = 7;
		},

		checkStep1: function(event) {
			if (this.meninos[0] && this.meninos[1] && this.meninos[2] &&
				this.meninos[3] && this.meninos[4]) {
				return true;
			}

			return false;
		},

		checkStep2: function(event) {
			if (this.meninas[0] && this.meninas[1] && this.meninas[2] &&
				this.meninas[3] && this.meninas[4]) {
				return true;
			}

			return false;
		},

		checkStep3: function(event) {
			if (this.acoes[0] && this.acoes[1] && this.acoes[2] &&
				this.acoes[3] && this.acoes[4]) {
				return true;
			}

			return false;
		},

		checkStep4: function(event) {
			if (this.partes[0] && this.partes[1] && this.partes[2] &&
				this.partes[3] && this.partes[4]) {
				return true;
			}

			return false;
		},

		checkStep5: function(event) {
			if (this.bebidas[0] && this.bebidas[1] && this.bebidas[2] &&
				this.bebidas[3] && this.bebidas[4]) {
				return true;
			}

			return false;
		},

		checkLast: function(event) {
			if (this.bandas[0] && this.bandas[1] && this.bandas[2] &&
				this.bandas[3] && this.bandas[4]) {
				return true;
			}

			return false;
		},

		fillAcoes: function() {
			this.acoes.splice(0);
			shuffle(acoes);

			for (var i = 0; i < 5; i++) {
				this.acoes.push(acoes[i]);
			}
		},

		fillPartes: function() {
			this.partes.splice(0);
			shuffle(partes);

			for (var i = 0; i < 5; i++) {
				this.partes.push(partes[i]);
			}
		},

		fillBebidas: function() {
			this.bebidas.splice(0);
			shuffle(bebidas);

			for (var i = 0; i < 5; i++) {
				this.bebidas.push(bebidas[i]);
			}
		},

		fillBandas: function() {
			this.bandas.splice(0);
			shuffle(bandas);

			for (var i = 0; i < 5; i++) {
				this.bandas.push(bandas[i]);
			}
		},

		reset: function() {
			this.meninos.splice(0);
			this.meninas.splice(0);
			this.acoes.splice(0);
			this.partes.splice(0);
			this.bebidas.splice(0);
			this.bandas.splice(0);
			this.frases1 = '';
			this.frases2 = '';
			this.frases3 = '';
			this.frases4 = '';
			this.frases5 = '';
			this.step    = 1;
		}
	}
});

function shuffle(array) {
	var currentIndex = array.length,  randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}

	return array;
}