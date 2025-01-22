document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("level");
  function calculateDomLevel(el) {
    let level = 0;
    let currentElement = el;

    while (currentElement) {
      level++;
      currentElement = currentElement.parentElement;
    }
    return level;
  }
  if (element) {
    const domLevel = calculateDomLevel(element);
    alert(`The level of the element is: ${domLevel}`);
  } else {
    alert("Element with ID 'level' not found.");
  }
});
