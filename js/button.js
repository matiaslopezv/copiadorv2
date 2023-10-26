function renderButtons() {
    buttonContainer.innerHTML = '';
    let rowContainer = null;

    jsonData.forEach((row) => {
        row.forEach((cellData) => {
            if (classCounter === 1) {
                rowContainer = document.createElement('div');
                rowContainer.classList.add('a-padre');
                rowContainer.classList.add('container');
                rowContainer.classList.add('mt-3');
                buttonContainer.appendChild(rowContainer);
            }

            const buttonCell = document.createElement('div');
            buttonCell.className = 'button-cell';
            buttonCell.innerHTML = `<span class="cell-data">${cellData || ''}</span>`;
            buttonCell.classList.add(`a${classCounter}`);
            buttonCell.classList.add('container');
            buttonCell.addEventListener('click', () => {
                const text = cellData || '';
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showAlert('Texto copiado al portapapeles');
            });

            rowContainer.appendChild(buttonCell);
            classCounter = 3 - classCounter;
        });
    });
}