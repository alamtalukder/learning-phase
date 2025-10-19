function generatedPin() {
    const pin = Math.round(Math.random() * 10000);
    document.getElementById("generate-pin").value = pin;
}
function verifyPin() {
    const generatePin = document.getElementById("generate-pin").value;
    const typedPin = document.getElementById("typed-pin").value;
    const successMessage = document.getElementById("pin-success");
    const failureMessage = document.getElementById("pin-failure");
    if (generatePin === typedPin) {
        successMessage.style.display = "block";
        failureMessage.style.display = "none";
    } else {
        failureMessage.style.display = "block";
        successMessage.style.display = "none";
    }
}