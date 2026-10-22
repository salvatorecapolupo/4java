# Modello per convertire il prossimo URL

L'obiettivo è mantenere lo stesso sistema visivo e didattico per ogni nuova pagina: stessa navigazione, strumenti di lettura, carte lezione, esempi, quiz, progressione e pubblicazione statica.

## Flusso da ripetere per ogni nuova fonte

1. **Analizzare l'URL**: estrarre titolo, argomenti, esempi, prerequisiti e struttura. Individuare errori tecnici, parti obsolete e passaggi che richiedono una fonte aggiornata.
2. **Pianificare la progressione**: ordinare da prerequisiti e concetti semplici ad applicazioni, eccezioni e riepilogo. Una lezione deve avere un obiettivo chiaro e un esempio breve.
3. **Verificare**: controllare affermazioni tecniche con documentazione primaria o fonti affidabili. Segnalare esplicitamente le correzioni rilevanti.
4. **Adattare il contenuto**: usare formulazioni originali e sintetiche; non copiare integralmente il testo della fonte. Conservare un link alla fonte di partenza e ai riferimenti tecnici.
5. **Duplicare `data/corso-elementi.js`** e rinominarlo, ad esempio, `data/corso-nuovo-argomento.js`.
6. Modificare l'oggetto `window.COURSE` senza cambiare la struttura dei dati. Ogni lezione contiene: `id`, `level`, `title`, `summary`, `goals`, `explanation`, `codeLabel`, `code`, `output`, `noteTitle`, `note`, `quiz`.
7. In `index.html`, cambiare il percorso dello script dati: `<script src="data/corso-nuovo-argomento.js" defer></script>`. Lasciare invariato `app.js` e `styles.css` salvo miglioramenti globali.
8. **Testare** desktop e mobile, ricerca, copia, quiz, progresso, focus, contrasto e modalità lettura. Poi pubblicare sulla stessa GitHub Pages.

## Struttura dati: modello di una lezione

```js
{
  id: "concetto-iniziale", // identificatore univoco, senza spazi
  level: "BASE 01",
  title: "Titolo chiaro e concreto",
  summary: "Perché questo concetto serve.",
  goals: ["Obiettivo 1", "Obiettivo 2", "Obiettivo 3"],
  explanation: "Spiegazione breve, con lessico diretto.",
  codeLabel: "Esempio guidato",
  code: "// codice testuale",
  output: "risultato atteso",
  noteTitle: "Da ricordare",
  note: "Errore frequente o strategia di studio.",
  quiz: {
    question: "Domanda a risposta multipla",
    options: ["Risposta A", "Risposta B", "Risposta C"],
    answer: 1, // indice della risposta corretta, da 0
    explanation: "Spiegazione della risposta."
  }
}
```

## Regole editoriali e UX

- Esempi progressivi e piccoli; introdurre una sola difficoltà nuova alla volta.
- Spiegare prima l'obiettivo e poi il codice. Mostrare output quando applicabile.
- Evidenziare falsi amici, errori comuni, lessico tecnico e prerequisiti.
- Linguaggio diretto, paragrafi brevi, termini definiti alla prima occorrenza; non affidarsi solo a colore o icone.
- Supportare tastiera, schermi piccoli, zoom, contrasto elevato e riduzione delle animazioni.
- Quiz non punitivi: feedback spiegato e possibilità di riprovare.
- Per BES: ridurre rumore visivo, offrire una modalità lettura e mantenere coerenti le interazioni. Queste misure sono facilitazioni generali, non sostituiscono gli adattamenti individualizzati previsti nel contesto scolastico.
