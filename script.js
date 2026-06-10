// ☔ 31 frasi per la PIOGGIA
const FRASI_PIOVE = [
    "Ao, butta male, piove a secchi! ☔",
    "Sta a piovve a catinelle! Te conviene stà a casa a fà i rigatoni. 🍝",
    "Esci solo se c'hai er gommone o se sai nuotà bene! 🏊",
    "Prendi l'ombrello o te ritrovi fradicio come 'n pulcino! 🐥",
    "Sta a piovve così tanto che i sampietrini stanno a fassi er bidet. 🚿",
    "Mamma mia che guazza, oggi la carbonara ce la famo dentro casa! 🏠",
    "C'è 'na guazza che pare er diluvio universale. Arca de Noè cercasi! 🚢",
    "Se esci oggi, te si spiaccicano pure i pensieri. Resta ar calduccio! 🛏️",
    "L'acqua viene giù che pare tirata col secchio direttamente dal cielo! 🪣",
    "Er Grande Raccordo Anulare oggi è diventato un'attrazione acquatica. 🌊",
    "Se vedi er Tevere, stai a salutà i ponti. Coprite bene! 🌉",
    "Er cielo c'ha er dente avvelenato. Piove che è 'na bellezza... si fa pe' dì. ⛈️",
    "Se esci senza ombrello fai prima a farti 'na doccia cor bagnoschiuma. 🧼",
    "Oggi pioggia 'ncoppata. Te conviene stappà 'na bottiglia de rosso. 🍷",
    "Le pozzanghere so' talmente grandi che c'hanno er codice postale loro. ✉️",
    "Ao, pure i piccioni oggi c'hanno l'impermeabile! 🐦",
    "Nuvole nere che sembrano er carbone della Befana. Sta a piovve! ☁️",
    "Prendi lo scafandro prima de mette piede fori da casa! 👨‍🚀",
    "A Roma co' du' gocce d'acqua se crea er panico peggio de un'invasione aliena. 👽",
    "Che tempo da lupi! Ma manco la lupa capitolina uscirebbe oggi. 🐺",
    "Se esci te si bagnano pure i sogni. Stattene bono a letto. 🛌",
    "Piove così tanto che er Cupolone sembra che sta sotto la doccia. ⛪",
    "Mettiti gli stivali de gomma, quelli alti fino alle recchie! 👢",
    "Te volevi fa' la passeggiata a Villa Borghese? Sì, ar nuoto! 🏊‍♂️",
    "Oggi l'unica cosa asciutta a Roma è er portafoglio mio. 💸",
    "Piove forte forte. Anche er gatto de piazza Argentina se n'è andato. 🐱",
    "Manco Noè sarebbe uscito oggi senza ombrello. 🌂",
    "Sta a diluviare talmente che i turisti hanno preso er gommone per girà er centro. 🤿",
    "Oggi Roma è 'na piscina. E nessuno ha portato er costume. 🩱",
    "Se provi ad aprì er finestrino dell'auto, entri nell'Atlantide. 🌊",
    "Er cielo piange più de 'na nonna al matrimonio. Roba seria. 😭"
];

