 console.clear();
const btn = document.querySelector("button");



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type' : 'application/json; charset=UTF-8',
    },
})
    .then(res=>{
        if(!res.ok){
        throw new Error(`Error: ${res.status}`);
        }
        return res.json();
    })
    .then((json) => console.log(json))
    .catch((res)=>console.log(res))


