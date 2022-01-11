export class Combattants {
    id?: string;
    Fname: string;
    Lname: string;
    country: string;
    height: number;
    weight: number;
    reach: number;
    age: number;
    nbKo: number;
    nbVictory: number;
    combattantPics: string;
    defeat: boolean;
    predilection: string;
    description: string;

    constructor() {
        this.Fname = '';
        this.Lname = '';
        this.country = '';
        this.height =0;
        this.weight =0;
        this.reach =0;
        this.age =0;
        this.nbKo =0;
        this.nbVictory =0;
        this.combattantPics = '';
        this.defeat = false;
        this.predilection = '';
        this.description = '';
    }
}
