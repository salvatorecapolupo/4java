/* Percorso didattico progressivo; fonti e cautele editoriali nel README e nelle note del progetto. */
window.COURSE = {
  "title": "Stream e file in Java",
  "slug": "stream-java",
  "kicker": "INPUT / OUTPUT · FILE",
  "intro": "Dai concetti di flusso ai file di testo e binari, con esempi piccoli, risorse chiuse correttamente e una progressione dal livello base all’avanzato.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica — Streams",
      "url": "https://www.edutecnica.it/informatica/stream/stream.htm"
    },
    {
      "label": "Oracle — File operations",
      "url": "https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html"
    },
    {
      "label": "Oracle — try-with-resources",
      "url": "https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html"
    }
  ],
  "lessons": [
    {
      "id": "flusso-canale",
      "level": "BASE",
      "title": "Che cos’è un flusso?",
      "summary": "Un flusso collega una sorgente a una destinazione: tastiera, schermo, memoria o file.",
      "goals": [
        "Distinguere input e output",
        "Riconoscere System.in, System.out e System.err",
        "Capire il ruolo del canale"
      ],
      "explanation": "In Java, System.in è lo standard input, System.out è lo standard output e System.err è destinato ai messaggi diagnostici. Un flusso non è la stessa cosa di una collezione: rappresenta dati che vengono letti o scritti. La parola “stream” è usata anche per java.util.stream, un’API distinta che vedremo solo come collegamento.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        System.out.println(\"Messaggio per l’utente\");\n        System.err.println(\"Messaggio diagnostico\");\n    }\n}",
      "output": "Messaggio per l’utente\nMessaggio diagnostico (su stderr)",
      "noteTitle": "Da ricordare",
      "note": "In console i messaggi su stdout e stderr possono apparire vicini o essere reindirizzati separatamente: sono canali diversi, non un ordine grafico garantito.",
      "quiz": {
        "question": "Quale oggetto rappresenta lo standard input?",
        "options": [
          "System.in",
          "System.out",
          "System.err"
        ],
        "answer": 0,
        "explanation": "System.in è la sorgente standard da cui il programma legge i dati."
      }
    },
    {
      "id": "byte-e-caratteri",
      "level": "BASE",
      "title": "Byte e caratteri non sono la stessa cosa",
      "summary": "Scegli InputStream per i byte e Reader/Writer per i caratteri già decodificati.",
      "goals": [
        "Distinguere InputStream da Reader",
        "Leggere caratteri uno per volta",
        "Riconoscere la codifica del testo"
      ],
      "explanation": "InputStream legge byte. Reader legge caratteri, dopo la decodifica secondo una codifica concordata. Per testi in file conviene dichiarare esplicitamente UTF-8; per dati binari si usano flussi di byte o classi come DataInputStream.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.io.StringReader;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        try (StringReader lettore = new StringReader(\"Java\")) {\n            int carattere;\n            while ((carattere = lettore.read()) != -1) {\n                System.out.print((char) carattere);\n            }\n        }\n        System.out.println();\n    }\n}",
      "output": "Java",
      "noteTitle": "Da ricordare",
      "note": "StringReader usa una stringa in memoria: è utile per imparare l’API senza dipendere da un file sul computer.",
      "quiz": {
        "question": "Quale classe è orientata alla lettura di caratteri?",
        "options": [
          "InputStream",
          "Reader",
          "OutputStream"
        ],
        "answer": 1,
        "explanation": "Reader e le sue sottoclassi elaborano caratteri; InputStream elabora byte."
      }
    },
    {
      "id": "lettura-righe",
      "level": "BASE",
      "title": "Leggere un testo riga per riga",
      "summary": "BufferedReader rende semplice leggere righe senza caricare tutto il file in memoria.",
      "goals": [
        "Usare readLine()",
        "Gestire la fine del file con null",
        "Chiudere una risorsa"
      ],
      "explanation": "readLine() restituisce la prossima riga, senza il separatore di riga. Quando non ci sono altre righe, restituisce null. Il blocco try-with-resources chiude automaticamente il lettore anche in caso di errore.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.StringReader;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        try (BufferedReader lettore = new BufferedReader(\n                new StringReader(\"Prima riga\\nSeconda riga\"))) {\n            String riga;\n            while ((riga = lettore.readLine()) != null) {\n                System.out.println(riga);\n            }\n        }\n    }\n}",
      "output": "Prima riga\nSeconda riga",
      "noteTitle": "Da ricordare",
      "note": "Qui StringReader simula una sorgente testuale. Per un file reale, usa Files.newBufferedReader(Path, UTF_8).",
      "quiz": {
        "question": "Come si riconosce la fine quando si usa readLine()?",
        "options": [
          "Restituisce una stringa vuota",
          "Restituisce null",
          "Lancia sempre IOException"
        ],
        "answer": 1,
        "explanation": "La fine del file è segnalata dal valore null."
      }
    },
    {
      "id": "scrittura-testo",
      "level": "BASE",
      "title": "Scrivere e rileggere un file di testo",
      "summary": "Con Path e Files puoi scrivere un piccolo file senza gestire manualmente un FileWriter.",
      "goals": [
        "Usare Path.of",
        "Scrivere testo UTF-8",
        "Rileggere il contenuto"
      ],
      "explanation": "Dal Java 11, Files.writeString e Files.readString sono comodi per file piccoli o medi. Per file molto grandi, è preferibile leggere le righe progressivamente. L’esempio usa un file temporaneo, così non sovrascrive un file personale.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"officina-\", \".txt\");\n        try {\n            Files.writeString(file, \"Ciao\\nJava\", StandardCharsets.UTF_8);\n            System.out.println(Files.readString(file, StandardCharsets.UTF_8));\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "Ciao\nJava",
      "noteTitle": "Da ricordare",
      "note": "L’esempio richiede Java 11 o successivo. Per contenuti molto grandi non conviene leggere tutto in una sola String.",
      "quiz": {
        "question": "Quale metodo legge tutto il contenuto di un file in una stringa?",
        "options": [
          "Files.readString",
          "Files.writeString",
          "Files.deleteIfExists"
        ],
        "answer": 0,
        "explanation": "Files.readString legge e restituisce il testo del file."
      }
    },
    {
      "id": "writer-buffered",
      "level": "INTERMEDIO",
      "title": "Scrivere più righe con BufferedWriter",
      "summary": "Writer consente di emettere testo in modo incrementale e di aggiungere separatori di riga.",
      "goals": [
        "Usare BufferedWriter",
        "Usare newLine()",
        "Rileggere le righe scritte"
      ],
      "explanation": "BufferedWriter è utile quando si producono molte righe. Il try-with-resources chiude il writer e scarica i dati rimanenti. Poi il programma riapre il file con BufferedReader per controllare il risultato.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.BufferedReader;\nimport java.io.BufferedWriter;\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"righe-\", \".txt\");\n        try {\n            try (BufferedWriter scrittore = Files.newBufferedWriter(file, StandardCharsets.UTF_8)) {\n                scrittore.write(\"Ada\");\n                scrittore.newLine();\n                scrittore.write(\"Luca\");\n            }\n            try (BufferedReader lettore = Files.newBufferedReader(file, StandardCharsets.UTF_8)) {\n                String riga;\n                while ((riga = lettore.readLine()) != null) System.out.println(riga);\n            }\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "Ada\nLuca",
      "noteTitle": "Da ricordare",
      "note": "Quando il file contiene molti dati, lavora a righe anziché leggere tutto in memoria.",
      "quiz": {
        "question": "Qual è il vantaggio del try-with-resources?",
        "options": [
          "Chiude automaticamente le risorse",
          "Evita tutti gli errori di I/O",
          "Crea sempre un file temporaneo"
        ],
        "answer": 0,
        "explanation": "Le risorse dichiarate nel try vengono chiuse automaticamente."
      }
    },
    {
      "id": "opzioni-file",
      "level": "INTERMEDIO",
      "title": "Creare, sovrascrivere o aggiungere",
      "summary": "Le opzioni di scrittura determinano cosa succede a un file già esistente.",
      "goals": [
        "Conoscere CREATE e APPEND",
        "Aggiungere testo senza sovrascrivere",
        "Evitare modifiche accidentali"
      ],
      "explanation": "Files.writeString crea un file se non esiste e, senza opzioni ulteriori, sostituisce il contenuto se esiste. Con CREATE e APPEND si può aggiungere testo. In applicazioni reali, decidi esplicitamente se sovrascrivere o aggiungere.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"log-\", \".txt\");\n        try {\n            Files.writeString(file, \"avvio\\n\", StandardCharsets.UTF_8);\n            Files.writeString(file, \"operazione completata\\n\", StandardCharsets.UTF_8,\n                    StandardOpenOption.CREATE, StandardOpenOption.APPEND);\n            System.out.print(Files.readString(file, StandardCharsets.UTF_8));\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "avvio\noperazione completata",
      "noteTitle": "Da ricordare",
      "note": "Non usare un nome fisso come log.txt negli esempi di prova se rischi di sovrascrivere dati importanti.",
      "quiz": {
        "question": "Quale opzione permette di aggiungere al contenuto esistente?",
        "options": [
          "APPEND",
          "TRUNCATE_EXISTING",
          "READ"
        ],
        "answer": 0,
        "explanation": "APPEND scrive alla fine del contenuto esistente."
      }
    },
    {
      "id": "dati-binari",
      "level": "INTERMEDIO",
      "title": "Scrivere e leggere dati binari tipizzati",
      "summary": "DataOutputStream e DataInputStream memorizzano e leggono valori primitivi in formato binario.",
      "goals": [
        "Usare writeUTF e writeInt",
        "Leggere nello stesso ordine",
        "Distinguere dati binari e testo"
      ],
      "explanation": "Un flusso binario non aggiunge separatori leggibili tra i valori: chi legge deve conoscere il tipo e l’ordine dei dati scritti. DataOutputStream e DataInputStream sono utili per esercizi didattici e formati semplici definiti dal programma.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.ByteArrayInputStream;\nimport java.io.ByteArrayOutputStream;\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        ByteArrayOutputStream memoria = new ByteArrayOutputStream();\n        try (DataOutputStream uscita = new DataOutputStream(memoria)) {\n            uscita.writeUTF(\"penna\");\n            uscita.writeInt(3);\n        }\n        try (DataInputStream ingresso = new DataInputStream(\n                new ByteArrayInputStream(memoria.toByteArray()))) {\n            System.out.println(ingresso.readUTF() + \" \" + ingresso.readInt());\n        }\n    }\n}",
      "output": "penna 3",
      "noteTitle": "Da ricordare",
      "note": "Un formato binario va documentato: cambiare l’ordine di scrittura senza aggiornare il lettore può corrompere l’interpretazione dei dati.",
      "quiz": {
        "question": "In che ordine vanno letti i valori scritti da DataOutputStream?",
        "options": [
          "Nell’ordine e con i tipi corrispondenti",
          "In qualsiasi ordine",
          "Prima tutti gli interi, poi le stringhe"
        ],
        "answer": 0,
        "explanation": "Il programma deve leggere i valori nello stesso ordine e con il tipo corretto."
      }
    },
    {
      "id": "stream-lines-api",
      "level": "INTERMEDIO",
      "title": "Contare righe con Files.lines",
      "summary": "Files.lines produce uno Stream di righe: è collegato ai file, ma non è un InputStream.",
      "goals": [
        "Usare Files.lines",
        "Filtrare righe vuote",
        "Chiudere lo stream"
      ],
      "explanation": "Qui compare un secondo significato comune della parola stream: java.util.stream.Stream, usato per elaborare sequenze con operazioni come filter e count. Files.lines apre un flusso di righe che deve essere chiuso; il try-with-resources se ne occupa.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.stream.Stream;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"nomi-\", \".txt\");\n        try {\n            Files.writeString(file, \"Ada\\n\\nLuca\\nMina\\n\", StandardCharsets.UTF_8);\n            try (Stream<String> righe = Files.lines(file, StandardCharsets.UTF_8)) {\n                long nonVuote = righe.filter(riga -> !riga.isBlank()).count();\n                System.out.println(nonVuote);\n            }\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "3",
      "noteTitle": "Da ricordare",
      "note": "Il corso è dedicato ai flussi I/O. La Stream API è un concetto distinto, presentato qui solo come ponte tra file e collezioni.",
      "quiz": {
        "question": "Quale frase è corretta?",
        "options": [
          "java.util.stream.Stream e InputStream sono la stessa classe",
          "Files.lines restituisce uno Stream di righe",
          "Files.lines non apre risorse"
        ],
        "answer": 1,
        "explanation": "Files.lines restituisce uno Stream<String>, da chiudere dopo l’uso."
      }
    },
    {
      "id": "serializzazione-oggetti",
      "level": "AVANZATO",
      "title": "Serializzare un oggetto: capire il meccanismo",
      "summary": "ObjectOutputStream può scrivere oggetti serializzabili; la deserializzazione richiede particolare cautela.",
      "goals": [
        "Riconoscere Serializable",
        "Scrivere e leggere un oggetto",
        "Capire il rischio dei dati non fidati"
      ],
      "explanation": "La serializzazione Java trasforma uno stato di oggetto in una rappresentazione binaria. La classe deve implementare Serializable. La deserializzazione di dati provenienti da fonti non fidate può essere pericolosa: non leggere oggetti serializzati arbitrari ricevuti da utenti o dalla rete. Per scambio dati tra applicazioni, valuta formati testuali o binari espliciti.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.Serializable;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Esempio {\n    static class Prodotto implements Serializable {\n        private static final long serialVersionUID = 1L;\n        final String nome;\n        final int prezzo;\n        Prodotto(String nome, int prezzo) { this.nome = nome; this.prezzo = prezzo; }\n    }\n\n    public static void main(String[] args) throws IOException, ClassNotFoundException {\n        Path file = Files.createTempFile(\"prodotto-\", \".dat\");\n        try {\n            try (ObjectOutputStream out = new ObjectOutputStream(Files.newOutputStream(file))) {\n                out.writeObject(new Prodotto(\"ruota\", 5));\n            }\n            try (ObjectInputStream in = new ObjectInputStream(Files.newInputStream(file))) {\n                Prodotto p = (Prodotto) in.readObject();\n                System.out.println(p.nome + \" \" + p.prezzo);\n            }\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "ruota 5",
      "noteTitle": "Attenzione alla sicurezza",
      "note": "È un esempio didattico. In applicazioni reali usa deserializzazione solo in contesti controllati e valuta alternative più semplici e sicure.",
      "quiz": {
        "question": "Perché bisogna evitare la deserializzazione di dati non fidati?",
        "options": [
          "Può esporre l’applicazione a rischi di sicurezza",
          "Perché Serializable non funziona con oggetti",
          "Perché i file binari sono sempre vuoti"
        ],
        "answer": 0,
        "explanation": "Leggere oggetti serializzati da fonti non fidate può attivare comportamenti pericolosi."
      }
    }
  ]
};
