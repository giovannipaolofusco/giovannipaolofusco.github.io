# Il Mio Portfolio Personale 🚀

Benvenuto nel repository del mio sito web personale! Ho creato questo spazio per presentare chi sono, i progetti a cui ho lavorato e le certificazioni che ho ottenuto nel tempo. 

Ho strutturato il sito in modo che sia facile da mantenere e aggiornare in futuro. Ecco una rapida panoramica di come funziona.

## 🛠️ Tecnologie Utilizzate
- **HTML5 & CSS3**: Per la struttura e lo stile (tutto in `style.css`).
- **JavaScript**: Per la logica interattiva, come il toggle per la dark mode e il banner dei cookie (`script.js`, `cookieconsent-config.js`).
- **Vite**: Come build tool per rendere lo sviluppo e il deployment più veloci ed efficienti.

## 📁 Struttura del Progetto
- `index.html`: La mia homepage, dove mi presento.
- `progetti.html`: La pagina dedicata ai miei lavori e all'ecosistema digitale che gestisco.
- `certificazioni.html`: La pagina dove mostro i miei attestati e la mia formazione (es. Google AI).
- `privacy.html`: La pagina con l'informativa sulla privacy e i cookie.
- `/en/`: La cartella che contiene la versione in lingua inglese del sito.
- `/file/`: Contiene file scaricabili come il mio CV in PDF.
- `style.css`: Il foglio di stile globale. Qui posso modificare i colori, i font e l'aspetto generale (sia in light che in dark mode).
- `script.js`: Script personalizzati. Gestisce il cambio del tema (light/dark mode).
- `cookieconsent-config.js`: La configurazione per il banner della privacy e dei cookie.

## 📝 Come fare modifiche in futuro
- **Modificare i testi**: Basta aprire i file `.html` (es. `index.html` o `progetti.html`) e cambiare il testo all'interno dei tag HTML (come `<p>`, `<h1>`, `<h2>`). Ricorda di aggiornare anche la versione inglese nella cartella `/en/`.
- **Aggiungere un nuovo progetto**: Vai su `progetti.html` (e in `/en/progetti.html`), copia il blocco HTML di uno dei progetti esistenti (cerca `<div class="project-card">`) e incollalo cambiando titolo, descrizione e link.
- **Cambiare i colori o lo stile**: Apri `style.css`. All'inizio del file troverai le variabili CSS (es. `--primary-color`, `--bg-color`). Modificando queste variabili, il colore cambierà in tutto il sito.
- **Aggiornare il CV**: Sostituisci il file `cv.pdf` all'interno della cartella `/file/` con la nuova versione, mantenendo lo stesso nome, così i link nel sito continueranno a funzionare.

## 💻 Come avviare il progetto localmente
Se ho bisogno di testare il sito sul mio computer prima di pubblicarlo, i comandi sono:
1. Installa le dipendenze: `npm install`
2. Avvia il server di sviluppo: `npm run dev`
3. Per creare la build di produzione: `npm run build`

---

Buon coding da Giovanni Paolo Fusco :)
🔗 Let's connect! GitHub & Instagram: @giovannipaolofusco
https://github.com/giovannipaolofusco
