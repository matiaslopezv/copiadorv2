document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('searchBar').value = ''; // Limpia el campo de búsqueda
    jsonData = originalData.slice(); // Restaura el contenido original
    renderButtons();
});