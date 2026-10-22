/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Eccezioni: esercizi risolti",
  "slug": "esercizi-eccezioni-java",
  "kicker": "ESERCITAZIONI · GESTIONE DEGLI ERRORI",
  "intro": "Allena la validazione degli input, la divisione sicura, l’accesso agli array e le regole di un conto.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/eccezionix/eccezionix.htm"
    },
    {
      "label": "Dev.java — Eccezioni",
      "url": "https://dev.java/learn/exceptions/"
    }
  ],
  "lessons": [
    {
      "id": "parse-sicuro",
      "level": "BASE",
      "title": "Conversione numerica sicura",
      "summary": "Restituisci un esito chiaro quando il testo non è un intero.",
      "goals": [
        "Gestire NumberFormatException",
        "Restituire un messaggio coerente",
        "Separare input e calcolo"
      ],
      "explanation": "I dati provenienti dall’utente non sono automaticamente validi. Qui un metodo trasforma il testo oppure segnala con un messaggio che serve correggerlo.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static String quadrato(String testo) {\n        try {\n            int n = Integer.parseInt(testo.trim());\n            return \"Quadrato: \" + (n * n);\n        } catch (NumberFormatException e) {\n            return \"Formato non valido\";\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(quadrato(\"12\"));\n        System.out.println(quadrato(\"12x\"));\n    }\n}",
      "output": "Quadrato: 144\nFormato non valido",
      "noteTitle": "Da ricordare",
      "note": "In un’app reale, assicurati che n * n non superi i limiti di int; puoi usare long se necessario.",
      "quiz": {
        "question": "Che cosa cattura il catch?",
        "options": [
          "Il testo che non può essere convertito in intero",
          "Tutti gli errori di rete",
          "Un array vuoto"
        ],
        "answer": 0,
        "explanation": "parseInt solleva NumberFormatException se il formato non è numerico."
      }
    },
    {
      "id": "divisione-sicura",
      "level": "BASE",
      "title": "Divisione sicura",
      "summary": "Controlla il divisore prima di eseguire una divisione intera.",
      "goals": [
        "Controllare il denominatore",
        "Distinguere zero e risultato",
        "Gestire il caso limite in modo leggibile"
      ],
      "explanation": "La divisione intera per zero provoca ArithmeticException. Quando la condizione è prevedibile, si può anche validare esplicitamente prima del calcolo e restituire un messaggio.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static String dividi(int a, int b) {\n        if (b == 0) return \"Impossibile dividere per zero\";\n        return \"Risultato: \" + (a / b);\n    }\n    public static void main(String[] args) {\n        System.out.println(dividi(10, 2));\n        System.out.println(dividi(10, 0));\n    }\n}",
      "output": "Risultato: 5\nImpossibile dividere per zero",
      "noteTitle": "Da ricordare",
      "note": "Per divisioni intere, la parte decimale viene scartata. Per un risultato decimale, converti almeno un operando in double.",
      "quiz": {
        "question": "Qual è la strategia usata nel codice?",
        "options": [
          "Convalida il divisore prima della divisione",
          "Cattura ogni possibile Throwable",
          "Ignora il denominatore"
        ],
        "answer": 0,
        "explanation": "La condizione evita l’operazione non valida prima che venga eseguita."
      }
    },
    {
      "id": "indice-sicuro",
      "level": "BASE",
      "title": "Accedere a un array in sicurezza",
      "summary": "Convalida l’indice prima di leggere un elemento.",
      "goals": [
        "Verificare l’intervallo",
        "Distinguere indice e valore",
        "Evitare accessi fuori dai limiti"
      ],
      "explanation": "Un indice valido va da zero a length - 1. Invece di usare il catch come normale controllo di flusso, si può verificare prima l’intervallo consentito.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static String leggi(int[] valori, int indice) {\n        if (indice < 0 || indice >= valori.length) return \"Indice non valido\";\n        return \"Valore: \" + valori[indice];\n    }\n    public static void main(String[] args) {\n        int[] v = {4, 8, 12};\n        System.out.println(leggi(v, 1));\n        System.out.println(leggi(v, 3));\n    }\n}",
      "output": "Valore: 8\nIndice non valido",
      "noteTitle": "Da ricordare",
      "note": "Se valori può essere null, aggiungi anche un controllo sul riferimento prima di leggere length.",
      "quiz": {
        "question": "Quale indice è valido per un array di tre elementi?",
        "options": [
          "0, 1 o 2",
          "Da 1 a 3",
          "Qualsiasi intero"
        ],
        "answer": 0,
        "explanation": "Gli indici partono da zero e l’ultimo è length - 1."
      }
    },
    {
      "id": "saldo-insufficiente",
      "level": "BASE",
      "title": "Gestire saldo insufficiente",
      "summary": "Definisci un’eccezione specifica per un’operazione non consentita.",
      "goals": [
        "Creare una checked exception",
        "Dichiararla con throws",
        "Gestirla nel chiamante"
      ],
      "explanation": "Un’eccezione personalizzata può rappresentare un errore di dominio con un nome chiaro. In questo esempio il prelievo dichiara una checked exception, che il chiamante deve catturare o propagare.",
      "codeLabel": "Esempio Java guidato",
      "code": "class SaldoInsufficienteException extends Exception {\n    SaldoInsufficienteException(String messaggio) { super(messaggio); }\n}\nclass Conto {\n    private int saldo = 30;\n    void preleva(int importo) throws SaldoInsufficienteException {\n        if (importo <= 0) throw new IllegalArgumentException(\"Importo non valido\");\n        if (importo > saldo) throw new SaldoInsufficienteException(\"Saldo insufficiente\");\n        saldo -= importo;\n    }\n    int saldo() { return saldo; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Conto c = new Conto();\n        try { c.preleva(50); }\n        catch (SaldoInsufficienteException e) { System.out.println(e.getMessage()); }\n        System.out.println(c.saldo());\n    }\n}",
      "output": "Saldo insufficiente\n30",
      "noteTitle": "Da ricordare",
      "note": "In un’applicazione reale, stabilisci quali errori sono recuperabili e quali vanno propagati al livello che può gestirli.",
      "quiz": {
        "question": "Perché la firma di preleva contiene throws?",
        "options": [
          "Per dichiarare la possibile eccezione checked",
          "Per lanciare subito l’eccezione",
          "Per chiudere una risorsa"
        ],
        "answer": 0,
        "explanation": "throws comunica al chiamante che deve gestire o propagare l’eccezione."
      }
    },
    {
      "id": "lettura-riga",
      "level": "BASE",
      "title": "Leggere una riga con try-with-resources",
      "summary": "Chiudi automaticamente un lettore anche in caso di eccezione.",
      "goals": [
        "Usare AutoCloseable",
        "Gestire IOException",
        "Tenere la gestione delle risorse esplicita"
      ],
      "explanation": "Try-with-resources limita il rischio di lasciare aperte risorse. StringReader permette di simulare una lettura senza creare un file sul computer.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\npublic class Esempio {\n    public static void main(String[] args) {\n        try (BufferedReader r = new BufferedReader(new StringReader(\"Java\\nAccessibile\"))) {\n            System.out.println(r.readLine());\n            System.out.println(r.readLine());\n        } catch (IOException e) {\n            System.out.println(\"Errore durante la lettura\");\n        }\n    }\n}",
      "output": "Java\nAccessibile",
      "noteTitle": "Da ricordare",
      "note": "La gestione dell’errore deve essere proporzionata: un messaggio user-friendly può accompagnarsi a un log tecnico.",
      "quiz": {
        "question": "Quando viene chiuso il BufferedReader?",
        "options": [
          "Automaticamente all’uscita dal blocco try",
          "Solo se si chiama close manualmente",
          "Mai"
        ],
        "answer": 0,
        "explanation": "Try-with-resources chiude automaticamente le risorse dichiarate."
      }
    }
  ]
};
