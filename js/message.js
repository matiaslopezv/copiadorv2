function showAlert(message) {
    alertMessage.textContent = message;
    alertMessage.style.display = 'block';

    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 500);
}