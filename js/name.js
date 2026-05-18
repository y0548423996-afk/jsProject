
function namee() {
    loading()
    let h = document.getElementsByTagName('h1')[0]
    let n = sessionStorage.getItem('name')
    h.innerText += n + "😍"
}