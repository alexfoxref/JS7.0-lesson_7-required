'use strict';

function getDayRus(date) {
    let num = date.getDay();

    switch (num) {
    case 0:
    return 'Воскресенье';
    break;
    case 1:
    return 'Понедельник';
    break;
    case 2:
    return 'Вторник';
    break;
    case 3:
    return 'Среда';
    break;
    case 4:
    return 'Четверг';
    break;
    case 5:
    return 'Пятница';
    break;
    case 6:
    return 'Суббота';
    break;
    }
}

let dynaicTime = setInterval(function () {
    let dat = new Date();
    const dateNow = document.querySelector('.date-now');

    dateNow.innerText = `${fixDate(dat.getHours())}:${fixDate(dat.getMinutes())}:${fixDate(dat.getSeconds())} ${fixDate(dat.getDate())}.${fixDate(dat.getMonth() + 1)}.${dat.getFullYear()} ${getDayRus(dat)}`;
}, 1000);


function getTime(date) {
    let day = +date.value.slice(0, date.value.indexOf("/")),
        month = date.value.slice( (date.value.indexOf("/") + 1), date.value.lastIndexOf("/") ) - 1,
        year = +date.value.slice(date.value.lastIndexOf("/") + 1),
        time = new Date();

    if ( date.value != '' && typeof(day) === 'number' && typeof(month) === 'number' && typeof(year) === 'number' &&
        day > 0 && day <= 31 && month >= 0 && month < 12 ) {
            if (year == 0) {
               year = dat.getFullYear();
            };
            return +time.setFullYear(year, month, day);
        } else {return false};
}

function fixDate(num) {
    let str = '' + num;
    if (str.length == 1) {
        str = '0' + str;
    };
    return(str);
}