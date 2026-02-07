class Course {
    constructor(name){
        this.name = name;
        this.students = [];
    }

    addStudent(student){
        this.students.push(student)
    }

    calculatePromedyByCourse(){
        let promedy = 0;
        for(let student of this.students){
            promedy = promedy + student.age;
        }

        console.log(promedy / this.students.length);
    }
}

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let map = new Map();

function addStudentsToCourse(courseName, studentInstance){
    if(!map.has(courseName)){
        map.set(courseName, new Course(courseName));
    }

    map.get(courseName).addStudent(studentInstance)
}

function courseWithMoreStudents(mapReference){
        let maxValue = 0;
        let maxIndex = 0;

        for (let [courseName, course] of mapReference) {
            if (course.students.length > maxCount) {
                maxCount = course.students.length;
                maxCourse = courseName;
            }
        }
    return maxCourse;
    }

addStudentsToCourse('History', new Student('Jorge', 22));
addStudentsToCourse('History', new Student('Luis', 17));

courseWithMoreStudents(map);

console.log(map)