document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const messageBox = document.getElementById("message-box");
    const messageText = document.querySelector("textarea").value.trim();
    const contactInfo = document.querySelector("input").value.trim();

    if (!messageText || !contactInfo) {
        showMessage("Please fill in all fields!", "red");
        return;
    }

    fetch("https://forms.pixelplayz.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, contactInfo: contactInfo }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showMessage("✅ Message sent successfully!", "#00785a");
            document.querySelector(".contact-form").reset();
        } else {
            showMessage("❌ Error sending message. Please try again.", "red");
        }
    })
    .catch(error => showMessage("❌ Network error. Please try again later.", "red"));
});

function showMessage(text, color) {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = text;
    messageBox.style.backgroundColor = color;
    messageBox.style.color = "white";
    messageBox.style.display = "block";

    setTimeout(() => {
        messageBox.style.display = "none";
    }, 5000);
}
