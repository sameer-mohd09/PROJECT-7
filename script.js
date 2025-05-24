const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = config.API_KEY;
const category = '';
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {
    try {
        const response = await fetch(`${apiUrl}?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.length > 0) {
            const quotedata = data[0];
            console.log(`Quote: ${quotedata.quote}`);
            console.log(`Author: ${quotedata.author}`);
            quote.innerHTML = quotedata.quote;
            author.innerHTML = quotedata.author;
        } else {
            console.log('No quote found.');
            quote.innerHTML = 'No quote found';
            author.innerHTML = '';
        }
    } catch (error) {
        console.error('There was an error!', error);
        quote.innerHTML = 'Error fething quote';
        author.innerHTML = '';
    }

}

getQuote();
function whatsapp() {
    window.open("whatsapp://send?text=Your message here", "Whatsapp window", "width=600, height= 300")

}
