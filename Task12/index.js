let count = 0;
const leftIn = document.getElementById('left_in')
    , rightIn = document.getElementById('right_in')
    , leftOut = document.getElementById('left_out')
    , rightOut = document.getElementById('right_out')
    , select = document.getElementById('select')
    , selectInput = document.getElementById('select_input')
    , ulNode = document.getElementsByTagName('ul')[0]
    , pattern = /[\u4e00-\u9fa5_a-zA-Z0-9]+/g;

leftIn.onclick = () => {
    if (count < 60) {
        let liNode;
        let dataSet = handleData();
        for (let data of dataSet) {
            liNode = add(data);
            let firstLiNode = ulNode.firstChild;
            ulNode.insertBefore(liNode, firstLiNode);
            count++;
        }
    } else {
        alert('元素个数不能大于60个！');
    }
}

rightIn.onclick = () => {
    if (count < 60) {
        let dataSet = handleData();
        let liNode;
        for (let data of dataSet) {
            liNode = add(data);
            ulNode.appendChild(liNode);
            count++;
        }
    } else {
        alert('元素个数不能大于60个！');
    }
}

leftOut.onclick = () => {
    let remove = ulNode.firstChild;
    delElement(remove);
    if (remove.name !== undefined) {
        alert(remove.name);
    }
}

rightOut.onclick = () => {
    let remove = ulNode.lastChild;
    delElement(remove);
    if (remove.name !== undefined) {
        alert(remove.name);
    }
}

select.onclick = () => {
    let selectData = selectInput.value;
    let liNodes = ulNode.children;
    for (let liNode of liNodes) {
        let patternReplace = '/' + selectData + '/g';
        let patternRecoverSpanFirst = /<span>/g;
        let patternRecoverSpanLast = /<\/span>/g;
        liNode.innerHTML = liNode.innerHTML.replace(patternRecoverSpanFirst, '');
        liNode.innerHTML = liNode.innerHTML.replace(patternRecoverSpanLast, '');
        liNode.innerHTML = liNode.innerHTML.replace(eval(patternReplace), '<span>' + selectData + '</span>');
    }
}

function delElement(obj) {
    if (count > 0) {
        obj.parentNode.removeChild(obj);
        count--;
    }
}

function add(data) {
    let liNode = document.createElement('li');
    //重要
    liNode.setAttribute('onclick', 'delElement(this);');
    liNode.setAttribute('name', data);
    liNode.innerHTML = data;
    return liNode;
}

function handleData() {
    let data = document.getElementById('data');
    let result = data.value.match(pattern);
    return result;
}

