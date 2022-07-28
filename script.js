const listaDeDevs = [
  {
    nome: "Rafael Bertoldo",
    stackDeEstudo: "back-end",
    imagem: "./assets/Bertoldo.jpg",
  },
  {
    nome: "Jardel Lacerda",
    stackDeEstudo: "front-end",
    imagem: "./assets/Jardel.jpg",
  },
  {
    nome: "Victor Augusto",
    stackDeEstudo: "fullstack",
    imagem: "./assets/Victor.jpg",
  },
  {
    nome: "Nicole Pimenta",
    stackDeEstudo: "front-end",
    imagem: "./assets/Nicole.jpg",
  },
  {
    nome: "Maria Ferrari",
    stackDeEstudo: "front-end",
    imagem: "./assets/Mia.jpg",
  },
  {
    nome: "Sidny",
    stackDeEstudo: "back-end",
    imagem: "./assets/Sid.jpg",
  },
];



let main = document.querySelector("#main__container");
let footer = document.querySelector("#main__footer");

function createCard(element) {
  let tagDiv = document.createElement("div");
  let tagH2 = document.createElement("h2");
  let tagImg = document.createElement("img");
  tagH2.innerText = element.nome;
    tagImg.src = element.image;
    if(element.stackDeEstudo == "front-end") {
      tagDiv.classList.add("dev__frontend")
    } else if(element.stackDeEstudo == "back-end") {
      tagDiv.classList.add("dev__backend");
    }
  tagDiv.appendChild(tagImg);
  tagDiv.appendChild(tagH2);
  return tagDiv
}

function createSection(array) {
  let sectionDevsList = document.querySelector("#devs__list");
  array.forEach((element) => {
    sectionDevsList.appendChild(createCard(element))
  });
}

createSection(listaDeDevs);
footer.remove();


