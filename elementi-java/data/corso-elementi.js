/* Percorso didattico verificato; tutti gli esempi sono file Java autonomi. */
window.COURSE = {
  "slug": "java-elementi",
  "title": "Java, passo dopo passo",
  "kicker": "INFORMATICA · PERCORSO GUIDATO",
  "intro": "Dalle prime istruzioni ai cicli: concetti essenziali, esempi brevi e controlli per capire se hai imparato.",
  "sources": [
    {
      "label": "Pagina di partenza: Edutecnica",
      "url": "https://www.edutecnica.it/informatica/elementi/elementi.htm"
    },
    {
      "label": "Java Language Specification (Oracle)",
      "url": "https://docs.oracle.com/en/java/javase/27/docs/specs/jls/index.html"
    },
    {
      "label": "Documentazione di Scanner (Oracle)",
      "url": "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/Scanner.html"
    }
  ],
  "lessons": [
    {
      "id": "struttura",
      "level": "BASE 01",
      "title": "Com'è fatto un programma Java",
      "summary": "Riconosci la classe, il punto di ingresso e le istruzioni che il programma esegue.",
      "goals": [
        "Riconoscere class e main",
        "Capire println",
        "Usare le parentesi"
      ],
      "explanation": "Un programma Java tradizionale organizza il codice dentro una classe. Il metodo main è il punto da cui parte l'esecuzione in questo tipo di programma. Le istruzioni terminano normalmente con un punto e virgola; le parentesi graffe delimitano i blocchi.",
      "codeLabel": "Un primo programma completo",
      "code": "public class Saluto {\n    public static void main(String[] args) {\n        System.out.println(\"Ciao!\");\n    }\n}",
      "output": "Ciao!",
      "noteTitle": "Da ricordare",
      "note": "Java distingue maiuscole e minuscole: Saluto e saluto sono nomi diversi. Il nome del file sorgente deve coincidere con il nome della classe pubblica: Saluto.java.",
      "quiz": {
        "question": "A cosa serve System.out.println(...)?",
        "options": [
          "A mostrare un messaggio",
          "A dichiarare una classe",
          "A ripetere un ciclo"
        ],
        "answer": 0,
        "explanation": "Stampa il valore o il testo indicato e va a capo."
      }
    },
    {
      "id": "input-output",
      "level": "BASE 02",
      "title": "Input e output con Scanner",
      "summary": "Leggi un numero digitato da tastiera e mostra il risultato.",
      "goals": [
        "Importare Scanner",
        "Leggere un intero",
        "Calcolare una somma"
      ],
      "explanation": "System.out.print mostra una richiesta senza andare a capo; println invece va a capo. Per leggere dati da tastiera si può usare java.util.Scanner. Il metodo nextInt legge un intero; nextLine legge una riga di testo.",
      "codeLabel": "Leggere due numeri e sommarli",
      "code": "import java.util.Scanner;\n\npublic class Somma {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n\n        System.out.print(\"Primo numero: \");\n        int a = input.nextInt();\n        System.out.print(\"Secondo numero: \");\n        int b = input.nextInt();\n\n        System.out.println(\"Somma: \" + (a + b));\n        input.close();\n    }\n}",
      "output": "Primo numero: 4\nSecondo numero: 7\nSomma: 11",
      "noteTitle": "Attenzione agli input",
      "note": "Se l'utente inserisce testo dove il programma si aspetta un intero, nextInt può generare un'eccezione. Nei programmi reali è opportuno gestire anche gli input non validi.",
      "quiz": {
        "question": "Quale import rende disponibile Scanner?",
        "options": [
          "import java.io.Scanner;",
          "import java.util.Scanner;",
          "import java.Scanner;"
        ],
        "answer": 1,
        "explanation": "La classe Scanner appartiene al package java.util."
      }
    },
    {
      "id": "variabili",
      "level": "BASE 03",
      "title": "Variabili, costanti e identificatori",
      "summary": "Dai un nome ai dati e conserva i valori che il programma deve usare.",
      "goals": [
        "Dichiarare una variabile",
        "Assegnare un valore",
        "Usare final"
      ],
      "explanation": "Una variabile è un nome associato a un valore di un certo tipo. La dichiarazione indica il tipo e il nome; l'assegnazione aggiorna il valore. Per esprimere una costante di variabile si usa final: dopo l'inizializzazione, non si può assegnare di nuovo un valore a quella variabile.",
      "codeLabel": "Esempio completo compilabile",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int tentativi = 3;\n        tentativi = tentativi + 1;\n        final double IVA = 0.22;\n        String messaggio = \"Benvenuto\";\n        System.out.println(tentativi);\n        System.out.println(IVA);\n    }\n}",
      "output": "4\n0.22",
      "noteTitle": "Scegli nomi leggibili",
      "note": "Preferisci nomi descrittivi come numeroStudenti a nomi vaghi come n. Per convenzione, le variabili usano il camelCase; le costanti spesso si scrivono in MAIUSCOLO_CON_UNDERSCORE.",
      "quiz": {
        "question": "Che cosa indica final in questa dichiarazione?",
        "options": [
          "Che il valore può cambiare sempre",
          "Che la variabile non può essere riassegnata",
          "Che il dato è necessariamente un testo"
        ],
        "answer": 1,
        "explanation": "final impedisce una nuova assegnazione alla variabile dopo l'inizializzazione."
      }
    },
    {
      "id": "tipi",
      "level": "BASE 04",
      "title": "Tipi di dato",
      "summary": "Scegli il tipo più adatto al dato da rappresentare.",
      "goals": [
        "Distinguere tipi primitivi",
        "Capire String",
        "Evitare conversioni inattese"
      ],
      "explanation": "Java è un linguaggio a tipizzazione statica: ogni variabile ha un tipo noto al momento della compilazione. I tipi primitivi comprendono boolean, byte, short, int, long, char, float e double. String rappresenta una sequenza di caratteri, ma è un tipo riferimento, non un tipo primitivo. Le dimensioni e gli intervalli dei tipi numerici sono definiti dalla specifica Java; boolean non è definito dalla specifica come un singolo bit di memoria.",
      "codeLabel": "Esempio completo compilabile",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int eta = 16;\n        double prezzo = 12.50;\n        char iniziale = 'M';\n        boolean promosso = true;\n        String nome = \"Marta\";\n        System.out.println(nome + \" ha \" + eta + \" anni.\");\n    }\n}",
      "output": "Marta ha 16 anni.",
      "noteTitle": "Non confondere char e String",
      "note": "Un char contiene un singolo valore di carattere UTF-16 e usa gli apici singoli ('M'); una String è una sequenza di caratteri e usa le virgolette (\"Marta\"). Per i decimali, float richiede normalmente il suffisso f (es. 2.5f); un letterale decimale senza suffisso è double.",
      "quiz": {
        "question": "Quale di questi è un tipo riferimento?",
        "options": [
          "int",
          "boolean",
          "String"
        ],
        "answer": 2,
        "explanation": "String è una classe della libreria Java; int e boolean sono tipi primitivi."
      }
    },
    {
      "id": "espressioni",
      "level": "INTERMEDIO 01",
      "title": "Espressioni e operatori",
      "summary": "Combina valori e variabili rispettando priorità, confronti e divisione intera.",
      "goals": [
        "Usare gli operatori",
        "Leggere i confronti",
        "Capire % e cast"
      ],
      "explanation": "Le espressioni combinano valori, variabili e operatori. La moltiplicazione ha precedenza sull'addizione, ma le parentesi rendono l'intenzione più leggibile. Quando due int vengono divisi con /, il risultato è una divisione intera: la parte decimale viene eliminata. Per ottenere un risultato decimale, almeno uno degli operandi deve essere convertito a double prima della divisione.",
      "codeLabel": "Esempio completo compilabile",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 2;\n        System.out.println(a / b);\n        System.out.println((double) a / b);\n        System.out.println(a % b);\n    }\n}",
      "output": "3\n3.5\n1",
      "noteTitle": "Il resto della divisione",
      "note": "L'operatore % restituisce il resto. Per verificare se un intero è dispari puoi scrivere numero % 2 != 0. Controllare numero % 6 == 0, invece, verifica se è multiplo di 6: non equivale a verificare se è dispari.",
      "quiz": {
        "question": "Che cosa stampa 7 / 2 se entrambi gli operandi sono int?",
        "options": [
          "3.5",
          "3",
          "4"
        ],
        "answer": 1,
        "explanation": "Con due operandi interi, Java esegue una divisione intera e scarta la parte frazionaria."
      }
    },
    {
      "id": "condizioni",
      "level": "INTERMEDIO 02",
      "title": "Condizioni: if, else e switch",
      "summary": "Fai scegliere al programma quale istruzione eseguire in base a una condizione.",
      "goals": [
        "Usare if ed else",
        "Combinare condizioni",
        "Scegliere tra alternative"
      ],
      "explanation": "if esegue un blocco quando la condizione è vera; else definisce il ramo alternativo. Gli operatori logici più comuni sono && (AND), || (OR) e ! (NOT). Per confrontare valori numerici usa == per l'uguaglianza e != per la differenza: il singolo = serve ad assegnare. switch è utile quando si devono distinguere più casi di un'espressione; le forme e i tipi supportati dipendono dalla versione Java utilizzata.",
      "codeLabel": "Esempio completo compilabile",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        int voto = 7;\n        if (voto >= 6) {\n            System.out.println(\"Superato\");\n        } else {\n            System.out.println(\"Da recuperare\");\n        }\n    }\n}",
      "output": "Superato",
      "noteTitle": "Errore frequente",
      "note": "Non confondere = e ==. Nell'esempio, voto >= 6 è una condizione booleana. Usa le parentesi graffe anche quando il blocco contiene una sola istruzione: rendono più chiara la struttura e riducono gli errori quando il codice cresce.",
      "quiz": {
        "question": "Quale operatore significa 'uguale a' in un confronto?",
        "options": [
          "=",
          "==",
          "=>"
        ],
        "answer": 1,
        "explanation": "Il confronto di uguaglianza si scrive ==; il simbolo = assegna un valore."
      }
    },
    {
      "id": "cicli",
      "level": "INTERMEDIO 03",
      "title": "Cicli: while, do-while e for",
      "summary": "Ripeti istruzioni in modo controllato e scegli il ciclo più adatto.",
      "goals": [
        "Distinguere i cicli",
        "Evitare cicli infiniti",
        "Usare break e continue"
      ],
      "explanation": "while controlla la condizione prima di ogni iterazione e può eseguire il corpo zero volte. do-while controlla la condizione alla fine e quindi esegue il corpo almeno una volta. for raccoglie in un'unica riga inizializzazione, condizione e aggiornamento, ed è comodo quando si conosce la struttura del conteggio. break termina il ciclo; continue passa all'iterazione successiva.",
      "codeLabel": "Esempio completo compilabile",
      "code": "public class Esempio {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}",
      "output": "1\n2\n3\n4\n5",
      "noteTitle": "Controlla la condizione",
      "note": "Se la variabile non cambia nel modo previsto, un ciclo può non terminare. Prima di eseguire un ciclo, individua sempre: valore iniziale, condizione di uscita e aggiornamento della variabile.",
      "quiz": {
        "question": "Quale ciclo esegue il corpo almeno una volta?",
        "options": [
          "while",
          "for",
          "do-while"
        ],
        "answer": 2,
        "explanation": "do-while controlla la condizione dopo avere eseguito il corpo del ciclo."
      }
    }
  ]
};
