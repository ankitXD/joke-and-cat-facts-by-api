document.getElementById('jokeBtn').addEventListener('click', generateContent);

async function generateContent() {
    const jokeEl = document.getElementById('joke');
    const contentType = document.getElementById('contentType').value;

    let url;
    if (contentType === 'joke') {
        url = 'https://v2.jokeapi.dev/joke/Any';
    } else if (contentType === 'catFact') {
        url = 'https://catfact.ninja/fact';
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (contentType === 'joke') {
            if (data.type === 'single') {
                jokeEl.innerHTML = data.joke;
            } else {
                jokeEl.innerHTML = `${data.setup} <br> ${data.delivery}`;
            }
        } else if (contentType === 'catFact') {
            jokeEl.innerHTML = data.fact;
        }
    } catch (error) {
        jokeEl.innerHTML = 'Failed to fetch content. Please try again later.';
        console.error('Error fetching content:', error);
    }
}
