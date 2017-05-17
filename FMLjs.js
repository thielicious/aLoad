function FMLjs(elem) {
	this.size;
	this.color;
	this.elem = elem;
	this.body = (script) => {
		if (this.elem.length > 0) {
			var elem = document.getElementById(this.elem);
			elem.innerHTML += script; 
		}
	}
	FMLjs.prototype.h = (size) => {
		this.size = size;
		this.body('h'+this.size+'[(h1-h6 works)<Text>]'); 
	}
	FMLjs.prototype.c = (color) => {
		this.color = color;
		this.body('c'+this.color+'[<Text>]'); 
	}
	FMLjs.prototype.a = () => { this.body('a[<URL>]') }
	FMLjs.prototype.b = () => { this.body('b[<Text>]') }
	FMLjs.prototype.u = () => { this.body('u[<Text>]') }
	FMLjs.prototype.i = () => { this.body('i[<Text>]') }
	FMLjs.prototype.q = () => { this.body('q[<Text>]') }
	FMLjs.prototype.hr = () => { this.body('hr[<Text or leave blank>]') }
	FMLjs.prototype.img = () => { this.body('img[<Image URL>]') }
	FMLjs.prototype.yt = () => { this.body('yt[<YouTube ID Only>]') }
};