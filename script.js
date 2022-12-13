let fullUrl = 'https://www.swapi.tech/api/people/?name=chewbacca';
let partialUrl = '”https://www.swapi.tech/api/people/?name=”';

let btnNameImport = document.querySelector('#btnNameImport');
let characterOutput = document.querySelector('#characterOutput');

const getBiometrics = () =>
{
    /*Skriv din kod här*/

    fetch(fullUrl,
    {
        method: 'GET',
        headers:
        {
            'Accept': 'application/json'
        }
    })
    .then(res => 
    {
        if(res.ok)
        {
            return res.json();
        }
        throw new Error('Failed to get names')
    })
    .then(data => 
    {
            console.log(data);
        characterOutput.innerHTML = 'Biometric data:';
            console.log(data.result[0].properties.height)
            console.log(data.result[0].properties.mass)
            console.log(data.result[0].properties.hair_color)
            console.log(data.result[0].properties.gender)
        characterOutput.innerHTML += `
        Height: ${data.result[0].properties.height}
        Mass: ${data.result[0].properties.mass}
        Hair: ${data.result[0].properties.hair_color}
        Gender: ${data.result[0].properties.gender}`
    })
    .catch(err => console.log('Error: ' + err))
}

btnNameImport.addEventListener('click', getBiometrics);