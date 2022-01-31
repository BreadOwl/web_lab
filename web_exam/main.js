function downloadData() {
    let deliveryServices = document.querySelector('.delivery-services');
    let url = new URL(factsList.dataset.url);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = function() {
        renderRecords(this.response.records);
    }
    xhr.send();
}


function deleteBtnHandler(event) {}

window.onload = function() {
    downloadData();
}