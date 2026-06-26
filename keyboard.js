const keyMap = {
  'escape': 'esc',
  'capslock': 'caps lock',
  'tab': 'tab ⮂',
  'enter': '↵ enter',
  'backspace': '← delete',
  'shiftleft': '⬆ shift',
  'shiftright': '⬆ shift',
  'controlleft': 'ctrl',
  'controlright': 'ctrl',
  'altleft': '⌥',
  'altright': '⌥',
  'metaleft': '⌘',
  'metaright': '⌘',
  ' ': 'space',
  'arrowleft': '◀',
  'arrowright': '▶',
  'arrowup': '▲',
  'arrowdown': '▼',
  'f1': 'f1', 'f2': 'f2', 'f3': 'f3', 'f4': 'f4',
  'f5': 'f5', 'f6': 'f6', 'f7': 'f7', 'f8': 'f8',
  'f9': 'f9', 'f10': 'f10', 'f11': 'f11', 'f12': 'f12',
  'printscreen': 'prt scn'
};

function findKeyElement(e) {
  
  const codeKey = e.code.toLowerCase();
  const normalKey = e.key.toLowerCase();

  const targetText = keyMap[codeKey] || keyMap[normalKey] || normalKey;

  const keys = document.querySelectorAll('.key');
  for (const key of keys) {
    const letterEl = key.querySelector('.letter');
    if (letterEl && letterEl.textContent.trim().toLowerCase() === targetText) {
      return key;
    }
  }
  return null;
}

document.addEventListener('keydown', (e) => {
  const keyEl = findKeyElement(e);
  if (keyEl) {
    keyEl.classList.add('pressed');
  }
});

document.addEventListener('keyup', (e) => {
  const keyEl = findKeyElement(e);
  if (keyEl) {
    keyEl.classList.remove('pressed');
  }
});