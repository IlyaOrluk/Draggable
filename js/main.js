class Brick {
    constructor(x, y, className, string){
        this.x = x,
        this.y = y,
        this.className = className,
        this.brick = document.createElement('div'),
        this.innerString = string,
        this.mouseDown = false
    }
    addElement = () => {
        this.brick.className = this.className;
        this.brick.style.cssText = `
            position: fixed;
            padding: 1vh;
            top: ${this.y}px;
            left: ${this.x}px;
            border: 1px solid #000;
            user-select: none;
            cursor: pointer;
        `;
        this.brick.innerHTML = `<strong>${this.innerString}</strong>`;
        document.body.append(this.brick);
        this.moveElement();
    }
    moveElement = () => {
        this.brick.addEventListener('mousedown', () => {
            this.mouseDown = true;
        });

        window.addEventListener('mouseup', () => {
            this.mouseDown = false;
        });
        
        //move element in window
        window.addEventListener('mousemove', e => {
            if (this.mouseDown) {
               let mousePosX = e.clientX, mousePosY = e.clientY,
                posBrick = this.brick.getBoundingClientRect();
                this.x = mousePosX - posBrick.width / 2;
                this.y = mousePosY - posBrick.height / 2;
                this.brick.style.top = `${this.y}px`;
                this.brick.style.left = `${this.x}px`;
            }
        });
    }
}

const brick1 = new Brick(100, 100, 'brick', 'BRICK1');
brick1.addElement();
const brick2 = new Brick(300, 300, 'brick', 'BRICK2');
brick2.addElement();