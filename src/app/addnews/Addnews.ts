export class Addnews {
	Name: string;
	Url: string;
	desc: string;
	cat: string;
	date:string

	constructor(x:string, y:string, z:string, ab:string, da:string){
		this.Name = x;
		this.Url = y;
		this.desc = z;
		this.cat = ab;
		this.date = da;
	}
}