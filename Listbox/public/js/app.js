let divElem = document.querySelectorAll('.selectAction')
let mainInputContent = document.querySelector('.mainInputContent')

divElem.forEach(item => {
    item.addEventListener('click' , function () {
        let content = item.children[1].innerHTML
        mainInputContent.innerHTML = content
    })
})