////////////ר של כמות המוצרים בסל העיגול

    if(localStorage.getItem('count')===null){
let newArr3 =[]
let newJson3 = localStorage.getItem('count')
let counter=document.getElementById('cart-count')
newArr3.push(Number(counter.innerText))
//ממיר אוביקט למחרוזת כדי שיהיה אפשר להכניס אותו למחסנית
newJson3= JSON.stringify(newArr3)
localStorage.setItem('count', newJson3)
    }
///////////