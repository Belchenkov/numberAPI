
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);

// For Old Browsers
function getFactAjax(e) {
    e.preventDefault();
    let number = e.target.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number);

    xhr.onload = function() {
        if (this.status == 200 && number != '') {
            fact.style.display = 'block';
            fact.innerHTML = this.responseText;
        }

        if (number == '') {
            fact.style.display = 'none';
        }
    }

    xhr.send();
    
}

// For New Browsers
function getFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (data && number != '') {
                fact.style.display = 'block';
                fact.innerHTML = data;
            }
    
            number ? true : fact.style.display = 'none';
            
        })
        .catch(err => console.log(err));
}