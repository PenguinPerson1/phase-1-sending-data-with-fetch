function submitData(name,email) {
    const data = fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(results => results.json())
    .then(message => document.querySelector("#text").textContent = message.id)
    .catch(error => document.querySelector("#text").textContent = error)
    return data;
}

