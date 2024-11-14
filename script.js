const form = document.querySelector("#form");
const body = document.querySelector("body");
const button = document.querySelector("#submit");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    button.disabled = true;
    button.style.backgroundColor = "#ffb889";

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

    setTimeout(() => {
        window.location.reload(true);
    }, 500)
})