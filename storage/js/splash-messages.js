const phrases = [
    `7-7-7-8`,
    `ION Game Vault`,
    `Phoenix Games`,
    `7-7-7-9`,
    `7-7-7-10`,
     `US4 clone`,
  `7-7-7-11`,
    
];

const paragraph = document.getElementById('dynamicParagraph');

paragraph.style.userSelect = 'none';

function changeText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    if (typeof randomPhrase === "string") {
        paragraph.textContent = randomPhrase;
    } else if (randomPhrase.type === "image") {
        paragraph.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: ${randomPhrase.width};">`;
    } else if (randomPhrase.type === "video") {
        paragraph.innerHTML = `<video ${randomPhrase.other} autoplay style="max-width: ${randomPhrase.width}; height: auto; "> <source src="${randomPhrase.src}" type="video/mp4"> </video>`;
    }
}

paragraph.addEventListener('click', changeText);
window.onload = changeText;
