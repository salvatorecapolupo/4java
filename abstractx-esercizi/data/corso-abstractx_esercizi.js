/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Classi astratte e interfacce: esercizi",
  "slug": "esercizi-abstract-java",
  "kicker": "ESERCITAZIONI · CONTRATTI E POLIMORFISMO",
  "intro": "Risolvi esempi concreti con figure, animali, pagamenti, notifiche e formati di esportazione.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/abstractx/abstractx.htm"
    },
    {
      "label": "Oracle — Classi e metodi astratti",
      "url": "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"
    },
    {
      "label": "Oracle — Interfacce",
      "url": "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html"
    }
  ],
  "lessons": [
    {
      "id": "figure-astratte",
      "level": "BASE",
      "title": "Figure con area astratta",
      "summary": "Ogni figura implementa la propria formula di area.",
      "goals": [
        "Dichiarare area astratta",
        "Implementare più sottoclassi",
        "Usare un array del tipo base"
      ],
      "explanation": "La classe Figura esprime l’operazione comune senza assumere una forma geometrica specifica. Le sottoclassi completano il metodo.",
      "codeLabel": "Esempio Java guidato",
      "code": "abstract class Figura { abstract double area(); }\nclass Triangolo extends Figura {\n    private double base, altezza;\n    Triangolo(double b, double h) { base=b; altezza=h; }\n    double area() { return base*altezza/2; }\n}\nclass Rettangolo extends Figura {\n    private double b,h;\n    Rettangolo(double b,double h) { this.b=b; this.h=h; }\n    double area() { return b*h; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Figura[] f = {new Triangolo(6,4), new Rettangolo(3,4)};\n        for (Figura x : f) System.out.println(x.area());\n    }\n}",
      "output": "12.0\n12.0",
      "noteTitle": "Da ricordare",
      "note": "Il valore uguale dell’esempio è casuale: formule e tipi di figura restano diversi.",
      "quiz": {
        "question": "Quale metodo fornisce il risultato specifico?",
        "options": [
          "L’area ridefinita nella sottoclasse",
          "Il costruttore di Object",
          "Il metodo main della classe base"
        ],
        "answer": 0,
        "explanation": "Ogni sottoclasse calcola l’area secondo la propria formula."
      }
    },
    {
      "id": "animali-interfaccia",
      "level": "BASE",
      "title": "Versi tramite interfaccia",
      "summary": "Tratta animali diversi attraverso il comportamento comune.",
      "goals": [
        "Definire un’interfaccia",
        "Implementare un metodo",
        "Chiamare attraverso il contratto"
      ],
      "explanation": "Il codice principale non conosce la classe specifica. Ogni animale fornisce il proprio suono implementando lo stesso metodo.",
      "codeLabel": "Esempio Java guidato",
      "code": "interface Vocalizza { String verso(); }\nclass Cane implements Vocalizza { public String verso() { return \"Bau\"; } }\nclass Gatto implements Vocalizza { public String verso() { return \"Miao\"; } }\npublic class Esempio {\n    public static void main(String[] args) {\n        Vocalizza[] animali = {new Cane(), new Gatto()};\n        for (Vocalizza a : animali) System.out.println(a.verso());\n    }\n}",
      "output": "Bau\nMiao",
      "noteTitle": "Da ricordare",
      "note": "L’interfaccia dichiara il comportamento; le classi concrete ne forniscono il contenuto.",
      "quiz": {
        "question": "Che cosa garantisce Vocalizza?",
        "options": [
          "La disponibilità del metodo verso()",
          "Che tutti gli animali siano cani",
          "Che verso sia static"
        ],
        "answer": 0,
        "explanation": "Il tipo Vocalizza promette che il metodo verso è disponibile."
      }
    },
    {
      "id": "pagamento-interfaccia",
      "level": "BASE",
      "title": "Strategia di pagamento",
      "summary": "Sostituisci l’algoritmo di pagamento mantenendo una chiamata comune.",
      "goals": [
        "Definire un contratto",
        "Implementare metodi alternativi",
        "Separare scelta e algoritmo"
      ],
      "explanation": "Una strategia rappresenta un algoritmo intercambiabile dietro un’interfaccia. Questo esempio simula la scelta e non gestisce vere transazioni o dati finanziari.",
      "codeLabel": "Esempio Java guidato",
      "code": "interface Pagamento { String esegui(double importo); }\nclass Carta implements Pagamento { public String esegui(double x) { return \"Carta: \" + x; } }\nclass Contanti implements Pagamento { public String esegui(double x) { return \"Contanti: \" + x; } }\npublic class Esempio {\n    static void paga(Pagamento metodo, double importo) { System.out.println(metodo.esegui(importo)); }\n    public static void main(String[] args) { paga(new Carta(), 12.5); paga(new Contanti(), 5.0); }\n}",
      "output": "Carta: 12.5\nContanti: 5.0",
      "noteTitle": "Da ricordare",
      "note": "Per importi monetari reali preferisci BigDecimal o centesimi interi; questo esercizio illustra solo il polimorfismo.",
      "quiz": {
        "question": "Quale vantaggio offre Pagamento?",
        "options": [
          "Il metodo paga può accettare implementazioni diverse",
          "Ogni pagamento deve avere un nome di classe uguale",
          "Non occorrono istanze"
        ],
        "answer": 0,
        "explanation": "Il parametro usa il contratto e non una classe concreta."
      }
    },
    {
      "id": "esportazione",
      "level": "BASE",
      "title": "Esportare contenuti in formati diversi",
      "summary": "Un metodo comune può produrre testo in formati differenti.",
      "goals": [
        "Definire un contratto di esportazione",
        "Implementare CSV e testo semplice",
        "Evitare condizioni per ogni tipo"
      ],
      "explanation": "Con un’interfaccia si possono aggiungere nuove modalità di esportazione senza cambiare il codice che richiama esporta.",
      "codeLabel": "Esempio Java guidato",
      "code": "interface Esportatore { String esporta(String titolo, String testo); }\nclass TestoSemplice implements Esportatore {\n    public String esporta(String titolo, String testo) { return titolo + \"\\n\" + testo; }\n}\nclass Csv implements Esportatore {\n    public String esporta(String titolo, String testo) { return \"titolo;testo\\n\" + titolo + \";\" + testo; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Esportatore e = new Csv();\n        System.out.println(e.esporta(\"Nota\", \"Ripassare Java\"));\n    }\n}",
      "output": "titolo;testo\nNota;Ripassare Java",
      "noteTitle": "Da ricordare",
      "note": "Un CSV reale deve anche gestire delimitatori, virgolette e newline presenti nei campi.",
      "quiz": {
        "question": "Per aggiungere un nuovo formato, quale parte si modifica?",
        "options": [
          "Si crea un’altra implementazione di Esportatore",
          "Si cambia il codice del ciclo principale",
          "Si modifica la parola interface in class"
        ],
        "answer": 0,
        "explanation": "Una nuova implementazione può essere aggiunta rispettando il contratto."
      }
    }
  ]
};
