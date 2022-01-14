// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});


// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

// new WebSocket('ws://localhost:3000');
/*

fetch('http://192.168.0.81:3000/src/main.ts')
.then(s => s.text())
.then(t => console.log(t));*/
