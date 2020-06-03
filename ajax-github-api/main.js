/* eslint-disable prefer-const, no-unused-vars */
/* globals fetch */

let url = 'https://api.github.com/orgs/momentum-team-2'
let rootElement = document.querySelector('#github-data')
let userData

fetch(url)
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    // console.log(data)
    let h1 = document.createElement('h1')
    h1.innerText = data.name
    rootElement.appendChild(h1)
    userData = data
    return data.repos_url
  })
  .then(function (reposUrl) {
    return fetch(reposUrl)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    let repoList = document.createElement('ul')
    repoList.classList.add(
      'list',
      'pl0',
      'ml0',
      'center',
      'mw6',
      'ba',
      'b--green',
      'br3'
    )
    rootElement.appendChild(repoList)
    for (let repo of data) {
      console.log(repo.full_name)
      const listItem = document.createElement('li')
      listItem.textContent = repo.full_name
      listItem.classList.add('ph3', 'pv2', 'bb', 'b--green')
      repoList.appendChild(listItem)
    }
  })
