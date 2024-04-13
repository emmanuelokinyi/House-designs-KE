fetch("https://house-design-ke-2024.onrender.com/posts")
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
                <i onclick="updatePost(${post.id}), scrollToSection('updatePost')" class="fa fa-pencil-square-o text-3xl  text-white aria-hidden="true"></i>
                  </div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">${post.title}</h5>
                    <p class="font-normal text-gray-400 dark:text-gray-400">${post.description}</p>
              </div>
        </div>  
    `
  }
}

function scrollToSection(updatePost) {
  let section = document.getElementById(updatePost);
  section.scrollIntoView({behavior: 'smooth'});
}

// deleting a post
function deletePost(id){
  fetch(`https://house-design-ke-2024.onrender.com/posts/${id}`, {
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

    fetch("https://house-design-ke-2024.onrender.com/posts",{
        method: "POST",
        headers :{"Content-Type": "application/json"},
        body:JSON.stringify({title: title, img: image, description: description})
    })
.then((data)=>  data.json( )  )
.then((response)=>{
    alert("Post added successfully")
})
})


// updating a post
    function updatePost(id){
        fetch(`https://house-design-ke-2024.onrender.com/posts/${id}`)
        .then((data)=>  data.json( ))
        .then((posts)=>{
                console.log(post)
                    const updatePost =document.getElementById("updatePost")
                    updatePost.innerHTML =`
                    <h1 class="mx-auto gap-4 font-semibold text-center max-w-md">Edit post here</h1>
                     <form id="updatePost" class="max-w-md bg-gray-200 gap-4 mx-auto">
                    <div class="relative z-0 w-full mb-5 group">
                        <input value="${post.title}" name="Title" id="title" class="block py-2.5 px-0 w-full text-sm text-grey-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="Add-title" class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input value="${post.img} name="image-link" id="image" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                    </div>
                      <div class="relative z-0 w-full mb-5 group">
                          <textarea name="Description" id="description" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-grey-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                          ${post.description}
                           </textarea>
                          <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                    </div>
                
                      <button type="submit" class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              
                 </form>
                    `
                     })

        document.getElementById("updatePost").addEventListener("submit",(event)=>{
    event.preventDefault()
    const  title = document.getElementById("title").value
    const  image= document.getElementById("image").value
    const  description = document.getElementById("description").value

    console.log(title, image, description)

    fetch(`https://house-design-ke-2024.onrender.com/posts/${id}`,{
        method: "PATCH",
        headers :{"Content-Type": "application/json"},
        body:JSON.stringify({title: title, img: image, description: description})
    })
.then((data)=>  data.json( )  )
.then((response)=>{
    alert("Post updated successfully")
})
})

  }
  

  