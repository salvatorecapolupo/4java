/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Array: esercizi risolti",
  "slug": "esercizi-array-java",
  "kicker": "ESERCITAZIONI · ARRAY E MATRICI",
  "intro": "Risolvi problemi tipici su estremi, conteggi, ricerca, inserimento in un vettore e matrici.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/arrayx/arrayx.htm"
    },
    {
      "label": "Dev.java — Arrays",
      "url": "https://dev.java/learn/language-basics/arrays/"
    }
  ],
  "lessons": [
    {
      "id": "minimo-massimo",
      "level": "BASE",
      "title": "Minimo e massimo",
      "summary": "Trova i due estremi di una serie senza ordinarla.",
      "goals": [
        "Inizializzare dai dati reali",
        "Aggiornare minimo e massimo",
        "Gestire l’array vuoto"
      ],
      "explanation": "Il primo elemento è una buona inizializzazione di entrambi i valori. Un controllo iniziale evita di leggere un elemento da un array vuoto.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static int[] minMax(int[] v) {\n        if (v.length == 0) throw new IllegalArgumentException(\"Array vuoto\");\n        int min = v[0], max = v[0];\n        for (int n : v) { if (n < min) min = n; if (n > max) max = n; }\n        return new int[]{min, max};\n    }\n    public static void main(String[] args) {\n        int[] r = minMax(new int[]{7, -2, 8, 4});\n        System.out.println(r[0] + \" / \" + r[1]);\n    }\n}",
      "output": "-2 / 8",
      "noteTitle": "Da ricordare",
      "note": "Non inizializzare min e max a zero se i valori possono essere tutti positivi o tutti negativi.",
      "quiz": {
        "question": "Come si inizializzano min e max?",
        "options": [
          "Con il primo elemento valido",
          "Sempre con zero",
          "Con length"
        ],
        "answer": 0,
        "explanation": "Il primo elemento garantisce una partenza che appartiene ai dati."
      }
    },
    {
      "id": "conteggio-occorrenze",
      "level": "BASE",
      "title": "Contare le occorrenze",
      "summary": "Conta quante volte compare un valore nell’array.",
      "goals": [
        "Scorrere tutti gli elementi",
        "Confrontare con == per int",
        "Incrementare un contatore"
      ],
      "explanation": "Per un array di interi, il confronto == confronta i valori numerici. Alla fine il contatore indica quante corrispondenze sono state trovate.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static int conta(int[] v, int target) {\n        int n = 0;\n        for (int x : v) if (x == target) n++;\n        return n;\n    }\n    public static void main(String[] args) {\n        System.out.println(conta(new int[]{2, 5, 2, 7, 2}, 2));\n    }\n}",
      "output": "3",
      "noteTitle": "Da ricordare",
      "note": "Per oggetti come String, di solito vuoi usare equals per confrontare il contenuto.",
      "quiz": {
        "question": "Quando aumenta il contatore?",
        "options": [
          "Quando l’elemento è uguale al target",
          "A ogni iterazione senza condizioni",
          "Quando l’indice è pari"
        ],
        "answer": 0,
        "explanation": "Il conteggio aumenta solo nelle corrispondenze."
      }
    },
    {
      "id": "ricerca-lineare",
      "level": "BASE",
      "title": "Ricerca lineare",
      "summary": "Restituisci l’indice della prima corrispondenza o -1.",
      "goals": [
        "Non richiedere ordinamento",
        "Fermarsi alla prima occorrenza",
        "Definire un valore per “non trovato”"
      ],
      "explanation": "La ricerca lineare visita ogni elemento in sequenza. Può funzionare su dati non ordinati; nel caso peggiore esamina tutti gli elementi.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static int cerca(int[] v, int target) {\n        for (int i = 0; i < v.length; i++) if (v[i] == target) return i;\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(cerca(new int[]{8, 4, 9, 1}, 9));\n        System.out.println(cerca(new int[]{8, 4, 9, 1}, 3));\n    }\n}",
      "output": "2\n-1",
      "noteTitle": "Da ricordare",
      "note": "Non confondere la posizione dell’elemento con il suo valore.",
      "quiz": {
        "question": "Che cosa indica -1 in questa funzione?",
        "options": [
          "Valore non trovato",
          "Primo elemento",
          "Lunghezza dell’array"
        ],
        "answer": 0,
        "explanation": "La funzione usa -1 come segnale convenzionale di assenza."
      }
    },
    {
      "id": "inserimento-array",
      "level": "BASE",
      "title": "Inserire un valore in un vettore",
      "summary": "Sposta gli elementi per liberare una posizione.",
      "goals": [
        "Distinguere capacità e numero di valori validi",
        "Spostare da destra a sinistra",
        "Controllare i limiti"
      ],
      "explanation": "Gli array Java hanno dimensione fissa. Qui una posizione libera è già prevista; gli elementi vengono spostati a partire dalla fine per non sovrascrivere i dati.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Arrays;\npublic class Esempio {\n    public static void main(String[] args) {\n        int[] v = {2, 4, 9, 0, 0};\n        int usati = 3, posizione = 2, valore = 7;\n        for (int i = usati; i > posizione; i--) v[i] = v[i - 1];\n        v[posizione] = valore;\n        usati++;\n        System.out.println(Arrays.toString(v));\n        System.out.println(\"elementi validi=\" + usati);\n    }\n}",
      "output": "[2, 4, 7, 9, 0]\nelementi validi=4",
      "noteTitle": "Da ricordare",
      "note": "Il codice presume che esista una posizione libera e che posizione sia compresa tra 0 e usati.",
      "quiz": {
        "question": "Perché lo spostamento parte dall’ultimo slot valido?",
        "options": [
          "Per evitare di sovrascrivere i valori non ancora spostati",
          "Per ordinare automaticamente il vettore",
          "Per ridurre la lunghezza"
        ],
        "answer": 0,
        "explanation": "Lo spostamento da destra preserva ogni valore prima di copiarlo."
      }
    },
    {
      "id": "trasposta-matrice",
      "level": "BASE",
      "title": "Trasporre una matrice",
      "summary": "Scambia righe e colonne creando una nuova matrice.",
      "goals": [
        "Leggere righe e colonne",
        "Invertire gli indici",
        "Gestire matrici rettangolari"
      ],
      "explanation": "La matrice trasposta ha tante righe quante erano le colonne iniziali e viceversa. L’elemento m[i][j] diventa t[j][i].",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Arrays;\npublic class Esempio {\n    static int[][] trasponi(int[][] m) {\n        int righe = m.length, colonne = m[0].length;\n        int[][] t = new int[colonne][righe];\n        for (int i = 0; i < righe; i++)\n            for (int j = 0; j < colonne; j++) t[j][i] = m[i][j];\n        return t;\n    }\n    public static void main(String[] args) {\n        int[][] t = trasponi(new int[][]{{1,2,3},{4,5,6}});\n        for (int[] r : t) System.out.println(Arrays.toString(r));\n    }\n}",
      "output": "[1, 4]\n[2, 5]\n[3, 6]",
      "noteTitle": "Da ricordare",
      "note": "L’esempio assume una matrice non vuota e rettangolare; per codice generale convalidare tutte le righe.",
      "quiz": {
        "question": "Quale dimensione ha la matrice trasposta?",
        "options": [
          "Colonne originali × righe originali",
          "Sempre la stessa forma",
          "Una sola colonna"
        ],
        "answer": 0,
        "explanation": "La trasposizione scambia la dimensione delle righe con quella delle colonne."
      }
    }
  ]
};
