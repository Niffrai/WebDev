function count_rabbits() {
    mouth = prompt ("Номер Месяца");
    num_mount = prompt("День месяца");
    day = prompt("День недели");
    massiv = new Array();
    massiv = ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    var figma = massiv[day];
    massive = new Array();
    massive = ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'
    ];
    var figme = massive[mouth];
    if(mouth >= 0 & mouth <= 12 & day >= 0 & day <= 6 & num_mount > 0 & num_mount <= 30){
        alert(mouth + "/" + figme + "/" + figma);
    }
    else{
        alert("Веденны не корректные данные");
    }
}

function count_rabbitse() {
    enterd = prompt("Введите число");
    if(String(enterd).length == 5){
        alert( eval(enterd.toString().split('').join('+')) + "\n" + eval(enterd.toString().split('').join('*')) );

    }
    else{
        alert("Введите 5значное");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random() {
    enterfirst = prompt("Введите 1 число диапозона");
    entersecond = prompt("Введите 2 число диапозона");
    alert(getRandomInt(entersecond, enterfirst));
}