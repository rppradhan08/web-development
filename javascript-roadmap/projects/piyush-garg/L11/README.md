# Event Listeners in JavaScript

## Introduction
Event listeners are used in JavaScript to handle user interactions with elements on a webpage. They allow developers to execute functions when specific events occur, such as clicks, key presses, mouse movements, or form submissions.

## Adding an Event Listener
The `addEventListener()` method is used to attach an event listener to an element.

### Syntax:
```js
 element.addEventListener(event, function, useCapture);
```
- **event**: The type of event (e.g., `click`, `mouseover`, `keydown`).
- **function**: The function to be executed when the event occurs.
- **useCapture** (optional): A Boolean indicating whether to use event capturing (`true`) or event bubbling (`false`, default).

### Example:
```js
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

## Removing an Event Listener
To remove an event listener, use `removeEventListener()`. The function reference must match exactly.

### Syntax:
```js
element.removeEventListener(event, function, useCapture);
```

### Example:
```js
function handleClick() {
    alert("Button clicked!");
}

document.getElementById("myButton").addEventListener("click", handleClick);
document.getElementById("myButton").removeEventListener("click", handleClick);
```

## Common Events
### Mouse Events:
| Event | Description |
|--------|------------|
| `click` | Fired when an element is clicked |
| `dblclick` | Fired when an element is double-clicked |
| `mouseover` | Fired when the mouse enters an element |
| `mouseout` | Fired when the mouse leaves an element |
| `mousemove` | Fired when the mouse moves over an element |
| `mousedown` | Fired when a mouse button is pressed |
| `mouseup` | Fired when a mouse button is released |

### Keyboard Events:
| Event | Description |
|--------|------------|
| `keydown` | Fired when a key is pressed |
| `keyup` | Fired when a key is released |
| `keypress` | Fired when a key is pressed (deprecated) |

### Form Events:
| Event | Description |
|--------|------------|
| `submit` | Fired when a form is submitted |
| `change` | Fired when an input field changes |
| `focus` | Fired when an element gains focus |
| `blur` | Fired when an element loses focus |

### Window Events:
| Event | Description |
|--------|------------|
| `load` | Fired when a page finishes loading |
| `resize` | Fired when the window is resized |
| `scroll` | Fired when the user scrolls the page |

## Event Propagation: Bubbling vs. Capturing
Events in the DOM propagate in two phases:
1. **Capturing Phase**: The event starts from the root element and propagates downward.
2. **Bubbling Phase**: The event starts from the target element and propagates upward.

By default, event listeners use bubbling (`useCapture = false`). To use capturing, set `useCapture = true`.

### Example:
```js
document.getElementById("outerDiv").addEventListener("click", function() {
    console.log("Outer Div Clicked");
}, true); // Capturing phase

document.getElementById("innerDiv").addEventListener("click", function() {
    console.log("Inner Div Clicked");
}, false); // Bubbling phase
```

## Preventing Default Behavior
Some events have default behaviors (e.g., form submission). Use `preventDefault()` to stop them.

### Example:
```js
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Form submission prevented!");
});
```

## Stopping Event Propagation
To prevent an event from propagating, use `stopPropagation()`.

### Example:
```js
document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation(); // Stops event from reaching parent elements
    alert("Child clicked, but event won't bubble up.");
});
```

## Event Delegation
Instead of adding event listeners to multiple elements, you can use a parent element to listen for events on its children. This is useful for dynamically added elements.

### Example:
```js
document.getElementById("parentList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert("Item clicked: " + event.target.innerText);
    }
});
```

## Summary
- Use `addEventListener()` to attach event listeners.
- Remove listeners with `removeEventListener()`.
- Understand event propagation (bubbling vs. capturing).
- Use `preventDefault()` to stop default behavior.
- Use `stopPropagation()` to prevent event bubbling.
- Leverage event delegation for performance optimization.


