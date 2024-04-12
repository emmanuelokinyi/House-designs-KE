fetch('http://localhost:3000')
  .then((data) => data.json())
  .then((posts) =>{
  console.log(posts);
  })
  

  