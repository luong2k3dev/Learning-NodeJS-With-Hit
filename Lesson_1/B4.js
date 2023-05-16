/*
    Sử dụng 2 cách object constructor và class để khai báo một đối tượng user thay vì phải khai báo như dưới đây
    const user = {
        studentCode: '2020605518',
        password: '123',
        firstName: 'Hung',
        lastName: 'Truong',
        age: 17,
        faculty: 'information technology',
        role: ['admin', 'user'],
    };
*/

// Using object constructor
function User(studentCode, password, firstName, lastName, age, faculty, role) {
    this.studentCode = studentCode;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.faculty = faculty;
    this.role = role;
}

const user = new User('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);

console.log(user);

// Using class
class User1 {
    constructor(studentCode, password, firstName, lastName, age, faculty, role) {
        this.studentCode = studentCode;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.faculty = faculty;
        this.role = role;
    }
}

const user1 = new User1('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);
console.log(user1);


