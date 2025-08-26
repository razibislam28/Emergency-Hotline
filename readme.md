### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1. Differences between getElementById, getElementsByClassName, and querySelector, querySelectorAll. As an example getElementById("idName"). It is used when you want to access an element and there is an id attributed to it which is unique and must be used to access the element. It returns only one element or null if it does not exist. getElementsByClassName("className") returns a live html collection of all the elements which for the class. It is live in the sense that if new elements which have that class are added, the list gets updated. querySelector("css-selector") returns the first element that is found for the given css selector which can be an id, class, tag or even an attribute. querySelectorAll("css-selector"). This retrieves a static NodeList of all the elements that were matched. Static means that it is not dynamic and does not update if there are any changes in the DOM.

In short: use getElementById for unique ids, getElementsByClassName for many elements that have the same class, and querySelector or querySelectorAll for when you need the power of CSS selectors.

2. Describe the process to create and insert a new element into the DOM. Steps:
   a) With create the element:
   const div = document.createElement("div");

   b) Set content or attributes:

div.textContent = "Hello World"; div.classList.add("box");
c) Insert into DOM:
document.body.appendChild(div);  
There are other methods such as prepend(), insertBefore(), or even innerHTML if you want to inject markup directly.

3. What is Event Bubbling and How does it Work?

Event bubbling is when just clicking an element runs the event on that element and it proceeds to the parent and to the grandparent, all the way to document.

For example, click on a button inside a <div>. The button’s click handler runs first followed by the div’s and then the body’s.

4. What is Event Delegation in JavaScript? Why is it Useful?

Putting a listener on every small element is costly. Instead, event delegation logs a listener on a common parent and waits for the event to rise. In the handler, you identify which child was clicked using event.target or using closest().

Why is it Useful?

Saves on memory, only one listener is used instead of multiple. Works for elements that are added or changed afterwards. Dynamic DOM. Better structured code.

5. Difference between preventDefault() and stopPropagation()

preventDefault()
does the action the browser does normally, but does not allow to happen.
For example, preventing a form from submitting or a link from navigating.

stopPropagation()
events an event from bubbling to parent elements.
For example, a button is inside a div and that div has a click handler. Calling this would stop the div’s handler from firing.
