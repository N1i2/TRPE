var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var group = {
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
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) { return student.marks.filter(function (x) { return x.mark === mark; }).length > 0; });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
    mark: 5,
    group: 6
};
console.log("1:");
for (var _i = 0, _a = group.studentsFilter(2); _i < _a.length; _i++) {
    var s = _a[_i];
    console.log(s);
}
console.log("2:");
for (var _b = 0, _c = group.marksFilter(5); _b < _c.length; _b++) {
    var s = _c[_b];
    console.log(s);
}
console.log("3:");
group.deleteStudent(2);
for (var _d = 0, _e = group.students; _d < _e.length; _d++) {
    var s = _e[_d];
    console.log(s);
}
