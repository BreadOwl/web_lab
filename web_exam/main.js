
function renderRecords(records) {
    let deliveryServices = document.querySelector('.delivery-services');
    deliveryServices.innerHTML = '';
    for (let i = 0; i < records.length; i++) {
        deliveryServices.append(createListItemElement(records[i]));
    }
    console.log(deliveryServices);
}

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


function deleteBtnHandler(event) {
}

window.onload = function() {
    downloadData();
}