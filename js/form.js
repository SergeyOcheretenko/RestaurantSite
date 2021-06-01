'use strict';

function nameValidation(name) {
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(Number(name[i]))) return false;
    }
    return true;
}

function getBookTableData() {
    const name = document.getElementById('book-table-name').value;
    const email = document.getElementById('book-table-email').value;
    const phone = document.getElementById('book-table-phone').value;
    const people = document.getElementById('book-table-people').value;
    const date = document.getElementById('book-table-date').value;
    const time = document.getElementById('book-table-time').value;
    console.log([name, email, phone, people, date, time]);
    console.log(nameValidation(name));
}