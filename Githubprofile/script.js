
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

var userHtml = `<div>${user.name}
${user} </div>`
main.innerHTML = userHtml 
}