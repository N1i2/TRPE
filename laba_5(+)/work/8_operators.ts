interface Person{
    name:string
    age:number
}

type PersonKeys = keyof Person

let key:PersonKeys = 'name'
key = 'age'
//key = 'hello'

type User = {
_id:number
name:string
email:string
creatAt:Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id'|'creatAt'>
type UserKwysnoMeta2 = Pick<User, 'name'|'email'>
