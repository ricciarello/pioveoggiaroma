// Database delle frasi divertenti in romanesco
const FRASI_PIOVE = [
    "Ahò, butta male, piove a secchi! ☔",
    "Sta a piovve a catinelle! Te conviene stà a casa a fà i rigatoni. 🍝",
    "Esci solo se c'hai er gommone o se sai nuotà bene! 🏊",
    "Prendi l'ombrello o te ritrovi fradicio come 'n pulcino! 🐥",
    "Sta a piovve così tanto che i sampietrini stanno a fassi er bidet. 🚿",
    "Mamma mia che guazza, oggi la carbonara ce la famo dentro casa! 🏠"
];

const FRASI_SOLE = [
    "Ma che piove! C'è un sole che spacca le pietre! ☀️",
    "Ma va' a faticà! Oggi gnente acqua, esci e gòditela! 😎",
    "Clima perfetto per un supplì bollente e due passi a Trastevere! ☄️",
    "Cielo così pulito che vedi er Cupolone pure da lontano! Esci! ⛪",
    "Sta sereno, l'unici goccioloni oggi saranno quelli de sudore! 🥵",
    "Manco 'na nuvola. Esci a fa' er figo in centro! 🚶‍♂️"
];

let pioveOggi = false;

// Funzione principale per verificare il meteo a Roma
async function checkMeteoRoma() {
    const answerEl = document.getElementById('answer');
    const commentEl = document.getElementById('comment');
    const bgContainer = document.getElementById('weather-background');
    
    try {
        // Roma: Lat 41.8919, Lon 12.5113
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.8919&longitude=12.5113&current=weather_code');
        if (!res.ok) throw new Error('API Error');
        
        const data = await res.json();
        const code = data.current.weather_code;
        
        // Codici WMO per pioggia (pioggerella, pioggia, temporale, rovesci)
        const codiciPioggia = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
        pioveOggi = codiciPioggia.includes(code);
        
        // Rimuoviamo lo stato di loading
        document.body.classList.remove('loading');
        
        if (pioveOggi) {
            document.body.classList.add('theme-rain');
            answerEl.innerText = "SÌ";
            commentEl.innerText = getRandomElement(FRASI_PIOVE);
            attivaEffettoPioggia(bgContainer);
        } else {
            document.body.classList.add('theme-dry');
            answerEl.innerText = "NO";
            commentEl.innerText = getRandomElement(FRASI_SOLE);
            attivaEffettoSole(bgContainer);
        }
        
    } catch (err) {
        // Gestione errore simpatico
        document.body.classList.remove('loading');
        answerEl.innerText = "BOH";
        commentEl.innerText = "Ahò, er satellite s'è impallato, affacciati alla finestra! 🪟";
    }
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Genera pioggia animata in CSS
function attivaEffettoPioggia(container) {
    container.innerHTML = '';
    const dropCount = 40;
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.top = `${Math.random() * -50}px`;
        drop.style.animationDuration = `${0.5 + Math.random() * 0.8}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(drop);
    }
}

// Genera un sole splendente sfumato
function attivaEffettoSole(container) {
    container.innerHTML = '<div class="sun-element"></div>';
}

// Pulsante interattivo per nuove battute romane
document.getElementById('btn-romano').addEventListener('click', () => {
    const commentEl = document.getElementById('comment');
    
    // Aggiunge un effetto di transizione
    commentEl.style.animation = 'none';
    commentEl.offsetHeight; // Trigger reflow
    commentEl.style.animation = 'fadeIn 0.5s ease-out';
    
    if (pioveOggi) {
        commentEl.innerText = getRandomElement(FRASI_PIOVE);
    } else {
        commentEl.innerText = getRandomElement(FRASI_SOLE);
    }
});

// Avvia il controllo all'avvio della pagina
checkMeteoRoma();