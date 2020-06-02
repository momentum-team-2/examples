/* eslint-disable prefer-const, no-unused-vars */

/* DATA */
const menuItems = [
  {
    title: 'Noodles',
    imgUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Burgers',
    imgUrl: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'Breakfast',
    imgUrl: 'https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1450&q=80'
  },
  {
    title: 'Dessert',
    imgUrl: 'https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
  }
]

// insert a <li> for each item on the menu. For each list item, we want to show the title and the image.

let menu = document.querySelector('.menu-items') // this is the ul

function renderPageContent () {
  for (let item of menuItems) {
    let li = document.createElement('li')
    li.classList.add('menu-list-item')
    // call a function to create the title element, passing in the text value of the title property in our object
    // then we can append it all in one go here
    li.appendChild(createTitleElement(item.title))
    menu.appendChild(li)
    // call a function to create the image element that we want to append to the li
    li.innerHTML += createImageElement(item.imgUrl)
  }
}

function createTitleElement (title) {
  let titleEl = document.createElement('h3')
  titleEl.innerText = `${title}` // alternative to creating a text node and appending that to the h3
  return titleEl
}

function createImageElement (url) {
  return `<img src=${url}>`
}

// This function is going to run when this js file is loaded
renderPageContent()
