
let json = localStorage.getItem('robots:')
let arr = []
arr = JSON.parse(json)//ממיר לאובייקט
let footer = document.getElementsByTagName('nav')[0]
//הכפתור של הסכום
let goodprice = 0

function createQuantityComponent(i) {

    let quantityContainer = document.createElement("aside");
    quantityContainer.classList.add("quantity");

    let minusBtn = document.createElement("button");
    minusBtn.classList.add("minus");
    minusBtn.setAttribute("aria-label", "Decrease");
    minusBtn.innerHTML = "&minus;";

    let inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.classList.add("input-box");
    inputBox.value = arr[i].amount;
    inputBox.min = "1";
    inputBox.max = "10";

    let plusBtn = document.createElement("button");
    plusBtn.classList.add("plus");
    plusBtn.setAttribute("aria-label", "Increase");
    plusBtn.innerHTML = "&plus;";

    quantityContainer.appendChild(minusBtn);
    quantityContainer.appendChild(inputBox);
    quantityContainer.appendChild(plusBtn);
    quantityContainer.addEventListener("click", (event) => click(event, i));
    function click(event, i) {

        if (event.target.classList.contains("minus")) {
             //משנה במחסנית את כמות המוצרים הכלולים שנמצאים בסל
                  let counter=localStorage.getItem('count')
let newArr3=JSON.parse(counter)
newArr3--
newArr3=JSON.stringify(newArr3)
localStorage.setItem('count', newArr3)

            //כאן מורידה מהמחסנית
            if (arr[i].amount > 1) {
                arr[i].amount--;
                hamara()
                finalprice()
               
                
            }
            //
            else if (arr[i].amount == 1) {//אם זה אחד ואתה מוריד עוד צריך למחוק
                //כאן צריך למחוק את הפריט מהמחסנית
                //רק מרוקנים מהאובייקט במחסנית את הערכים
                // arr.splice(index-1,1)
                arr.splice(i, 1)
                hamara()
                finalprice()
                createcart()
            }
            //
            let value = parseInt(inputBox.value);
            value = isNaN(value) ? 1 : Math.max(value - 1, 1);
            inputBox.value = value;
            //
        } else if (event.target.classList.contains("plus") && arr[i].amount < 10) {
            ///כאן שולות לפונציה שמורידה אחד מהמחסנית
            arr[i].amount++;
           countt()
            hamara()
            finalprice()
            let value = parseInt(inputBox.value);
            value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
            inputBox.value = value;
        }
    }


    inputBox.addEventListener("input", () => {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 1 : value;
        console.log("Quantity changed:", value);
    });

    return quantityContainer;
}

function hamara() {
    arr = JSON.stringify(arr)//ממיר למחרוזת
    localStorage.setItem('robots:', arr)
    arr = JSON.parse(arr)//ממיר לאובייקט
}


function createcart() {

// יצירת כפתור Add to cart עם מבנה דומה אך עם צבע רקע שונה (bg-2)
let buscate = document.createElement('button');
buscate.classList.add('moving-border-wrapper');

let buscateMover = document.createElement('div');
buscateMover.classList.add('moving-border-mover', 'bg-4');
buscate.appendChild(buscateMover);
let buscateContent = document.createElement('span');
buscateContent.classList.add('moving-border-content');
buscateContent.innerText = 'Back to products';
buscate.appendChild(buscateContent);

buscate.addEventListener('click', productsMove);
document.body.appendChild(buscate);


    // namee()
    footer.innerHTML = ''
    let f = document.createElement('h3')
    f.innerText = goodprice
    footer.appendChild(f)
    for (let i = 0; i < arr.length; i++) {


        //יצירת דיב שכל המוצר יהיה בפנים
        let d = document.createElement('div')
        footer.appendChild(d)
        d.setAttribute('code',arr[i].code)
        //מכניס לשם את התמונה
        let pic = document.createElement('img')
        pic.src = arr[i].textImg
        d.appendChild(pic)
        pic.addEventListener('click',details_move)

        //מוסיף שם למוצר
        let name = document.createElement('p')
        name.innerText = arr[i].name
        d.appendChild(name)
        //מוסיף מחיר למוצר
        let price = document.createElement('p')
        price.innerText = arr[i].price+"$"
        d.appendChild(price)
        
        //יצירת כפתור שיעשה פלוס
        let quantityComponent = createQuantityComponent(i);
        d.appendChild(quantityComponent);

        // כל פעם שיוצר שיזמן את המחיר המעודכן
        goodprice += arr[i].price * arr[i].amount+"$"
        let goodf= document.getElementsByTagName('h3')[0]
        goodf.innerText ='price:'+goodprice;
        
buscate.style.position = "fixed";
buscate.style.top = "20px";
buscate.style.right = "20px";
buscate.style.zIndex = "9999";


    }

    ///הכפתור שמעביר לתשלום
    let payment = document.createElement('button')
    payment.innerText = "for payment"
    footer.appendChild(payment)
    payment.addEventListener("click", gopay)
    finalprice()
}
function gopay() {

 if(goodprice>0){//בודק שישי מוצרים לשלם עליהם
    if(sessionStorage.getItem('name')!=null){
 let body = document.body
    body.remove()
    localStorage.removeItem('count')
    ///שיגיד כאן שהחבילה בדרך אליך
    //ואחרי שץי שניות שימחק את הסל ויעבור לדף הבית 
    localStorage.removeItem('robots:')//מוחק את המחסנית
    alert('החבילה בדרך אליך')
    setTimeout(() => {
        localStorage.removeItem('robots:')//מוחק את המחסנית
        window.location = '../html/homepage.html'

    }, 2000);
    }
      else{
        alert('רק תרשם והחבילה תגיע בקרוב')
         window.location = '../html/login.html'
      } 
    }


}




function finalprice() {
    ///שיהיה כתוב הסכום בינייים
    goodprice = 0
    for (let index = 0; index < arr.length; index++) {
        goodprice += arr[index].price * arr[index].amount
        let goodf = document.getElementsByTagName('h3')[0]
        goodf.innerText ='price:'+ goodprice
    }

}
function productsMove(){
  window.location='../html/product1.html'
}
