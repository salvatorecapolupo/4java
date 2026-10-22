/* Percorso didattico progressivo; fonti e cautele editoriali nel README e nelle note del progetto. */
window.COURSE = {
  "title": "Thread — esercizi progressivi",
  "slug": "threadx-esercizi",
  "kicker": "CONCORRENZA · LABORATORIO",
  "intro": "Esercizi graduali sui thread: attesa, calcoli separati, saldo condiviso, code concorrenti, interruzione e pool di lavoro.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica — esercizi sui thread",
      "url": "https://www.edutecnica.it/informatica/threadx/threadx.htm"
    },
    {
      "label": "Edutecnica — concorrenza in Java",
      "url": "https://www.edutecnica.it/informatica/thread/thread.htm"
    },
    {
      "label": "Oracle — Java concurrency tutorial",
      "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/"
    }
  ],
  "lessons": [
    {
      "id": "countdown-join",
      "level": "BASE",
      "title": "Esercizio 1 — Conto alla rovescia",
      "summary": "Avvia un thread che stampa tre numeri e fai attendere il main.",
      "goals": [
        "Creare un Runnable",
        "Usare sleep e join",
        "Gestire InterruptedException"
      ],
      "explanation": "È un esercizio di lettura del ciclo di vita. Il thread lavoratore stampa i numeri; join garantisce che la riga finale del main arrivi dopo l’ultimo numero.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Thread conto = new Thread(() -> {\n            for (int i = 3; i >= 1; i--) {\n                System.out.println(i);\n                try { Thread.sleep(20); }\n                catch (InterruptedException e) { Thread.currentThread().interrupt(); return; }\n            }\n        });\n        conto.start();\n        conto.join();\n        System.out.println(\"Via!\");\n    }\n}",
      "output": "3\n2\n1\nVia!",
      "noteTitle": "Da ricordare",
      "note": "Il ritardo serve solo a rendere visibile l’esempio; non è una tecnica per sincronizzare attività reali.",
      "quiz": {
        "question": "Perché “Via!” viene stampato dopo 1?",
        "options": [
          "Perché il main attende con join",
          "Perché sleep ordina tutti i thread del computer",
          "Perché run è chiamato due volte"
        ],
        "answer": 0,
        "explanation": "join attende che il thread conto termini."
      }
    },
    {
      "id": "future-somma",
      "level": "BASE",
      "title": "Esercizio 2 — Dividere un calcolo in compiti",
      "summary": "Invia due calcoli indipendenti al pool e combina i risultati.",
      "goals": [
        "Usare ExecutorService",
        "Recuperare Future",
        "Sommarne i risultati"
      ],
      "explanation": "La suddivisione in compiti ha senso quando una parte del lavoro può essere svolta indipendentemente. Questo esempio è piccolo e didattico; il pool aggiunge overhead per un calcolo così semplice, ma mostra lo schema.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.Future;\n\npublic class Esempio {\n    public static void main(String[] args) throws Exception {\n        ExecutorService pool = Executors.newFixedThreadPool(2);\n        try {\n            Future<Integer> a = pool.submit(() -> somma(1, 5));\n            Future<Integer> b = pool.submit(() -> somma(6, 10));\n            System.out.println(\"Totale: \" + (a.get() + b.get()));\n        } finally { pool.shutdown(); }\n    }\n    static int somma(int da, int a) {\n        int totale = 0;\n        for (int n = da; n <= a; n++) totale += n;\n        return totale;\n    }\n}",
      "output": "Totale: 55",
      "noteTitle": "Da ricordare",
      "note": "Se i compiti sono molto brevi, un pool può costare più del calcolo: scegli parallelismo in base al problema.",
      "quiz": {
        "question": "Perché get() è utile?",
        "options": [
          "Per recuperare il risultato del compito e attendere se necessario",
          "Per cancellare tutti i compiti",
          "Per avviare un thread manualmente"
        ],
        "answer": 0,
        "explanation": "Future.get restituisce il valore prodotto dal Callable."
      }
    },
    {
      "id": "conto-sincronizzato",
      "level": "INTERMEDIO",
      "title": "Esercizio 3 — Aggiornare un saldo condiviso",
      "summary": "Due thread eseguono depositi sullo stesso conto in modo sincronizzato.",
      "goals": [
        "Condividere un oggetto",
        "Proteggere gli aggiornamenti",
        "Verificare il saldo finale"
      ],
      "explanation": "Un metodo synchronized sul conto protegge l’operazione rispetto ad altri thread che invocano metodi sincronizzati sullo stesso oggetto. Il saldo finale è deterministico perché tutti gli incrementi vengono completati e ogni deposito avviene una sola volta.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static class Conto {\n        private int saldo;\n        synchronized void deposita(int importo) { saldo += importo; }\n        synchronized int saldo() { return saldo; }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Conto conto = new Conto();\n        Runnable compito = () -> { for (int i = 0; i < 1_000; i++) conto.deposita(1); };\n        Thread a = new Thread(compito);\n        Thread b = new Thread(compito);\n        a.start(); b.start();\n        a.join(); b.join();\n        System.out.println(\"Saldo: \" + conto.saldo());\n    }\n}",
      "output": "Saldo: 2000",
      "noteTitle": "Da ricordare",
      "note": "Questo esempio protegge la somma, ma un conto reale richiede anche validazione, valuta corretta e regole transazionali.",
      "quiz": {
        "question": "Perché entrambi i thread devono usare lo stesso oggetto Conto?",
        "options": [
          "Perché il saldo da aggiornare è condiviso",
          "Perché synchronized funziona solo con due thread",
          "Perché il conto deve essere statico"
        ],
        "answer": 0,
        "explanation": "Entrambi operano sullo stesso stato e lo stesso monitor ne coordina gli aggiornamenti."
      }
    },
    {
      "id": "coda-produttore-consumatore",
      "level": "INTERMEDIO",
      "title": "Esercizio 4 — Coordinare una coda di messaggi",
      "summary": "Un produttore inserisce messaggi; un consumatore li riceve senza busy-waiting.",
      "goals": [
        "Usare BlockingQueue",
        "Gestire una sentinella",
        "Attendere entrambi i thread"
      ],
      "explanation": "BlockingQueue fornisce put e take, che gestiscono in modo sicuro la coordinazione. La sentinella segnala la fine del flusso. Qui c’è un solo consumatore e un solo produttore, perciò la strategia resta facile da seguire.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.concurrent.BlockingQueue;\nimport java.util.concurrent.LinkedBlockingQueue;\n\npublic class Esempio {\n    private static final String FINE = \"#FINE#\";\n    public static void main(String[] args) throws InterruptedException {\n        BlockingQueue<String> coda = new LinkedBlockingQueue<>();\n        Thread consumatore = new Thread(() -> {\n            try {\n                String messaggio;\n                while (!(messaggio = coda.take()).equals(FINE)) {\n                    System.out.println(\"Ricevuto: \" + messaggio);\n                }\n            } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        });\n        Thread produttore = new Thread(() -> {\n            try { coda.put(\"A\"); coda.put(\"B\"); coda.put(FINE); }\n            catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        });\n        consumatore.start(); produttore.start();\n        produttore.join(); consumatore.join();\n    }\n}",
      "output": "Ricevuto: A\nRicevuto: B",
      "noteTitle": "Da ricordare",
      "note": "In sistemi con più consumatori devi ripensare la terminazione: una sola sentinella potrebbe fermarne solo uno.",
      "quiz": {
        "question": "Che cosa segnala FINE?",
        "options": [
          "Che non ci sono altri messaggi da elaborare",
          "Che il thread viene terminato con forza",
          "Che la coda è salvata su file"
        ],
        "answer": 0,
        "explanation": "Il consumatore esce dal ciclo quando incontra la sentinella."
      }
    },
    {
      "id": "cancellazione-interrupt",
      "level": "INTERMEDIO",
      "title": "Esercizio 5 — Fermare un compito tramite interrupt",
      "summary": "Il thread di controllo richiede una terminazione e il lavoratore reagisce.",
      "goals": [
        "Invocare interrupt",
        "Gestire il blocco su sleep",
        "Concludere prima della fine del main"
      ],
      "explanation": "Il thread non viene ucciso forzatamente. Se è dentro sleep, l’interruzione provoca InterruptedException; il codice può gestirla e uscire in modo ordinato.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        Thread lavoro = new Thread(() -> {\n            System.out.println(\"Attività avviata\");\n            try {\n                Thread.sleep(10_000);\n                System.out.println(\"Attività completata\");\n            } catch (InterruptedException e) {\n                System.out.println(\"Attività interrotta in modo controllato\");\n                Thread.currentThread().interrupt();\n            }\n        });\n        lavoro.start();\n        Thread.sleep(30);\n        lavoro.interrupt();\n        lavoro.join();\n    }\n}",
      "output": "Attività avviata\nAttività interrotta in modo controllato",
      "noteTitle": "Da ricordare",
      "note": "Thread.sleep nel main è solo per rendere osservabile la dimostrazione; in produzione usa segnali, latch o API dedicate quando serve.",
      "quiz": {
        "question": "Qual è il modo corretto di richiedere lo stop?",
        "options": [
          "Inviare interrupt e far reagire il codice",
          "Usare Thread.stop()",
          "Chiudere la finestra del terminale"
        ],
        "answer": 0,
        "explanation": "La cancellazione cooperativa mantiene il controllo del rilascio delle risorse."
      }
    },
    {
      "id": "risultato-atomico",
      "level": "INTERMEDIO",
      "title": "Esercizio 6 — Rendere sicuro un contatore",
      "summary": "Sostituisci l’incremento non atomico con AtomicInteger.",
      "goals": [
        "Identificare race condition",
        "Usare incrementAndGet",
        "Aspettare la conclusione dei task"
      ],
      "explanation": "Il risultato di un contatore condiviso aggiornato da più thread deve essere affidabile. AtomicInteger permette l’incremento atomico del singolo valore; join garantisce che tutte le operazioni sono terminate prima della lettura finale.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.concurrent.atomic.AtomicInteger;\n\npublic class Esempio {\n    public static void main(String[] args) throws InterruptedException {\n        AtomicInteger visite = new AtomicInteger();\n        Runnable visita = () -> { for (int i = 0; i < 5_000; i++) visite.incrementAndGet(); };\n        Thread a = new Thread(visita);\n        Thread b = new Thread(visita);\n        Thread c = new Thread(visita);\n        a.start(); b.start(); c.start();\n        a.join(); b.join(); c.join();\n        System.out.println(\"Visite: \" + visite.get());\n    }\n}",
      "output": "Visite: 15000",
      "noteTitle": "Da ricordare",
      "note": "AtomicInteger è indicato per un valore isolato; per invarianti che coinvolgono più campi, sincronizza l’operazione complessiva.",
      "quiz": {
        "question": "Quante incrementazioni si aspettano da tre thread con 5.000 incrementi ciascuno?",
        "options": [
          "15.000",
          "5.000",
          "10.000"
        ],
        "answer": 0,
        "explanation": "Tre thread eseguono 5.000 incrementi ciascuno: 3 × 5.000 = 15.000."
      }
    },
    {
      "id": "integrazione-lavori",
      "level": "AVANZATO",
      "title": "Esercizio 7 — Elaborare più richieste con un pool",
      "summary": "Il compito finale usa un pool, raccoglie risultati e chiude il servizio.",
      "goals": [
        "Scegliere il pool",
        "Usare Future e Callable",
        "Chiudere ExecutorService"
      ],
      "explanation": "Il pool permette di limitare quante attività vengono eseguite in parallelo. I Future rappresentano risultati eventualmente pronti; l’esempio attende tutti i risultati e poi chiude il pool anche se si verifica un errore.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.concurrent.Callable;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.Future;\n\npublic class Esempio {\n    public static void main(String[] args) throws Exception {\n        ExecutorService pool = Executors.newFixedThreadPool(2);\n        try {\n            List<Callable<Integer>> lavori = Arrays.asList(\n                    () -> 12 * 2,\n                    () -> 7 * 3,\n                    () -> 5 * 4);\n            int totale = 0;\n            for (Future<Integer> risultato : pool.invokeAll(lavori)) {\n                totale += risultato.get();\n            }\n            System.out.println(\"Totale elaborato: \" + totale);\n        } finally {\n            pool.shutdown();\n        }\n    }\n}",
      "output": "Totale elaborato: 65",
      "noteTitle": "Da ricordare",
      "note": "L’esercizio finale combina i concetti del percorso. Per un’applicazione reale, evita di bloccare thread UI e gestisci timeout e cancellazione.",
      "quiz": {
        "question": "A cosa serve invokeAll?",
        "options": [
          "Inviare una raccolta di compiti e attendere che siano completati",
          "Arrestare il computer",
          "Avviare tutti i compiti sul thread main uno dopo l’altro"
        ],
        "answer": 0,
        "explanation": "invokeAll restituisce Future per i compiti della raccolta dopo il completamento."
      }
    }
  ]
};
