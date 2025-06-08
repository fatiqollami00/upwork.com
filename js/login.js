"use strict"
const formEl = document.querySelector("form");
const userName = document.querySelector("input[type=text]");
const password = document.querySelector("input[type=password]");
const text = document.querySelector("p");

formEl.addEventListener("submit", async (e) => {
 try {
    e.preventDefault();
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: userName.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    console.log(data)
    if (data.token) {
      formEl.innerHTML = `<h2>hi ${userName.value} you are login.</h2>`;
      localStorage.setItem('token',JSON.stringify({token:data.token}))
      console.log(JSON.parse(localStorage.getItem('token')))
    } 
} catch (error) {
     text.textContent = "username or password incorrect";
    console.log(error)
 }
});



// johnd
// m38rmF$


// fetch(URL,{
//     method:"POST",
//     header:{
//         'content-type':'application/json'
//     },
//     body:JSON.stringify()
// }).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))



// const fetchData=async()=>{
//     try {
//         const res=await fetch(URL,option)
//         const data=await res.json()
//     } catch (error) {
//         console.log(error)
//     }
// }
