const qrContainer = document.getElementById("qrContainer");
const buttonGenerateQR = document.getElementById("generateQR")
const inputUrl = document.getElementById("url")
const qr = new QRCode(qrContainer)

buttonGenerateQR.addEventListener("click", (e) => {
    e.preventDefault();
    qr.makeCode(inputUrl.value)
})