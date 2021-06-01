'use strict';
const API = require('./server-api.js');
class form
{
    static validation(value, param) {
        let response = true;
        let re;
        switch (param)
        {
            case 'name':
                for (let i = 0; i < value.length; i++) {
                    if (!isNaN(Number(value[i]))) responce = false;
                }
                break;
            case 'email':
                re = /\S+@\S+\.\S+/;
                response = re.test(value);
                break;
            case 'phone':
                re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                response = re.test(value);
                break;
            case 'date':
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
                const day = Number(value.substring(0, 2));
                const month = Number(value.substring(3, 5));
                if (isNaN(day) || isNaN(month) || !(value[2] == '.'
                    || value[2] == ',' || value[2] == '/')
                    || day < 1 || month < 1 || month > 12
                    || day > daysInMonth[month]) responce = false;
                break;
            case 'time':
                re = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
                response = re.test(value);
                break;
        };
        return response;
    };
    static getBookTableData() {
        const data = {
            name: document.getElementById('book-table-name').value,
            email: document.getElementById('book-table-email').value,
            phone: document.getElementById('book-table-phone').value,
            people: document.getElementById('book-table-people').value,
            date: document.getElementById('book-table-date').value,
            time: document.getElementById('book-table-time').value
        };
        for (const [key, value] of Object.entries(data))
        {
            if ( !this.validation(value, key) ) return key;
        };
        API.postForm(data, 'book');
        return null;
    };
    static getMessage () {
        const data = {
            name: document.getElementsByClassName('name')[0].value,
            email: document.getElementsByClassName('email')[0].value,
            phone: document.getElementsByClassName('phone')[0].value,
            message: document.getElementsByClassName('mess')[0].value
        };
        for (const [key, value] of Object.entries(data))
        {
            if ( !this.validation(value, key) ) return key;
        };
        API.postForm(data, 'message');
       return null;
    };
};
