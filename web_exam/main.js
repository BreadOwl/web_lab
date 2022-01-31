'use strict';

async function downloadData() {
    let estabList = document.querySelector('.estab-list');
    let url = "http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=584ac04a-bca6-4605-8670-7d0b864deda8";
    try {
        const response = await fetch(url);
        const estabData = await response.json();
        console.log(estabData);
        estabList.innerHTML = '';
        for (let i = 0; i < estabData.length; i++) {
            estabList.append(estabData[i]);
        }
    } catch (error) { //проверка ошибок
        console.log(error);
    }
}

window.onload = function() {
    downloadData();

}