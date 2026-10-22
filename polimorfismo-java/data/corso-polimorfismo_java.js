/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Polimorfismo in Java",
  "slug": "polimorfismo-java",
  "kicker": "PROGRAMMAZIONE A OGGETTI · COMPORTAMENTI",
  "intro": "Comprendi come lo stesso metodo possa produrre comportamenti diversi in base all’oggetto reale.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/polimorfismo/polimorfismo.htm"
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
      "id": "override",
      "level": "BASE",
      "title": "Ridefinire un metodo",
      "summary": "Una sottoclasse può specializzare un comportamento ereditato.",
      "goals": [
        "Usare extends",
        "Usare @Override",
        "Riconoscere il dispatch dinamico"
      ],
      "explanation": "Una sottoclasse eredita i membri accessibili e può ridefinire i metodi di istanza. @Override chiede al compilatore di controllare che la firma corrisponda davvero a un metodo ereditato.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Animale { String verso() { return \"...\"; } }\nclass Cane extends Animale { @Override String verso() { return \"Bau\"; } }\npublic class Esempio {\n    public static void main(String[] args) {\n        Animale a = new Cane();\n        System.out.println(a.verso());\n    }\n}",
      "output": "Bau",
      "noteTitle": "Da ricordare",
      "note": "La selezione del metodo ridefinito avviene in base al tipo reale dell’oggetto, non soltanto al tipo della variabile.",
      "quiz": {
        "question": "Quale implementazione viene eseguita?",
        "options": [
          "Cane.verso()",
          "Sempre Animale.verso()",
          "Nessuna, perché il tipo variabile è Animale"
        ],
        "answer": 0,
        "explanation": "Il dispatch dinamico sceglie il metodo dell’oggetto reale Cane."
      }
    },
    {
      "id": "collezione-polimorfa",
      "level": "BASE",
      "title": "Un array di tipi diversi",
      "summary": "Tratta oggetti diversi attraverso la stessa superclasse.",
      "goals": [
        "Creare una superclasse comune",
        "Memorizzare istanze diverse",
        "Invocare lo stesso metodo nel ciclo"
      ],
      "explanation": "Un array di Animale può contenere Cane e Gatto perché entrambi sono sottotipi di Animale. Ogni chiamata a verso usa l’implementazione dell’istanza corrente.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Animale { String verso() { return \"...\"; } }\nclass Cane extends Animale { @Override String verso() { return \"Bau\"; } }\nclass Gatto extends Animale { @Override String verso() { return \"Miao\"; } }\npublic class Esempio {\n    public static void main(String[] args) {\n        Animale[] animali = {new Cane(), new Gatto(), new Cane()};\n        for (Animale a : animali) System.out.println(a.verso());\n    }\n}",
      "output": "Bau\nMiao\nBau",
      "noteTitle": "Da ricordare",
      "note": "Il tipo comune deve dichiarare il metodo che vuoi chiamare senza dover controllare ogni singolo sottotipo.",
      "quiz": {
        "question": "Che vantaggio dà la superclasse comune?",
        "options": [
          "Si può trattare una serie eterogenea in modo uniforme",
          "Gli oggetti diventano tutti dello stesso tipo reale",
          "Non servono più metodi"
        ],
        "answer": 0,
        "explanation": "Il chiamante usa l’interfaccia comune e lascia che ogni oggetto fornisca il proprio comportamento."
      }
    },
    {
      "id": "overload-override",
      "level": "BASE",
      "title": "Overloading e overriding",
      "summary": "Confronta firme diverse con ridefinizione di un metodo ereditato.",
      "goals": [
        "Riconoscere firme diverse",
        "Distinguere compilazione e runtime",
        "Usare nomi e parametri chiari"
      ],
      "explanation": "Overloading: più metodi con lo stesso nome ma parametri diversi. Overriding: una sottoclasse ridefinisce un metodo ereditato compatibile. Il tipo restituito da solo non distingue due overload.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Calcolatrice {\n    int somma(int a, int b) { return a + b; }\n    double somma(double a, double b) { return a + b; }\n}\nclass CalcolatriceScientifica extends Calcolatrice {\n    @Override int somma(int a, int b) { return a + b + 0; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Calcolatrice c = new CalcolatriceScientifica();\n        System.out.println(c.somma(2, 3));\n        System.out.println(c.somma(2.5, 1.0));\n    }\n}",
      "output": "5\n3.5",
      "noteTitle": "Da ricordare",
      "note": "L’overload viene scelto in base agli argomenti durante la compilazione; l’override dipende dal tipo reale al momento dell’esecuzione.",
      "quiz": {
        "question": "Che cosa distingue due overload?",
        "options": [
          "Una diversa lista di parametri",
          "Solo un tipo di ritorno diverso",
          "Il nome della variabile che riceve il risultato"
        ],
        "answer": 0,
        "explanation": "Il tipo restituito non basta per creare una firma di overload distinta."
      }
    },
    {
      "id": "instanceof-cast",
      "level": "BASE",
      "title": "Controllare un tipo specifico",
      "summary": "Usa instanceof quando serve un comportamento non presente nella superclasse.",
      "goals": [
        "Comprendere upcasting",
        "Usare instanceof",
        "Evitare cast non sicuri"
      ],
      "explanation": "Una variabile di superclasse può riferirsi a una sottoclasse. Per usare un metodo specifico della sottoclasse, controlla prima il tipo; spesso è però preferibile progettare un’interfaccia comune e non fare cast.",
      "codeLabel": "Esempio Java guidato",
      "code": "class Animale { }\nclass Cane extends Animale { void scodinzola() { System.out.println(\"Scodinzola\"); } }\npublic class Esempio {\n    public static void main(String[] args) {\n        Animale a = new Cane();\n        if (a instanceof Cane) ((Cane) a).scodinzola();\n    }\n}",
      "output": "Scodinzola",
      "noteTitle": "Da ricordare",
      "note": "I cast non controllati possono generare ClassCastException. Verifica il tipo oppure, meglio, usa un metodo del tipo comune.",
      "quiz": {
        "question": "Che cosa verifica instanceof?",
        "options": [
          "Se un oggetto è compatibile con un tipo",
          "Se due stringhe hanno contenuto uguale",
          "Se un array è ordinato"
        ],
        "answer": 0,
        "explanation": "instanceof controlla la compatibilità del riferimento con un tipo."
      }
    }
  ]
};
