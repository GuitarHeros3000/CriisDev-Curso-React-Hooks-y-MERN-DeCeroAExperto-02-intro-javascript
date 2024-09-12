
const apiKey = 'PM4StQM2yJg1l4UmLuU2RkKUCeIrIZjh';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then((resp) => {
    return resp.json();
}).then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
}).catch(
    console.warn
);
