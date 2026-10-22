/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Metodi e array: esercizi guidati",
  "slug": "esercizi-metodi-array",
  "kicker": "ESERCITAZIONI · METODI E ARRAY",
  "intro": "Problemi progressivi: un metodo riceve dati, applica un algoritmo e restituisce un risultato controllabile.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/metodix/metodix.htm"
    },
    {
      "label": "Dev.java — Definire i metodi",
      "url": "https://dev.java/learn/language/oop/classes-objects/defining-methods/"
    },
    {
      "label": "Dev.java — Arrays",
      "url": "https://dev.java/learn/language-basics/arrays/"
    }
  ],
  "lessons": [
    {
      "id": "classifica-triangolo",
      "level": "BASE",
      "title": "Classificare un triangolo",
      "summary": "Passa tre lati a un metodo che controlla validità e tipo.",
      "goals": [
        "Validare i dati",
        "Restituire un risultato dal metodo",
        "Separare calcolo e stampa"
      ],
      "explanation": "Prima si controlla che i lati siano positivi e rispettino la disuguaglianza triangolare. Solo dopo si confrontano le lunghezze. La funzione restituisce una descrizione; main si occupa della stampa.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static String tipoTriangolo(int a, int b, int c) {\n        if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) return \"non valido\";\n        String tipo = (a == b && b == c) ? \"equilatero\" : (a == b || a == c || b == c) ? \"isoscele\" : \"scaleno\";\n        if (!tipo.equals(\"equilatero\") && (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a)) tipo += \" rettangolo\";\n        return tipo;\n    }\n    public static void main(String[] args) { System.out.println(tipoTriangolo(3, 4, 5)); }\n}",
      "output": "scaleno rettangolo",
      "noteTitle": "Da ricordare",
      "note": "Per esercizi con valori molto grandi, le somme dei quadrati possono superare il limite di int: in quel caso usa long o controlli più robusti.",
      "quiz": {
        "question": "Perché controlliamo prima se il triangolo è valido?",
        "options": [
          "Per evitare di classificare lati impossibili",
          "Per ordinare i lati",
          "Perché Java lo richiede sempre"
        ],
        "answer": 0,
        "explanation": "I confronti sul tipo hanno senso solo se i tre lati possono formare un triangolo."
      }
    },
    {
      "id": "ricerca-binaria",
      "level": "BASE",
      "title": "Ricerca binaria",
      "summary": "Trova un valore in un array ordinato dimezzando l’intervallo a ogni passo.",
      "goals": [
        "Mantenere gli indici sinistro e destro",
        "Calcolare il punto medio",
        "Restituire -1 se il valore manca"
      ],
      "explanation": "La ricerca binaria è efficiente, ma presuppone che i dati siano ordinati. Dopo ogni confronto, una metà dell’intervallo può essere esclusa.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.Arrays;\npublic class Esempio {\n    static int cerca(int[] v, int target) {\n        int sx = 0, dx = v.length - 1;\n        while (sx <= dx) {\n            int medio = sx + (dx - sx) / 2;\n            if (v[medio] == target) return medio;\n            if (v[medio] < target) sx = medio + 1; else dx = medio - 1;\n        }\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] dati = {3, 8, 12, 17, 25};\n        System.out.println(cerca(dati, 17));\n    }\n}",
      "output": "3",
      "noteTitle": "Da ricordare",
      "note": "Il risultato è un indice con base zero: il quarto elemento si trova all’indice 3.",
      "quiz": {
        "question": "Quale requisito ha la ricerca binaria?",
        "options": [
          "L’array deve essere ordinato",
          "L’array deve contenere solo numeri pari",
          "L’array deve avere lunghezza 10"
        ],
        "answer": 0,
        "explanation": "Senza ordinamento, eliminare una metà in base al valore non è corretto."
      }
    },
    {
      "id": "elemento-piu-vicino",
      "level": "BASE",
      "title": "Elemento più vicino",
      "summary": "Restituisci valore, posizione e distanza dal numero cercato.",
      "goals": [
        "Scorrere tutti gli elementi",
        "Calcolare una distanza assoluta",
        "Gestire i pareggi in modo prevedibile"
      ],
      "explanation": "Un piccolo array di tre elementi può contenere risultato, indice e distanza. In caso di pari distanza questo algoritmo conserva il primo elemento trovato.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static int[] piuVicino(int[] v, int target) {\n        if (v.length == 0) throw new IllegalArgumentException(\"Array vuoto\");\n        int indice = 0, distanza = Math.abs(v[0] - target);\n        for (int i = 1; i < v.length; i++) {\n            int d = Math.abs(v[i] - target);\n            if (d < distanza) { distanza = d; indice = i; }\n        }\n        return new int[] {v[indice], indice, distanza};\n    }\n    public static void main(String[] args) {\n        int[] r = piuVicino(new int[]{4, 9, 12, 18}, 11);\n        System.out.println(\"valore=\" + r[0] + \", indice=\" + r[1] + \", distanza=\" + r[2]);\n    }\n}",
      "output": "valore=12, indice=2, distanza=1",
      "noteTitle": "Da ricordare",
      "note": "Per semplificare l’esempio, si presume che la distanza calcolata con int non vada in overflow; con dati arbitrari si può usare long.",
      "quiz": {
        "question": "Che cosa indica l’indice restituito?",
        "options": [
          "La posizione contando da zero",
          "La distanza dal target",
          "Il numero degli elementi"
        ],
        "answer": 0,
        "explanation": "In Java il primo elemento di un array è all’indice 0."
      }
    },
    {
      "id": "diagonali-matrice",
      "level": "BASE",
      "title": "Somme delle diagonali",
      "summary": "Calcola la diagonale principale e quella secondaria di una matrice quadrata.",
      "goals": [
        "Usare due indici diversi",
        "Visitare una matrice con cicli",
        "Restituire due risultati"
      ],
      "explanation": "La diagonale principale usa celle con riga e colonna uguali. La secondaria usa colonne che avanzano in senso opposto: n - 1 - i.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static int[] somme(int[][] m) {\n        int principale = 0, secondaria = 0;\n        for (int i = 0; i < m.length; i++) {\n            principale += m[i][i];\n            secondaria += m[i][m.length - 1 - i];\n        }\n        return new int[]{principale, secondaria};\n    }\n    public static void main(String[] args) {\n        int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\n        int[] s = somme(m);\n        System.out.println(s[0] + \" / \" + s[1]);\n    }\n}",
      "output": "15 / 15",
      "noteTitle": "Da ricordare",
      "note": "La matrice deve essere quadrata e le righe devono avere tutte la stessa lunghezza.",
      "quiz": {
        "question": "Quale indice identifica la diagonale secondaria?",
        "options": [
          "m[i][n - 1 - i]",
          "m[i][i + 1]",
          "m[0][i]"
        ],
        "answer": 0,
        "explanation": "Gli indici di riga e colonna si muovono in direzioni opposte."
      }
    },
    {
      "id": "binario-a-byte",
      "level": "BASE",
      "title": "Da decimale a 8 bit",
      "summary": "Rappresenta un numero da 0 a 255 con otto bit.",
      "goals": [
        "Validare l’intervallo",
        "Estrarre un bit con uno shift",
        "Mostrare anche gli zeri iniziali"
      ],
      "explanation": "Un byte didattico di 8 bit può rappresentare i valori senza segno da 0 a 255. La maschera 1 << i controlla il singolo bit.",
      "codeLabel": "Esempio Java guidato",
      "code": "public class Esempio {\n    static String inOttoBit(int n) {\n        if (n < 0 || n > 255) throw new IllegalArgumentException(\"Intervallo 0..255\");\n        StringBuilder b = new StringBuilder();\n        for (int i = 7; i >= 0; i--) b.append((n >> i) & 1);\n        return b.toString();\n    }\n    public static void main(String[] args) { System.out.println(inOttoBit(13)); }\n}",
      "output": "00001101",
      "noteTitle": "Da ricordare",
      "note": "Questa è una rappresentazione didattica senza segno. Il tipo byte di Java invece è un intero con segno da -128 a 127.",
      "quiz": {
        "question": "Quanti bit vengono mostrati?",
        "options": [
          "8",
          "7",
          "16"
        ],
        "answer": 0,
        "explanation": "Il ciclo visita gli indici da 7 a 0, per un totale di otto posizioni."
      }
    }
  ]
};
