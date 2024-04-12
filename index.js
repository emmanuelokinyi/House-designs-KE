fetch("http://localhost:3000/posts")
.then((data) => data.json()  )
.then((posts) =>{
  displayPosts(posts) 
})
function displayPosts(posts){
  let cardsContainer= document.getElementById("cardsContainer");
     for(post of posts){
    cardsContainer.innerHTML += `
        <div>
            <div href="#" class="block mx-auto max-w-sm p-6 bg-gray-900 h-screen border border-gray-200 rounded-lg shadow  w-fullhover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <img class="w-full" src="${post.img}" alt=Loading">
                  <div class="flex justify-between">
                <i onclick="deletePost(${post.id})" class=" fa fa-trash-o text-white text-3xl" aria-hidden="true"></i>
                <i class="fa fa-pencil-square-o text-3xl  text-white aria-hidden="true"></i>
                  </div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">${post.title}</h5>
                    <p class="font-normal text-gray-400 dark:text-gray-400">${post.description}</p>
              </div>
        </div>  
    `
  }
}

// deleting a post
function deletePost(id){
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE"
  })
  .then((data)=> data.json() )
  .then((posts)=>{
    displayPosts(posts)
    .then((response)=>{
    alert("Post deleted successfully")
})
    
  })
}


//adding new post
document.getElementById("Posting").addEventListener("submit",(event)=>{
    event.preventDefault()
    const  title = document.getElementById("title").value
    const  image= document.getElementById("image").value
    const  description = document.getElementById("description").value

    console.log(title, image, description)

    fetch("http://localhost:3000/posts",{
        method: "POST",
        headers :{"Content-Type": "application/json"},
        body:JSON.stringify({title: title, img: image, description: description})
    })
.then((data)=>  data.json( )  )
.then((response)=>{
    alert("Post added successfully")
})
})


  

  