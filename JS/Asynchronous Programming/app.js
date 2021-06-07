document.getElementById('btn').addEventListener('click', onLoad);

function onLoad() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
        }
    }
    xhr.send();
}