// ☀️ 31 frasi per il SOLE
const FRASI_SOLE = [
    "Ma che piove! C'è un sole che spacca le pietre! ☀️",
    "Ma va' a faticà! Oggi gnente acqua, esci e gòditela! 😎",
    "Clima perfetto per un supplì bollente e due passi a Trastevere! ☄️",
    "Cielo così pulito che vedi er Cupolone pure da lontano! Esci! ⛪",
    "Sta sereno, l'unici goccioloni oggi saranno quelli de sudore! 🥵",
    "Manco 'na nuvola. Esci a fa' er figo in centro! 🚶‍♂️",
    "Giornata da porchetta a Frascati e gita fori porta! 🐷",
    "Er sole oggi picchia più de un pugile a Campo de' Fiori! 🥊",
    "Sole che brilla, i sampietrini scottano... perfetto per i turisti in infradito! 🩴",
    "Giornata da gelato a Piazza Navona senza pensieri. 🍦",
    "Manco l'ombra de 'na nuvoletta. Clima da mare a Ostia! 🏖️",
    "Er cielo è così azzurro che sembra dipinto da Michelangelo. 🎨",
    "Oggi er sole t'abbraccia caldo caldo. Esci a pija' un po' de tintarella! 🧴",
    "Ma quale ombrello, oggi ce vonno gli occhiali da sole da divo! 🕶️",
    "Giornata spettacolare! Esci a farti 'n aperitivo a Campo de' Fiori. 🍹",
    "Clima da grattachecca alla Sora Maria! Rinfrescate che fa caldo. 🍧",
    "Oggi se sta da papa! Aria fresca, sole caldo e Roma splendida. 👑",
    "Er sole splende, la città frigge... andamo a fa' du' passi al Gianicolo! ⛰️",
    "Oggi pure i gatti del Pantheon stanno a pija' er sole. 🐱",
    "Giornata da passeggiata eterna nei vicoli de Trastevere. 🧱",
    "Aria pulita (strano ma vero!) e sole splendente. Goditi 'sta giornata! 🌤️",
    "Er sole oggi dice: svegliati e va' a magnà 'na pizza ar taglio! 🍕",
    "Tempo perfetto per perdersi tra le bellezze de Roma senza bagnarsi! 🗺️",
    "Oggi c'è 'na luce che fa sembrà ogni vicolo un capolavoro. 📸",
    "Se rimani a casa oggi con questo sole, sei un pigro patentato! 📜",
    "Che giornata, ragazzi! Roba che ti riconcilia col mondo intero. 🌍",
    "Oggi er sole brilla così tanto che pure i centurioni al Colosseo sorridono! ⚔️",
    "Nessuna scusa pe' sta' a casa. Roma t'aspetta tutta illuminata. 🏛️",
    "Cielo terso, aria buona... quasi quasi me faccio piacè 'sta città. 😌",
    "Oggi er Tevere luccica de oro. Esci a vedello prima che cambia idea. ✨",
    "Sole così bello che manco er traffico sul Raccordo riesce a rovinà la giornata. 🚗"
];

// Frasi domani
const FRASI_DOMANI_SI = [
    "Domani pure... tieniti er gommone a portata de mano! 🚢",
    "Anche domani piove. Roma non molla. ☔",
    "Due giorni di fila. Er cielo ce l'ha co' noi. ⛈️",
    "Preparate le zuppiere, domani si continua. 🍲",
    "Mannaggia, anche domani guazza. Stai a casa e fatti du' rigatoni. 🍝"
];

const FRASI_DOMANI_NEMMENO = [
    "Nemmeno domani. Due giorni de pace, goditi! ☀️",
    "Domani neanche l'ombra de 'na goccia. Siamo salvi! 😎",
    "Zero pioggia anche domani. Er cielo s'è calmato. 🌤️",
    "Domani sole pure. Organizzate la gita a Frascati! 🐷",
    "Manco domani piove. Due giorni da vivere all'aperto! 🌍"
];

const FRASI_DOMANI_PURE = [
    "Oggi sì, domani pure. Tieniti er gommone fuori! 🌊",
    "Piove oggi, piove domani. Er Raccordo è già allagato. ☔",
    "Pure domani, eh. Preparate le zuppiere. 🍲",
    "Oggi e domani guazza. Er cielo se sta sfogando. ⛈️",
    "Domani pure, mannaggia. Comprati un impermeabile serio. 🧥"
];

let pioveOggi = false;
let pioveDomani = false;
let fraseSelezionata = "";

