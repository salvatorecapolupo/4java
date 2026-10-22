# Note editoriali — aggiornamento catalogo del 21 ottobre 2026

Sono stati aggiunti 14 percorsi collegati ai nuovi URL Edutecnica, mantenendo i 3 percorsi preesistenti. I link duplicati a `stringhe.htm` sono stati deduplicati nel catalogo.

## Nuovi percorsi

- `metodix-esercizi/` — esercizi su metodi e array.
- `stringhe-java/` e `stringhex-esercizi/` — concetti e problemi sulle stringhe.
- `oggetti-java/` e `oggettix-esercizi/` — concetti ed esercizi OOP.
- `polimorfismo-java/` e `polimorfismo-x-esercizi/` — polimorfismo ed esercizi sulla gerarchia di classi.
- `array-java/` e `arrayx-esercizi/` — fondamenti ed esercizi su array e matrici.
- `abstract-java/` e `abstractx-esercizi/` — classi astratte e interfacce, teoria ed esercizi.
- `involucro-java/` — classi wrapper.
- `eccezioni-java/` e `eccezionix-esercizi/` — gestione delle eccezioni ed esercizi.

## Accuratezza delle fonti

La pagina `metodix.htm`, `oggetti.htm`, `oggettix.htm`, `stringhex.htm`, `abstract.htm` e `eccezioni.htm` sono state consultabili almeno tramite pagina o risultati indicizzati. Diversi altri URL hanno restituito un errore di decodifica Unicode al recupero diretto; i risultati del motore di ricerca hanno comunque confermato alcuni titoli e tracce. In quei casi il corso è una ricostruzione didattica originale basata sull'argomento indicato dall'URL e sulla documentazione tecnica linkata, non una trascrizione o verifica riga per riga dell'intera fonte.

## Correzioni e cautele introdotte

- Stringhe: `String` è immutabile; si confronta il testo con `equals`, non con `==`.
- Array: indici base zero; ricerca binaria soltanto su dati ordinati; copia e riferimento sono distinti.
- Oggetti: campi privati e validazione; composizione usata quando un oggetto “ha un” componente.
- Polimorfismo: distinzione tra overloading e overriding, con `@Override` negli esempi.
- Classi astratte/interfacce: distinzione tra stato condiviso/implementazione e contratto.
- Wrapper: nota sulla deprecazione del costruttore `Integer(int)` e sulla preferenza per `valueOf` in codice nuovo.
- Wrapper e denaro: esempi non destinati a calcoli finanziari reali; per valute usare `BigDecimal` o centesimi interi.
- Eccezioni: preferire tipi specifici e try-with-resources per risorse `AutoCloseable`.
- Cifrario di Cesare: etichettato esplicitamente come esercizio didattico, non come sicurezza reale.

I mini-siti offrono una selezione didattica di esempi rappresentativi per ciascun URL (in genere 4–5 lezioni), non la trascrizione integrale di ogni esercizio presente nelle pagine originali. I cinque esempi statement-level dei fondamenti sono stati completati come programmi Java autonomi; tutti i 129 blocchi di codice dei percorsi sono stati compilati in unità isolate. Restano raccomandati i test manuali di usabilità con tastiera, screen reader, zoom e dispositivi mobili prima di un impiego scolastico formale.


## Aggiornamento stream e thread — 21 ottobre 2026

Sono stati aggiunti quattro percorsi, per un totale di 21 mini-siti nel catalogo:

- `stream-java/` — 9 lezioni su standard I/O, byte e caratteri, lettura/scrittura testuale, opzioni di file, dati binari, `Files.lines` e serializzazione.
- `streamx-esercizi/` — 7 esercizi su vettori salvati su file, righe non valide, copia, statistiche, dati binari, record testuali e verifica del backup.
- `thread-java/` — 12 lezioni più graduali su `Runnable`, `start`, `join`, `sleep`, interruzione cooperativa, dati condivisi, `synchronized`, `AtomicInteger`, `wait/notify`, `BlockingQueue` e `ExecutorService`.
- `threadx-esercizi/` — 7 esercizi guidati su attesa, Future, conti condivisi, code, interruzione e pool.

### Verifiche e modernizzazione

- I vecchi esempi con `Thread.stop()` non vengono riproposti: sono sostituiti da interruzione cooperativa, `join`, `BlockingQueue` e `ExecutorService`.
- Si distinguono i flussi I/O (`InputStream`, `Reader`, `OutputStream`, `Writer`) dall'API `java.util.stream.Stream`.
- Per i file testuali si mostra UTF-8 esplicito, `Path`/`Files` e try-with-resources. Gli esempi che creano file usano nomi temporanei e tentano di rimuoverli.
- Le esercitazioni su concorrenza spiegano che l'ordine di esecuzione non è garantito e che `sleep` non è un meccanismo di sincronizzazione.
- Il percorso include `wait/notify` per comprendere il monitor, ma raccomanda `BlockingQueue` nei comuni casi produttore-consumatore.
- La serializzazione Java è presentata con avvertenza: non deserializzare dati provenienti da fonti non fidate.

### Fonti e limiti di recupero

Le pagine di partenza sono `stream/stream.htm`, `streamx/streamx.htm`, `thread/thread.htm` e `threadx/threadx.htm`. I motori di ricerca hanno restituito il contenuto della pagina principale Streams e Concorrenza; la pagina degli esercizi Stream ha restituito anche la traccia relativa alla somma di due vettori su file. I recuperi diretti di alcune pagine hanno prodotto errori di decodifica Unicode: i percorsi di esercizi sono pertanto ricostruzioni didattiche coerenti con i temi verificabili, non una trascrizione integrale di ogni esercizio delle fonti originali.

### Navigazione

Tutti i mini-siti ora hanno un link visibile “← Catalogo” nella barra superiore; la home contiene le quattro nuove schede. Prima della pubblicazione sono stati controllati collegamenti a file locali e ancore interne, oltre a compilazione ed esecuzione dei frammenti Java.


## Verifica integrale della raccolta — 21 ottobre 2026

- 21 mini-siti più la home, per un totale di 22 pagine HTML d’ingresso.
- 21 schede catalogo, ognuna con percorso locale presente.
- Collegamenti `href`/`src` locali controllati: zero destinazioni mancanti, zero ancore statiche mancanti e zero ID HTML duplicati.
- Tutti i 21 mini-siti hanno un link visibile “← Catalogo” che riporta alla root del repository; anche il marchio porta al catalogo.
- 129 blocchi di codice compilati con `javac` come unità isolate.
- I 35 nuovi esempi dedicati a stream e thread sono stati inoltre eseguiti: l’output osservato corrisponde al risultato atteso dichiarato.
- Non è stata completata una verifica visuale automatizzata cross-browser in questo ambiente. Prima di un uso scolastico formale, resta utile una prova pratica su smartphone, zoom elevato e screen reader.
