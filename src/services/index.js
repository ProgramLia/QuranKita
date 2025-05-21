// GET
async function get(path) {
    const response = await fetch(path , {
        method:"GET",
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    const data = await response.json();
    return data;
}

export {get}