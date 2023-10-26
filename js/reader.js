const formFileSm = document.getElementById('formFileSm');
        const buttonContainer = document.getElementById('buttonContainer');
        const alertMessage = document.getElementById('alertMessage');
        let classCounter = 1;
        let jsonData = [];
        let originalData = []; // Guarda el contenido original

        formFileSm.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                originalData = jsonData.slice(); // Guarda una copia del contenido original
                renderButtons();
            };

            reader.readAsBinaryString(file);
        });

        