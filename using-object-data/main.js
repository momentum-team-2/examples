/* eslint-disable prefer-const, no-unused-vars, quotes */

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

let menu = document.querySelector(".menu-items") // this is the ul

function renderPageContent () {
  for (let item of menuItems) {
    let li = document.createElement("li")
    li.classList.add("menu-list-item")
    let titleEl = document.createElement("h3")
    let itemTitle = document.createTextNode(item.title)
    titleEl.appendChild(itemTitle)
    li.appendChild(titleEl)
    menu.appendChild(li)
    li.innerHTML += `<img src=${item.imgUrl}>`
  }
}

renderPageContent()
