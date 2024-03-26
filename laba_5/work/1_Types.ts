const isFiching: boolean = true;
const isLoading: boolean = false;

const numb: number = 2;
const float: number = 4.23;

const str: string = "Hello world";

const numbArrat: number[] = [1, 1, 2, 3, 5, 8, 13];
const numbArrat2: Array<Number> = [1, 1, 2, 3, 5, 8, 13]; //gainaric

const word: string[] = ['Hello', ' ', 'World'];

const contakt: [string, number] = ['Tomi', 129]; //Tuple

let value: any = 42; //any type
value = 'hi';

//==================================================
function ShowAge(name: string): number {
    return 9;
}
function ShowAge2(): void {
    console.log(9);
}

ShowAge2();

//type never

function throwAnything(message: string): never {
    throw new Error(message);
}

//my type
type Login = string;

const login: Login = "hello";
//const login2:Login = 3;

type ID = String | number;

const id: ID = "3";
const id2: ID = 3;
//const id3:ID = true;

//null & undef

type Void = string | null | undefined;