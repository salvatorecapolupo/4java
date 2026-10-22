/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Programmazione a oggetti: esercizi",
  "slug": "esercizi-oggetti-java",
  "kicker": "ESERCITAZIONI · CLASSI E OGGETTI",
  "intro": "Metti in pratica costruttori, stato privato e metodi con potenze, conti, pile, code e orari.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/oggettix/oggettix.htm"
    },
    {
      "label": "Dev.java — Classi e oggetti",
      "url": "https://dev.java/learn/classes-objects/"
    },
    {
      "label": "Dev.java — Eccezioni",
      "url": "https://dev.java/learn/exceptions/"
    }
  ],
  "lessons": [
    {
      "id": "classe-potenza",
      "level": "BASE",
      "title": "Oggetto potenza",
      "summary": "Ogni istanza conserva una base e un esponente.",
      "goals": [
        "Definire campi privati",
        "Inizializzare con il costruttore",
        "Calcolare tramite un metodo"
      ],
      "explanation": "L’oggetto memorizza i dati che descrivono la potenza. Il metodo calcolaPotenza restituisce il risultato senza obbligare il chiamante a stampare direttamente.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Potenza {\n    private int base, esponente;\n    Potenza(int base, int esponente) { this.base = base; this.esponente = esponente; }\n    long calcola() {\n        long risultato = 1;\n        for (int i = 0; i < esponente; i++) risultato *= base;\n        return risultato;\n    }\n    void cambiaBase(int nuovaBase) { base = nuovaBase; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Potenza p = new Potenza(2, 5);\n        System.out.println(p.calcola());\n        p.cambiaBase(3);\n        System.out.println(p.calcola());\n    }\n}",
      "output": "32\n243",
      "noteTitle": "Da ricordare",
      "note": "L’esempio assume un esponente non negativo e risultati che rientrano in long; in un progetto completo questi vincoli andrebbero verificati.",
      "quiz": {
        "question": "Quale vantaggio offre conservare base ed esponente nell’oggetto?",
        "options": [
          "Rende i dati associati a ogni istanza",
          "Elimina la necessità del costruttore",
          "Trasforma il metodo in static"
        ],
        "answer": 0,
        "explanation": "Ogni oggetto Potenza mantiene i propri valori."
      }
    },
    {
      "id": "conto-movimenti",
      "level": "BASE",
      "title": "Conto con ultimi movimenti",
      "summary": "Registra versamenti e prelievi e conserva solo gli ultimi cinque movimenti.",
      "goals": [
        "Aggiornare il saldo",
        "Validare gli importi",
        "Limitare la lista a cinque voci"
      ],
      "explanation": "L’esempio usa un array circolare molto semplice tramite una lista compatta. Per rendere chiara la regola “ultimi cinque”, quando il contenitore è pieno si elimina il movimento più vecchio.",
      "codeLabel": "Esempio Java guidato",
      "code": "import java.util.ArrayDeque;\nimport java.util.Deque;\nclass Conto {\n    private double saldo;\n    private final Deque<String> movimenti = new ArrayDeque<String>();\n    void registra(String testo) {\n        if (movimenti.size() == 5) movimenti.removeFirst();\n        movimenti.addLast(testo);\n    }\n    void versa(double x) { if (x <= 0) throw new IllegalArgumentException(); saldo += x; registra(\"Versamento \" + x); }\n    void preleva(double x) { if (x <= 0 || x > saldo) throw new IllegalArgumentException(); saldo -= x; registra(\"Prelievo \" + x); }\n    double saldo() { return saldo; }\n    Deque<String> movimenti() { return new ArrayDeque<String>(movimenti); }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Conto c = new Conto(); c.versa(100); c.preleva(25);\n        System.out.println(c.saldo()); System.out.println(c.movimenti());\n    }\n}",
      "output": "75.0\n[Versamento 100.0, Prelievo 25.0]",
      "noteTitle": "Da ricordare",
      "note": "Per denaro reale, usa BigDecimal o centesimi interi. Il metodo movimenti restituisce una copia per proteggere la lista interna.",
      "quiz": {
        "question": "Perché il metodo movimenti crea una nuova Deque?",
        "options": [
          "Per non esporre la struttura interna modificabile",
          "Per azzerare il saldo",
          "Per ordinare le cifre"
        ],
        "answer": 0,
        "explanation": "La copia impedisce al chiamante di modificare direttamente lo stato interno."
      }
    },
    {
      "id": "pila",
      "level": "BASE",
      "title": "Pila di interi con capacità 5",
      "summary": "Implementa push e pop con una struttura LIFO.",
      "goals": [
        "Gestire il numero di elementi",
        "Rifiutare inserimenti oltre capacità",
        "Estrarre l’ultimo elemento inserito"
      ],
      "explanation": "Una pila segue LIFO: l’ultimo elemento inserito è il primo a uscire. La variabile cima indica quanti elementi sono presenti.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Pila {\n    private final int[] dati = new int[5];\n    private int cima = 0;\n    void push(int x) {\n        if (cima == dati.length) throw new IllegalStateException(\"Pila piena\");\n        dati[cima++] = x;\n    }\n    int pop() {\n        if (cima == 0) throw new IllegalStateException(\"Pila vuota\");\n        return dati[--cima];\n    }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Pila p = new Pila(); p.push(10); p.push(20);\n        System.out.println(p.pop()); System.out.println(p.pop());\n    }\n}",
      "output": "20\n10",
      "noteTitle": "Da ricordare",
      "note": "Una pila vuota non ha un elemento da estrarre; il controllo evita un accesso non valido.",
      "quiz": {
        "question": "Quale valore esce per primo?",
        "options": [
          "20",
          "10",
          "5"
        ],
        "answer": 0,
        "explanation": "LIFO significa Last In, First Out."
      }
    },
    {
      "id": "coda",
      "level": "BASE",
      "title": "Coda di interi con capacità 5",
      "summary": "Implementa inserimento in fondo ed estrazione dalla testa.",
      "goals": [
        "Riconoscere FIFO",
        "Tenere traccia del numero di elementi",
        "Gestire coda vuota e piena"
      ],
      "explanation": "Una coda segue FIFO: il primo elemento inserito è il primo estratto. La versione essenziale qui usa uno spostamento degli elementi a ogni estrazione per rendere facile seguire gli indici.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Coda {\n    private final int[] dati = new int[5];\n    private int size = 0;\n    void inserisci(int x) {\n        if (size == dati.length) throw new IllegalStateException(\"Coda piena\");\n        dati[size++] = x;\n    }\n    int estrai() {\n        if (size == 0) throw new IllegalStateException(\"Coda vuota\");\n        int primo = dati[0];\n        for (int i = 1; i < size; i++) dati[i - 1] = dati[i];\n        size--;\n        return primo;\n    }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Coda c = new Coda(); c.inserisci(10); c.inserisci(20);\n        System.out.println(c.estrai()); System.out.println(c.estrai());\n    }\n}",
      "output": "10\n20",
      "noteTitle": "Da ricordare",
      "note": "La soluzione privilegia la chiarezza. Una coda circolare evita di spostare ogni volta tutti gli elementi.",
      "quiz": {
        "question": "Quale valore esce per primo da una coda FIFO?",
        "options": [
          "Il primo inserito",
          "L’ultimo inserito",
          "Il maggiore"
        ],
        "answer": 0,
        "explanation": "FIFO significa First In, First Out."
      }
    },
    {
      "id": "orario",
      "level": "BASE",
      "title": "Somma di due orari",
      "summary": "Conserva un orario valido e somma durate espresse in secondi.",
      "goals": [
        "Validare ore, minuti e secondi",
        "Convertire l’orario in secondi",
        "Formattare il risultato"
      ],
      "explanation": "Convertire temporaneamente l’orario in secondi semplifica l’addizione. Qui il risultato viene riportato entro una giornata con il resto modulo 86 400.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Orario {\n    private final int secondi;\n    Orario(int h, int m, int s) {\n        if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) throw new IllegalArgumentException(\"Orario non valido\");\n        secondi = h * 3600 + m * 60 + s;\n    }\n    Orario somma(Orario altro) { int t = (secondi + altro.secondi) % 86400; return new Orario(t / 3600, (t / 60) % 60, t % 60); }\n    public String toString() { return String.format(\"%02d:%02d:%02d\", secondi / 3600, (secondi / 60) % 60, secondi % 60); }\n}\npublic class Esempio {\n    public static void main(String[] args) { System.out.println(new Orario(10, 15, 0).somma(new Orario(1, 50, 0))); }\n}",
      "output": "12:05:00",
      "noteTitle": "Da ricordare",
      "note": "L’esempio considera gli orari come ore del giorno; per durate superiori a 24 ore servirebbe una classe diversa.",
      "quiz": {
        "question": "Perché il risultato usa % 86400?",
        "options": [
          "Per riportare il valore entro 24 ore",
          "Per convertire in minuti",
          "Per eliminare i secondi"
        ],
        "answer": 0,
        "explanation": "Una giornata contiene 86 400 secondi."
      }
    }
  ]
};
