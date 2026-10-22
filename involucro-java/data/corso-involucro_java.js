/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Classi involucro (wrapper)",
  "slug": "wrapper-java",
  "kicker": "JAVA · TIPI PRIMITIVI E RIFERIMENTI",
  "intro": "Comprendi Integer, Double, Character e Boolean: conversioni, autoboxing, unboxing e confronti sicuri.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/involucro/involucro.htm"
    },
    {
      "label": "Oracle — Autoboxing e unboxing",
      "url": "https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html"
    },
    {
      "label": "Java API — String",
      "url": "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html"
    }
  ],
  "lessons": [
    {
      "id": "autoboxing",
      "level": "BASE",
      "title": "Autoboxing e unboxing",
      "summary": "Java può convertire automaticamente fra primitivi e wrapper.",
      "goals": [
        "Riconoscere Integer e int",
        "Comprendere autoboxing",
        "Evitare unboxing di null"
      ],
      "explanation": "Autoboxing converte un primitivo nel wrapper corrispondente; unboxing estrae il valore primitivo. Se il riferimento wrapper è null, l’unboxing causa NullPointerException.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int primitivo = 7;\n        Integer oggetto = primitivo;\n        int altro = oggetto;\n        System.out.println(oggetto + altro);\n    }\n}",
      "output": "14",
      "noteTitle": "Da ricordare",
      "note": "Il wrapper può essere null; un int primitivo non può esserlo.",
      "quiz": {
        "question": "Che cosa accade con unboxing di Integer null?",
        "options": [
          "Si genera NullPointerException",
          "Diventa sempre zero",
          "Il compilatore lo converte in false"
        ],
        "answer": 0,
        "explanation": "L’unboxing tenta di leggere un valore da un riferimento null."
      }
    },
    {
      "id": "parseint",
      "level": "BASE",
      "title": "Convertire testo in numero",
      "summary": "Usa parseInt e parseDouble quando il testo contiene numeri validi.",
      "goals": [
        "Distinguere parsing e conversione automatica",
        "Conoscere NumberFormatException",
        "Validare dati esterni"
      ],
      "explanation": "Integer.parseInt restituisce un int; Double.parseDouble restituisce un double. Un testo non valido genera NumberFormatException e può essere gestito con try/catch.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int numero = Integer.parseInt(\"42\");\n        double misura = Double.parseDouble(\"3.5\");\n        System.out.println(numero + 1);\n        System.out.println(misura * 2);\n    }\n}",
      "output": "43\n7.0",
      "noteTitle": "Da ricordare",
      "note": "La virgola decimale di un input italiano va normalizzata o analizzata con strumenti localizzati: parseDouble si aspetta il punto.",
      "quiz": {
        "question": "Quale eccezione segnala un testo non convertibile?",
        "options": [
          "NumberFormatException",
          "IOException",
          "ClassNotFoundException"
        ],
        "answer": 0,
        "explanation": "Il metodo segnala che la stringa non rappresenta un numero nel formato atteso."
      }
    },
    {
      "id": "valueof",
      "level": "BASE",
      "title": "parseInt e valueOf",
      "summary": "Scegli se ti serve un primitivo o un oggetto wrapper.",
      "goals": [
        "Usare parseInt",
        "Usare valueOf",
        "Comprendere l’auto-unboxing"
      ],
      "explanation": "parseInt produce il primitivo int; valueOf restituisce un Integer. Il compilatore può poi effettuare l’unboxing quando serve un int, ma è utile riconoscere il tipo del risultato.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int a = Integer.parseInt(\"12\");\n        Integer b = Integer.valueOf(\"15\");\n        System.out.println(a + b);\n        System.out.println(b.getClass().getSimpleName());\n    }\n}",
      "output": "27\nInteger",
      "noteTitle": "Da ricordare",
      "note": "Usa i primitivi per calcoli semplici; i wrapper sono necessari quando l’API richiede oggetti, ad esempio in molte collezioni.",
      "quiz": {
        "question": "Quale tipo restituisce parseInt?",
        "options": [
          "int",
          "Integer",
          "String"
        ],
        "answer": 0,
        "explanation": "parseInt restituisce il tipo primitivo int."
      }
    },
    {
      "id": "wrapper-equals",
      "level": "BASE",
      "title": "Confrontare wrapper",
      "summary": "Non usare == per confrontare sempre il valore di due wrapper.",
      "goals": [
        "Distinguere identità e valore",
        "Usare equals per il contenuto",
        "Gestire il possibile null"
      ],
      "explanation": "Per gli oggetti Integer, == può verificare se i riferimenti sono lo stesso oggetto. equals confronta invece il valore numerico. Non fare affidamento sul caching di alcune istanze.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        Integer a = Integer.valueOf(1000);\n        Integer b = a;\n        Integer c = Integer.valueOf(1000);\n        System.out.println(a == b);\n        System.out.println(a.equals(c));\n    }\n}",
      "output": "true\ntrue",
      "noteTitle": "Da ricordare",
      "note": "== controlla se i riferimenti indicano lo stesso oggetto; equals confronta il valore. Non basarti sul caching di alcune istanze wrapper. In codice moderno preferisci valueOf o l’autoboxing al costruttore Integer(int), deprecato.",
      "quiz": {
        "question": "Quale forma confronta il valore dei wrapper?",
        "options": [
          "equals()",
          "==",
          "getClass()"
        ],
        "answer": 0,
        "explanation": "equals confronta il valore numerico per Integer."
      }
    }
  ]
};
