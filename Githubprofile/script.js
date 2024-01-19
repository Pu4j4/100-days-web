window.addEventListener("DOMContentLoaded", (event) => {
   
    var form = document.getElementById("form")
    var search=document.getElementById("search")
    var main = document.getElementById("main")

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        

        const user = search.value

        console.log(user)

          if(user) {
              getUser(user)

              search.value = ''
          }
    })
});



const APIURL = 'https://api.github.com/users/'
 async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        console.log(data)
        adduser(data)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

function adduser(user){
console.log(user)
const userID = user.name || user.login
const userBio = user.bio ? `<p>${user.bio}</p>` : '' 
var userHtml = `<div class="userHtml">
<div>
<img src="${user.avatar_url}" alt="${user.name}" class="avatar">
</div> 
<div class="user-info">
<h2>${userID}</h2>${userBio}
<ul>
<li>${user.followers} <strong>Followers</strong></li>
<li>${user.following} <strong>Following</strong></li>
<li>${user.public_repos} <b>Repos</b></li>
<li>${user.blog} <b>Blog</b></li>
</ul>
<div id="repos"></div>
</div>
</div>`
main.innerHTML = userHtml 
}
