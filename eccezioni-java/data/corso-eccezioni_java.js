/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Gestione delle eccezioni in Java",
  "slug": "eccezioni-java",
  "kicker": "JAVA · ERRORI E ROBUSTEZZA",
  "intro": "Riconosci gli errori di esecuzione, gestisci i casi recuperabili e chiudi le risorse in modo affidabile.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/eccezioni/eccezioni.htm"
    },
    {
      "label": "Dev.java — Eccezioni",
      "url": "https://dev.java/learn/exceptions/"
    }
  ],
  "lessons": [
    {
      "id": "try-catch",
      "level": "BASE",
      "title": "try e catch",
      "summary": "Gestisci una conversione che potrebbe fallire.",
      "goals": [
        "Isolare il blocco rischioso",
        "Catturare il tipo specifico",
        "Fornire un feedback utile"
      ],
      "explanation": "try contiene l’operazione rischiosa; catch gestisce l’eccezione del tipo specificato. È preferibile catturare eccezioni specifiche e non ignorare silenziosamente l’errore.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        String testo = \"12x\";\n        try {\n            int n = Integer.parseInt(testo);\n            System.out.println(n * n);\n        } catch (NumberFormatException e) {\n            System.out.println(\"Inserisci un intero valido\");\n        }\n    }\n}",
      "output": "Inserisci un intero valido",
      "noteTitle": "Da ricordare",
      "note": "Un catch troppo generico può nascondere problemi che non sai gestire; scegli il tipo di eccezione più preciso utile.",
      "quiz": {
        "question": "Quale eccezione si verifica per \"12x\" con parseInt?",
        "options": [
          "NumberFormatException",
          "NullPointerException",
          "ArrayIndexOutOfBoundsException"
        ],
        "answer": 0,
        "explanation": "Il testo non corrisponde al formato di un intero."
      }
    },
    {
      "id": "finally",
      "level": "BASE",
      "title": "Il blocco finally",
      "summary": "Esegui operazioni di pulizia anche quando si verifica un errore.",
      "goals": [
        "Capire il ruolo di finally",
        "Non confondere finally e catch",
        "Preferire try-with-resources per risorse chiudibili"
      ],
      "explanation": "finally viene usato per azioni di pulizia che devono avvenire al termine del try/catch. Per risorse che implementano AutoCloseable, try-with-resources è generalmente più sicuro e leggibile.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Calcolo avviato\");\n            int risultato = 10 / 2;\n            System.out.println(risultato);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Divisione non valida\");\n        } finally {\n            System.out.println(\"Operazione terminata\");\n        }\n    }\n}",
      "output": "Calcolo avviato\n5\nOperazione terminata",
      "noteTitle": "Da ricordare",
      "note": "Non usare finally per nascondere eccezioni o restituire un valore che sovrascrive il risultato del try.",
      "quiz": {
        "question": "Quando viene eseguito finally?",
        "options": [
          "Normalmente al termine del try/catch, anche se si verifica un’eccezione",
          "Solo quando il try fallisce",
          "Solo quando non c’è catch"
        ],
        "answer": 0,
        "explanation": "finally è pensato per la pulizia indipendentemente dall’esito normale o eccezionale."
      }
    },
    {
      "id": "checked-unchecked",
      "level": "BASE",
      "title": "Checked e unchecked",
      "summary": "Distingui le eccezioni da dichiarare o gestire da quelle di programmazione.",
      "goals": [
        "Riconoscere IOException",
        "Riconoscere RuntimeException",
        "Scegliere catch o throws"
      ],
      "explanation": "Le eccezioni checked devono essere gestite o dichiarate con throws. Le unchecked derivano da RuntimeException o Error e non sono soggette allo stesso obbligo di compilazione. Questo non significa che le unchecked vadano ignorate.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nclass Lettore {\n    static String leggi() throws IOException {\n        throw new IOException(\"Lettura non riuscita\");\n    }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        try { System.out.println(Lettore.leggi()); }\n        catch (IOException e) { System.out.println(\"Errore I/O: \" + e.getMessage()); }\n    }\n}",
      "output": "Errore I/O: Lettura non riuscita",
      "noteTitle": "Da ricordare",
      "note": "throws dichiara che il metodo può propagare un’eccezione checked; throw lancia un’istanza concreta.",
      "quiz": {
        "question": "Quale parola dichiara un’eccezione nella firma del metodo?",
        "options": [
          "throws",
          "throw",
          "catch"
        ],
        "answer": 0,
        "explanation": "throws compare nella dichiarazione del metodo."
      }
    },
    {
      "id": "try-resources",
      "level": "BASE",
      "title": "try-with-resources",
      "summary": "Lascia che Java chiuda automaticamente risorse come file e stream.",
      "goals": [
        "Riconoscere AutoCloseable",
        "Aprire una risorsa nel try",
        "Evitare chiusure dimenticate"
      ],
      "explanation": "Con try-with-resources la risorsa viene chiusa automaticamente alla fine del blocco. StringReader permette di mostrare il comportamento senza dipendere da un file esterno.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\npublic class Esempio {\n    public static void main(String[] args) {\n        try (BufferedReader r = new BufferedReader(new StringReader(\"Prima riga\\nSeconda riga\"))) {\n            System.out.println(r.readLine());\n        } catch (IOException e) {\n            System.out.println(\"Lettura non riuscita\");\n        }\n    }\n}",
      "output": "Prima riga",
      "noteTitle": "Da ricordare",
      "note": "In un progetto reale, gestisci le eccezioni in modo utile all’utente e registra i dettagli tecnici quando appropriato.",
      "quiz": {
        "question": "Che cosa fa try-with-resources?",
        "options": [
          "Chiude automaticamente le risorse dichiarate",
          "Riprova automaticamente ogni errore",
          "Ignora le eccezioni"
        ],
        "answer": 0,
        "explanation": "Le risorse AutoCloseable vengono chiuse al termine del blocco."
      }
    },
    {
      "id": "eccezione-personalizzata",
      "level": "BASE",
      "title": "Lanciare un’eccezione coerente",
      "summary": "Usa throw quando un’operazione viola una regola del programma.",
      "goals": [
        "Validare prima di modificare lo stato",
        "Lanciare un’eccezione significativa",
        "Separare errore e messaggio"
      ],
      "explanation": "Un metodo può rifiutare valori non ammessi lanciando IllegalArgumentException o un’eccezione specifica. L’eccezione comunica che l’operazione non può essere completata in sicurezza.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Conto {\n    private double saldo = 40;\n    void preleva(double importo) {\n        if (importo <= 0) throw new IllegalArgumentException(\"Importo deve essere positivo\");\n        if (importo > saldo) throw new IllegalArgumentException(\"Saldo insufficiente\");\n        saldo -= importo;\n    }\n    double saldo() { return saldo; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Conto c = new Conto();\n        try { c.preleva(50); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n        System.out.println(c.saldo());\n    }\n}",
      "output": "Saldo insufficiente\n40.0",
      "noteTitle": "Da ricordare",
      "note": "La validazione avviene prima di modificare il saldo, così lo stato resta coerente quando l’operazione fallisce.",
      "quiz": {
        "question": "Perché l’operazione controlla l’importo prima di sottrarlo?",
        "options": [
          "Per non lasciare il conto in uno stato non valido",
          "Per ignorare gli errori",
          "Per evitare ogni uso di metodi"
        ],
        "answer": 0,
        "explanation": "Le verifiche precedono la modifica dello stato."
      }
    }
  ]
};
