var contenido = document.querySelector('#Contenido')
function Obtener() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(datos => {
            //console.log(datos)
            tabla(datos)
        })

}
function tabla(datos) {
    //console.log(datos)
    contenido.innerHTML = ``
    for (let valor of datos) {
        //console.log(valor)
        contenido.innerHTML += `
        <tr>
            <th scope="row">${valor.userId}</th>
            <td>${valor.id}</td>
            <td>${valor.title}</td>
            <td>${valor.body}</td>
            <td> <button id="${valor.id}" onclick="SearchPost(this);">Ir </button></td>
            </tr>
        `;
    }
}
function SearchPost(comp){
    let id= comp.id;
    window.location='https://jsonplaceholder.typicode.com/posts/'+id
         }
    
