const characterLengthRange = document.getElementById('characterLengthRange')
const characterLengthNumber = document.getElementById('characterLengthNumber')
const includeUpper = document.getElementById('includeUpper')
const includeLower = document.getElementById('includeLower')
const includeSymbols = document.getElementById('includeSymbols')
const includeNumbers = document.getElementById('includeNums')
const form = document.getElementById('passwordGenerator')

characterLengthNumber.addEventListener('input',characterAmount)
characterLengthRange.addEventListener('input',characterAmount)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const passLength = characterLengthNumber.value
    const upper = includeUpper.checked
    const lower = includeLower.checked
    const symbols = includeSymbols.checked
    const numbers = includeNumbers.checked
    const password = createPassword(passLength, upper, lower, numbers, symbols)
})

function createPasword(passLength, upper, lower, numbers, symbols){
    
}

function characterAmount(e){
    const value = e.target.value
    characterLengthNumber.value = value
    characterLengthRange.value = value
}


