# Officina digitale — Java: esercizi progressivi

Percorso didattico statico con 12 esercizi Java, soluzioni commentate, output di esempio e quiz. Usa HTML, CSS e JavaScript senza framework, dipendenze esterne, database o processo di build; è adatto a GitHub Pages.

## Anteprima in locale

Apri `index.html` nel browser. Ricerca, indice, quiz, copia del codice e marcatura delle lezioni funzionano senza backend. Il progresso viene memorizzato in `localStorage` sul dispositivo, se il browser lo consente.

## Pubblicazione su GitHub Pages

1. Estrai lo ZIP.
2. Carica tutti i file e le cartelle nel repository GitHub, mantenendo la struttura.
3. Apri **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**.
5. Seleziona il branch `main` e la cartella `/ (root)`, quindi salva.
6. Apri l'indirizzo pubblicato da GitHub Pages.

Non servono Node.js, PHP, un server applicativo o un framework. Non inserire nel repository dati personali o segreti.

## Struttura

- `index.html` — contenitori semantici e navigazione.
- `styles.css` — layout responsivo, focus visibile, contrasto alto e modalità lettura.
- `app.js` — ricerca, rendering, quiz, copia del codice e progresso.
- `data/corso-elementix.js` — contenuti specifici di questa pagina.
- `TEMPLATE_URL.md` — flusso di lavoro per i prossimi URL.
- `NOTE-CONTENUTI.md` — correzioni e scelte editoriali di questa edizione.

## Accessibilità, UX e BES

Il sito include collegamento diretto al contenuto principale, intestazioni semantiche, navigazione da tastiera, focus visibile, layout adattivo, controlli per ingrandire/ridurre il testo, modalità ad alto contrasto, modalità lettura e feedback dei quiz annunciato come stato. Le informazioni non dipendono solo dal colore; il sito rispetta inoltre la preferenza di sistema per la riduzione del movimento.

Sono facilitazioni generali di usabilità e accessibilità: non costituiscono una certificazione WCAG e non sostituiscono verifiche con screen reader, zoom al 200%, tastiera e utenti con differenti esigenze.

## Contenuti e riferimenti

La pagina di partenza è la raccolta di esercizi Java di Edutecnica indicata nel sito. Le soluzioni sono state riscritte per essere didattiche, compilabili e più robuste negli input comuni; non sono una riproduzione letterale del codice originale. Per le API Java sono riportati i link alla documentazione ufficiale.
