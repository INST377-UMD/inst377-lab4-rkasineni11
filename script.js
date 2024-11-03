function alertMe() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hello ${name}`);
    }
}

function changeColor() {
    const body = document.body;
    if (body.style.backgroundColor === 'lightblue') {
        body.style.backgroundColor = 'lightgreen';
    } else {
        body.style.backgroundColor = 'lightblue';
    }
}

function validateText() {
    const text = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('Please remove special characters from the text.');
    } else {
        alert('The text is valid!');
    }
}

function addText() {
    const heading = document.getElementById('page-heading');
    heading.textContent += ' - Adding Text';
}