async function checkMeteoRoma() {
    const answerEl = document.getElementById('answer');
    const commentEl = document.getElementById('comment');
    const bgContainer = document.getElementById('weather-background');

    try {
        const res = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=41.8919&longitude=12.5113&current=weather_code&daily=weather_code&forecast_days=2&timezone=Europe%2FRome'
        );
        if (!res.ok) throw new Error('API Error');

        const data = await res.json();
        const codeOggi = data.current.weather_code;
        const codeDomani = data.daily.weather_code[1]; // indice 1 = domani

        const codiciPioggia = [51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99];
        pioveOggi = codiciPioggia.includes(codeOggi);
        pioveDomani = codiciPioggia.includes(codeDomani);

        document.body.classList.remove('loading');

        if (pioveOggi) {
            document.body.classList.add('theme-rain');
            answerEl.innerText = "SÌ";
            fraseSelezionata = getRandomElement(FRASI_PIOVE);
            commentEl.innerText = fraseSelezionata;
            attivaEffettoPioggia(bgContainer);
        } else {
            document.body.classList.add('theme-dry');
            answerEl.innerText = "NO";
            fraseSelezionata = getRandomElement(FRASI_SOLE);
            commentEl.innerText = fraseSelezionata;
            attivaEffettoSole(bgContainer);
        }

    } catch (err) {
        document.body.classList.remove('loading');
        answerEl.innerText = "BOH";
        commentEl.innerText = "Ao, er satellite s'è impallato, affacciati alla finestra! 🪟";
    }
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function attivaEffettoPioggia(container) {
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.top = `${Math.random() * -50}px`;
        drop.style.animationDuration = `${0.4 + Math.random() * 0.7}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(drop);
    }
}

function attivaEffettoSole(container) {
    container.innerHTML = '<div class="sun-element"></div>';
}

// Chiedi a un romano vero
document.getElementById('btn-romano').addEventListener('click', () => {
    const commentEl = document.getElementById('comment');
    commentEl.style.animation = 'none';
    commentEl.offsetHeight;
    commentEl.style.animation = 'fadeIn 0.5s ease-out';
    fraseSelezionata = getRandomElement(pioveOggi ? FRASI_PIOVE : FRASI_SOLE);
    commentEl.innerText = fraseSelezionata;
});

// Condividi su WhatsApp
document.getElementById('btn-share').addEventListener('click', () => {
    const rispostaText = pioveOggi ? "SÌ, sta a piovve!" : "NO, c'è er sole!";
    const testo = `Ao! Ma piove oggi a Roma? ☔\nLa risposta è: ${rispostaText}\n\n"${fraseSelezionata}"\n\nControlla pure tu: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(testo)}`, '_blank');
});

// Pulsante E domani?
document.getElementById('btn-domani').addEventListener('click', () => {
    const modal = document.getElementById('tomorrow-modal');
    const tomorrowAnswer = document.getElementById('tomorrow-answer');
    const tomorrowComment = document.getElementById('tomorrow-comment');

    let risposta, frase;

    if (!pioveOggi && !pioveDomani) {
        // Oggi NO, domani NO
        risposta = "NEMMENO";
        frase = getRandomElement(FRASI_DOMANI_NEMMENO);
    } else if (pioveOggi && pioveDomani) {
        // Oggi SÌ, domani SÌ
        risposta = "PURE";
        frase = getRandomElement(FRASI_DOMANI_PURE);
    } else if (!pioveOggi && pioveDomani) {
        // Oggi NO, domani SÌ
        risposta = "SÌ";
        frase = getRandomElement(FRASI_DOMANI_SI);
    } else {
        // Oggi SÌ, domani NO
        risposta = "NO";
        frase = getRandomElement(FRASI_DOMANI_NEMMENO);
    }

    tomorrowAnswer.innerText = risposta;
    tomorrowComment.innerText = frase;
    modal.classList.add('open');
});

// Chiudi modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('tomorrow-modal').classList.remove('open');
});

document.getElementById('tomorrow-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('open');
    }
});

checkMeteoRoma();
