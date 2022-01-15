chrome.runtime.onInstalled.addListener(() => {
  console.log(chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  }));
  chrome.windows.create();
});