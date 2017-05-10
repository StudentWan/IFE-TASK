let arr = [
    {
        'name': '小明',
        'chinese': 80,
        'math': 90,
        'english': 70,
        'total': 240
    },
    {
        'name': '小红',
        'chinese': 90,
        'math': 60,
        'english': 90,
        'total': 240
    },
    {
        'name': '小亮',
        'chinese': 60,
        'math': 100,
        'english': 70,
        'total': 230
    }
];

const table = document.getElementsByTagName('table')[0];

render();

const imgs = document.getElementsByTagName('img');

for (let img of imgs) {
    img.onclick = () => {
        if (img.id.slice(-2) === 'up') {
            sortUp(img);
        } else {
            sortDown(img);
        }
    }
}

function sortUp(img) {
    let column = img.parentNode;
    switch (column.id) {
        case 'chinese':
            sortArr(0, 'chinese');
            render();
            break;
        case 'math':
            sortArr(0, 'math');
            render();
            break;
        case 'english':
            sortArr(0, 'english');
            render();
            break;
        case 'total':
            sortArr(0, 'total');
            render();
            break;
        default:
            break;
    }
}

function sortDown(img) {
    let column = img.parentNode;
    switch (column.id) {
        case 'chinese':
            sortArr(1, 'chinese');
            render();
            break;
        case 'math':
            sortArr(1, 'math');
            render();
            break;
        case 'english':
            sortArr(1, 'english');
            render();
            break;
        case 'total':
            sortArr(1, 'total');
            render();
            break;
        default:
            break;
    }
}

function sortArr(seq, column) {
    if (seq === 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if(arr[j][column] > arr[j+1][column]) {
                    let tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
        }
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if(arr[j][column] < arr[j+1][column]) {
                    let tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
        }
    }
    console.log(arr);
}

function render() {
    for (let i = 1; i < table.children[0].children.length; i++) {
        let tr = table.children[0].children[i].children;
        tr[0].innerHTML = arr[i - 1].name;
        tr[1].innerHTML = arr[i - 1].chinese;
        tr[2].innerHTML = arr[i - 1].math;
        tr[3].innerHTML = arr[i - 1].english;
        tr[4].innerHTML = arr[i - 1].total;
    }
}