const btnTodos = document.getElementById('todos')

btnTodos.addEventListener('click', ()=> {

    showMoneyMovement()

})


const btnEntradas = document.getElementById('entradas')
btnEntradas.addEventListener('click', () =>{

    const entradas = insertedValues.filter((element) => element.categoryID == 1 )

    const entradasFiltradas = entradas.map((elemento) => createMoneyMovement(elemento))

    const ulMovementsList = document.querySelector(".movements-list")

    ulMovementsList.innerText = ""

    entradasFiltradas.forEach((element) => ulMovementsList.append(element))
   

})

const btnSaidas = document.getElementById('saidas')
btnSaidas.addEventListener('click', () =>{

    
    const saidas = insertedValues.filter((element) => element.categoryID == 2)
    const saidasFiltradas = saidas.map((element) => createMoneyMovement(element))

    const ulMovementsList = document.querySelector(".movements-list")

    ulMovementsList.innerText = ""

    saidasFiltradas.forEach((element) => ulMovementsList.append(element))
 

})