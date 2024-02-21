const btnBuscar = document.getElementById('buscar')
const ctx = document.getElementById('myChart');
let monedaSelect = document.getElementById('monedas')
const obtenerInformacion = async (moneda) => {
    try {
        let resultado = await fetch(`https://mindicador.cl/api/${moneda}`)
        let data = await resultado.json();
        return data
    } catch (error) {
        alert('API no disponible');
    }
}


const crearGrafico=(fechas,datos)=>{
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: 'Variaciones',
                data: datos,
                borderWidth: 1
            }]
        }
    });
}

const imprimirResultado = (data) => {
    let monto = document.getElementById('monto').value;
    let moneda = monedaSelect.value
    let valor = data.serie[0].valor * parseInt(monto)
    console.log(data);
    document.getElementById('resultado').innerHTML = valor
    let series = data.serie.slice(0,9)
    let fechas = series.map(item =>{
        return new Date(item.fecha).toLocaleDateString('en-gb')
    })
    let datos = series.map(item =>item.valor)
    crearGrafico(fechas,datos)
    console.log(series)
};





btnBuscar.addEventListener('click', async (event)=>{
    event.preventDefault()
    let moneda = monedaSelect.value
    let data = await obtenerInformacion( moneda)
    imprimirResultado(data)
})

