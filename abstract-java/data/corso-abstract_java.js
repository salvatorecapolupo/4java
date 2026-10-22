/* Percorso didattico riorganizzato e verificato; vedi README e note editoriali nella root. */
window.COURSE = {
  "title": "Classi astratte e interfacce",
  "slug": "classi-astratte-interfacce",
  "kicker": "PROGRAMMAZIONE A OGGETTI · CONTRATTI",
  "intro": "Scegli quando usare una base incompleta e quando definire un contratto che classi diverse possono implementare.",
  "sources": [
    {
      "label": "Fonte di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/abstract/abstract.htm"
    },
    {
      "label": "Oracle — Classi e metodi astratti",
      "url": "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"
    },
    {
      "label": "Oracle — Interfacce",
      "url": "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html"
    },
    {
      "label": "Dev.java — Ereditarietà",
      "url": "https://dev.java/learn/inheritance/"
    }
  ],
  "lessons": [
    {
      "id": "classe-astratta",
      "level": "BASE",
      "title": "Classe e metodo astratto",
      "summary": "Dichiara ciò che le sottoclassi devono implementare.",
      "goals": [
        "Usare abstract",
        "Non istanziare la classe astratta",
        "Implementare il metodo nella sottoclasse"
      ],
      "explanation": "Una classe abstract può contenere campi, costruttori, metodi concreti e metodi astratti. I metodi astratti non hanno corpo; una sottoclasse concreta deve implementarli.",
      "codeLabel": "Esempio Java guidato",
      "code": "abstract class Figura { abstract double area(); }\nclass Rettangolo extends Figura {\n    private double b, h;\n    Rettangolo(double b, double h) { this.b=b; this.h=h; }\n    @Override double area() { return b*h; }\n}\npublic class Esempio {\n    public static void main(String[] args) { System.out.println(new Rettangolo(4, 3).area()); }\n}",
      "output": "12.0",
      "noteTitle": "Da ricordare",
      "note": "Una classe astratta può avere un costruttore, chiamato quando viene costruita una sottoclasse.",
      "quiz": {
        "question": "Si può scrivere new Figura()?",
        "options": [
          "No, perché Figura è astratta",
          "Sì, sempre",
          "Solo se area è static"
        ],
        "answer": 0,
        "explanation": "La classe astratta non può essere istanziata direttamente."
      }
    },
    {
      "id": "interfaccia",
      "level": "BASE",
      "title": "Definire un’interfaccia",
      "summary": "Un’interfaccia descrive operazioni che una classe promette di offrire.",
      "goals": [
        "Dichiarare interface",
        "Usare implements",
        "Implementare i metodi richiesti"
      ],
      "explanation": "Una classe può implementare più interfacce. L’interfaccia permette a oggetti diversi di essere usati tramite lo stesso contratto, senza imporre una comune classe base concreta.",
      "codeLabel": "Esempio Java guidato",
      "code": "interface Stampabile { String stampa(); }\nclass Documento implements Stampabile {\n    private String testo;\n    Documento(String testo) { this.testo = testo; }\n    @Override public String stampa() { return \"Documento: \" + testo; }\n}\npublic class Esempio {\n    public static void main(String[] args) {\n        Stampabile s = new Documento(\"Appunti\");\n        System.out.println(s.stampa());\n    }\n}",
      "output": "Documento: Appunti",
      "noteTitle": "Da ricordare",
      "note": "I metodi astratti dichiarati da un’interfaccia sono pubblici; l’implementazione deve mantenere visibilità pubblica.",
      "quiz": {
        "question": "Quale parola collega una classe a un’interfaccia?",
        "options": [
          "implements",
          "extends",
          "instanceof"
        ],
        "answer": 0,
        "explanation": "Una classe implementa un’interfaccia usando implements."
      }
    },
    {
      "id": "abstract-vs-interface",
      "level": "BASE",
      "title": "Astratta o interfaccia?",
      "summary": "Scegli lo strumento in base al tipo di relazione e alle responsabilità.",
      "goals": [
        "Riconoscere stato condiviso",
        "Riconoscere un contratto",
        "Sapere che si possono implementare più interfacce"
      ],
      "explanation": "Una classe astratta è utile quando esistono stato o implementazione condivisi tra tipi collegati. Un’interfaccia descrive una capacità o un contratto. Una classe Java può estendere una sola classe ma implementare più interfacce.",
      "codeLabel": "Esempio Java guidato",
      "code": "interface Ricaricabile { void ricarica(); }\ninterface Connesso { boolean connesso(); }\nclass Lettore implements Ricaricabile, Connesso {\n    private boolean online;\n    @Override public void ricarica() { System.out.println(\"Ricarica avviata\"); }\n    @Override public boolean connesso() { return online; }\n}\npublic class Esempio {\n    public static void main(String[] args) { Ricaricabile r = new Lettore(); r.ricarica(); }\n}",
      "output": "Ricarica avviata",
      "noteTitle": "Da ricordare",
      "note": "Non creare interfacce solo per aggiungere complessità: devono rappresentare una capacità utile e stabile.",
      "quiz": {
        "question": "Una classe Java può implementare più interfacce?",
        "options": [
          "Sì",
          "No, una sola",
          "Solo se è astratta"
        ],
        "answer": 0,
        "explanation": "Java consente di implementare più interfacce."
      }
    },
    {
      "id": "polimorfismo-interfaccia",
      "level": "BASE",
      "title": "Polimorfismo tramite interfaccia",
      "summary": "Memorizza implementazioni diverse in una lista di tipo comune.",
      "goals": [
        "Creare più implementazioni",
        "Invocare solo i metodi del contratto",
        "Sfruttare il dispatch dinamico"
      ],
      "explanation": "Chi usa l’interfaccia non ha bisogno di conoscere la classe concreta. Può così lavorare con implementazioni sostituibili.",
      "codeLabel": "Esempio Java guidato",
      "code": "interface Notifica { void invia(String testo); }\nclass Email implements Notifica { public void invia(String t) { System.out.println(\"Email: \" + t); } }\nclass SMS implements Notifica { public void invia(String t) { System.out.println(\"SMS: \" + t); } }\npublic class Esempio {\n    public static void main(String[] args) {\n        Notifica[] canali = {new Email(), new SMS()};\n        for (Notifica n : canali) n.invia(\"Ciao\");\n    }\n}",
      "output": "Email: Ciao\nSMS: Ciao",
      "noteTitle": "Da ricordare",
      "note": "Un’interfaccia è il tipo della variabile; l’implementazione concreta determina il comportamento eseguito.",
      "quiz": {
        "question": "Perché il ciclo non deve conoscere Email e SMS?",
        "options": [
          "Basta il contratto Notifica",
          "Perché le classi non hanno metodi",
          "Perché i due oggetti sono identici"
        ],
        "answer": 0,
        "explanation": "Il codice dipende da un’astrazione comune, non dalle implementazioni specifiche."
      }
    }
  ]
};
