const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', () => {
            const searchValue = searchBar.value.toLowerCase();
            const containers = document.querySelectorAll('.a-padre');

            containers.forEach((container) => {
                const hasMatch = Array.from(container.querySelectorAll('.a1')).some((element) => {
                    return element.textContent.toLowerCase().includes(searchValue);
                });

                if (hasMatch) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            });
        });