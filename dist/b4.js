class hinhHoc {
    constructor(bankinh) {
        this.PI = 3.14;
        this.dientich = () => {
            return this.PI * this.bankinh * this.bankinh;
        };
        this.chuvi = () => {
            return 2 * this.PI * this.bankinh;
        };
        this.bankinh = bankinh;
    }
}
class hinhtru extends hinhHoc {
    constructor(bankinh, chieucao) {
        super(bankinh);
        this.Vhinhtru = () => {
            return this.dientich() * this.chieucao;
        };
        this.Sxq = () => {
            return this.chuvi() * this.chieucao;
        };
        this.chieucao = chieucao;
    }
}
var h1 = new hinhtru(3, 2);
console.log(h1.Vhinhtru());
console.log(h1.Sxq());
