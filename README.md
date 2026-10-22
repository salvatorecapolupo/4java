# Officina digitale — raccolta GitHub Pages

Raccolta statica di **21 percorsi Java** (3 preesistenti + 14 aggiunti in precedenza + 4 nuovi su stream e thread), costruiti con HTML, CSS e JavaScript senza framework, compilazione o backend.

## Catalogo

### Fondamenti e metodi
- `elementi-java/` — fondamenti Java.
- `metodi-java/` — metodi e sottoprogrammi.
- `metodix-esercizi/` — esercizi su metodi e array.

### Stringhe e array
- `stringhe-java/` e `stringhex-esercizi/`.
- `array-java/` e `arrayx-esercizi/`.

### Programmazione a oggetti
- `oggetti-java/` e `oggettix-esercizi/`.
- `polimorfismo-java/` e `polimorfismo-x-esercizi/`.
- `abstract-java/` e `abstractx-esercizi/`.

### Tipi e robustezza
- `involucro-java/` — wrapper.
- `eccezioni-java/` e `eccezionix-esercizi/`.

### Stream e file
- `stream-java/` — flussi di input/output, file testuali e binari, serializzazione con cautele.
- `streamx-esercizi/` — esercizi progressivi su file, vettori, copie e controlli.

### Concorrenza e thread
- `thread-java/` — 12 lezioni graduate, dal primo thread a sincronizzazione, BlockingQueue ed ExecutorService.
- `threadx-esercizi/` — esercizi guidati su join, Future, contatori, code e interruzione cooperativa.

### Ripasso generale
- `elementix-esercizi/` — esercizi progressivi generalisti.

La home (`index.html`) raggruppa i 21 percorsi per area e include un filtro di ricerca. Nei mini-siti è presente un link visibile “← Catalogo” per tornare alla home. Ogni percorso ha un motore, un tema e un file dati con le lezioni; gli stili e lo script applicativo sono riutilizzati per coerenza.

## Pubblicazione su GitHub Pages

1. Estrai lo ZIP e carica **tutto il contenuto della cartella** in un repository GitHub.
2. Vai in **Settings → Pages**.
3. Scegli **Deploy from a branch**, branch `main`, cartella `/(root)`, poi salva.
4. La home è l'indirizzo GitHub Pages del repository. Tutti i collegamenti interni sono relativi.

Non è necessaria alcuna build né dipendenza esterna.

## UX, accessibilità e BES

I percorsi offrono skip link, struttura semantica, focus visibile, layout responsive, ridimensionamento del testo, contrasto alto, modalità lettura, ricerca delle lezioni, codice copiabile, quiz ripetibili e avanzamento salvato localmente. Sono facilitazioni generali utili anche in ottica BES, non una certificazione WCAG né un sostituto delle misure individuali. Si raccomandano test manuali con tastiera, screen reader, zoom e smartphone.

## Verifica delle fonti

La lista degli URL forniti è deduplicata; la corrispondenza esatta tra ogni fonte e cartella è in `CATALOGO-URL.md`. Alcune pagine Edutecnica hanno restituito un errore di decodifica durante il recupero diretto; dove la pagina non è stata ispezionabile integralmente, il corso è dichiarato come ricostruzione tematica verificata contro documentazione Java, non come revisione parola per parola. Consultare `NOTE-CONTENUTI.md`.

## Aggiungere il prossimo URL

Segui `TEMPLATE_URL.md`: analisi della fonte, progressione delle lezioni, revisione tecnica, file dati con schema `window.COURSE`, test degli esempi e aggiunta di una scheda al catalogo della home.
