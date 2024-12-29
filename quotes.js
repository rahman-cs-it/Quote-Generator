const quote = document.querySelector('#quote');
const generate = document.querySelector('#generate');
const categorySelect = document.querySelector('#Category');

const quotegenerator = async () =>{
    const category = categorySelect.value;
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = 'yVlIjNSkODwytD2tvGawrA==PHWcvXkutJyyY4ZD'; // Replace with your actual API key
    const headers = {
        'X-Api-Key': apiKey
    };
    const response = await fetch(apiUrl, { headers });
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data[0].quote;
}

generate.addEventListener('click', quotegenerator);