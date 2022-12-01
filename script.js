// 1. Project10. Buttons. При нажатии на кнопку менять цвет body.
//    У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
//    Добавить кнопку blue и orange.
//    По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
//    Менять фона body на считанный атрибут id.
//    Добавить кнопку blue и orange. 

// let buttons = document.querySelectorAll(".item") 
// for (let i = 0; i < buttons.length; i++) { 
//     buttons[i].addEventListener("click", function () { 
//         console.log(buttons[i].innerText + " кликнyл"); 

//         let bodyFone = buttons[i].getAttribute("id") 
//         if (bodyFone == "random") { 

//             let randomColor = (Math.random().toString(16)).substring(4, 8).toUpperCase() 
//             document.body.style.background = "#" + randomColor 
//         } else if (bodyFone == "img") { 
//             document.body.style.background = "url(./images/123.jpeg) no-repeat center center fixed"  
//         } else { 
//             document.body.style.background = bodyFone 
//         }
//     })
// }



// 2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//     для каждого тега p добавить соотв-ю текст. innerText

// let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
// let V_p = document.querySelectorAll(".giveFive p")

// for (let i = 0; i < V_p.length; i++) {
//     V_p[i].innerText = texts[i]
// }



// 3. Есть массив arr = [
// {
//     link : "https://google.com",
//     title : "Ссылка на гугл"
// },
// {
//     link : "https://instagram.com",
//     title : "Ссылка на инстаграм"
// },
// {
//     link : "https://facebook.com",
//     title : "Ссылка на фейсбук"
// }
// ]
// В html создаем 3 тега a -  x3. Для каждого из трех, 
//     добавить link в href и title внутрь тега из массива arr



// let a = document.querySelectorAll(".intruder")

// let arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
//     ]

// for (let i = 0; i < a.length; i++) {
    
//     a[i].setAttribute("href", arr[i].link)
//     a[i].innerText = arr[i].title
// }



// 4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
//     Создать тег p с начальным значением - 0. 
//     При клике на buttonPlus увеличивать значение в теге p на 1
//     При клике на buttonMinus уменьшать значение в теге p на 1
//     addEventListener. innerText.

// let p = document.querySelector(".calculation")
// let sum = 0

// let buttonPlus = document.querySelector(".plus")
// let buttonMinus = document.querySelector(".minus")

// buttonPlus.addEventListener("click", function () {
//     sum += 1;
//     p.innerText = sum
    
// })

// buttonMinus.addEventListener("click", function () {
//     sum = sum - 1;
//     p.innerText = sum
    
// })
