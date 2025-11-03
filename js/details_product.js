function show() {
    namee()
    let c = localStorage.getItem('code')
    let d = localStorage.getItem('details')
    let json = JSON.parse(d)//ממיר לאובייקט
    let code = JSON.parse(c)
arr_details=json[0]
    for (let i = 0; i < arr_details.length; i++) {
        if (arr_details[i].code==Number(code)+1) {
           let sec=document.getElementsByTagName('section')[0]
let pic=document.createElement('img')
pic.src=arr_details[i].textImg
sec.appendChild(pic)
let index=0
while(index<arr_details[i].pics.length){
    let pic=document.createElement('img')
pic.src=arr_details[i].pics[index]
pic.alt = 'תמונה מספר ' + (index + 1);
sec.appendChild(pic)
index++
}

//מוסיף שם
let name=document.getElementsByTagName('h3')[0]
name.innerText='Product name:\n'+arr_details[i].name

///מוסיף תאור
let desc=document.getElementsByTagName('h3')[1]
desc.innerText='Product description:\n'+arr_details[i].description
 
//מוסיף קוד
let code=document.getElementsByTagName('h3')[2]
code.innerText='Product code:'+arr_details[i].code

//מוסיף קטגוריה
let kat=document.getElementsByTagName('h3')[3]
kat.innerText='kategory:\n'+arr_details[i].kategory
        
//מוסיף מחיר
let price=document.getElementsByTagName('h3')[4]
price.innerText='price:'+arr_details[i].price+"$"
setupImageSwitcher();

let nav=document.createElement('nav')
let buscate = document.createElement('button');
buscate.setAttribute('code', i+1);
buscate.classList.add('moving-border-wrapper');
let buscateMover = document.createElement('nav');
buscateMover.classList.add('moving-border-mover', 'bg-4');
buscate.appendChild(buscateMover);
let buscateContent = document.createElement('span');
buscateContent.classList.add('moving-border-content');
buscateContent.innerText = 'Add to cart';
buscate.appendChild(buscateContent);
buscate.addEventListener('click', baskatadd);
nav.appendChild(buscate);
sec.appendChild(nav);

}}}







   
function setupImageSwitcher() {
  const sec = document.getElementsByTagName('section')[0];
  const images = sec.querySelectorAll('img');

  if (images.length < 5) return; // כדי לוודא שיש לפחות 5 תמונות

  // נניח שהתמונה הראשונה היא הגדולה, והשאר קטנות
  images[0].classList.add('main-image');
  for(let i=1; i<images.length; i++) {
    images[i].classList.add('thumbnail');
  }

  // הוספת אירועי לחיצה לתמונות הקטנות
  images.forEach(img => {
    img.addEventListener('click', () => {
      if (!img.classList.contains('thumbnail')) return;

      // החלפת תמונה ראשית
      const mainImage = sec.querySelector('.main-image');
      
      // החלפת המקור
      const tempSrc = mainImage.src;
      mainImage.src = img.src;
      img.src = tempSrc;

      // החלפת alt במידת הצורך (אפשרי)
      const tempAlt = mainImage.alt;
      mainImage.alt = img.alt;
      img.alt = tempAlt;
    });
  });
}





