const form = document.querySelector("#form");
const body = document.querySelector("body");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log(object)
    console.log(json)

    await fetch("http://18.228.5.14:3300/send-email", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: json
    });

    body.innerHTML = `<h1> acho que agr sei quem vc eh </h1>`;

    setTimeout(() => {
        window.location.reload(true);
    }, 1000)
})