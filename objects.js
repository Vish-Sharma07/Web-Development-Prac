let lecture = 10;
let section = 3;
let title = 'javascript';

const course = {
    lecture: 10,
    section: 3,
    title: 'javascript',
    notes: {
        introduction: "Welcome to Js course"
    },
    enroll(){
        console.log('You are successfuly enrolled');
    }
}

function enroll(){
    console.log('You are successfuly enrolled');
}

course.enroll()
console.log(course.title)