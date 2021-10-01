var API_URL = 'https://www.moogleapi.com/api/v1';

var app = new Vue({
	el: '#app',
	data: {
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
	},
	methods: {
	    gerar: function(event) {
	    	shuffle(this.meninos);
	    	shuffle(this.meninas);
	    	shuffle(this.acoes);
	    	shuffle(this.partes);
	    	shuffle(this.bebidas);
	    	shuffle(this.bandas);

	    	this.frases1 = this.meninos[0] + ' ' + this.acoes[0] + ' ' + this.partes[0] + ' da ' + this.meninas[0] + ' tomando ' + this.bebidas[0] + ' escutando ' + this.bandas[0];
	    	this.frases2 = this.meninos[1] + ' ' + this.acoes[1] + ' ' + this.partes[1] + ' da ' + this.meninas[1] + ' tomando ' + this.bebidas[1] + ' escutando ' + this.bandas[1];
	    	this.frases3 = this.meninos[2] + ' ' + this.acoes[2] + ' ' + this.partes[2] + ' da ' + this.meninas[2] + ' tomando ' + this.bebidas[2] + ' escutando ' + this.bandas[2];
	    	this.frases4 = this.meninos[3] + ' ' + this.acoes[3] + ' ' + this.partes[3] + ' da ' + this.meninas[3] + ' tomando ' + this.bebidas[3] + ' escutando ' + this.bandas[3];
	    	this.frases5 = this.meninos[4] + ' ' + this.acoes[4] + ' ' + this.partes[4] + ' da ' + this.meninas[4] + ' tomando ' + this.bebidas[4] + ' escutando ' + this.bandas[4];
		}
	}
});

function shuffle(array) {
	var currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}

	return array;
}