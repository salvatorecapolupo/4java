# Verifiche e scelte editoriali

Questa edizione riprende gli obiettivi delle 12 tracce elencate nella pagina di Edutecnica e propone soluzioni riorganizzate, con controlli supplementari e spiegazioni. Le soluzioni sono autonome: non vanno considerate una trascrizione del codice della fonte.

## Correzioni e precisazioni

- **Esercizio 1:** la formula è generalizzata a un intervallo qualsiasi `a…b`, dopo aver ordinato gli estremi: `(a + b) × numeroTermini / 2`. È equivalente alla formula `n × (n + 1) / 2` quando si somma da 1 a n.
- **Esercizio 2:** il numero zero ha una cifra; il segno meno non viene contato. Il cast a `long` evita il caso particolare del valore minimo di `int` quando si calcola il valore assoluto.
- **Esercizio 3:** lo zero è trattato a parte perché ha infiniti divisori. Il programma mostra le coppie di divisori, quindi l'ordine non è necessariamente crescente.
- **Esercizio 4:** 0 e 1 non sono primi; gli estremi dell'intervallo sono inclusi e vengono riordinati se forniti al contrario.
- **Esercizio 5:** il tasso viene inserito come percentuale e trasformato dividendo per 100. Il risultato è il primo numero intero di anni che porta il fattore di crescita ad almeno 2, assumendo un tasso annuo costante e senza commissioni o imposte.
- **Esercizio 6:** gli intervalli sono chiusi, dunque due intervalli che condividono un estremo si intersecano. Gli estremi vengono normalizzati prima del confronto.
- **Esercizio 7:** lo 0 termina la serie e non è considerato un valore; gli input negativi vengono rifiutati. Se non viene inserito alcun valore positivo, il programma lo segnala.
- **Esercizio 8:** sono necessarie tre lunghezze positive e la disuguaglianza triangolare stretta.
- **Esercizio 9:** `Math.hypot` esprime direttamente la formula della distanza euclidea.
- **Esercizio 10:** i casi sono distinti senza ambiguità: tutti uguali, tutti diversi, oppure esattamente un valore differente dagli altri due.
- **Esercizio 11:** sono validate le coordinate 1–8 prima di controllare riga, colonna e diagonale.
- **Esercizio 12:** la classifica casuale è una permutazione dei dieci cavalli: non ci sono duplicati. La simulazione sottrae la puntata di 5 euro e poi aggiunge il premio di 10 o 50 euro. È una convenzione esplicita, perché “premio pagato” può essere interpretato come importo comprensivo o meno della puntata.

## Incongruenza trovata nella fonte

Nell'indice originale, la traccia dell'esercizio 11 riguarda due regine su una scacchiera. La pagina collegata contiene invece, prima del codice sulle regine, testo residuo relativo alla classificazione di tre numeri, che appartiene all'esercizio 10. In questo percorso i due problemi sono separati e associati alla rispettiva traccia.

La pagina indice è stata consultata direttamente. Alcune pagine figlie non risultano decodificabili nello strumento di lettura a causa del formato testuale/charset; per questo le soluzioni qui presenti sono state ricostruite dalla traccia dell'indice e poi verificate, non dichiarate identiche all'originale.
