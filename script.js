const form = document.querySelector("#form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log(object)
    console.log(json)

    await fetch("http://localhost:3300/send-email", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: json
    });

    window.location.reload(true);
})