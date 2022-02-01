'use strict';

function sortHighRating(estabData) { //сортировка рейтингов
    let highRating = new Array();
    let rate = "rate";
    let max = 0;
    let maxJ;
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < estabData.length; j++) {
            if (max <= estabData[j][rate]) {
                max = estabData[j][rate];
                maxJ = j;
            }
        }
        highRating.push(estabData[maxJ]);
        estabData[maxJ][rate] = 0;
        max = 0;
    }
    return highRating;
}

function dataOutput(estabData) { //таблица с заведениями
    let name = 'name';
    let type = 'typeObject';
    let address = 'address';
    let highRating = sortHighRating(estabData);
    let firstRow = document.createElement('tr');
    firstRow.innerHTML = `
    <th>Название</th>
                        <th>Тип</th>
                        <th>Адрес</th>
                        <th>Действие</th>`;
    document.querySelector('.table').appendChild(firstRow);
    for (let i = 0; i < 20; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${highRating[i][name]}</td>
            <td>${highRating[i][type]}</td>
            <td>${highRating[i][address]}</td>
            <td><button type="button" class="btn btn-light">Выбрать</button></td>
        `;
        document.querySelector('.table').appendChild(row);
    }
}

async function downloadData() { //загрузка данных с сервера
    let url = "http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=584ac04a-bca6-4605-8670-7d0b864deda8";
    try {
        const response = await fetch(url);
        const estabData = await response.json(); //преобразование данных
        //console.log(estabData);
        dataOutput(estabData);
    } catch (error) { //проверка ошибок
        console.log(error);
    }
}

window.onload = function() {
    downloadData();
}