const traverseDFButton = document.getElementById('traverseDF'),
    traverseBFButton = document.getElementById('traverseBF'),
    root = document.getElementById('root'),
    searchDFButton = document.getElementById('searchDFBtn');
    searchBFButton = document.getElementById('searchBFBtn');

let timer, searchData, searchNode = [];

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
}

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