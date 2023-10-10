document.addEventListener('DOMContentLoaded', function () {
    const andmed = [
        { nimi: "Mari Maasikas", isikukood: "38705123568" },
        { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
        { nimi: "Kristiina Kukk", isikukood: "39203029876" },
        { nimi: "Margus Mustikas", isikukood: "49807010346" },
        { nimi: "Jaak Järve", isikukood: "39504234985" },
        { nimi: "Kadi Kask", isikukood: "39811136789" }
    ];

    const addForm = document.getElementById('add-form');
    const dataTableBody = document.getElementById('data-table-body');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const isikukood = document.getElementById('isikukood').value;

        andmed.push({ nimi: name, isikukood: isikukood });

        renderTable();
    });

    function renderTable() {
        dataTableBody.innerHTML = '';

        andmed.forEach(function (data, index) {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = data.nimi;
            row.appendChild(nameCell);

            const isikukoodCell = document.createElement('td');
            isikukoodCell.textContent = data.isikukood;
            row.appendChild(isikukoodCell);

            const birthdateCell = document.createElement('td');
            const birthdate = getBirthdateFromIsikukood(data.isikukood);
            birthdateCell.textContent = birthdate;
            row.appendChild(birthdateCell);

            const ageCell = document.createElement('td');
            const age = calculateAge(birthdate);
            ageCell.textContent = age;
            row.appendChild(ageCell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Kustuta';
            deleteButton.addEventListener('click', function () {
                andmed.splice(index, 1);

                renderTable();
            });
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            dataTableBody.appendChild(row);
        });
    }

    function getBirthdateFromIsikukood(isikukood) {
        const day = isikukood.substring(5, 7);
        const month = isikukood.substring(3, 5);
        const year = '19' + isikukood.substring(1, 3); 

        return day + '.' + month + '.' + year;
    }

    function calculateAge(birthdate) {
        const birthdateParts = birthdate.split('.');
        const birthYear = parseInt(birthdateParts[2]);
        const currentYear = new Date().getFullYear();

        return currentYear - birthYear;
    }

    renderTable();
});
