/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Ereditarietà e polimorfismo: esercizi",
  "slug": "esercizi-ereditarieta-java",
  "kicker": "ESERCITAZIONI · EREDITARIETÀ",
  "intro": "Esercita la specializzazione di classi, la ridefinizione di metodi e la scelta tra ereditarietà e composizione.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/polimorfismo_x/polimorfismo_x.htm"
    },
    {
      "label": "Dev.java — Ereditarietà",
      "url": "https://dev.java/learn/inheritance/"
    },
    {
      "label": "Dev.java — Classi e oggetti",
      "url": "https://dev.java/learn/classes-objects/"
    }
  ],
  "lessons": [
    {
      "id": "rettangolo-parallelepipedo",
      "level": "BASE",
      "title": "Rettangolo e parallelepipedo",
      "summary": "Riusa base e altezza per calcolare il volume di un solido.",
      "goals": [
        "Definire una superclasse",
        "Estendere una classe",
        "Riutilizzare un metodo"
      ],
      "explanation": "Il parallelepipedo rettangolo usa base e altezza della classe Rettangolo e aggiunge la profondità. La relazione è valida come esempio didattico di specializzazione, pur non essendo sempre il miglior modello per ogni progetto.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Rettangolo {\n    protected double base, altezza;\n    Rettangolo(double b, double h) { base = b; altezza = h; }\n    double area() { return base * altezza; }\n}\nclass Parallelepipedo extends Rettangolo {\n    private double profondita;\n    Parallelepipedo(double b, double h, double p) { super(b, h); profondita = p; }\n    double volume() { return area() * profondita; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Parallelepipedo p = new Parallelepipedo(4, 3, 5);\n        System.out.println(p.area()); System.out.println(p.volume());\n    }\n}",
      "output": "12.0\n60.0",
      "noteTitle": "Da ricordare",
      "note": "protected permette l’accesso alle sottoclassi, ma non va usato automaticamente: preferisci private e metodi chiari quando possibile.",
      "quiz": {
        "question": "Quale metodo viene riutilizzato per calcolare il volume?",
        "options": [
          "area()",
          "main()",
          "super()"
        ],
        "answer": 0,
        "explanation": "volume moltiplica l’area della base per la profondità."
      }
    },
    {
      "id": "triangoli-ereditarieta",
      "level": "BASE",
      "title": "Triangoli con comportamento comune",
      "summary": "Centralizza la validazione e specializza il calcolo del perimetro.",
      "goals": [
        "Definire una classe base",
        "Validare i lati",
        "Sovrascrivere un comportamento"
      ],
      "explanation": "Una base comune può raccogliere dati e controlli condivisi. Qui le classi figlie rappresentano tipi di triangolo e ridefiniscono il metodo descrittivo.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Triangolo {\n    protected int a, b, c;\n    Triangolo(int a, int b, int c) { this.a=a; this.b=b; this.c=c; }\n    boolean valido() { return a > 0 && b > 0 && c > 0 && a+b>c && a+c>b && b+c>a; }\n    int perimetro() { if (!valido()) throw new IllegalStateException(\"Triangolo non valido\"); return a+b+c; }\n}\nclass Isoscele extends Triangolo {\n    Isoscele(int lato, int base) { super(lato, lato, base); }\n    @Override int perimetro() { return super.perimetro(); }\n}\npublic class Esempio {\n    public static void main(String[] args) { System.out.println(new Isoscele(5, 6).perimetro()); }\n}",
      "output": "16",
      "noteTitle": "Da ricordare",
      "note": "La sottoclasse dell’esempio garantisce due lati uguali tramite il costruttore; un modello completo controllerebbe anche casi non validi.",
      "quiz": {
        "question": "A cosa serve super(a, b, c) nel costruttore?",
        "options": [
          "Invoca il costruttore della classe base",
          "Crea un nuovo programma",
          "Chiama sempre main"
        ],
        "answer": 0,
        "explanation": "super passa i valori al costruttore della superclasse."
      }
    },
    {
      "id": "trapano-motore",
      "level": "BASE",
      "title": "Dispositivo e motore",
      "summary": "Modella il motore come componente e vincola l’azione del trapano.",
      "goals": [
        "Separare responsabilità",
        "Controllare lo stato acceso/spento",
        "Usare composizione quando appropriato"
      ],
      "explanation": "Il trapano contiene un motore e delega a esso accensione e spegnimento. La foratura è permessa solo quando il motore è acceso.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Motore {\n    private boolean acceso;\n    void accendi() { acceso = true; }\n    void spegni() { acceso = false; }\n    boolean isAcceso() { return acceso; }\n}\nclass Trapano {\n    private final Motore motore = new Motore();\n    void accendi() { motore.accendi(); }\n    void fora() {\n        if (!motore.isAcceso()) throw new IllegalStateException(\"Motore spento\");\n        System.out.println(\"Foratura eseguita\");\n    }\n}\npublic class Esempio {\n    public static void main(String[] args) { Trapano t = new Trapano(); t.accendi(); t.fora(); }\n}",
      "output": "Foratura eseguita",
      "noteTitle": "Da ricordare",
      "note": "La composizione è spesso più adatta dell’ereditarietà quando un oggetto usa un altro oggetto come componente.",
      "quiz": {
        "question": "Quando il trapano può forare?",
        "options": [
          "Quando il motore è acceso",
          "Sempre, anche da spento",
          "Solo dopo aver chiamato toString"
        ],
        "answer": 0,
        "explanation": "Il controllo dello stato impedisce di chiamare fora con motore spento."
      }
    },
    {
      "id": "polimorfismo-forme",
      "level": "BASE",
      "title": "Calcolo polimorfo delle aree",
      "summary": "Richiama lo stesso metodo su figure diverse.",
      "goals": [
        "Usare una superclasse comune",
        "Ridefinire area",
        "Evitare controlli manuali sul tipo"
      ],
      "explanation": "La classe base dichiara un contratto comune e le sottoclassi calcolano l’area secondo la propria forma. Questo è un uso tipico del polimorfismo dinamico.",
      "codeLabel": "Esempio Java guidato",
      "code": "abstract class Figura { abstract double area(); }\nclass Quadrato extends Figura {\n    private double lato;\n    Quadrato(double lato) { this.lato = lato; }\n    @Override double area() { return lato * lato; }\n}\nclass Cerchio extends Figura {\n    private double r;\n    Cerchio(double r) { this.r = r; }\n    @Override double area() { return Math.PI * r * r; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Figura[] f = {new Quadrato(3), new Cerchio(1)};\n        for (Figura x : f) System.out.printf(\"%.2f%n\", x.area());\n    }\n}",
      "output": "9.00\n3.14",
      "noteTitle": "Da ricordare",
      "note": "La classe Figura è astratta: descrive l’operazione comune ma non può essere istanziata direttamente.",
      "quiz": {
        "question": "Perché Figura[] può contenere Quadrato e Cerchio?",
        "options": [
          "Sono entrambe sottoclassi di Figura",
          "Hanno lo stesso valore di area",
          "Gli array Java mescolano sempre tutti i tipi"
        ],
        "answer": 0,
        "explanation": "Un array del tipo base può contenere riferimenti alle sue sottoclassi."
      }
    }
  ]
};
