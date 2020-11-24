const grid = 32;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let cx: number;
let cy: number;

let icx: number;
let icy: number;

let fleft: number;
let ftop: number;

let character: HTMLImageElement;

export function setMainCanvas(canvasElement: HTMLCanvasElement): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');

    cx = canvas.width / 2;
    cy = canvas.height / 2;

    character = new Image();
    character.src = './tema.png';
    character.onload = () => {
        icx = character.naturalWidth / 2;
        icy = character.naturalHeight / 2;
        fleft = cx - icx;
        ftop = cy - icy;
        drawImage();
    };

    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                movef(-1, 0);
                break;
            case 'ArrowRight':
                movef(1, 0);
                break;
            case 'ArrowUp':
                movef(0, -1);
                break;
            case 'ArrowDown':
                movef(0, 1);
                break;
            default:
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawImage();
    });
}

function drawImage() {
    ctx.drawImage(character, fleft, ftop);
}

function movef(x: number, y: number) {
    fleft = (fleft + x * grid + canvas.width) % canvas.width;
    ftop = (ftop + y * grid + canvas.height) % canvas.height;
}
