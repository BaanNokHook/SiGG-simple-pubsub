/**
 * 
 * author by Chinnamon
 * 
 */

export abstract class Coin {
    static observable(arg0: number) {
        throw new Error("Method not implemented.");
    }
    constructor(public value:number) {
    } 

    abstract getImageUrl():string;  
} 

export class one_baht extends Coin {
    constructor() {
        super(1.00); 
    }

    getImageUrl():string {
        return "img/one_baht/jpg";
    }
}

export class two_baht extends Coin {
    constructor() {
        super(2.00);  
    } 

    getImageUrl(): string {
        return "img/two_baht.jpg";
    }
}

export class five_baht extends Coin {
    constructor() {
        super(5.00);  
    }

    getImageUrl(): string {
        return "img/five_baht.jpg";  
    }
}

export class ten_baht extends Coin {
    constructor() {
        super(10.00);
    }

    getImageUrl(): string {
        return "img/ten_baht.jpg";
    }

}


export function observable(arg0: number) {
    throw new Error("Function not implemented.");
}

export function observableArray(arg0: undefined[]) {
    throw new Error("Function not implemented.");
}
export function pureComputed(arg0: () => boolean) {
    throw new Error("Function not implemented.");
}

