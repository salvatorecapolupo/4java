/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Classi e oggetti in Java",
  "slug": "classi-oggetti-java",
  "kicker": "PROGRAMMAZIONE A OGGETTI · FONDAMENTI",
  "intro": "Modella dati e comportamenti con classi, istanze, costruttori, incapsulamento e composizione.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/oggetti/oggetti.htm"
    },
    {
      "label": "Dev.java — Classi e oggetti",
      "url": "https://dev.java/learn/classes-objects/"
    },
    {
      "label": "Dev.java — Ereditarietà",
      "url": "https://dev.java/learn/inheritance/"
    }
  ],
  "lessons": [
    {
      "id": "classe-oggetto",
      "level": "BASE",
      "title": "Classe e oggetto",
      "summary": "La classe definisce una forma; l’oggetto è un’istanza concreta.",
      "goals": [
        "Dichiarare campi e metodi",
        "Creare un oggetto con new",
        "Invocare un metodo"
      ],
      "explanation": "Una classe raggruppa stato (campi) e comportamento (metodi). Ogni oggetto creato con new ha i propri valori nei campi di istanza.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Rettangolo {\n    double base, altezza;\n    Rettangolo(double b, double h) { base = b; altezza = h; }\n    double area() { return base * altezza; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Rettangolo r = new Rettangolo(4, 3);\n        System.out.println(r.area());\n    }\n}",
      "output": "12.0",
      "noteTitle": "Da ricordare",
      "note": "Nel codice reale, i campi spesso vengono resi private per controllare come possono essere letti e modificati.",
      "quiz": {
        "question": "Che cos’è r nel programma?",
        "options": [
          "Un oggetto della classe Rettangolo",
          "La definizione della classe",
          "Un metodo statico"
        ],
        "answer": 0,
        "explanation": "r è una variabile di riferimento che punta all’istanza creata con new."
      }
    },
    {
      "id": "costruttore-this",
      "level": "BASE",
      "title": "Costruttore e this",
      "summary": "Inizializza ogni oggetto con valori coerenti.",
      "goals": [
        "Riconoscere il costruttore",
        "Usare this per distinguere i campi",
        "Creare istanze con valori diversi"
      ],
      "explanation": "Il costruttore viene eseguito quando l’oggetto è creato. this.nome indica il campo dell’oggetto corrente quando un parametro ha lo stesso nome.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Studente {\n    private String nome;\n    private int classe;\n    Studente(String nome, int classe) { this.nome = nome; this.classe = classe; }\n    String descrizione() { return nome + \" · classe \" + classe; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Studente s = new Studente(\"Ada\", 3);\n        System.out.println(s.descrizione());\n    }\n}",
      "output": "Ada · classe 3",
      "noteTitle": "Da ricordare",
      "note": "Il costruttore ha lo stesso nome della classe e non dichiara un tipo di ritorno, nemmeno void.",
      "quiz": {
        "question": "A che cosa si riferisce this.nome?",
        "options": [
          "Al campo nome dell’oggetto corrente",
          "Al parametro classe",
          "Alla classe String"
        ],
        "answer": 0,
        "explanation": "this distingue il campo dell’istanza dal parametro omonimo."
      }
    },
    {
      "id": "incapsulamento",
      "level": "BASE",
      "title": "Incapsulamento e validazione",
      "summary": "Proteggi lo stato interno e modifica i dati attraverso metodi controllati.",
      "goals": [
        "Usare campi private",
        "Validare le operazioni",
        "Esporre metodi pubblici chiari"
      ],
      "explanation": "L’incapsulamento riduce le modifiche incontrollate allo stato dell’oggetto. Nell’esempio il saldo non può essere cambiato direttamente dall’esterno: depositi e prelievi applicano regole.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Conto {\n    private double saldo;\n    Conto(double iniziale) {\n        if (iniziale < 0) throw new IllegalArgumentException(\"Saldo iniziale negativo\");\n        saldo = iniziale;\n    }\n    void versa(double importo) {\n        if (importo <= 0) throw new IllegalArgumentException(\"Importo non valido\");\n        saldo += importo;\n    }\n    double getSaldo() { return saldo; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Conto c = new Conto(50);\n        c.versa(25);\n        System.out.println(c.getSaldo());\n    }\n}",
      "output": "75.0",
      "noteTitle": "Da ricordare",
      "note": "Per importi monetari reali si preferisce BigDecimal o un intero di centesimi a double, che usa rappresentazione binaria approssimata.",
      "quiz": {
        "question": "Perché saldo è private?",
        "options": [
          "Per controllare le modifiche allo stato",
          "Per rendere il saldo sempre negativo",
          "Per impedire la creazione di oggetti"
        ],
        "answer": 0,
        "explanation": "I campi privati sono accessibili attraverso le operazioni offerte dalla classe."
      }
    },
    {
      "id": "static-istanza",
      "level": "BASE",
      "title": "Campi statici e campi di istanza",
      "summary": "Distingui i dati condivisi dai dati propri di ciascun oggetto.",
      "goals": [
        "Riconoscere static",
        "Confrontare i campi tra istanze",
        "Evitare di usare static senza motivo"
      ],
      "explanation": "Un campo static appartiene alla classe ed è condiviso dalle istanze. Un campo di istanza appartiene invece a ogni singolo oggetto.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Visita {\n    static int create;\n    int numero;\n    Visita(int numero) { this.numero = numero; create++; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Visita a = new Visita(10);\n        Visita b = new Visita(20);\n        System.out.println(a.numero + \", \" + b.numero);\n        System.out.println(Visita.create);\n    }\n}",
      "output": "10, 20\n2",
      "noteTitle": "Da ricordare",
      "note": "Il fatto che un campo sia static non lo rende automaticamente costante; per una costante si usa spesso static final.",
      "quiz": {
        "question": "Quale dato è condiviso da tutte le istanze?",
        "options": [
          "create",
          "numero",
          "this"
        ],
        "answer": 0,
        "explanation": "create è static e conta quante istanze sono state costruite."
      }
    },
    {
      "id": "composizione-oggetti",
      "level": "BASE",
      "title": "Composizione: oggetti che collaborano",
      "summary": "Una classe può contenere un riferimento a un’altra classe.",
      "goals": [
        "Riconoscere la relazione “ha un”",
        "Delegare un compito a un altro oggetto",
        "Distinguere composizione ed ereditarietà"
      ],
      "explanation": "Se un trapano usa un motore, la relazione naturale è “ha un motore”, non necessariamente “è un motore”. La composizione crea oggetti più modulari e sostituibili.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Motore {\n    void avvia() { System.out.println(\"Motore avviato\"); }\n}\nclass Trapano {\n    private final Motore motore = new Motore();\n    void fora() { motore.avvia(); System.out.println(\"Foro eseguito\"); }\n}\npublic class Esempio {\n    public static void main(String[] args) { new Trapano().fora(); }\n}",
      "output": "Motore avviato\nForo eseguito",
      "noteTitle": "Da ricordare",
      "note": "Usa l’ereditarietà per una relazione “è un”; per collaborazione e responsabilità separate, spesso è preferibile la composizione.",
      "quiz": {
        "question": "Quale relazione descrive Trapano e Motore?",
        "options": [
          "Trapano ha un Motore",
          "Trapano è un Motore",
          "Motore estende String"
        ],
        "answer": 0,
        "explanation": "Il trapano contiene e utilizza un oggetto Motore."
      }
    }
  ]
};
