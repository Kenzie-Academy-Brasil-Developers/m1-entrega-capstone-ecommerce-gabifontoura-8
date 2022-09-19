function criarProduto(lista) {
    
    const tagUl = document.querySelector(".vitrine")

    const liCard = document.createElement("li")
    const figure = document.createElement("figure")
    const image = document.createElement("img")
    const divLegenda = document.createElement("div")
    const pCategoria = document.createElement("p")
    const h3nome = document.createElement("h3")
    const pDescricao = document.createElement("p")
    const pValor = document.createElement("p")
    const divBtn = document.createElement("div")
    const btnCarrinho = document.createElement("button")

    liCard.classList.add("card")
    figure.classList.add("figure")
    image.classList.add("image")
    divLegenda.classList.add("legenda")
    pCategoria.classList.add("categoria-tag")
    h3nome.classList.add("nome-produto")
    pDescricao.classList.add("descricao")
    pValor.classList.add("valor-item")
    divBtn.classList.add("btn-car")
    btnCarrinho.id = `#btnId_${lista.id}`
    btnCarrinho.classList.add("btnAddCarrinho")

    btnCarrinho.addEventListener('click', function (event) {
        let elemento = event.target;
        let idElemento = elemento.id;
        let id = parseInt(idElemento.substring(7));
        let produto = procuraObj(id);
        
        array.push(produto)
        addItemCarrinho(array)
        soma(array)
    })

    image.src = lista.img
    image.alt = lista.nameItem
    pCategoria.innerText = lista.tag[0]
    h3nome.innerText = lista.nameItem
    pDescricao.innerText = lista.description
    pValor.innerText = `R$ ${lista.value.toFixed(2).replace(".", ",")}`
    btnCarrinho.innerText = `Adicionar ao carrinho`

    
    divLegenda.append(h3nome, pDescricao, pValor)
    divBtn.appendChild(btnCarrinho)
    figure.appendChild(image)
    liCard.append(figure, pCategoria, divLegenda, divBtn)
    
    tagUl.appendChild(liCard)
    
}


function listarVitrine(lista){
    
    const tagUl = document.querySelector(".vitrine")

    tagUl.innerText =""

    for (index = 0; index < lista.length; index++) {
        criarProduto(lista[index])
    }

}

listarVitrine(data)


const array = []


let quantidadeFinal = 0


function criarItemCarrinho(item,indice) {


    const tagUl = document.querySelector(".escolhidos")

    const tagLi = document.createElement("li")
    const tagFigure = document.createElement("figure")
    const tagImg = document.createElement("img")
    const tagSection = document.createElement("section")
    const h3Nome = document.createElement("h3")
    const pValor = document.createElement("p")
    const btnRemover = document.createElement("button")

    tagLi.classList.add("itemEscolhido")
    tagFigure.classList.add("fotoItemEscolhido")
    tagImg.classList.add("foto")
    tagSection.classList.add("nome-valor-remover")
    h3Nome.classList.add("nome-produto-car")
    pValor.classList.add("valor-item-car")
    btnRemover.classList.add("remover")

    //ADICIONAR BOTAO JÁ COM FUNÇÃO DE REMOVER

    btnRemover.addEventListener('click', function (event){
        
        array.splice(indice,1)
        soma(array)
        addItemCarrinho(array)

    
    })
    
    /////


    tagImg.src = item.img
    tagImg.alt = item.nameItem
    h3Nome.innerText = item.nameItem
    pValor.innerText = `R$ ${item.value.toFixed(2).replace(".", ",")}`
    btnRemover.innerText = `Remover Produto`

    tagSection.append(h3Nome, pValor, btnRemover)
    tagFigure.appendChild(tagImg)
    tagLi.append(tagFigure, tagSection)
    tagUl.appendChild(tagLi)


}


function quantidade(quantidadeFinal){
    if(quantidadeFinal > 0){
        

    // document.querySelector(".total-valor").innerText = ""
 
    let pQuantidade = document.createElement("p")
    pQuantidade.innerText = `Quantidade: ${quantidadeFinal}`
    document.querySelector(".quantidadeClass").innerHTML = ""
    document.querySelector(".quantidadeClass").append(pQuantidade)



        // let qnt = document.querySelector(".pQuantidade")
        // qnt.innerText = `Quantidade:`
        // document.querySelector(".qnt-total").innerText = quantidadeFinal
    }
    else{

    let carrinho = document.querySelector(".escolhidos")
    let tituloVazio = document.createElement("p")

    tituloVazio.classList.add("titulo-vazio")

    tituloVazio.innerText = `Carrinho Vazio`

    carrinho.append(tituloVazio)


    document.querySelector(".total-valor").innerText = ""
    document.querySelector(".quantidadeClass").innerText = ""



    }
}









