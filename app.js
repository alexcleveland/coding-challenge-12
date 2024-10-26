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



