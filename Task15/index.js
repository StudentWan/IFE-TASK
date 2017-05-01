const traverseDFButton = document.getElementById('traverseDF'),
    traverseBFButton = document.getElementById('traverseBF'),
    root = document.getElementById('root'),
    searchDFButton = document.getElementById('searchDFBtn');
    searchBFButton = document.getElementById('searchBFBtn');
    removeButton = document.getElementById('removeBtn');
    addButton = document.getElementById('addBtn');

let timer, searchData, searchNode = [];
let elements = document.getElementsByTagName('div');
let addData = document.getElementById('add');

setInterval(() => {
    for(let element of elements ) {
        element.onclick = () => {
            element.setAttribute('class', 'wait');
            element.style.border = '2px dashed green';
            //阻止事件冒泡
            //非IE
            window.event.cancelBubble = true;
            //IE
            window.event.stopPropagation();
        }
    }
}, 100);


removeButton.onclick = () => {
    searchNodeBF(removeNode, root);
};

addButton.onclick = () => {
    searchNodeBF(addNode, root);
};

traverseDFButton.onclick = () => {
    timer = 0;
    traverseDF(showNode, root);
};

traverseBFButton.onclick = () => {
    timer = 0;
    traverseBF(showNode, root);
};

searchDFButton.onclick = () => {
    searchNode = [];
    timer = 0;
    let divs = document.getElementsByTagName('div');
    [].forEach.call(divs, (div) => {
        div.style.backgroundColor = '#ffffff';
    });
    searchData = document.getElementById('search').value;
    searchNodeDF(showSearch, root);
    setTimeout(function() {
        if(searchNode.length === 0) {
            alert('没有找到节点！');
        }
    }, timer + 10);
};

searchBFButton.onclick = () => {
    searchNode = [];
    timer = 0;
    let divs = document.getElementsByTagName('div');
    [].forEach.call(divs, (div) => {
        div.style.backgroundColor = '#ffffff';
    });
    searchData = document.getElementById('search').value;
    searchNodeBF(showSearch, root);
    setTimeout(function() {
        if(searchNode.length === 0) {
            alert('没有找到节点！');
        }
    }, timer + 10);
};

function traverseDF(shownode, root) {
    (function recurse(node) {
        for (let i = 0, length = node.children.length; i < length; i++) {
            recurse(node.children[i]);
        }
        shownode(node);
    })(root);
}

function traverseBF(shownode, root) {
    let queue = [];
    queue.push(root);

    let currentNode = queue.shift();
    while(currentNode) {
        for(let i = 0, length = currentNode.children.length; i < length; i++){
            queue.push(currentNode.children[i]);
        }
        shownode(currentNode);
        currentNode = queue.shift();
    }
}

function searchNodeDF(showsearch, root) {
    traverseDF(showsearch, root);
}

function searchNodeBF(showsearch, root) {
    traverseBF(showsearch, root);
}


function showNode(node) {
    node.style.backgroundColor = "#ffffff";
    setTimeout(function () {
        node.style.backgroundColor = "#ff524a";
    }, timer += 500);
    setTimeout(function () {
        node.style.backgroundColor = "#ffffff";
    }, timer += 500);
}

function showSearch(node) {
    if (node.title === searchData) {
        setTimeout(function () {
            node.style.backgroundColor = "#ff524a"
        }, timer += 500);
        setTimeout(function () {
        }, timer += 500);
        searchNode.push(node);
    } else {
        node.style.backgroundColor = "#ffffff";
        setTimeout(function () {
            node.style.backgroundColor = "#ff524a";
        }, timer += 500);
        setTimeout(function () {
            node.style.backgroundColor = "#ffffff";
        }, timer += 500);
    }
}

function removeNode(node) {
    if(node.className === 'wait') {
        node.parentNode.removeChild(node);
    }
}

function addNode(node) {
    if(node.className === 'wait'){
        if(addData.value !== "") {
            console.log(addData.value);
            let childNode = document.createElement('div');
            childNode.title = addData.value;
            childNode.innerHTML = addData.value;
            node.appendChild(childNode);
            node.removeAttribute('class');
            node.style.border = '1px solid black';
            elements = document.getElementsByTagName('div');
        }
    }
}