const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
})

dropdownLink.forEach((link) => {
    link.addEventListener('click', (event) => {
        dropdownValue.textContent = link.textContent
        dropdownList.classList.toggle('dropdown__list_active')
        event.preventDefault()
    })
})


// Аналогичный addEventListener цикл:

// dropdownLink.forEach((link) => {
//     link.onclick = () => {
//         dropdownValue.textContent = link.textContent
//         dropdownList.classList.toggle('dropdown__list_active')
//         return false
//     }
// })

// Указатель нажатого элемента

// document.addEventListener('click', (event) => {
//     console.log(event.target)
// })