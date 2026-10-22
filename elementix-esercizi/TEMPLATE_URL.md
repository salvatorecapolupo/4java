# Modello riutilizzabile per i prossimi URL

Obiettivo: riutilizzare la stessa identità visiva e gli stessi controlli didattici per ogni nuova fonte, modificando soprattutto il file dati.

## Procedura

1. **Aprire e analizzare la fonte**: raccogliere titolo, tracce, prerequisiti, esempi, ordine degli argomenti e collegamenti secondari.
2. **Distinguere traccia e soluzione**: verificare che titoli, numerazione e codice corrispondano. Annotare pagine non raggiungibili o contenuti incoerenti.
3. **Verificare la tecnica**: consultare documentazione primaria, controllare casi limite e distinguere ciò che dice la fonte dalle correzioni introdotte.
4. **Pianificare la progressione**: da una sola nuova idea per esercizio fino alle combinazioni più articolate.
5. **Riscrivere, non copiare integralmente**: mantenere l'obiettivo didattico, spiegare le decisioni, mostrare un output coerente e citare la fonte.
6. Copiare `data/corso-elementix.js` e aggiornare titolo, slug, intro, fonti e lezioni.
7. Lasciare invariati `app.js`, `styles.css` e la struttura di `index.html`, salvo miglioramenti trasversali. Aggiornare il percorso dello script dati in `index.html`.
8. **Testare**: sintassi JavaScript, tutte le soluzioni Java, quiz, ricerca, stato di avanzamento, tastiera, zoom, contrasto, smartphone e link.
9. Pubblicare su GitHub Pages con `main` e `/ (root)`.

## Schema di una lezione

```js
{
  id: "id-univoco",
  level: "BASE 01",
  title: "Titolo concreto",
  summary: "Quale problema risolve l'esercizio.",
  goals: ["Obiettivo 1", "Obiettivo 2"],
  explanation: "Ragionamento in linguaggio semplice.",
  codeLabel: "Soluzione completa in Java",
  code: "// codice sorgente",
  output: "Risultato d'esempio",
  noteTitle: "Da ricordare",
  note: "Errore comune, assunzione o caso limite.",
  quiz: {
    question: "Domanda di verifica",
    options: ["A", "B", "C"],
    answer: 1,
    explanation: "Perché la risposta è corretta."
  }
}
```

## Standard editoriali e UX

- Un esercizio deve avere una consegna chiara, un ragionamento breve, una soluzione completa e un esempio verificabile.
- Evitare output fittizi non coerenti con il codice; controllare input limite e validazioni.
- Definire termini tecnici al primo uso e spezzare procedure lunghe in passaggi.
- Spiegare le scelte che modificano il significato della traccia (ad esempio estremi inclusi o convenzione di pagamento).
- Progettare per tastiera, schermi piccoli, zoom, contrasto e riduzione delle animazioni.
- I quiz devono essere riprovabili e includere feedback esplicativo, non soltanto “giusto/sbagliato”.
- Le facilitazioni BES sono generali: vanno valutate e adattate al contesto e alla persona.
