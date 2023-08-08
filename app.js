function changeTheme() {

    let body = document.body;

    if (document.body.className === 'dark') {
        document.body.className = 'red';
    } else if (document.body.className === 'red') {
        document.body.className = 'light';
    } else {
        document.body.className = 'dark';
    }
    console.log(document.body.className)
}

function saveTextToLocalStorage() {
    let textDivContent = document.getElementById('text-div').innerText;
    localStorage.setItem('textContent', textDivContent);
}

function loadTextFromLocalStorage() {
    let savedText = localStorage.getItem('textContent');
    if (savedText) {
        document.getElementById('text-div').innerText = savedText;
    }
}


document.addEventListener('DOMContentLoaded', loadTextFromLocalStorage);

document.getElementById('text-div').addEventListener('input', saveTextToLocalStorage);


function downloadText() {
    let textDivContent = document.getElementById('text-div').innerText;

    let blob = new Blob([textDivContent], {type: 'text/plain'});
    
    let url = URL.createObjectURL(blob);

    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'new-document.txt';

    downloadLink.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(downloadLink);
}

function fullscreenWindow() {
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
        let element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (mozRequestFullscreen) {
            element.mozRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}


function countChars() {
    const textDivContent = document.getElementById('text-div').innerText;
    
    const trimmedText = textDivContent.trim();
   
    return trimmedText.length;
}


function updateCharCount() {
    const charCountElement = document.getElementById('char-count');

    const count = countChars();

    charCountElement.textContent = `Numero di caratteri: ${count}`;
}

document.getElementById('text-div').addEventListener('input', updateCharCount)






function countWords() {

    const textDivContent = document.getElementById('text-div').innerText;
    
    const dataArray = textDivContent.trim().split(/\s+/);

    const wordArray = dataArray.filter(word => word !== '');

    return wordArray.length;
}




function updateWordCount() {
    const wordCountElement = document.getElementById('word-count');

    const count = countWords();

    wordCountElement.textContent = `Numero di parole: ${count}`;
}

document.getElementById('text-div').addEventListener('input', updateWordCount);



const converter = new showdown.Converter();

let isHtml = true;

function toggleConversion() {
    const textDiv = document.getElementById('text-div');
    const textContent = textDiv.textContent;
    

    if (isHtml) {
        const markdownText = converter.makeMarkdown(textContent);
        textDiv.innerHTML = markdownText;
    } else {
        const htmlText = converter.makeHtml(textContent);
        textDiv.innerHTML = htmlText;
    }
    isHtml = !isHtml;
}

console.log(toggleConversion())


function downloadPage() {
   const pageContent = document.documentElement.outerHTML;
   
   const blob = new Blob([pageContent], { type: 'text/html'});
   const url = URL.createObjectURL(blob);

   const downloadLink = document.createElement('a');
   downloadLink.href = url;
   downloadLink.download = 'page.html';

   downloadLink.click();

   URL.revokeObjectURL(url);
   document.body.removeChild(downloadLink);
}
