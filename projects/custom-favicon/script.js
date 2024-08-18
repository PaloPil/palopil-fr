function update() {
    var link = document.querySelector('link[rel="shortcut icon"]');
    var input = document.querySelector('input#icon');
    let url = input.value;
    if (url.startsWith('http')) {
        link.href = input.value;
    } else {
        alert('Please enter a valid URL');
    }
    
}

document.querySelector('button#update').addEventListener('click', update);