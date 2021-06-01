'use strict';

function validateName(name) {
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(Number(name[i]))) return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return re.test(phone);
}

function validateDate(date) {
    const daysInMonth = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };
    const day = Number(date.substring(0, 2));
    const month = Number(date.substring(3, 5));
    if (isNaN(day) || isNaN(month) || !(date[2] == '.'
        || date[2] == ',' || date[2] == '/')
        || day < 1 || month < 1 || month > 12
        || day > daysInMonth[month]) return false;
    return true;
}

function validateTime(time) {
    const re = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return re.test(time);
}

function getBookTableData() {
    const name = document.getElementById('book-table-name').value;
    const email = document.getElementById('book-table-email').value;
    const phone = document.getElementById('book-table-phone').value;
    const people = document.getElementById('book-table-people').value;
    const date = document.getElementById('book-table-date').value;
    const time = document.getElementById('book-table-time').value;
}