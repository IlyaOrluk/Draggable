let brick = document.createElement('div');

//add element in DOM
brick.className = 'brick';
brick.style.cssText = `position: fixed; top: 50%; left: 50%; border: 1px solid #000;cursor: pointer;`;
brick.innerHTML = '<strong>BRICK</strong>';
document.body.append(brick);

//check mouse key
let mouseDown = false;
brick.addEventListener('mousedown', () => {
    mouseDown = true;
});
window.addEventListener('mouseup', () => {
    mouseDown = false;
});

//move element in window
window.addEventListener('mousemove', e => {
    if (mouseDown) {
        mousePosX = e.clientX,
        mousePosY = e.clientY;
        posBrick = brick.getBoundingClientRect();

        brick.style.top = `${mousePosY - posBrick.height / 2}px`;
        brick.style.left = `${mousePosX - posBrick.width / 2}px`;
    }
});