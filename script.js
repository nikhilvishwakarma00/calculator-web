let dis = document.getElementById("display");

function append(value) {
    dis.value += value;
}

function clearDisplay() {
    dis.value = "";
}

function deleteChar() {
    dis.value = dis.value.slice(0, -1);
}

function calculate() {
    try {
        dis.value =  eval(dis.value);
    } catch {
        dis.value = "Error";
    }
}
const keyMap = {
  '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
  '+':'+','-':'-','':'','/':'/','.':'.','%':'%'
};

window.addEventListener('keydown', e => {
  const k = e.key;

  if (keyMap[k]) {                 
    append(keyMap[k]);
    return;
  }

  if (k === 'Enter' || k === '=') { 
    calculate();
    return;
  }

  if (k === 'Backspace') {          
    deleteChar();
    return;
  }

  if (k.toLowerCase() === 'c') {   
    clearDisplay();
  }
});