/* <li class="itemEscolhido">
<figure class="fotoItemEscolhido">
    <img src="./img/camiseta_branca.svg" alt="camiseta branca">
    </figure>
    <section class="nome-valor-remover">
    <h3 class="nome-produto-car">T-shirt</h3>
    <p class="valor-item-car">R$ 100,00</p>
    <button class="remover">Remover produto</button>
    </section>
    
    </li> */
    
    


// LISTAR ITEM NO CARRINHO

function addItemCarrinho (arr){
    

    const tagUl = document.querySelector(".escolhidos")
    
    tagUl.innerHTML = ""
    
    for(i=0; i<arr.length; i++){
        criarItemCarrinho(arr[i],i)
    }
    quantidade(array.length)

   
}



function procuraObj(id){

    for (j = 0; j < data.length; j++) {
        let produto = data[j]
    
        if(data[j].id === id){
            return produto
        }
    }
    return false
}







// SOMA TOTAL

function soma(objeto) {


    let total = 0
    
    for (i = 0; i < objeto.length; i++) {

        let objetoTratado =  parseInt(objeto[i].value.toFixed(2).replace(",", ".").replace("R$", ""))

            total += objetoTratado

    }
    
    let pTotal = document.createElement("p")
    pTotal.innerText = `Total: R$ ${total.toFixed(2).replace(".", ",")}`
    // pTotal.classList.add()
    document.querySelector(".total-valor").innerHTML =""
    document.querySelector(".total-valor").append(pTotal)
}







// BARRA PESQUISA

let inputBusca = document.querySelector(".inputBusca")
let btnBusca = document.querySelector(".btn-pesquisa")


btnBusca.addEventListener("click",function buscarProduto(){
    let busca = []
    console.log(inputBusca.value)
    let buscaTexto = inputBusca.value.toUpperCase()
    for(i=0;i<data.length; i++){
        buscaTexto= buscaTexto.trim()
        let nomeProduto = data[i].nameItem.toUpperCase()
        let categoria = data[i].tag[0].toUpperCase()
        let descricao = data[i].description.toUpperCase()

        if (
            nomeProduto.includes(buscaTexto) ||
            categoria.includes(buscaTexto) ||
            descricao.includes(buscaTexto)
        ){
            busca.push(data[i])
        }
    }
    listarVitrine(busca)
})



inputBusca.addEventListener("keyup", (event) => {
    let busca = []
    let buscaTexto = inputBusca.value.toUpperCase()

    for(i=0;i<data.length; i++){
        buscaTexto= buscaTexto.trim()
        let nomeProduto = data[i].nameItem.toUpperCase()
        let categoria = data[i].tag[0].toUpperCase()
        let descricao = data[i].description.toUpperCase()

        if (
            nomeProduto.includes(buscaTexto) ||
            categoria.includes(buscaTexto) ||
            descricao.includes(buscaTexto)
        ){
            busca.push(data[i])
        }
    }
    listarVitrine(busca)
})





// VERIFICAR CLICKS MENU-NAV

let btn = document.querySelectorAll(".btn-menu")

for(let i=0; i<btn.length; i++){

    btn[i].addEventListener("click", filtrar)

}





//FILTRAR CATEGORIAS

function filtrar(evento){
    
    let acessorios = []
    let camisetas = []
    let calcados = []

    let botao = evento.target

    for(i=0;i<data.length; i++){
        
 
        if(data[i].tag[0]==="Camisetas"){
            camisetas.push(data[i])
         
        }

        if(data[i].tag[0]==="Acessórios"){
            acessorios.push(data[i])
        }

        if(data[i].tag[0]==="Calçados"){
            calcados.push(data[i])
       
        }

    }

    //LISTAR RESULTADO DA BUSCA
   
    if(botao.innerText === "Camisetas"){

       listarVitrine(camisetas)
    }

    if(botao.innerText === "Acessórios"){

       listarVitrine(acessorios)
    }

    if(botao.innerText === "Calçados"){

        listarVitrine(calcados)
    }

    if(botao.innerText === "Todos"){
        listarVitrine(data)
    }

}

