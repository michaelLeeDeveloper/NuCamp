class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}


class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (!this.students.filter(student => {
            return student.email === studentToRegister.email
        }).length) {
            this.students.push(studentToRegister);
            console.log(`Regsitering ${studentToRegister.email} to the ${this.name} ${this.level} bootcamp.`);
        } else {
            console.log(`This ${studentToRegister.email} is already registered.`)
        }
        return this.students;
    }
}

