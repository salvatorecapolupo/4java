# Template per il prossimo URL

L'obiettivo è aggiungere un mini-sito nella raccolta senza cambiare l'esperienza complessiva.

## Procedura

1. Apri l'URL e identifica obiettivi, prerequisiti, esempi, tracce e possibili errori. Se la fonte non è recuperabile per intero, annota il limite.
2. Individua la documentazione primaria Java più aggiornata per verificare i concetti.
3. Crea una nuova cartella nel root duplicando una cartella corso come base.
4. Crea `data/corso-nuovo.js` con `window.COURSE = { slug, title, kicker, intro, sources, lessons }`.
5. Per ogni lezione includi: `id`, `level`, `title`, `summary`, `goals`, `explanation`, `codeLabel`, `code`, `output`, `noteTitle`, `note`, `quiz`.
6. Usa esempi autocontenuti, con input deterministico e output dichiarato. Compila ogni esempio isolatamente con `javac` quando possibile.
7. Modifica lo script dati in `index.html` e inserisci una scheda con link relativo nella sezione corretta della home.
8. Aggiorna README e note contenuto, poi verifica ricerca, navigazione, quiz, copia, progresso, zoom, contrasto, tastiera e schermi piccoli.

## Scelte editoriali

- Linguaggio diretto, una difficoltà nuova alla volta e paragrafi brevi.
- Correggi gli errori senza riprodurre testo obsoleto; indica gli adattamenti didattici che cambiano il significato della fonte.
- Non usare un quiz punitivo: fornisci feedback e possibilità di riprovare.
- Non fare affidamento solo su colore o icone.
- BES: riduci il rumore visivo e mantieni le interazioni coerenti. Le facilitazioni generali non sostituiscono gli adattamenti individualizzati.
