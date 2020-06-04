/* eslint-disable no-unused-vars, prefer-const */
/* globals fetch, moment */
const apiUrl = 'http://localhost:3000/todos'

let form = document.querySelector('#todo-form')
let todoInput = document.querySelector('#todo-input')
let todoList = document.querySelector('.todos')

renderTodos() // when the page loads, we can fetch the existing todos

// 1. Set up an event listener so we can handle the form submission
form.addEventListener('submit', function (event) {
  event.preventDefault() // don't submit it the usual way; let us handle it in JS
  // get the input value from the form
  // so I can pass it to the function that creates the item
  // use fetch to send a POST request to create the todo item
  createTodoItem(todoInput.value)
})

// 2. We need a fetch request to POST our form data to the server
function createTodoItem (inputText) {
  // Note: we should validate our input before we send the request
  // after you get the basic functionality working you could write a validate function (cause you know how)
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item: inputText, created: moment().format() })
  })
    .then(() => {
      todoInput.value = '' // the input should be cleared
      renderTodos()
    })
    // Instead of making another request to GET the data in renderTodos(),
    //   you could just use the response data to append the new item to the list.
    // A successful POST response from this server contains the newly created data,
    //   so you could use that to insert each created item individually.
}

// 3. Render the todoList using the data that is now on the server
function renderTodos () {
  todoList.innerHTML = ''
  fetch(apiUrl, {
    method: 'GET' // we don't have to specify this; it's the default. Included here for clarity.
  })
    .then(response => response.json())
    .then(function (data) {
      // create a ul
      // create an li for each item
      let list = document.createElement('ul')
      list.id = 'item-list'
      for (let item of data) {
        let listItem = document.createElement('li')
        listItem.dataset.id = item.id
        listItem.innerText = item.item
        // this is just one idea; you don't need to use an icon. You could just use a button or a link!
        // If you want to use font icons, you need to include a library for that as a stylesheet
        // Here I am using FontAwesome; it is included in a link element in the html
        let deleteIcon = document.createElement('span')
        deleteIcon.id = 'delete'
        deleteIcon.classList.add('fa', 'fa-times', 'mar-l-xs')
        listItem.appendChild(deleteIcon)
        list.appendChild(listItem)
      }
      todoList.appendChild(list)
    })
}

// 4. Delete a todo item when the 'x' is clicked
todoList.addEventListener('click', deleteTodoItem)

function deleteTodoItem (event) {
  let targetEl = event.target
  if (targetEl.matches('#delete')) {
    console.log('DELETE') // you may find it helpful to give yourself these to confirm as you go
    let itemId = targetEl.parentElement.dataset.id
    let itemToDelete = document.querySelector(`li[data-id='${itemId}']`)
    // A DELETE request to json-server includes the id of the item to be deleted in the url
    fetch(`${apiUrl}/${itemId}`, {
      method: 'DELETE'
    })
      .then(function () {
        document.querySelector('#item-list').removeChild(itemToDelete)
      })
  }
}

// 5. TODO: Add a way to edit/update the todo once it is created
// What would that look like? see the json-server docs for examples: https://github.com/typicode/json-server#routes
