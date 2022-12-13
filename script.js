//HTTP request methods
// GET   - Hämta data 
// POST  - Skriva data 
// PUT   - Uppdaterar hela objektet
// PATCH - Uppdaterar delar eller hela objektet
// DELETE - Tar bort ett objekt

// console.log(window);

let fullUrl = 'https://www.swapi.tech/api/people/?name=chewbacca';

let btnImport = document.querySelector('#btnImport');
let characterOutput = document.querySelector('#characterOutput');

let textOutput = document.querySelector('#text-output');

// btnImport.addEventListener('click', function()
// {
    //     fetch('text.txt')
    //             .then(function(res)
    //             {
        //                 console.log(res);
        //                 return res.text();
        //             })
        //             .then(function(data)
        //             {
            //                 console.log(data);
            //                 textOutput.innerHTML = `<p>${data}</p>`
            //             })
            // })
            
btnImport.addEventListener('click', function()
{
    fetch('text.txt')
        .then(res => res.text())
        .then(data => textOutput.innerHTML = `<p>${data}</p>`)
        .catch(err => console.log('Error: ' + err))
})
            
// btnImport.addEventListener('click', function()
// {
    //     fetch(fullUrl)
    //             .then(function(res)
    //             {
        //                 console.log(res);
        //                 return res.text();
        //             })
        //             .then(function(data)
        //             {
            //                 console.log(data);
            //                 characterOutput.innerHTML = `<p>${data}</p>`
            //             })
            // })
            
btnImport.addEventListener('click', function()
{
    fetch(fullUrl)
        .then(res => res.text())
        .then(data => 
    {
        console.log(data);
        characterOutput.innerHTML = `<p>${data}</p>`;
    })
    .catch(err => console.log('Error: ' + err))
})


let btn2 = document.querySelector('#btn2');
let jsonOutput = document.querySelector('#json-output');


const getJson = () =>
{
    fetch('json.json')
        .then(res => 
    {
        console.log(res);
        if(res.ok)
            return res.json()
        throw new Error('Error when fetching');
    })
    .then(data => 
    {
        console.log(data);

        jsonOutput.innerHTML = "";

        data.forEach(post =>
        {
            jsonOutput.innerHTML +=
            `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${post.title}</h3>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
            `
        });
    })
    .catch(err => console.log('Error: ', err));
}

const getJason = () =>
{
    fetch(fullUrl)
        .then(res => res.text())
        .then(data => 
    {
        console.log(data);
    })
}

btn2.addEventListener('click', getJson);

let btn3 = document.querySelector('#btn3');
let gitOutput = document.querySelector('#git-output');


const getGit = () => {

    fetch('https://api.github.com/users/Lexicon-Net/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json();
            throw new Error('Failed to get repos');
        })
        .then(data => {
            console.log(data);

            gitOutput.innerHTML = '';

            data.forEach(repo => {
                gitOutput.innerHTML +=
                    `
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                    </div>
                    </div>

                      `

            })
        })
        .catch(err => console.log('ERROR: ' + err));
        }


btn3.addEventListener('click', getGit);


let btnNameImport = document.querySelector('#btnNameImport');
let namesOutput = document.querySelector('#namesOutput');

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
        return res.json();
        throw new Error('Failed to get names')
    })
    .then(data => 
    {
        console.log(data);
        namesOutput.innerHTML = 'Biometric data for X:';
        console.log(data.result[0].properties.height)
        console.log(data.result[0].properties.mass)
        console.log(data.result[0].properties.hair_color)
        console.log(data.result[0].properties.gender)
        namesOutput.innerHTML += 
        `
        <p>Height: ${data.result[0].properties.height}, Mass: ${data.result[0].properties.mass}, ,,Hair_color: ${data.result[0].properties.hair_color}, Gender: ${data.result[0].properties.gender}</p>
        `
        // for(i = 0; i < 10 ; ++i)
        // {
        //     console.log(data.results[i].name);
        // }
    })
    .catch(err => console.log('Error: ' + err))
}

btnNameImport.addEventListener('click', getBiometrics);



                
// // function getApi(){
// //     /*Skriv din kod här*/
// //     fetch(fullUri)
// //      .then(res => res.json())
// //      .then(data =>
// //      {
// //     /*Och här*/
// //      })
// //      .catch(err => console.log(err))
// //      }


// btnImport.addEventListener(
//     'click', function getApi(){
//         /*Skriv din kod här*/
//         fetch(fullUri)
//          .then(res => res.json())
//          .then(data =>
//          {
//         /*Och här*/
//         console.log(data);
        
//         jsonOutput.innerHTML = "";
//         jsonOutput.innerHTML = `<p>${data}</p>`

//             // data.forEach(post => {
//             //     jsonOutput.innerHTML +=
//             //         `
//             //     <div class="card">
//             //         <div class="card-body">
//             //             <h3 class="card-title">${post.title}</h3>
//             //             <p class="card-text">${post.body}</p>
//             //         </div>
//             //     </div>
                
//             //     `
//             // });
//          })
//          .catch(err => console.log(err))
//          }
// )