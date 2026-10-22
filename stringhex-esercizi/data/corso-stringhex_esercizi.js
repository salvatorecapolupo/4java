/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Stringhe: esercizi risolti",
  "slug": "esercizi-stringhe-java",
  "kicker": "ESERCITAZIONI · STRINGHE",
  "intro": "Allenati con conversione binaria, conteggio parole, pulizia degli spazi e cifratura dimostrativa.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/stringhex/stringhex.htm"
    },
    {
      "label": "Java API — String",
      "url": "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html"
    },
    {
      "label": "Dev.java — Definire i metodi",
      "url": "https://dev.java/learn/language/oop/classes-objects/defining-methods/"
    }
  ],
  "lessons": [
    {
      "id": "binario-da-stringa",
      "level": "BASE",
      "title": "Da stringa binaria a decimale",
      "summary": "Valida una sequenza 0/1 prima della conversione.",
      "goals": [
        "Controllare lunghezza e caratteri",
        "Usare parseInt con base 2",
        "Segnalare input non valido"
      ],
      "explanation": "La stringa deve contenere da 1 a 8 caratteri, tutti 0 o 1. parseInt(testo, 2) interpreta il testo in base binaria.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static int binarioInDecimale(String s) {\n        if (s == null || s.length() < 1 || s.length() > 8 || !s.matches(\"[01]+\")) {\n            throw new IllegalArgumentException(\"Inserire da 1 a 8 bit\");\n        }\n        return Integer.parseInt(s, 2);\n    }\n    public static void main(String[] args) { System.out.println(binarioInDecimale(\"00001101\")); }\n}",
      "output": "13",
      "noteTitle": "Da ricordare",
      "note": "La validazione evita che lettere o stringhe vuote causino una conversione inattesa.",
      "quiz": {
        "question": "Quale base va passata a parseInt per leggere un numero binario?",
        "options": [
          "2",
          "8",
          "16"
        ],
        "answer": 0,
        "explanation": "La base 2 usa i simboli 0 e 1."
      }
    },
    {
      "id": "occorrenze-parola",
      "level": "BASE",
      "title": "Contare le occorrenze di una parola",
      "summary": "Dividi la frase in parole e confrontale senza distinguere maiuscole.",
      "goals": [
        "Normalizzare il testo",
        "Separare le parole",
        "Contare solo le corrispondenze complete"
      ],
      "explanation": "Confrontare token interi evita di contare “java” dentro “javascript”. Per chiarezza, l’esempio ignora le maiuscole e divide sul testo non alfanumerico.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Locale;\npublic class Esempio {\n    static int conta(String frase, String parola) {\n        if (parola == null || parola.trim().isEmpty()) return 0;\n        String[] token = frase.toLowerCase(Locale.ROOT).split(\"[^\\\\p{L}\\\\p{N}]+\" );\n        int n = 0;\n        for (String t : token) if (t.equals(parola.toLowerCase(Locale.ROOT))) n++;\n        return n;\n    }\n    public static void main(String[] args) { System.out.println(conta(\"Java è utile; JAVA è diffuso.\", \"java\")); }\n}",
      "output": "2",
      "noteTitle": "Da ricordare",
      "note": "Per testi multilingue, la gestione di apostrofi e lettere accentate può richiedere una regex Unicode più completa.",
      "quiz": {
        "question": "Perché confrontiamo il token con equals?",
        "options": [
          "Per contare solo la parola intera",
          "Per ordinare la frase",
          "Per convertire da binario"
        ],
        "answer": 0,
        "explanation": "equals confronta il token completo con la parola cercata."
      }
    },
    {
      "id": "spazi-multipli",
      "level": "BASE",
      "title": "Ridurre gli spazi ripetuti",
      "summary": "Trasforma sequenze di spazi in un singolo spazio.",
      "goals": [
        "Usare replaceAll",
        "Conoscere il significato di \\s+",
        "Pulire i bordi"
      ],
      "explanation": "trim rimuove gli spazi iniziali e finali; replaceAll sostituisce ogni sequenza di spazi bianchi con un singolo spazio.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        String testo = \"  Oggi    è   una bella   giornata.  \";\n        String pulito = testo.trim().replaceAll(\"\\\\s+\", \" \");\n        System.out.println(pulito);\n    }\n}",
      "output": "Oggi è una bella giornata.",
      "noteTitle": "Da ricordare",
      "note": "Le espressioni regolari vanno scritte come stringhe Java: il backslash deve quindi essere raddoppiato.",
      "quiz": {
        "question": "Qual è l’effetto di replaceAll(\"\\\\s+\", \" \")?",
        "options": [
          "Sostituisce ogni gruppo di spazi bianchi con uno spazio",
          "Rimuove tutte le vocali",
          "Conta le parole"
        ],
        "answer": 0,
        "explanation": "La regex trova uno o più spazi e li sostituisce con un solo spazio."
      }
    },
    {
      "id": "cesare",
      "level": "BASE",
      "title": "Cifrario di Cesare didattico",
      "summary": "Sposta le lettere di un numero fisso di posizioni nell’alfabeto.",
      "goals": [
        "Calcolare lo spostamento modulo 26",
        "Conservare maiuscole e minuscole",
        "Lasciare invariati gli altri simboli"
      ],
      "explanation": "Questo esercizio mostra una cifratura classica e facilmente reversibile; non è adatta a proteggere informazioni reali. La formula usa il resto modulo 26.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static String cesare(String testo, int chiave) {\n        StringBuilder out = new StringBuilder();\n        int k = Math.floorMod(chiave, 26);\n        for (char c : testo.toCharArray()) {\n            if (c >= 'a' && c <= 'z') out.append((char)('a' + (c - 'a' + k) % 26));\n            else if (c >= 'A' && c <= 'Z') out.append((char)('A' + (c - 'A' + k) % 26));\n            else out.append(c);\n        }\n        return out.toString();\n    }\n    public static void main(String[] args) { System.out.println(cesare(\"Ciao, Mondo!\", 3)); }\n}",
      "output": "Fldr, Prqgr!",
      "noteTitle": "Da ricordare",
      "note": "Il cifrario di Cesare è un esercizio algoritmico, non un sistema di sicurezza.",
      "quiz": {
        "question": "Che cosa fa floorMod sulla chiave?",
        "options": [
          "Gestisce anche chiavi negative riportandole nell’intervallo 0–25",
          "Converte tutto in minuscolo",
          "Aggiunge spazi"
        ],
        "answer": 0,
        "explanation": "floorMod riporta il valore in un intervallo coerente anche se la chiave è negativa."
      }
    },
    {
      "id": "media-lunghezze",
      "level": "BASE",
      "title": "Media della lunghezza delle stringhe",
      "summary": "Conta caratteri e stringhe, gestendo anche l’insieme vuoto.",
      "goals": [
        "Sommarne le lunghezze",
        "Dividere per il numero di stringhe",
        "Evitare la divisione per zero"
      ],
      "explanation": "La media è la somma delle lunghezze divisa per il numero di stringhe. In una soluzione interattiva, la stringa vuota può indicare il termine dell’inserimento; qui usiamo un array per rendere l’esempio ripetibile.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Locale;\npublic class Esempio {\n    public static void main(String[] args) {\n        String[] parole = {\"Ciao\", \"Java\", \"codice\"};\n        int totale = 0;\n        for (String p : parole) totale += p.length();\n        double media = parole.length == 0 ? 0 : (double) totale / parole.length;\n        System.out.println(String.format(Locale.ROOT, \"%.2f\", media));\n    }\n}",
      "output": "4.67",
      "noteTitle": "Da ricordare",
      "note": "La media è decimale: converti il totale in double prima della divisione.",
      "quiz": {
        "question": "Perché controllare che il numero di stringhe sia maggiore di zero?",
        "options": [
          "Per evitare di dividere per zero",
          "Per ordinare le parole",
          "Per convertire i caratteri"
        ],
        "answer": 0,
        "explanation": "Se non ci sono stringhe, la media non è definita: serve una regola esplicita."
      }
    }
  ]
};
