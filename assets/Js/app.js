const btnBuscar = document.getElementById('buscar');

const obtenerInformacion = async () => {
    try {
        let resultado = await fetch('https://mindicador.cl/api/');
        let data = await resultado.json();
        return data;
    } catch (error) {
        alert('API no disponible');
    }
};

const imprimirResultado = (data) => {
    let monto = document.getElementById('monto').value;
    let moneda = document.getElementById('monedas').value;
    let valor = data[moneda].valor * parseInt(monto);
    console.log(data);
    document.getElementById('resultado').innerHTML = valor;
};

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    }
});

btnBuscar.addEventListener('click', async (event) => {
    event.preventDefault();
    let data = await obtenerInformacion();
    imprimirResultado(data);
});

