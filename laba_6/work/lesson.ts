/////////////////////////// 1 /////////////////////////////
type obj = {
    id:number;
    name:string;
    group:number;
}

const array:obj[] = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

/////////////////////////// 2 /////////////////////////////
type CarsType = {
    manufacturer?:string;
    model?:string;
}

let car: CarsType = {}; 
car.manufacturer = "manufacturer";
car.model = 'model';

/////////////////////////// 3 /////////////////////////////
type ArrayCarsType = {
    cars:CarsType[]
}

const car1: CarsType = {}; 
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

/////////////////////////// 4 /////////////////////////////
type MarkFilterType = 1|2|3|4|5|6|7|8|9|10;
type GroupFilterType = MarkFilterType|11|12
type DoneType = string;

type MarkType = {
    subject: string,
    mark: MarkFilterType, 
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, 
    marks: Array<MarkType>,
}
type GroupType = {
    students:StudentType[]
    studentsFilter: (group: number) => Array<StudentType>, 
    marksFilter: (mark: number) => Array<StudentType>, 
    deleteStudent: (id: number) => void,
    mark: MarkFilterType,
    group: GroupFilterType,
}

const group: GroupType = {
    students: [
        {
            id: 1,
            name: 'nikola',
            group: 2,
            marks: [
                { subject: "mathat", mark: 5, done: "No" },
                { subject: "fithika", mark: 6, done: "Yes" },
                { subject: "history", mark: 7, done: "Yes" },
            ]
        },
        {
            id: 2,
            name: 'victor',
            group: 12,
            marks: [
                { subject: "mathat", mark: 4, done: "Yes" },
                { subject: "fithika", mark: 4, done: "Yes" },
                { subject: "history", mark: 4, done: "Yes" },
            ]
        },
        {
            id: 3,
            name: 'nikita',
            group: 2,
            marks: [
                { subject: "mathat", mark: 10, done: "No" },
                { subject: "fithika", mark: 5, done: "No" },
                { subject: "history", mark: 10, done: "No" },
            ]
        }
    ],

    studentsFilter: function (group: number) {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function (mark: number) {
        return this.students.filter(student => student.marks.filter(x => x.mark === mark).length > 0);
    },
    deleteStudent: function (id: number) {
        this.students = this.students.filter(student => student.id !== id);
    },

    mark: 5,
    group: 6
}

console.log("1:");
for(let s of group.studentsFilter(2))
console.log(s);

console.log("2:");
for(let s of group.marksFilter(5))
console.log(s);

console.log("3:");
group.deleteStudent(2);
for(let s of group.students)
console.log(s);