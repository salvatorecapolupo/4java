/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Array in Java",
  "slug": "array-java",
  "kicker": "STRUTTURE DATI · ARRAY",
  "intro": "Dichiara vettori e matrici, visita gli elementi, passa array ai metodi e usa gli strumenti della libreria.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/array/array.htm"
    },
    {
      "label": "Dev.java — Arrays",
      "url": "https://dev.java/learn/language-basics/arrays/"
    }
  ],
  "lessons": [
    {
      "id": "dichiarazione-indici",
      "level": "BASE",
      "title": "Dichiarare e indicizzare un array",
      "summary": "Un array contiene elementi dello stesso tipo e ha dimensione fissa.",
      "goals": [
        "Dichiarare un array",
        "Accedere tramite indice",
        "Usare length"
      ],
      "explanation": "Gli indici partono da zero. La proprietà length indica il numero di elementi, non l’ultimo indice: per un array non vuoto, l’ultimo indice è length - 1.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int[] voti = {7, 8, 6};\n        System.out.println(voti.length);\n        System.out.println(voti[0]);\n        System.out.println(voti[voti.length - 1]);\n    }\n}",
      "output": "3\n7\n6",
      "noteTitle": "Da ricordare",
      "note": "L’accesso a un indice fuori dall’intervallo 0..length-1 causa ArrayIndexOutOfBoundsException.",
      "quiz": {
        "question": "Qual è l’ultimo indice di un array con 3 elementi?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "answer": 0,
        "explanation": "Gli indici sono 0, 1 e 2."
      }
    },
    {
      "id": "cicli-array",
      "level": "BASE",
      "title": "Scorrere un array",
      "summary": "Scegli tra for indicizzato e for-each.",
      "goals": [
        "Sommare gli elementi",
        "Leggere ogni elemento",
        "Capire quando serve l’indice"
      ],
      "explanation": "Il ciclo for classico consente di conoscere l’indice e modificarne il passo. Il for-each è più leggibile quando serve soltanto leggere tutti gli elementi.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int[] valori = {4, 6, 10};\n        int somma = 0;\n        for (int v : valori) somma += v;\n        System.out.println(somma);\n    }\n}",
      "output": "20",
      "noteTitle": "Da ricordare",
      "note": "Per cambiare un elemento in base alla posizione serve in genere il for indicizzato.",
      "quiz": {
        "question": "Quando è più semplice usare for-each?",
        "options": [
          "Quando basta leggere tutti gli elementi",
          "Quando serve l’indice esatto a ogni passo",
          "Quando si deve saltare casualmente tra indici"
        ],
        "answer": 0,
        "explanation": "Il for-each evita codice superfluo quando non occorre la posizione."
      }
    },
    {
      "id": "array-parametri",
      "level": "BASE",
      "title": "Passare un array a un metodo",
      "summary": "Un metodo può modificare gli elementi dell’array ricevuto.",
      "goals": [
        "Definire parametri array",
        "Osservare l’effetto sull’oggetto condiviso",
        "Distinguere elemento e riferimento"
      ],
      "explanation": "Java passa gli argomenti per valore. Quando il valore è un riferimento a un array, il metodo riceve una copia del riferimento allo stesso array: modificare un elemento è visibile al chiamante, riassegnare il parametro non cambia la variabile del chiamante.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static void incrementaPrimo(int[] v) { v[0]++; }\n    public static void main(String[] args) {\n        int[] numeri = {1, 2, 3};\n        incrementaPrimo(numeri);\n        System.out.println(numeri[0]);\n    }\n}",
      "output": "2",
      "noteTitle": "Da ricordare",
      "note": "Non dire che Java passa gli oggetti “per riferimento”: il valore del riferimento viene passato per valore.",
      "quiz": {
        "question": "Perché cambia numeri[0] dopo la chiamata?",
        "options": [
          "Il metodo modifica l’array a cui entrambi i riferimenti puntano",
          "Java passa tutte le variabili per riferimento",
          "Il metodo crea un array globale"
        ],
        "answer": 0,
        "explanation": "Il riferimento è copiato, ma indica lo stesso oggetto array."
      }
    },
    {
      "id": "arrays-sort",
      "level": "BASE",
      "title": "Ordinare e cercare con Arrays",
      "summary": "Usa i metodi standard e cerca solo dopo aver ordinato.",
      "goals": [
        "Importare java.util.Arrays",
        "Ordinare in ordine crescente",
        "Interpretare il risultato della ricerca"
      ],
      "explanation": "Arrays.sort ordina un array di numeri primitivi in ordine crescente. Arrays.binarySearch presuppone che l’array sia ordinato; se il valore manca, il risultato è negativo e codifica il punto di inserimento.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Arrays;\npublic class Esempio {\n    public static void main(String[] args) {\n        int[] v = {9, 2, 7, 4};\n        Arrays.sort(v);\n        System.out.println(Arrays.toString(v));\n        System.out.println(Arrays.binarySearch(v, 7));\n    }\n}",
      "output": "[2, 4, 7, 9]\n2",
      "noteTitle": "Da ricordare",
      "note": "L’indice restituito da binarySearch è base zero. Per un valore assente, consulta la documentazione sul risultato negativo.",
      "quiz": {
        "question": "Quale condizione richiede binarySearch?",
        "options": [
          "Array ordinato",
          "Array di lunghezza pari",
          "Array senza numeri negativi"
        ],
        "answer": 0,
        "explanation": "La ricerca binaria necessita dell’ordinamento."
      }
    },
    {
      "id": "copia-array",
      "level": "BASE",
      "title": "Copiare e confrontare array",
      "summary": "Non confondere un alias con una copia indipendente.",
      "goals": [
        "Usare Arrays.copyOf",
        "Conoscere == per array",
        "Usare Arrays.equals"
      ],
      "explanation": "L’assegnazione b = a copia il riferimento, non gli elementi. Arrays.copyOf crea un nuovo array; Arrays.equals confronta il contenuto degli array primitivi.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Arrays;\npublic class Esempio {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3};\n        int[] b = Arrays.copyOf(a, a.length);\n        b[0] = 9;\n        System.out.println(Arrays.toString(a));\n        System.out.println(Arrays.equals(a, b));\n    }\n}",
      "output": "[1, 2, 3]\nfalse",
      "noteTitle": "Da ricordare",
      "note": "Per array di oggetti, Arrays.equals confronta gli elementi secondo il loro metodo equals; per matrici annidate può servire deepEquals.",
      "quiz": {
        "question": "Che cosa fa Arrays.copyOf?",
        "options": [
          "Crea un nuovo array con gli elementi copiati",
          "Ordina automaticamente l’array",
          "Confronta due array"
        ],
        "answer": 0,
        "explanation": "copyOf produce un array distinto."
      }
    }
  ]
};
