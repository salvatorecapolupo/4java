/* Percorso didattico progressivo; fonti e cautele editoriali nel README e nelle note del progetto. */
window.COURSE = {
  "title": "Thread e concorrenza in Java",
  "slug": "thread-java",
  "kicker": "CONCORRENZA · DAL BASE ALL’AVANZATO",
  "intro": "Un percorso disteso: prima il thread main e Runnable, poi avvio, attesa e interruzione, quindi dati condivisi, sincronizzazione, cooperazione e pool di lavoro.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica — Concorrenza",
      "url": "https://www.edutecnica.it/informatica/thread/thread.htm"
    },
    {
      "label": "Dev.java — Concurrency",
      "url": "https://dev.java/learn/"
    },
    {
      "label": "Oracle — Java concurrency tutorial",
      "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/"
    }
  ],
  "lessons": [
    {
      "id": "thread-primo-concetto",
      "level": "BASE",
      "title": "Che cos’è un thread?",
      "summary": "Un thread è un flusso di esecuzione all’interno dello stesso processo.",
      "goals": [
        "Riconoscere il thread main",
        "Leggere il nome del thread corrente",
        "Distinguere concorrenza e simultaneità"
      ],
      "explanation": "Quando parte un programma Java, il metodo main viene eseguito da un thread chiamato normalmente main. Altri thread possono svolgere compiti durante lo stesso intervallo di tempo. Concorrenza significa gestire attività sovrapposte; non garantisce che due istruzioni vengano eseguite nello stesso istante su due CPU.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        System.out.println(Thread.currentThread().getName());\n    }\n}",
      "output": "main",
      "noteTitle": "Da ricordare",
      "note": "L’ordine di esecuzione di thread differenti non è generalmente predicibile. Evita di basare il programma su un ordine casuale di stampa.",
      "quiz": {
        "question": "Quale thread esegue inizialmente il metodo main?",
        "options": [
          "main",
          "worker",
          "Tutti i thread insieme"
        ],
        "answer": 0,
        "explanation": "La JVM avvia il metodo main sul thread iniziale normalmente chiamato main."
      }
    },
    {
      "id": "runnable",
      "level": "BASE",
      "title": "Descrivere il lavoro con Runnable",
      "summary": "Runnable separa il compito da eseguire dall’oggetto Thread che lo avvia.",
      "goals": [
        "Scrivere un Runnable",
        "Creare un Thread nominato",
        "Avviare e attendere il lavoro"
      ],
      "explanation": "Runnable descrive ciò che deve essere eseguito. Si passa al costruttore di Thread e si chiama start(): la JVM potrà eseguire run() su un nuovo thread. join() fa attendere il thread chiamante finché il lavoro è concluso.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Runnable compito = () -> System.out.println(\"Eseguito da \" + Thread.currentThread().getName());\n        Thread lavoratore = new Thread(compito, \"lettore\");\n        lavoratore.start();\n        lavoratore.join();\n        System.out.println(\"Main concluso\");\n    }\n}",
      "output": "Eseguito da lettore\nMain concluso",
      "noteTitle": "Da ricordare",
      "note": "La soluzione con Runnable è generalmente più flessibile dell’estendere Thread per rappresentare un compito.",
      "quiz": {
        "question": "Quale metodo avvia un nuovo thread?",
        "options": [
          "start()",
          "run() chiamato direttamente",
          "sleep()"
        ],
        "answer": 0,
        "explanation": "start() avvia un nuovo thread, che poi esegue run()."
      }
    },
    {
      "id": "start-vs-run",
      "level": "BASE",
      "title": "start() e run() hanno ruoli diversi",
      "summary": "Chiamare direttamente run() esegue il codice sul thread corrente.",
      "goals": [
        "Confrontare run e start",
        "Osservare il nome del thread",
        "Capire dove avviene la concorrenza"
      ],
      "explanation": "Se invochi run() come un normale metodo, non nasce un nuovo thread. Se invochi start(), il lavoro viene eseguito su un thread separato. Per rendere visibile la differenza, stampiamo il nome del thread che sta eseguendo il compito.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Runnable compito = () -> System.out.println(Thread.currentThread().getName());\n        Thread t = new Thread(compito, \"lavoratore\");\n        t.run();\n        t.start();\n        t.join();\n    }\n}",
      "output": "main\nlavoratore",
      "noteTitle": "Da ricordare",
      "note": "È un esempio controllato: la prima riga è eseguita sul main; la seconda dopo start() sul thread lavoratore.",
      "quiz": {
        "question": "Che cosa accade se chiami t.run() direttamente?",
        "options": [
          "Il codice viene eseguito dal thread corrente",
          "Parte sempre un nuovo thread",
          "Il thread viene interrotto"
        ],
        "answer": 0,
        "explanation": "run() chiamato direttamente è una normale chiamata di metodo."
      }
    },
    {
      "id": "join",
      "level": "BASE",
      "title": "Aspettare la fine di un thread con join()",
      "summary": "join() permette di stabilire un punto in cui il programma aspetta il completamento del lavoro.",
      "goals": [
        "Avviare un thread",
        "Usare join",
        "Ordinare la fase successiva"
      ],
      "explanation": "I thread possono terminare in tempi diversi. Se il programma deve usare un risultato prodotto dal thread, deve attendere un segnale, un Future o la fine del thread. join() è il modo più diretto per attendere la sua conclusione.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> System.out.println(\"Lavoro completato\"));\n        t.start();\n        t.join();\n        System.out.println(\"Main riprende\");\n    }\n}",
      "output": "Lavoro completato\nMain riprende",
      "noteTitle": "Da ricordare",
      "note": "Se non chiami join o non usi un’altra forma di coordinamento, il main può proseguire mentre il lavoro è ancora in corso.",
      "quiz": {
        "question": "Che garanzia dà join() prima della riga successiva?",
        "options": [
          "Il thread atteso è terminato",
          "Tutti i thread del computer sono fermi",
          "Il codice non può lanciare eccezioni"
        ],
        "answer": 0,
        "explanation": "Dopo il ritorno di join(), il thread a cui è applicato è terminato."
      }
    },
    {
      "id": "sleep",
      "level": "BASE",
      "title": "Pausa temporanea con Thread.sleep",
      "summary": "sleep() sospende il thread corrente per un intervallo minimo, non prenota un orario esatto.",
      "goals": [
        "Usare sleep",
        "Gestire InterruptedException",
        "Aspettare con join"
      ],
      "explanation": "Thread.sleep è utile per dimostrazioni o piccoli ritardi, ma non è un meccanismo preciso di pianificazione. Può essere interrotto e quindi richiede una gestione di InterruptedException. L’esempio attende che il lavoratore termini prima di chiudere.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> {\n            System.out.println(\"Inizio lavoro\");\n            try {\n                Thread.sleep(100);\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n                return;\n            }\n            System.out.println(\"Fine lavoro\");\n        });\n        t.start();\n        t.join();\n        System.out.println(\"Fine main\");\n    }\n}",
      "output": "Inizio lavoro\nFine lavoro\nFine main",
      "noteTitle": "Da ricordare",
      "note": "Per attendere un altro lavoro, preferisci join, Future o le API di concorrenza adatte invece di una pausa arbitraria.",
      "quiz": {
        "question": "Thread.sleep(100) garantisce che il thread riparta esattamente dopo 100 ms?",
        "options": [
          "No, è una pausa minima approssimativa",
          "Sì, esattamente al millisecondo",
          "No, termina il processo"
        ],
        "answer": 0,
        "explanation": "La pianificazione del sistema può ritardare la ripresa oltre l’intervallo richiesto."
      }
    },
    {
      "id": "interrompere",
      "level": "INTERMEDIO",
      "title": "Interruzione cooperativa di un thread",
      "summary": "interrupt() è una richiesta: il codice deve reagire e concludersi in modo ordinato.",
      "goals": [
        "Richiedere l’interruzione",
        "Rilevare InterruptedException",
        "Concludere il lavoro in modo sicuro"
      ],
      "explanation": "Java non offre un arresto forzato e sicuro di un thread. interrupt() imposta un segnale o interrompe un’attesa bloccante. Il task deve controllarlo o gestire InterruptedException e poi terminare. Non usare Thread.stop(): può lasciare oggetti in stati incoerenti.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Thread lavoratore = new Thread(() -> {\n            try {\n                while (!Thread.currentThread().isInterrupted()) {\n                    Thread.sleep(20);\n                }\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n            }\n            System.out.println(\"Terminazione gestita\");\n        });\n        lavoratore.start();\n        Thread.sleep(60);\n        lavoratore.interrupt();\n        lavoratore.join();\n    }\n}",
      "output": "Terminazione gestita",
      "noteTitle": "Regola importante",
      "note": "Quando intercetti InterruptedException, ripristinare il flag con Thread.currentThread().interrupt() è spesso appropriato se non gestisci ulteriormente la cancellazione.",
      "quiz": {
        "question": "Che cosa significa interrupt()?",
        "options": [
          "Invia una richiesta di interruzione cooperativa",
          "Uccide immediatamente il thread in modo sicuro",
          "Riavvia il thread dall’inizio"
        ],
        "answer": 0,
        "explanation": "Il task deve riconoscere e gestire l’interruzione."
      }
    },
    {
      "id": "dati-condivisi",
      "level": "INTERMEDIO",
      "title": "Il rischio dei dati condivisi",
      "summary": "Un’operazione come contatore++ non è atomica: più thread possono interferire.",
      "goals": [
        "Riconoscere uno stato condiviso",
        "Capire la race condition",
        "Proteggere un aggiornamento"
      ],
      "explanation": "L’istruzione contatore++ comprende lettura, incremento e scrittura. Due thread possono sovrapporsi e perdere aggiornamenti. Un metodo synchronized protegge la sezione critica sullo stesso oggetto; ogni accesso concorrente ai dati mutabili deve rispettare una strategia coerente.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static class Contatore {\n        private int valore;\n        synchronized void incrementa() { valore++; }\n        synchronized int valore() { return valore; }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Contatore c = new Contatore();\n        Runnable compito = () -> { for (int i = 0; i < 10_000; i++) c.incrementa(); };\n        Thread a = new Thread(compito);\n        Thread b = new Thread(compito);\n        a.start(); b.start();\n        a.join(); b.join();\n        System.out.println(c.valore());\n    }\n}",
      "output": "20000",
      "noteTitle": "Da ricordare",
      "note": "Non basta sincronizzare un singolo metodo se altri punti leggono o modificano la stessa variabile senza rispettare la stessa disciplina.",
      "quiz": {
        "question": "Perché incrementa() è synchronized?",
        "options": [
          "Protegge l’aggiornamento condiviso",
          "Fa eseguire entrambi i thread nello stesso momento",
          "Evita la necessità di start()"
        ],
        "answer": 0,
        "explanation": "Un solo thread alla volta può eseguire quel metodo sullo stesso contatore."
      }
    },
    {
      "id": "blocchi-synchronized",
      "level": "INTERMEDIO",
      "title": "Proteggere una sezione critica",
      "summary": "Un blocco synchronized può rendere atomico un insieme di operazioni su dati condivisi.",
      "goals": [
        "Usare un lock condiviso",
        "Proteggere una sequenza di istruzioni",
        "Evitare lock diversi per lo stesso stato"
      ],
      "explanation": "Il blocco synchronized prende il monitor dell’oggetto scelto. Tutti i thread che proteggono lo stesso stato devono usare lo stesso lock. Se ciascuno usa un lock diverso, la protezione non coordina le operazioni.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    private static final Object LOCK = new Object();\n    private static int totale = 0;\n\n    public static void main(String[] args) throws InterruptedException {\n        Runnable compito = () -> {\n            for (int i = 0; i < 10_000; i++) {\n                synchronized (LOCK) { totale++; }\n            }\n        };\n        Thread a = new Thread(compito);\n        Thread b = new Thread(compito);\n        a.start(); b.start();\n        a.join(); b.join();\n        System.out.println(totale);\n    }\n}",
      "output": "20000",
      "noteTitle": "Da ricordare",
      "note": "Mantieni il blocco sincronizzato breve e proteggi sempre lo stesso dato con una strategia coerente.",
      "quiz": {
        "question": "Quando i due thread si coordinano correttamente?",
        "options": [
          "Quando usano lo stesso oggetto lock",
          "Quando creano un lock nuovo a ogni incremento",
          "Quando stampano il totale spesso"
        ],
        "answer": 0,
        "explanation": "La sincronizzazione ha effetto sui thread che competono sullo stesso monitor."
      }
    },
    {
      "id": "atomic-integer",
      "level": "INTERMEDIO",
      "title": "AtomicInteger: aggiornamenti atomici semplici",
      "summary": "Per contatori e operazioni atomiche singole puoi usare classi di java.util.concurrent.atomic.",
      "goals": [
        "Usare AtomicInteger",
        "Confrontare incrementAndGet e ++",
        "Scegliere uno strumento adatto"
      ],
      "explanation": "AtomicInteger offre operazioni atomiche senza scrivere direttamente un blocco synchronized. È adatto a un contatore condiviso; non rende automaticamente atomica una sequenza arbitraria di più operazioni su oggetti differenti.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.concurrent.atomic.AtomicInteger;\n\npublic class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        AtomicInteger contatore = new AtomicInteger();\n        Runnable compito = () -> { for (int i = 0; i < 10_000; i++) contatore.incrementAndGet(); };\n        Thread a = new Thread(compito);\n        Thread b = new Thread(compito);\n        a.start(); b.start();\n        a.join(); b.join();\n        System.out.println(contatore.get());\n    }\n}",
      "output": "20000",
      "noteTitle": "Da ricordare",
      "note": "Se devi mantenere più valori coerenti insieme, un lock o una struttura concorrente può essere più appropriato.",
      "quiz": {
        "question": "AtomicInteger è una buona scelta per…",
        "options": [
          "Un singolo contatore condiviso",
          "Proteggere automaticamente ogni oggetto del programma",
          "Sostituire tutte le strutture dati"
        ],
        "answer": 0,
        "explanation": "AtomicInteger offre operazioni atomiche su un valore intero condiviso."
      }
    },
    {
      "id": "wait-notify",
      "level": "AVANZATO",
      "title": "wait() e notifyAll(): cooperare su un monitor",
      "summary": "I metodi di attesa devono essere chiamati mentre si possiede il monitor e la condizione va controllata in un ciclo.",
      "goals": [
        "Capire il monitor",
        "Usare while con wait",
        "Risvegliare i thread in attesa"
      ],
      "explanation": "wait rilascia il monitor e sospende il thread; notifyAll segnala agli altri thread che potrebbero procedere. La condizione va sempre controllata con while perché un thread può svegliarsi senza che la condizione sia soddisfatta. Per casi reali, preferisci spesso BlockingQueue o altri strumenti di java.util.concurrent.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static class Scatola {\n        private Integer valore;\n        synchronized void deposita(int nuovo) throws InterruptedException {\n            while (valore != null) wait();\n            valore = nuovo;\n            System.out.println(\"Depositato: \" + nuovo);\n            notifyAll();\n        }\n        synchronized int preleva() throws InterruptedException {\n            while (valore == null) wait();\n            int preso = valore;\n            valore = null;\n            System.out.println(\"Prelevato: \" + preso);\n            notifyAll();\n            return preso;\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Scatola scatola = new Scatola();\n        Thread consumatore = new Thread(() -> {\n            try { scatola.preleva(); }\n            catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        });\n        consumatore.start();\n        scatola.deposita(42);\n        consumatore.join();\n    }\n}",
      "output": "Depositato: 42\nPrelevato: 42",
      "noteTitle": "Da affrontare con calma",
      "note": "Questo schema è didattico. La concorrenza presenta casi sottili: per code e produttore-consumatore, una BlockingQueue riduce il rischio di errori.",
      "quiz": {
        "question": "Perché la condizione attorno a wait() è un while e non un if?",
        "options": [
          "Perché dopo il risveglio la condizione va verificata di nuovo",
          "Perché if non compila",
          "Perché wait esegue il codice due volte"
        ],
        "answer": 0,
        "explanation": "Il thread deve ripetere la verifica della condizione dopo il risveglio."
      }
    },
    {
      "id": "blocking-queue",
      "level": "AVANZATO",
      "title": "Produttore e consumatore con BlockingQueue",
      "summary": "Una coda concorrente si occupa dell’attesa e della sincronizzazione tra produttore e consumatore.",
      "goals": [
        "Usare BlockingQueue",
        "Coordinare produttore e consumatore",
        "Evitare wait/notify manuale"
      ],
      "explanation": "BlockingQueue è uno strumento di libreria per passare elementi tra thread. put attende spazio quando la coda è piena; take attende un elemento quando è vuota. Un valore speciale, detto sentinella, indica in questo esempio che il produttore ha finito.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.concurrent.BlockingQueue;\nimport java.util.concurrent.LinkedBlockingQueue;\n\npublic class Esempio {\n    private static final String STOP = \"<fine>\";\n    public static void main(String[] args) throws InterruptedException {\n        BlockingQueue<String> coda = new LinkedBlockingQueue<>();\n        Thread produttore = new Thread(() -> {\n            try {\n                coda.put(\"uno\");\n                coda.put(\"due\");\n                coda.put(STOP);\n            } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        });\n        Thread consumatore = new Thread(() -> {\n            try {\n                String elemento;\n                while (!(elemento = coda.take()).equals(STOP)) {\n                    System.out.println(\"Ricevuto: \" + elemento);\n                }\n            } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        });\n        consumatore.start(); produttore.start();\n        produttore.join(); consumatore.join();\n    }\n}",
      "output": "Ricevuto: uno\nRicevuto: due",
      "noteTitle": "Da ricordare",
      "note": "La sentinella è un semplice schema didattico. In sistemi più complessi la terminazione va progettata in base al numero di consumatori e al ciclo di vita del servizio.",
      "quiz": {
        "question": "Quale vantaggio offre BlockingQueue?",
        "options": [
          "Coordina produttore e consumatore senza scrivere a mano wait/notify",
          "Garantisce che tutti i thread eseguano in ordine alfabetico",
          "Salva automaticamente la coda su disco"
        ],
        "answer": 0,
        "explanation": "La struttura integra le operazioni di attesa e sincronizzazione necessarie alla coda concorrente."
      }
    },
    {
      "id": "executor-future",
      "level": "AVANZATO",
      "title": "Gestire gruppi di attività con ExecutorService",
      "summary": "Un pool riusa thread e Future permette di raccogliere risultati di calcoli concorrenti.",
      "goals": [
        "Creare un pool di thread",
        "Inviare Callable",
        "Raccogliere il risultato con Future"
      ],
      "explanation": "Per molti compiti non è necessario creare manualmente un Thread ogni volta. ExecutorService gestisce un pool; submit restituisce un Future, dal quale si può ottenere il risultato con get. Bisogna chiudere il pool con shutdown e progettare la gestione delle eccezioni.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.concurrent.Callable;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.Future;\n\npublic class Esempio {\n    public static void main(String[] args) throws Exception {\n        ExecutorService pool = Executors.newFixedThreadPool(2);\n        try {\n            Callable<Integer> primo = () -> 10 + 5;\n            Callable<Integer> secondo = () -> 7 + 8;\n            Future<Integer> a = pool.submit(primo);\n            Future<Integer> b = pool.submit(secondo);\n            System.out.println(\"Risultato totale: \" + (a.get() + b.get()));\n        } finally {\n            pool.shutdown();\n        }\n    }\n}",
      "output": "Risultato totale: 30",
      "noteTitle": "Idea finale",
      "note": "ExecutorService va chiuso: per applicazioni robuste valuta anche awaitTermination, timeout e gestione delle cancellazioni.",
      "quiz": {
        "question": "Che cosa restituisce submit(Callable)?",
        "options": [
          "Un Future per osservare il risultato",
          "Sempre il valore calcolato immediatamente",
          "Un nuovo processo del sistema operativo"
        ],
        "answer": 0,
        "explanation": "Future consente di attendere e recuperare il risultato del compito."
      }
    }
  ]
};
