var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function whoCompleteMoreTasks(obj, n) {
    var keys = Object.keys(obj);
    keys.sort(function (a, b) {
        return obj[b] - obj[a];
    })
    return keys.slice(0, n);
}

alert(whoCompleteMoreTasks(tasksCompleted, 1))