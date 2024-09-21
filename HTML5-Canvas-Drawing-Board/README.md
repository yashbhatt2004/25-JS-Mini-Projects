# HTML5 Canvas Drawing Board
This project is a simple drawing application built using the HTML5 <canvas> element and JavaScript. It allows users to draw colorful, dynamic lines that change in width and hue as they move the mouse across the canvas.

## Features
* **Dynamic Drawing**: Draw continuous lines on the canvas using the mouse. The line color changes through the HSL color spectrum and its width varies dynamically as you draw.
* **Smooth Strokes**: The lines are drawn with smooth edges (round line caps and joins) for a polished look.
* **Canvas Resizing**: The canvas automatically adjusts to the size of the browser window.

* **Interactive Controls**:
1. Press and hold the mouse button to start drawing.
2. Release the mouse button or move it out of the canvas area to stop drawing.

## How It Works

* ### Canvas Setup
The canvas is selected using document.querySelector('#drawing-board').
Its dimensions are set to match the width and height of the browser window.
The ctx object is the 2D drawing context that provides methods and properties to draw on the canvas.

* ### Drawing Logic
The drawing begins when the mouse button is pressed (mousedown event) and continues while the mouse is moved (mousemove event).
The line's color is determined by a hue value that cycles through the color spectrum (using HSL values).
The line's width increases or decreases between 1 and 200 pixels, alternating direction whenever it hits these bounds.
The strokeStyle, lineCap, and lineJoin properties are used to define the style of the lines being drawn.

## Getting Started:

1. **Clone the repository**:
```bash
git clone https://github.com/yashbhatt2004/todo-list-app.git
```
2. **Navigate to the project directory**:
``` bash
cd todo-list
```
3. **Open index.html in your preferred browser**.
```perl
file:///path/to/drum-kit-project/index.html
```


## Future Improvements
* Creating a clear/reset button to erase the canvas.
* Allowing users to adjust brush settings (color, size) via a UI.

## Acknowledgments
**Wes Bos**: A huge shoutout to Wes Bos for his amazing tutorials and guidance that helped shape this project. His JavaScript30 course provided the foundation for learning how to use HTML5 Canvas and JavaScript together in fun, interactive ways.

## Tech Stack
HTML5 Canvas: For drawing on the web.
JavaScript: For handling canvas rendering and user interaction.

## License
This project is licensed under the MIT License. Feel free to use and modify the code as needed.