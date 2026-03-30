let database = JSON.parse(localStorage.getItem(localStorage.key(0))) || [];

const addTodo = () => {
    const value = document.querySelector('#taskVal').value;

    const todo = {
        id: Date.now(),
        text: value,
        isedits: false,
        iscomplete: false,

    };

    database.push(todo);

    localStorage.setItem('todo', JSON.stringify(database));
    console.log('~database:', database);
};


