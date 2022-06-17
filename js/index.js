
const btnEl = document.querySelector(".btn-el");
const tableEl = document.getElementById("table-el");
const countEl = document.getElementById("count-el");
const showTimeEl = document.querySelector(".show-time");

btnEl.addEventListener("click", function () {
    tableEl.innerHTML = "";
    const count = countEl.value;

    // 特別動畫呈現
    if (count == 1) {
        for (let i = 0; i < 10000; i++) {
            setTimeout(function () {
                tableEl.innerHTML = "";
                insertRow(0);
            }, 100);
        }
        return;
    }

    for (let i = 0; i < count; i++) {
        insertRow(i);
    }
});


function insertRow(rowIndex) {
    let numbers = getLottoNumber(1, 49, 6, true);
    const row = tableEl.insertRow(rowIndex);
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i] < 10 ? "0" + numbers[i] : numbers[i];
        row.insertCell(i).innerText = number;
    }
}

function getLottoNumber(start, end, maxCount = 6, specialNumber = true) {
    let count = 0;
    let numbers = [];

    while (true) {
        const number = getRandomNumber(start, end);
        if (!numbers.includes(number)) {
            numbers.push(number);
            if (++count == maxCount) {
                break;
            }
        }
    }

    numbers.sort(function (a, b) {
        return a - b;
    });

    if (specialNumber) {

        numbers.push(getRandomNumber(start, end));
    }

    return numbers;
}


let colorIndex = 0;

function changeColor() {
    colors = ["#ba55d3", "#87cefa", "#1e90ff", "#3cb371", "#fafad2", "#8a002e"];
    document.querySelector('body').style.backgroundColor = colors[colorIndex++];

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function showTime() {
    let NowDate = new Date();
    let day = NowDate.toISOString().substring(0, 10);
    let h = NowDate.getHours();
    let m = NowDate.getMinutes();
    let s = NowDate.getSeconds();
    document.querySelector('.show-time').innerHTML = day + ' ' + h + '時' + m + '分' + s + '秒';
    setTimeout('showTime()', 1000);
}