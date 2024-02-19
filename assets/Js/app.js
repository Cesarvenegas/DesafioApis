const btnBuscar = document.getElementById('buscar')

const obtenerInformacion =async()=>{
try{
    let resultado = await fetch('https://mindicador.cl/api/')
    let data = await resultado.json()
    return data;
}catch (error){
    alert('api no disponible')
}

} 


const imprimirResultado =(data)=>{
    let monto = document.getElementById('monto').value
    let moneda = document.getElementById('monedas').value
    let valor = data[moneda].valor * parseInt(monto)
    console.log(data)
    document.getElementById('resultado').innerHTML=valor
}




btnBuscar.addEventListener('click' ,async(event)=> {
    event.preventDefault()
    let data = await obtenerInformacion()
    imprimirResultado(data)
})

