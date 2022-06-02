const tasks = {
    tasks: [
        {
            text:'Grocery',
            completed: true
        },
        {
            text: 'Cleaning',
            completed: false
        },
        {
            text: 'Course',
            completed: false
        }
    ],
    getTasksToDo()
    {
       return this.tasks.filter(element => element.completed === false);
    }
}

console.log(tasks.getTasksToDo())