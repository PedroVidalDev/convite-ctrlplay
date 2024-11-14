const form = document.querySelector("#form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    await fetch("http://18.228.5.14:3300/send-email", {
        method: "POST",
        body: json
    });

    window.location.reload(true);
})