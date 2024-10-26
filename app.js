// Task 2  Add canvas setup and event handling logic.

const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let startX = 0;
let startY = 0;
let currentTool = "line";
let color = "#000000";

document.querySelectorAll('input[name="tool"]').forEach(tool => {
    tool.addEventListener("change", () => {
        currentTool = document.querySelector('input[name="tool"]:checked').value;
    });
});

canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", (event) => {
    if (!drawing) return;
    const endX = event.offsetX;
    const endY = event.offsetY;
    drawShape(endX, endY);
});
// task 3 Implement Shape Drawing Logic

function drawShape(endX, endY) {
    ctx.strokeStyle = color;

    if (currentTool === "line") {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    } else if (currentTool === "rectangle") {
        const width = endX - startX;
        const height = endY - startY;
        ctx.strokeRect(startX, startY, width, height);
    } else if (currentTool === "circle") {
        const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}
// task 4 Add Color Selection and Canvas Clearing
document.getElementById("colorPicker").addEventListener("input", (event) => {
    color = event.target.value;
});
document.getElementById("clearCanvasButton").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
