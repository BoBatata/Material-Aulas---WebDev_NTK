// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    showPosts()

    document.querySelector("#postForm").addEventListener("submit", addPosts)
}

//CRUD
//Create
function addPosts(infoDoEvento){
    infoDoEvento.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString()
    }

    posts.unshift(novoPost);

    showPosts()
}

//Read
function showPosts(){
    //querySelector além de GetElementById
    const listaPosts = document.querySelector("#postList")
    //Zera a lista para atualiza-la
    listaPosts.innerHTML == ""

    //Passa o array pegando cada elemento e criando um post com as informações.
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
        
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p> Categoria: ${pegaItem.category} </p>
            <p> Data e Hora: ${pegaItem.date} </p>
            <button>Editar</button>
            <button>Apagar</button>
        
        `
        listaPosts.append(cardPost)

    })
}

//Update
function editPost(){}

//Delete
function deletePosts(){}