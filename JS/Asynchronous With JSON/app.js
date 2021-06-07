document.getElementById('btn').addEventListener('click', onload);

function onload(e) {
    
    console.log("wellcome brootherr");

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.JSON', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers
                .forEach(function (customer) {
                    output += `<ul>
                  <li>ID: ${customer.id}</li>
                  <li>Name: ${customer.name}</li>
                  <li>Company: ${customer.company}</li>
                  <li>Phone: ${customer.phone}</li>  
             </ul>`;
                });
     
     document.getElementById('list').innerHTML=output;

        }
    }

    xhr.send();
}