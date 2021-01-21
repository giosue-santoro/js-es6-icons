//----------- PRIMA MILESTONE --------------------------------------------------------------------------------------------------------------------
//Array di icone
const icons = [
{
    nome: 'cat',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'crow',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'dove',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'dog',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'dragon',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'horse',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'hippo',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'fish',
    prefisso: 'fa-', 
    tipo: 'animal',
    famiglia: 'fas'
},
{
    nome: 'carrot',
    prefisso: 'fa-', 
    tipo: 'fruit',
    famiglia: 'fas'
},
{
    nome: 'apple-alt',
    prefisso: 'fa-', 
    tipo: 'fruit',
    famiglia: 'fas'
},
{
    nome: 'lemon',
    prefisso: 'fa-', 
    tipo: 'fruit',
    famiglia: 'fas'
},
{
    nome: 'pepper-hot',
    prefisso: 'fa-', 
    tipo: 'fruit',
    famiglia: 'fas'
},
{
    nome: 'user-astronaut',
    prefisso: 'fa-', 
    tipo: 'person',
    famiglia: 'fas'
},
{
    nome: 'user-graduate',
    prefisso: 'fa-', 
    tipo: 'person',
    famiglia: 'fas'
},
{
    nome: 'user-ninja',
    prefisso: 'fa-', 
    tipo: 'person',
    famiglia: 'fas'
},
{
    nome: 'user-secret',
    prefisso: 'fa-', 
    tipo: 'person',
    famiglia: 'fas'
}
]

//forEach per visualizzare le icone con proprio nome
const iconsContainer = $('#container');



// icons.forEach((element) => {

//     const elementHtml = `
//     <div>
//         <i class="${element.famiglia} ${element.prefisso}${element.nome}"></i>
//         <div>${element.nome}</div>
//     </div>
//     `;
//     iconsContainer.append(elementHtml);

// });



//----------- SECONDA MILESTONE --------------------------------------------------------------------------------------------------------------------
//Definisco un array di colori e ad ogni tipologia di icone ne assegno uno

const colori = ['blue', 'orange', 'pink'];

icons.forEach((element) => {

    if (element.tipo === 'animal') {
        const elementHtml = `
        <div>
            <i class="${element.famiglia} ${element.prefisso}${element.nome}" style="color: ${colori[0]}"></i>
            <div>${element.nome}</div>
        </div>
        `;
        iconsContainer.append(elementHtml);
    } else if (element.tipo === 'fruit'){
        const elementHtml = `
        <div>
            <i class="${element.famiglia} ${element.prefisso}${element.nome}" style="color: ${colori[1]}"></i>
            <div>${element.nome}</div>
        </div>
        `;
        iconsContainer.append(elementHtml);
    } else {
        const elementHtml = `
        <div>
            <i class="${element.famiglia} ${element.prefisso}${element.nome}" style="color: ${colori[2]}"></i>
            <div>${element.nome}</div>
        </div>
        `;
        iconsContainer.append(elementHtml);
    }
    
})
