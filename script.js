// ----------------js browser api s

// localStorage.setItem();
// localStorage.getItem();
// localStorage.removeItem();
// localStorage.clear()


// localStorage.setItem('Name', 'babu');
// const name = localStorage.getItem('Name')
// console.log(name)
// localStorage.removeItem('Name')
// localStorage.setItem('person', JSON.stringify({name: 'mouri', age: '32'}))
// const person = localStorage.getItem('person')
// const value = JSON.parse(person)
// console.log(value)

// ---------------------index .html js codes 

const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}

const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    const inputText = getElement('todo-text').value;
    if (!todos) {
        const todoList = [
            {
                title: inputText,
                completed: false
            }
        ]
        localStorage.setItem('TODOS', JSON.stringify(todoList))
    }
    else {
        const todoList = [
            ...todos,
            {
                title: inputText,
                completed: false
            }
        ]
        localStorage.setItem('TODOS', JSON.stringify(todoList))
    }
    render();
}
const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    const ul = getElement('todo-list')

    ul.innerHTML = ''

    todos.forEach((item) => {

        const li = document.createElement('li')

        li.classList.add('py-2')

        li.innerText = item.title;

        ul.appendChild(li)

        getElement('todo-text').value = ''
    })
}
render();

const handleClearAll = () => {
    localStorage.removeItem('TODOS')
    render()
}