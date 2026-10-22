# Rapporto finale di verifica — Officina digitale

Data: 21 ottobre 2026

## Struttura

- 21 percorsi didattici più la home comune: 22 file `index.html`.
- 21 schede in home, divise in sette aree tematiche.
- Percorsi aggiunti in questa fase: Stream, Stream esercizi, Thread e Thread esercizi.
- Il percorso Thread è graduato in 12 lezioni, dal primo thread alla concorrenza coordinata.

## Navigazione e link

- Scansione automatica di tutte le pagine: zero link/risorse locali mancanti, zero ID HTML duplicati e zero ancore locali mancanti.
- La home collega tutte le 21 cartelle presenti.
- Tutti i mini-siti espongono `← Catalogo` e il marchio è un link alla home del repository.
- I collegamenti relativi restano compatibili con GitHub Pages pubblicato da `/(root)`.
- Tutti gli script JavaScript hanno superato `node --check`.

## Codice

- Tutti i 129 blocchi di codice sono stati compilati con `javac` in unità isolate.
- I 35 esempi dei quattro percorsi Stream/Thread sono stati anche eseguiti e confrontati con l'output dichiarato: 35/35 corrispondenti.
- Gli esempi che usano `Files.readString`, `Files.writeString` e `String.isBlank` richiedono Java 11 o successivo; gli esempi del percorso Thread sono compatibili con Java 8.

## Limiti

Alcune fonti Edutecnica hanno restituito errori di decodifica nel recupero automatico; i relativi percorsi sono ricostruzioni didattiche, non trascrizioni integrali. La verifica visuale cross-browser non si è conclusa in questo ambiente. Prima di un impiego formale si raccomanda un controllo manuale con tastiera, zoom, smartphone e screen reader.
