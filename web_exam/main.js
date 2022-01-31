'use strict';

function dataOutput(estabData) {
    let name = 'name';
    let type = 'typeObject';
    let address = 'address';
    let firstRow = document.createElement('tr');
    firstRow.innerHTML = `
    <th>Название</th>
                        <th>Тип</th>
                        <th>Адрес</th>
                        <th>Действие</th>`;
    document.querySelector('.table').appendChild(firstRow);
    for (let i = 0; i < estabData.length; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${estabData[i][name]}</td>
            <td>${estabData[i][type]}</td>
            <td>${estabData[i][address]}</td>
            <td><button type="button" class="btn btn-light">Выбрать</button></td>
        `;
        document.querySelector('.table').appendChild(row);
    }
}

async function downloadData() {
    let url = "http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=584ac04a-bca6-4605-8670-7d0b864deda8";
    try {
        const response = await fetch(url);
        const estabData = await response.json(); //преобразование данных
        console.log(estabData);
        dataOutput(estabData);
    } catch (error) { //проверка ошибок
        console.log(error);
    }
}

window.onload = function() {
    downloadData();
}