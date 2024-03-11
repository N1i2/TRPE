class TypeScript {
    versia: string
    constructor(vers: string) {
        this.versia = vers;
    }
    info(name:string):string{
        return `[${name}]: versia is ${this.versia}`
    }
}

const typesc:TypeScript=new TypeScript("5.02");

console.log(typesc.info("nikola"));

class Car1{
    readonly model:string
    readonly numberOfWeels:number = 4

    constructor(theModel:string){
            this.model = theModel;
    }
}

class Car2{
    readonly nubmerOfWeele:number=4;
    constructor(readonly model:string){}
}

//Car1 == Car2

class Animal{
    protected voice:string = ''
    public color:string = 'Black'
    private Go():void{
        console.log('Gogogo');
    }
    //this.Go();
}

class Cat extends Animal{
    public setVoice(voice:string):void{
        this.voice = voice;
    }
}

const murzic = new Cat();
//murzic.voice;
murzic.setVoice('hhi');


abstract class Companent{
    abstract rendom():void
    abstract info():string
}

class App extends Companent{
    rendom(): void{

    }
    info(): string {
        return '';
    }
}