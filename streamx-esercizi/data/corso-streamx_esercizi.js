/* Percorso didattico progressivo; fonti e cautele editoriali nel README e nelle note del progetto. */
window.COURSE = {
  "title": "Stream e file — esercizi guidati",
  "slug": "streamx-esercizi",
  "kicker": "INPUT / OUTPUT · LABORATORIO",
  "intro": "Una raccolta di esercizi graduati: scrivere e leggere, gestire input non valido, sommare vettori su file e verificare copie e dati binari.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica — esercizi sugli stream",
      "url": "https://www.edutecnica.it/informatica/streamx/streamx.htm"
    },
    {
      "label": "Edutecnica — esercizio 2, vettori su file",
      "url": "https://www.edutecnica.it/informatica/streamx/2.htm"
    },
    {
      "label": "Oracle — File operations",
      "url": "https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html"
    }
  ],
  "lessons": [
    {
      "id": "somma-vettori-file",
      "level": "BASE",
      "title": "Esercizio 1 — Sommare due vettori e salvare il risultato",
      "summary": "Scrivi le somme in un file e poi ricaricale in un terzo array.",
      "goals": [
        "Scorrere due array con lo stesso indice",
        "Scrivere numeri su file di testo",
        "Rileggere e convertire i dati"
      ],
      "explanation": "È una versione moderna dell’esercizio di somma dei vettori: si produce un valore per riga. Alla lettura si converte ogni riga in intero. L’esempio usa file temporanei e rimuove il file al termine.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.Arrays;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        int[] a = {1, 2, 3, 4, 5};\n        int[] b = {5, 4, 3, 2, 1};\n        StringBuilder testo = new StringBuilder();\n        for (int i = 0; i < a.length; i++) {\n            testo.append(a[i] + b[i]).append('\\n');\n        }\n        Path file = Files.createTempFile(\"somma-vettori-\", \".txt\");\n        try {\n            Files.writeString(file, testo.toString(), StandardCharsets.UTF_8);\n            int[] risultato = Files.readAllLines(file, StandardCharsets.UTF_8)\n                    .stream().mapToInt(Integer::parseInt).toArray();\n            System.out.println(Arrays.toString(risultato));\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "[6, 6, 6, 6, 6]",
      "noteTitle": "Da ricordare",
      "note": "Files.readAllLines carica tutte le righe in memoria: è adatto all’esercizio, non a file arbitrariamente grandi.",
      "quiz": {
        "question": "Perché il file contiene un risultato per riga?",
        "options": [
          "Semplifica la lettura e la conversione dei singoli valori",
          "È un requisito obbligatorio di Java",
          "Perché gli array possono contenere solo stringhe"
        ],
        "answer": 0,
        "explanation": "Un valore per riga rende il formato semplice da leggere e verificare."
      }
    },
    {
      "id": "controllo-numeri",
      "level": "BASE",
      "title": "Esercizio 2 — Leggere numeri e gestire righe non valide",
      "summary": "Un file può contenere righe vuote o dati che non rappresentano interi.",
      "goals": [
        "Leggere ogni riga",
        "Gestire NumberFormatException",
        "Contare valori validi"
      ],
      "explanation": "Il programma ignora righe vuote, prova a convertire le altre in interi e conta quali sono valide. In un programma completo potresti raccogliere gli errori e indicare il numero della riga.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"numeri-\", \".txt\");\n        try {\n            Files.writeString(file, \"12\\nabc\\n\\n7\\n\", StandardCharsets.UTF_8);\n            int somma = 0;\n            int validi = 0;\n            for (String riga : Files.readAllLines(file, StandardCharsets.UTF_8)) {\n                if (riga.isBlank()) continue;\n                try {\n                    somma += Integer.parseInt(riga.trim());\n                    validi++;\n                } catch (NumberFormatException e) {\n                    System.out.println(\"Riga non numerica ignorata\");\n                }\n            }\n            System.out.println(\"Validi: \" + validi + \", somma: \" + somma);\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "Riga non numerica ignorata\nValidi: 2, somma: 19",
      "noteTitle": "Da ricordare",
      "note": "La lettura del file e la conversione numerica sono due possibili fonti di errore diverse: gestiscile in modo distinto.",
      "quiz": {
        "question": "Quale eccezione si gestisce se una stringa non è un intero valido?",
        "options": [
          "IOException",
          "NumberFormatException",
          "InterruptedException"
        ],
        "answer": 1,
        "explanation": "Integer.parseInt lancia NumberFormatException per testi non convertibili."
      }
    },
    {
      "id": "copia-file",
      "level": "BASE",
      "title": "Esercizio 3 — Copiare un file senza perdere la sorgente",
      "summary": "Usa Files.copy per creare una copia separata.",
      "goals": [
        "Creare un file sorgente temporaneo",
        "Copiare con Files.copy",
        "Verificare il contenuto copiato"
      ],
      "explanation": "La copia lavora a livello di file, senza dover leggere il testo manualmente. REPLACE_EXISTING permette di sostituire la destinazione se già esiste; in questo esempio la destinazione è nuova.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardCopyOption;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path sorgente = Files.createTempFile(\"sorgente-\", \".txt\");\n        Path copia = Files.createTempFile(\"copia-\", \".txt\");\n        try {\n            Files.writeString(sorgente, \"Appunti di Java\", StandardCharsets.UTF_8);\n            Files.copy(sorgente, copia, StandardCopyOption.REPLACE_EXISTING);\n            System.out.println(Files.readString(copia, StandardCharsets.UTF_8));\n        } finally {\n            Files.deleteIfExists(sorgente);\n            Files.deleteIfExists(copia);\n        }\n    }\n}",
      "output": "Appunti di Java",
      "noteTitle": "Da ricordare",
      "note": "Prima di usare REPLACE_EXISTING su file reali, controlla che la destinazione non contenga dati da conservare.",
      "quiz": {
        "question": "Quale metodo copia un file?",
        "options": [
          "Files.copy",
          "Files.lines",
          "Files.createTempFile"
        ],
        "answer": 0,
        "explanation": "Files.copy copia un file in un’altra destinazione."
      }
    },
    {
      "id": "statistiche-file",
      "level": "INTERMEDIO",
      "title": "Esercizio 4 — Contare righe e righe non vuote",
      "summary": "Combina Files.lines con filter e count per una statistica semplice.",
      "goals": [
        "Aprire uno stream di righe",
        "Filtrare righe vuote",
        "Chiudere lo stream"
      ],
      "explanation": "Files.lines permette di elaborare un file riga per riga. La risorsa Stream deve essere chiusa, perciò è racchiusa in try-with-resources. Il file temporaneo contiene una riga vuota per verificare il filtro.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.stream.Stream;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"testo-\", \".txt\");\n        try {\n            Files.writeString(file, \"uno\\n\\ndue\\ntre\\n\", StandardCharsets.UTF_8);\n            try (Stream<String> righe = Files.lines(file, StandardCharsets.UTF_8)) {\n                System.out.println(\"Righe non vuote: \" + righe.filter(r -> !r.isBlank()).count());\n            }\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "Righe non vuote: 3",
      "noteTitle": "Da ricordare",
      "note": "Questo esercizio usa sia I/O sia java.util.stream: non confondere lo Stream API con InputStream.",
      "quiz": {
        "question": "Perché lo stream è in try-with-resources?",
        "options": [
          "Perché è una risorsa associata al file da chiudere",
          "Perché filter può essere usato solo nei try",
          "Perché count cancella il file"
        ],
        "answer": 0,
        "explanation": "La chiusura dello stream rilascia la risorsa di I/O sottostante."
      }
    },
    {
      "id": "array-binario",
      "level": "INTERMEDIO",
      "title": "Esercizio 5 — Salvare un array in formato binario",
      "summary": "Scrivi la lunghezza e poi gli interi, leggendo i valori nello stesso ordine.",
      "goals": [
        "Usare DataOutputStream",
        "Scrivere la dimensione",
        "Ricostruire un array"
      ],
      "explanation": "Il formato è definito dall’esercizio: prima la lunghezza, poi tutti gli interi. Chi legge deve seguire esattamente lo stesso ordine. I dati binari non sono pensati per essere aperti con un editor di testo.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.ByteArrayInputStream;\nimport java.io.ByteArrayOutputStream;\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.util.Arrays;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        int[] valori = {4, 8, 15};\n        ByteArrayOutputStream memoria = new ByteArrayOutputStream();\n        try (DataOutputStream out = new DataOutputStream(memoria)) {\n            out.writeInt(valori.length);\n            for (int valore : valori) out.writeInt(valore);\n        }\n        try (DataInputStream in = new DataInputStream(new ByteArrayInputStream(memoria.toByteArray()))) {\n            int n = in.readInt();\n            int[] caricati = new int[n];\n            for (int i = 0; i < n; i++) caricati[i] = in.readInt();\n            System.out.println(Arrays.toString(caricati));\n        }\n    }\n}",
      "output": "[4, 8, 15]",
      "noteTitle": "Da ricordare",
      "note": "ByteArrayOutputStream mantiene i byte in memoria per la dimostrazione; per un file reale useresti Files.newOutputStream.",
      "quiz": {
        "question": "Perché si salva prima la lunghezza dell’array?",
        "options": [
          "Per sapere quanti interi leggere",
          "Per ordinare i valori",
          "Per convertire i numeri in testo"
        ],
        "answer": 0,
        "explanation": "La lunghezza permette al lettore di sapere quanti interi aspettarsi."
      }
    },
    {
      "id": "record-testo",
      "level": "INTERMEDIO",
      "title": "Esercizio 6 — Leggere record testuali separati da punto e virgola",
      "summary": "Scomponi righe come nome;prezzo e calcola il totale.",
      "goals": [
        "Usare split con un separatore",
        "Convertire campi numerici",
        "Calcolare un totale"
      ],
      "explanation": "Un formato CSV reale può avere virgolette e separatori dentro i campi; qui scegliamo intenzionalmente un formato semplice, senza quel caso complesso. Ogni riga ha due campi: descrizione e importo intero.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"prodotti-\", \".txt\");\n        try {\n            Files.writeString(file, \"penna;2\\nquaderno;4\\nmatita;1\\n\", StandardCharsets.UTF_8);\n            int totale = 0;\n            for (String riga : Files.readAllLines(file, StandardCharsets.UTF_8)) {\n                String[] campi = riga.split(\";\", -1);\n                if (campi.length != 2) throw new IllegalArgumentException(\"Record non valido\");\n                totale += Integer.parseInt(campi[1]);\n            }\n            System.out.println(\"Totale: \" + totale);\n        } finally {\n            Files.deleteIfExists(file);\n        }\n    }\n}",
      "output": "Totale: 7",
      "noteTitle": "Da ricordare",
      "note": "Non chiamare questo formato un CSV completo: un parser CSV deve gestire anche virgolette e separatori nei campi.",
      "quiz": {
        "question": "Quanti campi prevede il formato di questo esercizio?",
        "options": [
          "Due",
          "Tre",
          "Un numero variabile senza regole"
        ],
        "answer": 0,
        "explanation": "Il formato didattico ha esattamente descrizione e importo."
      }
    },
    {
      "id": "pipeline-backup",
      "level": "AVANZATO",
      "title": "Esercizio 7 — Piccola pipeline di backup e verifica",
      "summary": "Scrivi dati, rileggili e verifica che il contenuto sia uguale.",
      "goals": [
        "Creare una copia di testo",
        "Confrontare contenuti",
        "Usare try-with-resources o Files"
      ],
      "explanation": "Una procedura di backup minima non si limita a scrivere: verifica anche il contenuto della copia. Qui si confrontano due stringhe. Sistemi reali richiedono ulteriori misure come permessi, gestione di errori, destinazioni sicure e versionamento.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Esempio {\n    public static void main(String[] args) throws IOException {\n        Path originale = Files.createTempFile(\"origine-\", \".txt\");\n        Path backup = Files.createTempFile(\"backup-\", \".txt\");\n        try {\n            Files.writeString(originale, \"lezione 1\\nlezione 2\", StandardCharsets.UTF_8);\n            Files.copy(originale, backup, java.nio.file.StandardCopyOption.REPLACE_EXISTING);\n            String a = Files.readString(originale, StandardCharsets.UTF_8);\n            String b = Files.readString(backup, StandardCharsets.UTF_8);\n            System.out.println(a.equals(b) ? \"Backup verificato\" : \"Contenuto diverso\");\n        } finally {\n            Files.deleteIfExists(originale);\n            Files.deleteIfExists(backup);\n        }\n    }\n}",
      "output": "Backup verificato",
      "noteTitle": "Da ricordare",
      "note": "È una dimostrazione didattica: non sostituisce strategie di backup per dati importanti, che richiedono anche prove di ripristino.",
      "quiz": {
        "question": "Qual è il controllo finale dell’esercizio?",
        "options": [
          "Verificare che origine e copia abbiano contenuto uguale",
          "Ordinare il file",
          "Contare quanti file esistono sul disco"
        ],
        "answer": 0,
        "explanation": "La verifica confronta il contenuto originale con quello della copia."
      }
    }
  ]
};
