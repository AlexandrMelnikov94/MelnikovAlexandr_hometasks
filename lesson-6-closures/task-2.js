function interviewQuestion(job) {
    return function (firstname) {
        if (job === 'designer') {
            console.log(firstname + ' can you please explain what UX design is?');
        }

        else if (job === 'teacher') {
            console.log('What subject do you teach ' + firstname + '?');
        }

        else {
            console.log('Hello ' + firstname + ', what do you do?');
        }
    }
}

var jobDesigner = interviewQuestion('designer');
var jobTeacher = interviewQuestion('teacher');
var jobOther = interviewQuestion('engineer');

jobDesigner('John');
jobTeacher('Mark');
jobOther('Ivan');