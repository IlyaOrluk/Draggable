let aspectRatio = document.querySelector('#aspectRatio');
aspectRatio.addEventListener('click' , () => {
    console.log(aspectRatio.value)
});

class Image {
    constructor(x, y, width, height, className, img) {
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height
        this.className = className,
        this.image = document.createElement('div'),
        this.resizeRightBottom = document.createElement('span'),
        this.resizeRight = document.createElement('span'),
        this.resizeBottom = document.createElement('span'),
        this.settings = document.createElement('div'),
        this.setting = document.createElement('div'),
        this.copy = document.createElement('div'),
        this.delete = document.createElement('div'),
        this.img = img,
        this.move = false,
        this.resizeRightBottomDown = false,
        this.resizeRightDown = false,
        this.resizeBottomDown = false
    }
    addElement = () => {
        this.image.className = this.className;
        this.image.style.cssText = `
            position: absolute;
            display; flex;
            justify-content: center;
            align-items: center;
            padding: 1vh;
            width: ${this.width}px;
            height: ${this.height}px;
            min-width: 100px;
            min-height: 100px;
            top: ${this.y}px;
            left: ${this.x}px;
            border: 1px solid #000;
            user-select: none;
            cursor: pointer;
 
        `;
        this.image.innerHTML = `<img class='image' src='${this.img}'/>`;
        document.body.append(this.image);
        this.image.append(this.resizeRightBottom);
        this.resizeRightBottom.className = 'right-bottom-resize';
        this.image.append(this.resizeRight);
        this.resizeRight.className = 'right-resize';
        this.image.append(this.resizeBottom);
        this.resizeBottom.className = 'bottom-resize';
        this.image.append(this.settings);
        this.settings.className = 'settings';
        this.settings.append(this.setting);
        this.setting.className = 'setting';
        this.settings.append(this.copy);
        this.copy.className = 'copy';
        this.settings.append(this.delete);
        this.delete.className = 'delete';
        this.setting.innerHTML = `<i class="fas fa-cog"></i>`;
        this.copy.innerHTML = `<i class="fas fa-copy"></i>`;
        this.delete.innerHTML = `<i class="fas fa-trash"></i>`;

        this.setting.addEventListener('click', () => {
            console.log('setting');
        });
        this.copy.addEventListener('click', () => {
            console.log('copy');
        });
        this.delete.addEventListener('click', () => {
            console.log('delete');
        });

        this.moveElement();
        this.resizeElement();
    }
    moveElement = () => {
        this.image.addEventListener('mousedown', () => {
            this.move = true;
        });
        window.addEventListener('mouseup', () => {
            this.move = false;
            this.resizeRightBottomDown = false;
            this.resizeRightDown = false;
            this.resizeBottomDown = false;
        });

        //move element in window
        window.addEventListener('mousemove', e => {
            if (this.move & !this.resizeRightBottomDown &
                !this.resizeRightDown & !this.resizeBottomDown) {
                let mousePosX = e.clientX, mousePosY = e.clientY;

                this.x = mousePosX - this.width / 2;
                this.y = mousePosY - this.height / 2;
                // if (mousePosX + this.width / 2 > window.innerWidth) {
                //     this.x = window.innerWidth - 10 - this.width;
                // } else if (mousePosX - this.width / 2 < 0) {
                //     this.x = 0 + 10;
                // } else if (mousePosY + this.height / 2 > window.innerHeight) {
                //     this.y = window.innerHeight - 10 - this.height;
                // } else if (mousePosY - this.height / 2 < 0) {
                //     this.y = 0 + 10;
                // }
                this.image.style.top = `${this.y}px`;
                this.image.style.left = `${this.x}px`;
            }
        });
    }
    resizeElement = () => {
        this.resizeRightBottom.addEventListener('mousedown', () => {
            this.resizeRightBottomDown = true;
        });
        this.resizeRight.addEventListener('mousedown', () => {
            this.resizeRightDown = true;
        });
        this.resizeBottom.addEventListener('mousedown', () => {
            this.resizeBottomDown = true;
        });

            window.addEventListener('mousemove', e => {
                let mousePosX = e.clientX, mousePosY = e.clientY;
                this.width = mousePosX-(this.x-this.width/2);
                this.height = mousePosY-(this.y-this.height/2);

                if (this.resizeRightBottomDown) {
                    this.image.style.width = `${this.width/2}px`;
                    this.image.style.height = `${this.height/2}px`;
                    // fixed this resizing method...
                    // this.image.style.top = `${this.y-this.height/2}px`;
                    // this.image.style.left = `${this.x-this.width/2}px`;
                } else if (this.resizeRightDown) {
                    this.image.style.width = `${this.width/2}px`;
                }  else if (this.resizeBottomDown) {
                    this.image.style.height = `${this.height/2}px`;
                }
            });
        
    }
}

let inputPosX = document.querySelector('#posX'),
    inputPosY = document.querySelector('#posY'),
    inputWidth = document.querySelector('#width'),
    inputHeight = document.querySelector('#height'),
    inputClassName = document.querySelector('#className'),
    inputImgPath = document.querySelector('#imgPath'),
    addImageBtn = document.querySelector('.add-image'),
    images = [];

addImageBtn.addEventListener('click', () => {
    console.log(aspectRatio.value)
    images.push(
        new Image(
            inputPosX.value,
            inputPosY.value,
            inputWidth.value,
            inputHeight.value,
            inputClassName.value,
            'https://assets.webiconspng.com/uploads/2017/09/Pokemon-PNG-Image-74059.png'
        )
    );
    images[images.length-1].addElement();
});
