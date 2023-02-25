
const APIURL = 'https://api.github.com/users/' //to fetch data of a user from GitHub

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) { //a function always returns a promise
try {
const { data } = await axios(APIURL + username) // creating a get request to fetch data
createUserCard(data)
getRepos(username)
} 
catch(err) {
if(err.response.status == 404) {
createErrorCard('No profile with this username') //get a proper error message
}
}
}


async function getRepos(username) {
try {
const { data } = await axios(APIURL + username + '/repos?sort=created')
addReposToCard(data)
} 
catch(err) {
createErrorCard('Problem fetching repos')
}
}

function createUserCard(user) {
const userID = user.name || user.login //( || ) returns the boolean value true if either or both operands is true and returns false otherwise.
const userBio = user.bio ? `<p>${user.bio}</p>` : '' //(conditional)?value when conditional true: value when conditional false
const cardHTML = `
<div class="card">
<div>
<img src="${user.avatar_url}" alt="${user.name}" class="avatar">
</div>
<div class="user-info">
<h2>${userID}</h2>
${userBio}
<ul>
<li>${user.followers} <strong>Followers</strong></li>
<li>${user.following} <strong>Following</strong></li>
<li>${user.public_repos} <strong>Repos</strong></li>
</ul>
<!--The <strong> tag is used to define text with strong importance, the content inside is typically displayed in bold-->

<div id="repos"></div>
</div>
</div>
`
main.innerHTML = cardHTML //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
}


function createErrorCard(msg) {
const cardHTML = `
<div class="card">
<h1>${msg}</h1>
</div>
`
main.innerHTML = cardHTML
}

function addReposToCard(repos) {
const reposEl = document.getElementById('repos')
repos.slice(0, 20) //The slice() method extracts a part of a string.
  
repos.forEach(function(repo) { //The function will be executed for every single element 
const repoEl = document.createElement('a')
repoEl.classList.add('repo')
repoEl.href = repo.html_url
repoEl.target = '_blank' //a special keyword that will open links in a new tab every time
repoEl.innerText = repo.name //innerText represents the rendered text content of a node and its descendants
reposEl.appendChild(repoEl) //The appendChild() method appends a node (element) as the last child of an element
})
  
} 


form.addEventListener('submit', function(e){
e.preventDefault() //if the event does not get explicitly handled, its default action should not be taken as it normally would be.
const user = search.value
if(user) {
getUser(user)
search.value = ''
}
}) //After getting user the input will become empty.
