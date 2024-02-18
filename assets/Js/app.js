const btnBuscar = document.getElementById('buscar');

const obtenerInformacion =async()=>{
try{

    let resultado = await fetch('https://mindicador.cl/api')
    let data = await resultado.json()
    return data;
}catch (error){
    alert('api no disponible')
}

} 


const imprimirResultado =()=>{

    let monto = document.getElementById('monto')
    let moneda = document.getElementById('moneda')
}




btnBuscar.addEventListener('click', async(event)=> {
    event.preventDefault()
    let data = await obtenerInformacion()
})

