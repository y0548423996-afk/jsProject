function user() {
    event.preventDefault();
    //הפונקציה בודקת האם המשתמש הזה כבר קיים, נמצא במחסנית
    let email = document.getElementsByTagName('input')//בתור מערך מקבל את הפרטים שהקשתי

    console.log(email);
    let emailjson = localStorage.getItem('my_details')//  זה המערך של המיילים מהמחסנית
    if (email != "") {
        if (emailjson == null) {//המחסנית ריקה
            let e = []//יוצר אותו להיות מערך
            //e.push(email)//מכניס למערך
            let obj = { emaill: email[1].value, pas: email[2].value, namee: email[0].value }
            e.push(obj)
            emailjson = JSON.stringify(e)//הופך את האובייקט למחרוזת 
            localStorage.setItem('my_details', emailjson)
        }
        if (emailjson != null) {
            //אולי הוא כבר קיים
            let e = JSON.parse(emailjson)//הופך ממחרוזת למערך
            let c = 0
            let ii
            for (let i = 0; i < e.length; i++) {
                if (e[i].emaill == email[1].value) {
                    c++
                    ii = i
                }
            }
            if (c == 0) {//אם המייל אינו קיים!!
                //  e.push(email)
                sessionStorage.setItem('name', email[0].value)

                window.open('./homepage.html')
                let obj = { emaill: email[1].value, pas: email[2].value, namee: email[0].value }
                e.push(obj)
                emailjson = JSON.stringify(e)//הופך את האובייקט למחרוזת 
                localStorage.setItem('my_details', emailjson)//נשמר המערך המעודכן
            }
            else {//אם הוא כן מכיר אותך
                //תבדוק אם הסיסמא נכונה ותכניס אותך לאתר
                if (e[ii].pas == email[2].value) {
                    console.log("סיסמה נכונה! מעבירה לדף הבית...")
                    sessionStorage.setItem('name', email[0].value)
                    window.location = './homepage.html'
                    // window.open('./homepage.html')
                }

            }
        }
        //emailjson='string'של כל מה שכתוב לי בתוך המערך
        //הכנסה למחסנית השניה 
    }

}



function usel() {
    event.preventDefault();
    let emailjson = localStorage.getItem('my_details')
    let e = JSON.parse(emailjson)//הופך ממחרוזת למערך
    let d = document.getElementsByTagName('input')
    let obj = { emaill: d[0].value, pas: d[1].value }
    let c1 = 0
    let c2 = 0
    for (let i = 0; i < e.length; i++) {
        if (e[i].emaill == d[0].value) {
            console.log('נכנסתי לכאן');
            if (e[i].pas == d[1].value) {
                console.log(e[i].name);
                ii = i
                c1++ //מייל +סיסמא נכון 
            }
            else
                c2++//מייל מכון וסיסמא לא
        }
    }
    if (c1 != 0) {
        sessionStorage.setItem('name', e[ii].namee)
        window.location = './homepage.html'
        //  window.open('./homepage.html')
    }

    else if (c2 != 0)
        alert('סיסמא שגויה')
    else{
                alert('אנא הירשם')
 window.location = './register.html'
    }

}

function namee() {
    
    let h = document.getElementsByTagName('h1')[0]
    let n = sessionStorage.getItem('name')
    if(n==null){
         h.innerText
    }
    else{
          h.innerText +=n 
    }
 
    
}


function login() {//אם בחר הרשמה מעביר לזיהוי
    window.location = './login.html'
}

function register() {//אם בחר כניסה מעביר למילוי פרטים
    window.location = './register.html'
}



