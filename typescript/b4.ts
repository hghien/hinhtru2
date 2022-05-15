class hinhHoc {
    bankinh:number;
    PI:number = 3.14;
    constructor(bankinh:number){
        this.bankinh = bankinh;
    }
    dientich = () =>{
        return this.PI*this.bankinh*this.bankinh;
    }
    chuvi = () =>{
        return  2*this.PI*this.bankinh;
    }
}
class hinhtru extends hinhHoc {
    chieucao : number;
    constructor(bankinh:number,chieucao:number){
        super(bankinh);
        this.chieucao = chieucao;
    }
    Vhinhtru = () =>{
        return this.dientich()*this.chieucao;
    }
    Sxq = () =>{
        return this.chuvi()*this.chieucao;
    }
}
var h1 = new hinhtru(3,2);
console.log(h1.Vhinhtru());
console.log(h1.Sxq());