let dataContent = {
    Recent: [
        {
          title: 'Does drinking coffee make you smarter?',
          date: '5h ago . 3 comments . 5 shares',
        },
        {
          title: "So you've bought coffee... now what?",
          date: '3h ago . 3 comments . 2 shares',
        },
      ],
      Popular: [
        {
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7 . 29 comments . 16 shares',
        },
        {
          title: 'The most innovative things happening in coffee',
          date: 'Mar 19 . 24 comments . 12 shares',
        },
      ],
      Trending: [
        {
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago . 9 comments . 5 shares',
        },
        {
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago . 1 comments . 2 shares',
        },
      ],
}

let btn_Content = document.querySelectorAll('.btn-content')
let content1 = document.getElementById('content1')
let content2 = document.getElementById('content2')
let data1 = document.getElementById('data1')
let data2 = document.getElementById('data2')

btn_Content.forEach((item) => {
    item.addEventListener('click' , function () {
        setContent(item.innerHTML)
    })
})

function setContent (value) {
    let clickedData = dataContent[value]
    content1.innerHTML = clickedData[0].title
    content2.innerHTML = clickedData[1].title
    data1.innerHTML = clickedData[0].date
    data2.innerHTML = clickedData[1].date
}

setContent('Recent')