window.onload = () => {
    const popBtn = document.getElementById('pop-it-up'),
          popOverlay = document.getElementsByClassName('popup-overlay')[0],
          popUp = document.getElementsByClassName('pop-up')[0],
          cancelBtn = document.getElementById('cancel'),
          confirmBtn = document.getElementById('confirm');
    popBtn.onclick = () => {
        popOverlay.style.display = 'inline-block';
        popUp.style.animation = 'slideDown 1s 1 forwards';
    };

    popOverlay.onclick = () => {
        hideLayer();
    };

    popUp.onclick = () => {
        window.event.cancelBubble = true;
        window.event.stopPropagation();
    };

    cancelBtn.onclick = () => {
        hideLayer();
    };

    confirmBtn.onclick = () => {
        hideLayer();
    };

    function hideLayer() {
        popOverlay.style.display = 'none';
    }
};