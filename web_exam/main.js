'use strict';

function dataOutput(estabData) {
    for (let i = 0; i < estabData.length; i++) {
        estabList.append(estabData[i]);
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('typeObject').innerHTML = data.typeObject;
        document.getElementById('address').innerHTML = data.job;
    }
}

async function downloadData() {
    let url = "http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=584ac04a-bca6-4605-8670-7d0b864deda8";
    try {
        const response = await fetch(url);
        const estabData = await response.json(); //преобразование данных
        console.log(estabData);
        estabList.innerHTML = '';
        dataOutput(estabData);
    } catch (error) { //проверка ошибок
        console.log(error);
    }
}

window.onload = function() {
    downloadData();
}