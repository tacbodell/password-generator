const length = document.querySelector('#length');
const special = document.querySelector('#special');
const capital = document.querySelector('#capital');
const number = document.querySelector('#number')
const button = document.querySelector('#btn');
const result = document.querySelector('#result');

button.addEventListener('click', run)

function run() {
    let url = 'https://passwordinator.herokuapp.com?'

    if (special.checked) {url = url.concat('char=true&')}
    if (capital.checked) {url = url.concat('caps=true&')}
    if (number.checked) {url = url.concat('num=true&')}
    url = url.concat(`len=${length.value}`)

    fetch(`${url}`) // Gets long description of drink for instructions
        .then(res => res.json())
        .then(data => {
            console.log(data)
            result.innerHTML = data.data
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}