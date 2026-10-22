# Officina digitale — percorso Java

Mini-sito didattico statico, responsivo e senza dipendenze esterne. È pensato per GitHub Pages e come modello riutilizzabile per trasformare altre pagine didattiche in percorsi progressivi.

## Anteprima in locale

Apri `index.html` nel browser. Ricerca, quiz e navigazione funzionano senza un backend. Il pulsante “Copia codice” usa gli appunti del browser quando disponibili; in alternativa seleziona il codice per copiarlo manualmente. Il progresso si salva in `localStorage` sul dispositivo, se il browser lo consente.

## Pubblicare su GitHub Pages

1. Crea un repository GitHub e carica tutti i file mantenendo le cartelle `assets/` e `data/`.
2. Vai in **Settings → Pages**.
3. In **Build and deployment**, scegli **Deploy from a branch**.
4. Seleziona il branch `main` e la cartella `/ (root)`, quindi salva.
5. Attendi la pubblicazione e apri l'URL indicato da GitHub Pages.

Non usa PHP, database, Node, framework o processi di build. È adatto anche a un repository pubblico. Non caricare dati personali o segreti nel repository.

## Struttura

- `index.html` — struttura semantica e contenitori della pagina.
- `styles.css` — stile responsivo, focus da tastiera, modalità lettura e contrasto alto.
- `app.js` — rendering delle lezioni, ricerca, quiz, copia del codice e progresso.
- `data/corso-elementi.js` — dati e testi specifici di questo percorso.
- `TEMPLATE_URL.md` — procedura per i prossimi URL.

## Accessibilità e BES

Sono presenti un collegamento “Vai al contenuto principale”, intestazioni semantiche, navigazione da tastiera, focus visibile, pulsanti grandi, layout responsive, aumento/riduzione del testo, contrasto alto, modalità lettura, indicazioni anche testuali (non solo tramite colore), feedback dei quiz annunciato alle tecnologie assistive e rispetto di `prefers-reduced-motion`.

Queste scelte aiutano l'usabilità, ma non equivalgono a una certificazione di accessibilità né sostituiscono test con utenti e tecnologie assistive. Prima della pubblicazione, verificare contrasto, ingrandimento al 200%, ordine del focus, navigazione solo da tastiera e lettura con screen reader.

## Verifica dei contenuti

La pagina di partenza è indicata nella sezione fonti del sito. Il materiale è stato sintetizzato e riorganizzato: non è una trascrizione integrale. Le correzioni più significative includono l'import corretto `java.util.Scanner`, la distinzione tra tipi primitivi e `String`, la divisione intera e un esempio corretto per verificare i numeri dispari. Per la correttezza formale, sono collegati anche la Java Language Specification e la documentazione di `Scanner`.
