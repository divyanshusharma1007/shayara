fetch(`http://localhost:3000/poetry?category=${'poem'}&_limit=1&_page=${1}`).then(resp=>{
    console.log(resp,'here is response')
}).catch(e=>{
    console.error(e)
})