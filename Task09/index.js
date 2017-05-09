let leftIn = document.getElementById('left_in');
let rightIn = document.getElementById('right_in');
let leftOut = document.getElementById('left_out');
let rightOut = document.getElementById('right_out');
let random = document.getElementById('random');
let sort = document.getElementById('sort');
let ulNode = document.getElementsByTagName('ul')[0];
let count = 0;

random.onclick = () => {
    for (let i = 0; i < 10; i++) {
        let data = Math.floor(Math.random() * 91 + 10);
        if (count <= 60) {
            let check = isNumber(data);
            if (check === true) {
                let firstLiNode = ulNode.firstChild;
                let liNode = document.createElement('li');
                //重要
                liNode.setAttribute('onclick', 'delElement(this);');
                liNode.style.height = data + 'px';
                liNode.value = data;
                ulNode.insertBefore(liNode, firstLiNode);
                count++;
            }
        }
    }
}

leftIn.onclick = () => {
    if(count <= 60) {
        let data = document.getElementById('data');
        let check = isNumber(data.value);
        if(check === true){
            let firstLiNode = ulNode.firstChild;
            let liNode = document.createElement('li');
            //重要
            liNode.setAttribute('onclick', 'delElement(this);');
            liNode.style.height = data.value + 'px';
            liNode.value = data.value;
            ulNode.insertBefore(liNode, firstLiNode);
            count ++;
        }
    } else {
        alert('元素个数不能大于60个！');
    }
}

rightIn.onclick = () => {
    if( count <= 60) {
        let data = document.getElementById('data');
        let check = isNumber(data.value);
        if (check === true) {
            let liNode = document.createElement('li');
            liNode.setAttribute('onclick', 'delElement(this);');
            liNode.style.height = data.value + 'px';
            liNode.value = data.value;
            ulNode.appendChild(liNode);
            count++;
        }
    } else {
        alert('元素个数不能大于60个！');
    }
}

leftOut.onclick = () => {
    let remove = ulNode.firstChild;
    delElement(ulNode.firstChild);
    if(remove.value !== undefined) {
        alert(remove.value);
    }
}

rightOut.onclick = () => {
    let remove = ulNode.lastChild;
    delElement(ulNode.lastChild);
    if(remove.value !== undefined) {
        alert(remove.value);
    }
}

function delElement(obj) {
    if(count > 0) {
        obj.parentNode.removeChild(obj);
        count --;
    }
}

function isNumber(data) {
    if(data === "") {
        return false;
    }
    return (!isNaN(data)) && (data >= 10) && (data <= 100);
}



sort.onclick = function() {
    for(let i = 0; i < ulNode.children.length; i++) {
        for(let j = 0; j <ulNode.children.length - 1 - i; j++){
            setTimeout(() => {
                if(ulNode.children[j].value > ulNode.children[j+1].value) {
                    ulNode.insertBefore(ulNode.children[j+1], ulNode.children[j]);
                }
            }, 50);
        }
    }
}
