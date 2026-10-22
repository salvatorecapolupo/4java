/* Contenuti del percorso Metodi Java. Il motore e lo stile restano comuni ai mini-siti. */
window.COURSE = {
  "slug": "java-metodi",
  "title": "Metodi Java, passo dopo passo",
  "kicker": "INFORMATICA · METODI E SOTTOPROGRAMMI",
  "intro": "Dai primi metodi a parametri, valori restituiti e overloading: esempi brevi, verifiche immediate e progressione guidata.",
  "sources": [
    {
      "label": "Pagina di partenza: Edutecnica — Metodi Java",
      "url": "https://www.edutecnica.it/informatica/metodi/metodi.htm"
    },
    {
      "label": "Dev.java — Definire i metodi",
      "url": "https://dev.java/learn/language/oop/classes-objects/defining-methods/"
    },
    {
      "label": "Oracle Java Tutorials — Defining Methods",
      "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html"
    },
    {
      "label": "Oracle Java Tutorials — Metodi statici e variabili di classe",
      "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html"
    }
  ],
  "lessons": [
    {
      "id": "cos-e-un-metodo",
      "level": "BASE 01",
      "title": "Che cos’è un metodo",
      "summary": "Dai un nome a un’operazione e richiamala quando serve.",
      "goals": [
        "Riconoscere intestazione e corpo",
        "Distinguere dichiarazione e chiamata",
        "Capire le parentesi graffe"
      ],
      "explanation": "Un metodo raggruppa istruzioni che svolgono un compito. La dichiarazione ne definisce nome, tipo restituito, eventuali parametri e corpo; la chiamata ne richiede l’esecuzione. Nell’esempio, saluta() è dichiarato una sola volta ma chiamato due volte. I metodi Java sono dichiarati all’interno di una classe, di un’interfaccia, di un enum o di un record.",
      "codeLabel": "Dichiara e richiama un metodo",
      "code": "public class Saluto {\n    static void saluta() {\n        System.out.println(\"Ciao!\");\n    }\n\n    public static void main(String[] args) {\n        saluta();\n        saluta();\n    }\n}",
      "output": "Ciao!\nCiao!",
      "noteTitle": "Da ricordare",
      "note": "Scrivere saluta() nel codice non è la stessa cosa che dichiarare il metodo. La dichiarazione definisce che cosa fare; la chiamata avvia quelle istruzioni. Ogni istruzione termina con ;, mentre le parentesi graffe delimitano i blocchi.",
      "quiz": {
        "question": "Che cosa fa la chiamata saluta();?",
        "options": [
          "Definisce una nuova classe",
          "Esegue il corpo del metodo saluta",
          "Restituisce sempre una stringa"
        ],
        "answer": 1,
        "explanation": "La chiamata richiede l’esecuzione del metodo già dichiarato."
      }
    },
    {
      "id": "void",
      "level": "BASE 02",
      "title": "Metodi che non restituiscono un valore",
      "summary": "Usa void quando il compito del metodo è compiere un’azione.",
      "goals": [
        "Riconoscere void",
        "Definire un metodo senza parametri",
        "Richiamarlo da main"
      ],
      "explanation": "Il tipo di ritorno void indica che il metodo non consegna un valore al punto in cui è stato chiamato. Può comunque svolgere un’azione, per esempio stampare un messaggio. Un metodo senza parametri usa parentesi vuote sia nella dichiarazione sia nella chiamata.",
      "codeLabel": "Un metodo void con una responsabilità chiara",
      "code": "public class Messaggio {\n    static void mostraIstruzioni() {\n        System.out.println(\"1. Leggi la consegna\");\n        System.out.println(\"2. Prova l'esempio\");\n        System.out.println(\"3. Controlla il risultato\");\n    }\n\n    public static void main(String[] args) {\n        mostraIstruzioni();\n    }\n}",
      "output": "1. Leggi la consegna\n2. Prova l\'esempio\n3. Controlla il risultato",
      "noteTitle": "Attenzione",
      "note": "void non significa che il metodo non faccia nulla: significa che non restituisce un valore. Un metodo void può terminare anticipatamente con return; senza valore, ma spesso basta arrivare alla parentesi graffa finale.",
      "quiz": {
        "question": "Quando è appropriato usare void?",
        "options": [
          "Quando il metodo non restituisce un valore",
          "Quando il metodo deve restituire un int",
          "Quando il metodo non può contenere istruzioni"
        ],
        "answer": 0,
        "explanation": "void segnala l’assenza di un valore restituito al chiamante."
      }
    },
    {
      "id": "parametri-argomenti",
      "level": "BASE 03",
      "title": "Parametri e argomenti",
      "summary": "Passa informazioni al metodo per renderlo riutilizzabile.",
      "goals": [
        "Leggere la lista dei parametri",
        "Distinguere parametro e argomento",
        "Passare valori di tipo corretto"
      ],
      "explanation": "I parametri sono le variabili dichiarate tra le parentesi del metodo; gli argomenti sono i valori forniti quando il metodo viene chiamato. Il tipo dell’argomento deve essere compatibile con il tipo dichiarato nel parametro. In questo esempio nome è un parametro, mentre \"Ada\" e \"Luca\" sono argomenti.",
      "codeLabel": "Lo stesso metodo, dati diversi",
      "code": "public class SalutaPersona {\n    static void saluta(String nome) {\n        System.out.println(\"Ciao, \" + nome + \"!\");\n    }\n\n    public static void main(String[] args) {\n        saluta(\"Ada\");\n        saluta(\"Luca\");\n    }\n}",
      "output": "Ciao, Ada!\nCiao, Luca!",
      "noteTitle": "Piccola distinzione",
      "note": "String nome è il parametro formale della dichiarazione. La stringa \"Ada\" nella chiamata è un argomento. Dare nomi chiari ai parametri rende il metodo più facile da capire senza dover leggere tutte le istruzioni interne.",
      "quiz": {
        "question": "Nella chiamata calcola(4, 7), che cosa sono 4 e 7?",
        "options": [
          "I tipi restituiti",
          "Gli argomenti",
          "I nomi dei metodi"
        ],
        "answer": 1,
        "explanation": "Gli argomenti sono i valori passati al metodo quando lo si invoca."
      }
    },
    {
      "id": "return",
      "level": "BASE 04",
      "title": "Restituire un risultato con return",
      "summary": "Calcola un valore all’interno del metodo e consegnalo al chiamante.",
      "goals": [
        "Scegliere un tipo di ritorno",
        "Usare return",
        "Riutilizzare il valore restituito"
      ],
      "explanation": "Se un metodo deve restituire un dato, la dichiarazione indica il tipo (per esempio int) e il corpo usa return seguito da un valore compatibile. Il risultato può essere assegnato a una variabile, stampato o usato in un’altra espressione. Un metodo non void deve restituire un valore in tutti i percorsi di esecuzione possibili.",
      "codeLabel": "Il metodo restituisce la somma",
      "code": "public class Calcolatrice {\n    static int somma(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int risultato = somma(4, 7);\n        System.out.println(risultato);\n    }\n}",
      "output": "11",
      "noteTitle": "Non confondere stampa e restituzione",
      "note": "System.out.println mostra un valore sullo schermo; return consegna il valore al codice che ha chiamato il metodo e termina quel percorso del metodo. Le due operazioni hanno scopi diversi.",
      "quiz": {
        "question": "Che cosa fa return a + b;?",
        "options": [
          "Stampa a + b sullo schermo",
          "Restituisce il risultato e termina il metodo",
          "Dichiara una nuova variabile"
        ],
        "answer": 1,
        "explanation": "return consegna il risultato al chiamante e conclude l’esecuzione del metodo in quel punto."
      }
    },
    {
      "id": "valori-booleani",
      "level": "INTERMEDIO 01",
      "title": "Metodi che restituiscono true o false",
      "summary": "Raccogli una verifica logica in un metodo con ritorno boolean.",
      "goals": [
        "Usare il tipo boolean",
        "Restituire un’espressione logica",
        "Usare il risultato in if"
      ],
      "explanation": "Un metodo che risponde a una domanda sì/no può restituire un boolean. Conviene scegliere nomi che chiariscano la domanda, spesso iniziando con is o ha. Il metodo èPari restituisce true quando il resto della divisione per 2 è zero; altrimenti restituisce false.",
      "codeLabel": "Verificare se un numero è pari",
      "code": "public class VerificaParita {\n    static boolean ePari(int numero) {\n        return numero % 2 == 0;\n    }\n\n    public static void main(String[] args) {\n        int numero = 14;\n        if (ePari(numero)) {\n            System.out.println(\"Numero pari\");\n        } else {\n            System.out.println(\"Numero dispari\");\n        }\n    }\n}",
      "output": "Numero pari",
      "noteTitle": "Un nome che descrive la domanda",
      "note": "Non serve scrivere if dentro il metodo se puoi restituire direttamente una condizione booleana. In Java, % restituisce il resto della divisione. Anche i numeri negativi possono essere pari o dispari: il confronto con zero nel resto continua a funzionare per la parità.",
      "quiz": {
        "question": "Qual è il tipo del risultato di ePari(14)?",
        "options": [
          "int",
          "String",
          "boolean"
        ],
        "answer": 2,
        "explanation": "Il metodo è dichiarato boolean e restituisce true oppure false."
      }
    },
    {
      "id": "ambito-variabili",
      "level": "INTERMEDIO 02",
      "title": "Ambito e durata delle variabili locali",
      "summary": "Capisci dove un nome è visibile e perché le variabili locali non si condividono automaticamente.",
      "goals": [
        "Individuare le variabili locali",
        "Riconoscere l’ambito del blocco",
        "Evitare di usare valori fuori contesto"
      ],
      "explanation": "Una variabile dichiarata dentro un metodo è locale a quel metodo, e non può essere usata direttamente dall’esterno. Due metodi possono avere variabili locali con lo stesso nome: sono variabili distinte. Per comunicare un dato da un metodo a un altro si usano parametri e valori restituiti, oppure membri della classe quando è appropriato.",
      "codeLabel": "Ogni metodo ha il proprio contesto",
      "code": "public class Contesto {\n    static int doppio(int valore) {\n        int risultato = valore * 2;\n        return risultato;\n    }\n\n    static int triplo(int valore) {\n        int risultato = valore * 3;\n        return risultato;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(doppio(5));\n        System.out.println(triplo(5));\n    }\n}",
      "output": "10\n15",
      "noteTitle": "Nota importante",
      "note": "Le due variabili risultato sono locali a metodi diversi. Non sono la stessa variabile e non sono accessibili da main. Una variabile locale deve inoltre essere inizializzata prima di essere letta.",
      "quiz": {
        "question": "La variabile risultato dichiarata in doppio() è direttamente visibile in triplo()?",
        "options": [
          "Sì, perché ha lo stesso nome",
          "No, perché è locale a doppio()",
          "Sì, ma solo se è int"
        ],
        "answer": 1,
        "explanation": "L’ambito di una variabile locale è limitato al blocco in cui è dichiarata."
      }
    },
    {
      "id": "static-istanza",
      "level": "INTERMEDIO 03",
      "title": "Metodi statici e metodi di istanza",
      "summary": "Distingui i metodi della classe da quelli chiamati su un oggetto specifico.",
      "goals": [
        "Riconoscere static",
        "Chiamare un metodo di istanza su un oggetto",
        "Capire il ruolo di this"
      ],
      "explanation": "Un metodo static appartiene alla classe e non ha un oggetto corrente: può essere chiamato usando il nome della classe e non può usare this. Un metodo di istanza si invoca su un oggetto e può lavorare sullo stato di quell’oggetto. L’esempio crea due contatori separati, ciascuno con il proprio valore.",
      "codeLabel": "Un metodo di istanza lavora sull’oggetto",
      "code": "public class Contatore {\n    private int valore;\n\n    Contatore(int iniziale) {\n        valore = iniziale;\n    }\n\n    void incrementa() {\n        valore++;\n    }\n\n    int leggi() {\n        return valore;\n    }\n\n    public static void main(String[] args) {\n        Contatore primo = new Contatore(2);\n        Contatore secondo = new Contatore(10);\n        primo.incrementa();\n        System.out.println(primo.leggi());\n        System.out.println(secondo.leggi());\n    }\n}",
      "output": "3\n10",
      "noteTitle": "Quando usare cosa",
      "note": "Le utility che lavorano solo sui parametri possono spesso essere static. I metodi che leggono o modificano lo stato di un oggetto sono spesso metodi di istanza. Non è una regola assoluta di progettazione, ma una distinzione utile da comprendere.",
      "quiz": {
        "question": "Come si invoca normalmente il metodo di istanza leggi()?",
        "options": [
          "Contatore.leggi() senza oggetto",
          "Su un oggetto, per esempio primo.leggi()",
          "Solo dentro main"
        ],
        "answer": 1,
        "explanation": "Un metodo di istanza è chiamato su una specifica istanza della classe."
      }
    },
    {
      "id": "overloading",
      "level": "INTERMEDIO 04",
      "title": "Overloading: stesso nome, parametri diversi",
      "summary": "Crea più varianti di un’operazione con liste di parametri differenti.",
      "goals": [
        "Riconoscere l’overloading",
        "Confrontare i tipi dei parametri",
        "Evitare firme duplicate"
      ],
      "explanation": "L’overloading permette di dichiarare metodi con lo stesso nome purché le liste dei parametri siano differenti per numero, tipi o ordine dei tipi. Il compilatore sceglie la variante compatibile con gli argomenti passati. Il solo tipo restituito non basta per distinguere due metodi.",
      "codeLabel": "Due varianti del metodo somma",
      "code": "public class Somme {\n    static int somma(int a, int b) {\n        return a + b;\n    }\n\n    static double somma(double a, double b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(somma(2, 3));\n        System.out.println(somma(2.5, 3.1));\n    }\n}",
      "output": "5\n5.6",
      "noteTitle": "Attenzione all’errore tipico",
      "note": "Non puoi dichiarare due metodi somma(int, int) che differiscono soltanto per il tipo restituito. La firma del metodo considera il nome e i tipi dei parametri, non il solo ritorno.",
      "quiz": {
        "question": "Quale differenza può distinguere due metodi sovraccaricati?",
        "options": [
          "Solo il nome della variabile locale",
          "La lista dei parametri",
          "Solo il tipo restituito"
        ],
        "answer": 1,
        "explanation": "L’overloading richiede liste di parametri differenti; cambiare soltanto il tipo di ritorno non è sufficiente."
      }
    },
    {
      "id": "passaggio-valore",
      "level": "INTERMEDIO 05",
      "title": "Passaggio dei parametri per valore",
      "summary": "Scopri perché cambiare un parametro primitivo non cambia la variabile del chiamante.",
      "goals": [
        "Capire la copia del valore",
        "Separare parametro e variabile originale",
        "Preferire return quando serve un risultato"
      ],
      "explanation": "Java passa sempre gli argomenti per valore. Per un tipo primitivo, il metodo riceve una copia del valore: riassegnare il parametro non modifica la variabile usata nella chiamata. Se vuoi ottenere un nuovo valore, restituiscilo con return e assegnalo al chiamante.",
      "codeLabel": "Il valore del chiamante rimane invariato",
      "code": "public class PassaggioValore {\n    static void provaCambio(int numero) {\n        numero = 99;\n        System.out.println(\"Dentro: \" + numero);\n    }\n\n    public static void main(String[] args) {\n        int x = 5;\n        provaCambio(x);\n        System.out.println(\"Fuori: \" + x);\n    }\n}",
      "output": "Dentro: 99\nFuori: 5",
      "noteTitle": "Un chiarimento",
      "note": "Anche quando il parametro è un riferimento a un oggetto, Java passa una copia del riferimento. Il metodo può modificare l’oggetto attraverso quella copia, ma riassegnare il parametro non cambia la variabile di riferimento del chiamante.",
      "quiz": {
        "question": "Dopo provaCambio(x), quanto vale x nel main?",
        "options": [
          "99",
          "5",
          "0"
        ],
        "answer": 1,
        "explanation": "Il parametro numero contiene una copia del valore di x; la sua riassegnazione non modifica x."
      }
    },
    {
      "id": "mini-progetto",
      "level": "AVANZATO 01",
      "title": "Mini-progetto: area e perimetro",
      "summary": "Combina metodi piccoli per rendere il programma facile da leggere e riutilizzare.",
      "goals": [
        "Separare i calcoli dalla stampa",
        "Riutilizzare metodi",
        "Leggere un programma composto"
      ],
      "explanation": "Un programma è più chiaro quando ogni metodo ha una responsabilità semplice. Qui area() e perimetro() calcolano risultati diversi, mentre main() coordina le chiamate e mostra i risultati. Separare i compiti aiuta a testare e modificare il codice senza duplicare formule.",
      "codeLabel": "Due metodi di calcolo e una chiamata",
      "code": "public class RettangoloCalcoli {\n    static double area(double base, double altezza) {\n        return base * altezza;\n    }\n\n    static double perimetro(double base, double altezza) {\n        return 2 * (base + altezza);\n    }\n\n    public static void main(String[] args) {\n        double base = 4.0;\n        double altezza = 2.5;\n\n        System.out.println(\"Area: \" + area(base, altezza));\n        System.out.println(\"Perimetro: \" + perimetro(base, altezza));\n    }\n}",
      "output": "Area: 10.0\nPerimetro: 13.0",
      "noteTitle": "Estensione consigliata",
      "note": "Per renderlo più robusto, puoi aggiungere controlli che rifiutino basi e altezze non positive, oppure leggere i dati da tastiera. Mantieni però i metodi di calcolo separati dalla gestione dell’input e dell’output.",
      "quiz": {
        "question": "Qual è il vantaggio principale di separare area() e perimetro()?",
        "options": [
          "Il codice non ha più bisogno di variabili",
          "Ogni metodo svolge un compito chiaro e riutilizzabile",
          "Java esegue sempre più velocemente"
        ],
        "answer": 1,
        "explanation": "Metodi piccoli con responsabilità definite migliorano leggibilità, riuso e verificabilità."
      }
    }
  ]
};
