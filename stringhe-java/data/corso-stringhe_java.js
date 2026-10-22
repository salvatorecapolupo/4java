/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Stringhe in Java",
  "slug": "stringhe-java",
  "kicker": "FONDAMENTI · TESTO",
  "intro": "Impara a confrontare, cercare, estrarre e trasformare testo senza confondere stringhe e caratteri.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/stringhe/stringhe.htm"
    },
    {
      "label": "Java API — String",
      "url": "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html"
    }
  ],
  "lessons": [
    {
      "id": "stringhe-immutabili",
      "level": "BASE",
      "title": "Le stringhe sono immutabili",
      "summary": "Una trasformazione crea una nuova stringa.",
      "goals": [
        "Dichiarare una String",
        "Osservare concat",
        "Riassegnare il risultato"
      ],
      "explanation": "Gli oggetti String non cambiano dopo la creazione. Metodi come concat restituiscono una nuova stringa: se il risultato non viene assegnato o usato, il testo originale resta invariato.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        String parola = \"Java\";\n        parola.concat(\" moderno\");\n        System.out.println(parola);\n        parola = parola.concat(\" moderno\");\n        System.out.println(parola);\n    }\n}",
      "output": "Java\nJava moderno",
      "noteTitle": "Da ricordare",
      "note": "Non aspettarti che concat, replace o toUpperCase modifichino la variabile originale senza una riassegnazione.",
      "quiz": {
        "question": "Che cosa restituisce concat?",
        "options": [
          "Una nuova stringa",
          "Modifica sempre l’oggetto originale",
          "Un numero intero"
        ],
        "answer": 0,
        "explanation": "String è immutabile: i metodi restituiscono il testo risultante."
      }
    },
    {
      "id": "equals-equals",
      "level": "BASE",
      "title": "Confrontare il contenuto",
      "summary": "Usa equals per confrontare il testo, non ==.",
      "goals": [
        "Distinguere riferimenti e contenuto",
        "Usare equals",
        "Usare equalsIgnoreCase quando serve"
      ],
      "explanation": "L’operatore == confronta se due riferimenti indicano lo stesso oggetto. equals confronta il contenuto della stringa. Per ignorare maiuscole e minuscole usa equalsIgnoreCase.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        String a = new String(\"ciao\");\n        String b = new String(\"ciao\");\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n        System.out.println(a.equalsIgnoreCase(\"CIAO\"));\n    }\n}",
      "output": "false\ntrue\ntrue",
      "noteTitle": "Da ricordare",
      "note": "Quando confronti testi inseriti dall’utente, in genere vuoi confrontare il contenuto e quindi usare equals.",
      "quiz": {
        "question": "Quale metodo confronta il contenuto?",
        "options": [
          "equals()",
          "==",
          "length()"
        ],
        "answer": 0,
        "explanation": "equals confronta il contenuto, mentre == confronta i riferimenti."
      }
    },
    {
      "id": "ricerca-sottostringa",
      "level": "BASE",
      "title": "Cercare ed estrarre testo",
      "summary": "Trova una parola con indexOf e ritaglia una porzione con substring.",
      "goals": [
        "Usare indexOf",
        "Interpretare -1",
        "Rispettare l’estremo finale escluso"
      ],
      "explanation": "indexOf restituisce l’indice della prima occorrenza o -1 se non la trova. substring(inizio, fine) include il carattere all’indice iniziale ma esclude quello all’indice finale.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        String frase = \"Impara Java oggi\";\n        int posizione = frase.indexOf(\"Java\");\n        System.out.println(posizione);\n        System.out.println(frase.substring(0, 6));\n    }\n}",
      "output": "7\nImpara",
      "noteTitle": "Da ricordare",
      "note": "Prima di usare substring, assicurati che gli indici siano compresi tra 0 e length().",
      "quiz": {
        "question": "Che cosa significa indexOf quando restituisce -1?",
        "options": [
          "La sequenza non è stata trovata",
          "La sequenza inizia al primo carattere",
          "La stringa è vuota"
        ],
        "answer": 0,
        "explanation": "-1 segnala che la sottostringa non compare."
      }
    },
    {
      "id": "split-e-spazi",
      "level": "BASE",
      "title": "Dividere una frase in parole",
      "summary": "Normalizza gli spazi e divide il testo in token.",
      "goals": [
        "Usare trim",
        "Usare split con espressione regolare",
        "Contare le parole"
      ],
      "explanation": "split interpreta il parametro come espressione regolare. Dopo aver eliminato gli spazi ai bordi, la sequenza \\s+ rappresenta uno o più caratteri di spaziatura.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        String frase = \"  Java   è una lingua  \";\n        String pulita = frase.trim();\n        String[] parole = pulita.split(\"\\\\s+\");\n        System.out.println(pulita);\n        System.out.println(\"Parole: \" + parole.length);\n    }\n}",
      "output": "Java   è una lingua\nParole: 4",
      "noteTitle": "Da ricordare",
      "note": "Se la stringa può essere vuota, controllala prima di chiamare split: il conteggio delle parole potrebbe richiedere una regola esplicita.",
      "quiz": {
        "question": "Che cosa significa \\s+ nella regex?",
        "options": [
          "Uno o più caratteri di spaziatura",
          "Esattamente una lettera s",
          "Una o più cifre"
        ],
        "answer": 0,
        "explanation": "La regex s identifica spazi bianchi e + significa una o più ripetizioni."
      }
    },
    {
      "id": "stringbuilder",
      "level": "BASE",
      "title": "Costruire testo ripetutamente",
      "summary": "StringBuilder è utile quando aggiungi molti frammenti.",
      "goals": [
        "Conoscere append",
        "Distinguere String da StringBuilder",
        "Usare reverse"
      ],
      "explanation": "StringBuilder è mutabile e riduce la creazione di molte stringhe intermedie quando costruisci testo in un ciclo. Non è una sostituzione obbligatoria per ogni concatenazione semplice.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        StringBuilder testo = new StringBuilder();\n        for (int i = 1; i <= 3; i++) testo.append(i).append(\" \");\n        System.out.println(testo.toString().trim());\n        System.out.println(new StringBuilder(\"Java\").reverse());\n    }\n}",
      "output": "1 2 3\navaJ",
      "noteTitle": "Da ricordare",
      "note": "Se lavori con un testo fisso e poche concatenazioni, la normale sintassi con + è spesso più chiara.",
      "quiz": {
        "question": "Quale metodo aggiunge contenuto a StringBuilder?",
        "options": [
          "append()",
          "equals()",
          "indexOf()"
        ],
        "answer": 0,
        "explanation": "append aggiunge testo o valori alla sequenza modificabile."
      }
    }
  ]
};
