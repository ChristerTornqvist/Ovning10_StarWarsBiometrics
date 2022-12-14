const characterInput = document.querySelector('#characterInput');
const btnNameImport = document.querySelector('#btnNameImport');
const characterOutput = document.querySelector('#characterOutput');

let partialUri = 'https://www.swapi.tech/api/people/?name=';

const getBiometrics = () =>
{
    let uriEnding = characterInput.value;
    fullUri = partialUri+uriEnding
    fetch(fullUri,
    {
        method: 'GET', headers:
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
        let characterBio = `Biometric data: 
        Height: ${data.result[0].properties.height}
        Mass: ${data.result[0].properties.mass}
        Hair: ${data.result[0].properties.hair_color}
        Gender: ${data.result[0].properties.gender}`;

        characterOutput.innerHTML = characterBio;
    })
    .catch(err => console.log('Error: ' + err))
}

btnNameImport.addEventListener('click', getBiometrics);