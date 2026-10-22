window.COURSE = {
  "slug": "java-elementix-esercizi",
  "title": "Java: esercizi progressivi, passo dopo passo",
  "kicker": "INFORMATICA · LABORATORIO GUIDATO",
  "intro": "Dodici problemi risolti in ordine crescente di difficoltà: cicli, divisibilità, condizioni, geometria e una simulazione finale. Leggi il ragionamento, prova a prevedere il risultato e poi confronta la soluzione.",
  "sources": [
    {
      "label": "Pagina di partenza: Edutecnica · esercizi Java",
      "url": "https://www.edutecnica.it/informatica/elementix/elementix.htm"
    },
    {
      "label": "Documentazione Java · Scanner",
      "url": "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/Scanner.html"
    },
    {
      "label": "Documentazione Java · Math",
      "url": "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/Math.html"
    },
    {
      "label": "Documentazione Java · Random",
      "url": "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/Random.html"
    }
  ],
  "lessons": [
    {
      "id": "somma-intervallo",
      "level": "BASE 01",
      "title": "Somma tra due estremi",
      "summary": "Usa un ciclo per sommare tutti gli interi compresi tra due valori, estremi inclusi.",
      "goals": [
        "Leggere e confrontare due estremi",
        "Accumularne i valori con un ciclo for",
        "Confrontare il risultato con una formula"
      ],
      "explanation": "Leggi due interi e, se sono nell'ordine sbagliato, scambiali. Il ciclo aggiunge alla somma ogni valore da a fino a b. Poi confronta la somma iterativa con la formula della somma di una progressione aritmetica: (a + b) × numero di termini / 2.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class SommaIntervallo {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Primo estremo: \");\n        int a = input.nextInt();\n        System.out.print(\"Secondo estremo: \");\n        int b = input.nextInt();\n        input.close();\n\n        if (a > b) {\n            int temp = a;\n            a = b;\n            b = temp;\n        }\n\n        long somma = 0;\n        for (long n = a; n <= b; n++) {\n            somma += n;\n        }\n\n        long termini = (long) b - a + 1;\n        long formula = ((long) a + b) * termini / 2;\n        System.out.println(\"Somma con il ciclo: \" + somma);\n        System.out.println(\"Somma con la formula: \" + formula);\n    }\n}",
      "output": "Primo estremo: 1\nSecondo estremo: 5\nSomma con il ciclo: 15\nSomma con la formula: 15",
      "noteTitle": "Attenzione agli estremi",
      "note": "Gli estremi sono inclusi: da 1 a 5 ci sono cinque valori. Il tipo long per la somma riduce il rischio di superare il limite di int nei calcoli usuali dell'esercizio.",
      "quiz": {
        "question": "Quanti valori somma il programma nell'intervallo da 3 a 6 inclusi?",
        "options": [
          "3 valori",
          "4 valori",
          "6 valori"
        ],
        "answer": 1,
        "explanation": "I valori sono 3, 4, 5 e 6: in totale quattro."
      }
    },
    {
      "id": "conteggio-cifre",
      "level": "BASE 02",
      "title": "Contare le cifre di un intero",
      "summary": "Ripeti la divisione per 10 per contare quante cifre compongono un numero.",
      "goals": [
        "Usare un ciclo do-while",
        "Gestire il numero zero",
        "Non contare il segno meno come cifra"
      ],
      "explanation": "Ogni divisione intera per 10 elimina l'ultima cifra del numero. Conta quante divisioni servono prima di arrivare a zero. Il ciclo do-while è adatto perché deve eseguire il conteggio almeno una volta: così anche il numero 0 ha una cifra.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class ConteggioCifre {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Inserisci un intero: \");\n        int numero = input.nextInt();\n        input.close();\n\n        long n = Math.abs((long) numero);\n        int cifre = 0;\n        do {\n            cifre++;\n            n /= 10;\n        } while (n > 0);\n\n        System.out.println(\"Numero di cifre: \" + cifre);\n    }\n}",
      "output": "Inserisci un intero: -508\nNumero di cifre: 3",
      "noteTitle": "Perché convertire in long?",
      "note": "Math.abs((long) numero) gestisce anche il minimo valore di int, per il quale Math.abs(int) non può restituire il corrispondente valore positivo. Il segno non fa parte delle cifre.",
      "quiz": {
        "question": "Quante cifre ha il numero 0?",
        "options": [
          "Zero",
          "Una",
          "Dipende dal tipo di dato"
        ],
        "answer": 1,
        "explanation": "La rappresentazione decimale di zero contiene una cifra. Il do-while garantisce un primo passaggio."
      }
    },
    {
      "id": "divisori",
      "level": "BASE 03",
      "title": "Trovare e contare i divisori",
      "summary": "Verifica quali numeri dividono esattamente un intero e conta i divisori positivi.",
      "goals": [
        "Usare l'operatore resto %",
        "Distinguere una divisione esatta",
        "Evitare il caso speciale di zero"
      ],
      "explanation": "Un intero d è un divisore di n quando n % d == 0. Il programma cerca divisori positivi del valore assoluto del numero. Per ridurre i controlli, prova d solo finché d non supera n / d: se trovi un divisore, trovi anche la coppia n / d.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class Divisori {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Inserisci un intero diverso da zero: \");\n        int numero = input.nextInt();\n        input.close();\n\n        if (numero == 0) {\n            System.out.println(\"Zero ha infiniti divisori: scegli un altro numero.\");\n            return;\n        }\n\n        long n = Math.abs((long) numero);\n        int conteggio = 0;\n        System.out.print(\"Divisori positivi: \");\n        for (long d = 1; d <= n / d; d++) {\n            if (n % d == 0) {\n                long coppia = n / d;\n                System.out.print(d + \" \");\n                conteggio++;\n                if (coppia != d) {\n                    System.out.print(coppia + \" \");\n                    conteggio++;\n                }\n            }\n        }\n        System.out.println();\n        System.out.println(\"Numero di divisori: \" + conteggio);\n    }\n}",
      "output": "Inserisci un intero diverso da zero: 12\nDivisori positivi: 1 12 2 6 3 4\nNumero di divisori: 6",
      "noteTitle": "Ordine dei risultati",
      "note": "I divisori sono mostrati a coppie, perciò non sono necessariamente in ordine crescente. Lo zero è escluso perché ogni intero non nullo lo divide: non ha quindi un numero finito di divisori nel senso usato da questo esercizio.",
      "quiz": {
        "question": "Quale condizione indica che d divide n esattamente?",
        "options": [
          "n / d == 0",
          "n % d == 0",
          "n * d == 0"
        ],
        "answer": 1,
        "explanation": "Il resto della divisione deve essere zero: n % d == 0."
      }
    },
    {
      "id": "numeri-primi",
      "level": "INTERMEDIO 01",
      "title": "Stampare i numeri primi di un intervallo",
      "summary": "Combina un ciclo esterno con un controllo di divisibilità per cercare i numeri primi.",
      "goals": [
        "Trattare correttamente 0 e 1",
        "Cercare divisori possibili",
        "Interrompere il controllo quando si trova un divisore"
      ],
      "explanation": "Un numero primo è un intero maggiore di 1 che ha come divisori positivi soltanto 1 e se stesso. Per controllare n non serve provare tutti i numeri fino a n: basta arrivare a d quando d non supera n / d, cioè fino alla radice quadrata senza calcolarla direttamente.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class NumeriPrimi {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Estremo iniziale: \");\n        int a = input.nextInt();\n        System.out.print(\"Estremo finale: \");\n        int b = input.nextInt();\n        input.close();\n\n        if (a > b) {\n            int temp = a;\n            a = b;\n            b = temp;\n        }\n\n        System.out.print(\"Numeri primi: \");\n        for (long n = a; n <= b; n++) {\n            if (isPrimo(n)) {\n                System.out.print(n + \" \");\n            }\n        }\n        System.out.println();\n    }\n\n    static boolean isPrimo(long n) {\n        if (n < 2) return false;\n        for (long d = 2; d <= n / d; d++) {\n            if (n % d == 0) return false;\n        }\n        return true;\n    }\n}",
      "output": "Estremo iniziale: 10\nEstremo finale: 20\nNumeri primi: 11 13 17 19",
      "noteTitle": "Il numero 1 non è primo",
      "note": "I valori minori di 2 vengono esclusi subito. Il controllo d <= n / d evita di usare d * d, che potrebbe superare il limite del tipo numerico in alcuni contesti.",
      "quiz": {
        "question": "Quale tra questi numeri è primo?",
        "options": [
          "1",
          "21",
          "19"
        ],
        "answer": 2,
        "explanation": "19 è divisibile soltanto per 1 e per 19. Il numero 1 non è primo e 21 è divisibile per 3 e 7."
      }
    },
    {
      "id": "raddoppio-capitale",
      "level": "INTERMEDIO 02",
      "title": "Dopo quanti anni raddoppia il capitale?",
      "summary": "Simula la crescita composta applicando ogni anno un tasso positivo.",
      "goals": [
        "Convertire una percentuale in fattore di crescita",
        "Aggiornare il montante anno dopo anno",
        "Fermarsi appena il capitale raddoppia"
      ],
      "explanation": "Con interesse composto il capitale cresce ogni anno secondo M = C × (1 + i)^n, dove i è il tasso espresso come numero decimale. Per sapere quando si raddoppia, non è necessario conoscere C: segui il fattore di crescita partendo da 1 fino a raggiungere almeno 2.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Locale;\nimport java.util.Scanner;\n\npublic class RaddoppioCapitale {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Tasso annuo positivo (in %): \");\n        double tasso = input.nextDouble();\n        input.close();\n\n        if (!Double.isFinite(tasso) || tasso <= 0) {\n            System.out.println(\"Il tasso deve essere un numero positivo e finito.\");\n            return;\n        }\n\n        double fattoreAnnuale = 1.0 + tasso / 100.0;\n        if (!Double.isFinite(fattoreAnnuale) || fattoreAnnuale <= 1.0) {\n            System.out.println(\"Il tasso è fuori dall'intervallo numerico utile.\");\n            return;\n        }\n        double fattoreTotale = 1.0;\n        int anni = 0;\n        while (fattoreTotale < 2.0) {\n            fattoreTotale *= fattoreAnnuale;\n            anni++;\n        }\n\n        System.out.println(\"Anni interi per raddoppiare: \" + anni);\n        System.out.printf(Locale.ROOT, \"Fattore finale: %.4f%n\", fattoreTotale);\n    }\n}",
      "output": "Tasso annuo positivo (in %): 3\nAnni interi per raddoppiare: 24\nFattore finale: 2.0328",
      "noteTitle": "La percentuale va divisa per 100",
      "note": "Un tasso del 3% diventa 0,03 e il fattore annuale è 1,03. Il risultato è espresso in anni interi: il ciclo si ferma al primo anno in cui il montante è almeno doppio. Il codice rifiuta valori non positivi, non finiti o così piccoli da non modificare numericamente il fattore di crescita. È una simulazione didattica, senza imposte, commissioni o variazioni del tasso.",
      "quiz": {
        "question": "Come si trasforma un tasso del 3% in numero decimale?",
        "options": [
          "3,0",
          "0,3",
          "0,03"
        ],
        "answer": 2,
        "explanation": "Per passare da percentuale a numero decimale si divide per 100: 3 / 100 = 0,03."
      }
    },
    {
      "id": "intersezione-intervalli",
      "level": "INTERMEDIO 03",
      "title": "Verificare l'intersezione di due intervalli",
      "summary": "Stabilisci se due intervalli chiusi hanno almeno un valore in comune.",
      "goals": [
        "Normalizzare gli estremi",
        "Usare condizioni booleane",
        "Considerare inclusi gli estremi"
      ],
      "explanation": "Prima fai in modo che a sia minore o uguale a b e c minore o uguale a d. Gli intervalli chiusi [a, b] e [c, d] si intersecano se a <= d e c <= b. Se un estremo coincide con l'altro, hanno comunque un punto in comune.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class IntersezioneIntervalli {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Primo estremo a: \");\n        double a = input.nextDouble();\n        System.out.print(\"Secondo estremo b: \");\n        double b = input.nextDouble();\n        System.out.print(\"Primo estremo c: \");\n        double c = input.nextDouble();\n        System.out.print(\"Secondo estremo d: \");\n        double d = input.nextDouble();\n        input.close();\n\n        if (a > b) { double temp = a; a = b; b = temp; }\n        if (c > d) { double temp = c; c = d; d = temp; }\n\n        boolean intersecano = a <= d && c <= b;\n        if (intersecano) {\n            System.out.println(\"Gli intervalli hanno almeno un punto in comune.\");\n        } else {\n            System.out.println(\"Gli intervalli non si intersecano.\");\n        }\n    }\n}",
      "output": "a = 1, b = 3, c = 3, d = 5\nGli intervalli hanno almeno un punto in comune.",
      "noteTitle": "Gli intervalli sono chiusi",
      "note": "Il testo dell'esercizio considera inclusi gli estremi. Per questo [1, 3] e [3, 5] si intersecano nel punto 3. Con intervalli aperti o semiaperti le condizioni potrebbero essere diverse.",
      "quiz": {
        "question": "Gli intervalli [1, 3] e [3, 5] si intersecano?",
        "options": [
          "Sì, nel punto 3",
          "No, perché si toccano soltanto",
          "Solo se contengono interi"
        ],
        "answer": 0,
        "explanation": "Gli estremi sono inclusi: il numero 3 appartiene a entrambi gli intervalli."
      }
    },
    {
      "id": "massimo-minimo-serie",
      "level": "INTERMEDIO 04",
      "title": "Trovare massimo e minimo di una serie",
      "summary": "Leggi valori fino al segnale 0 e aggiorna minimo e massimo durante la lettura.",
      "goals": [
        "Usare un valore sentinella",
        "Inizializzare minimo e massimo dal primo dato valido",
        "Gestire una serie vuota"
      ],
      "explanation": "Il numero 0 indica la fine della serie e non viene considerato un valore da analizzare. I numeri negativi vengono rifiutati perché il testo chiede interi positivi. Il primo dato valido inizializza sia il minimo sia il massimo; i successivi li aggiornano quando necessario.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class MinimoMassimo {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        int minimo = 0;\n        int massimo = 0;\n        boolean trovato = false;\n\n        while (true) {\n            System.out.print(\"Numero positivo (0 termina): \");\n            int valore = input.nextInt();\n            if (valore == 0) break;\n            if (valore < 0) {\n                System.out.println(\"Inserisci un numero positivo, oppure 0 per terminare.\");\n                continue;\n            }\n\n            if (!trovato) {\n                minimo = valore;\n                massimo = valore;\n                trovato = true;\n            } else {\n                if (valore < minimo) minimo = valore;\n                if (valore > massimo) massimo = valore;\n            }\n        }\n        input.close();\n\n        if (trovato) {\n            System.out.println(\"Minimo: \" + minimo);\n            System.out.println(\"Massimo: \" + massimo);\n        } else {\n            System.out.println(\"Non è stato inserito nessun valore.\");\n        }\n    }\n}",
      "output": "Numero positivo: 4\nNumero positivo: 9\nNumero positivo: 2\nNumero positivo: 0\nMinimo: 2\nMassimo: 9",
      "noteTitle": "Non inizializzare a zero",
      "note": "Se i numeri validi sono positivi, iniziare minimo e massimo da 0 darebbe un risultato errato per il minimo. È più sicuro inizializzarli usando il primo dato realmente letto.",
      "quiz": {
        "question": "Perché serve la variabile trovato?",
        "options": [
          "Per sapere se è stato letto almeno un numero valido",
          "Per aumentare il valore massimo",
          "Per contare quante volte compare zero"
        ],
        "answer": 0,
        "explanation": "Permette di distinguere una serie vuota da una serie con almeno un dato e di inizializzare correttamente minimo e massimo."
      }
    },
    {
      "id": "triangolo",
      "level": "INTERMEDIO 05",
      "title": "Verificare se tre lati formano un triangolo",
      "summary": "Controlla che i lati siano positivi e rispettino la disuguaglianza triangolare.",
      "goals": [
        "Validare i dati in ingresso",
        "Applicare la disuguaglianza triangolare",
        "Usare condizioni logiche composte"
      ],
      "explanation": "Tre lunghezze formano un triangolo non degenere se sono tutte positive e ciascuna è minore della somma delle altre due. Non basta che i numeri siano positivi: per esempio, 2, 3 e 8 non possono essere i lati di un triangolo.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class VerificaTriangolo {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Lato a: \");\n        double a = input.nextDouble();\n        System.out.print(\"Lato b: \");\n        double b = input.nextDouble();\n        System.out.print(\"Lato c: \");\n        double c = input.nextDouble();\n        input.close();\n\n        boolean valido = a > 0 && b > 0 && c > 0\n                && a < b + c\n                && b < a + c\n                && c < a + b;\n\n        if (valido) {\n            System.out.println(\"Il triangolo esiste.\");\n        } else {\n            System.out.println(\"Questi lati non formano un triangolo.\");\n        }\n    }\n}",
      "output": "Lato a: 3\nLato b: 4\nLato c: 5\nIl triangolo esiste.",
      "noteTitle": "La disuguaglianza è stretta",
      "note": "Se un lato fosse uguale alla somma degli altri due, le tre lunghezze sarebbero allineate e non formerebbero un triangolo vero e proprio. Per questo si usa < e non <=.",
      "quiz": {
        "question": "I lati 2, 3 e 5 formano un triangolo?",
        "options": [
          "Sì, perché sono tutti positivi",
          "No, perché 5 non è minore di 2 + 3",
          "Sì, ma solo se il perimetro è pari"
        ],
        "answer": 1,
        "explanation": "Il lato più lungo dovrebbe essere minore della somma degli altri due; qui 5 è uguale a 2 + 3."
      }
    },
    {
      "id": "distanza-punti",
      "level": "INTERMEDIO 06",
      "title": "Calcolare la distanza tra due punti",
      "summary": "Applica il teorema di Pitagora alle differenze delle coordinate.",
      "goals": [
        "Leggere coordinate cartesiane",
        "Calcolare le differenze tra ascisse e ordinate",
        "Usare Math.hypot per la distanza"
      ],
      "explanation": "Tra P1(x1, y1) e P2(x2, y2), la distanza è la radice quadrata di (x2 − x1)² + (y2 − y1)². In Java, Math.hypot(dx, dy) calcola la stessa quantità in modo leggibile e con una buona gestione dei valori numerici.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class DistanzaPunti {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"x1: \");\n        double x1 = input.nextDouble();\n        System.out.print(\"y1: \");\n        double y1 = input.nextDouble();\n        System.out.print(\"x2: \");\n        double x2 = input.nextDouble();\n        System.out.print(\"y2: \");\n        double y2 = input.nextDouble();\n        input.close();\n\n        double distanza = Math.hypot(x2 - x1, y2 - y1);\n        System.out.println(\"Distanza: \" + distanza);\n    }\n}",
      "output": "x1: 1\ny1: 2\nx2: 4\ny2: 6\nDistanza: 5.0",
      "noteTitle": "Controlla le parentesi",
      "note": "La distanza è sempre non negativa. Per i punti (1, 2) e (4, 6), le differenze sono 3 e 4: la distanza è √(3² + 4²) = 5.",
      "quiz": {
        "question": "Qual è la distanza tra (0, 0) e (3, 4)?",
        "options": [
          "5",
          "7",
          "12"
        ],
        "answer": 0,
        "explanation": "La distanza è √(3² + 4²) = √25 = 5."
      }
    },
    {
      "id": "confronto-tre-numeri",
      "level": "INTERMEDIO 07",
      "title": "Classificare tre numeri interi",
      "summary": "Distingui tra tre valori uguali, tre valori diversi e un solo valore differente.",
      "goals": [
        "Confrontare ogni coppia necessaria",
        "Ordinare i casi dal più specifico al più generale",
        "Distinguere le tre possibili situazioni"
      ],
      "explanation": "Se a, b e c sono tutti uguali, il primo caso è verificato. Se non sono tutti uguali, controlla se ogni coppia è diversa: in caso affermativo sono tutti diversi. Quello che resta è il caso in cui due numeri coincidono e il terzo è diverso.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class ConfrontoTreNumeri {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Primo intero: \");\n        int a = input.nextInt();\n        System.out.print(\"Secondo intero: \");\n        int b = input.nextInt();\n        System.out.print(\"Terzo intero: \");\n        int c = input.nextInt();\n        input.close();\n\n        if (a == b && b == c) {\n            System.out.println(\"Tutti uguali\");\n        } else if (a != b && a != c && b != c) {\n            System.out.println(\"Tutti diversi\");\n        } else {\n            System.out.println(\"Uno diverso\");\n        }\n    }\n}",
      "output": "Primo intero: 4\nSecondo intero: 4\nTerzo intero: 9\nUno diverso",
      "noteTitle": "Prima i casi specifici",
      "note": "L'ultimo else rappresenta il caso rimasto: esattamente due numeri sono uguali e il terzo è diverso. Non basta controllare a != b: occorre confrontare tutte e tre le coppie per riconoscere il caso 'tutti diversi'.",
      "quiz": {
        "question": "Che cosa stampa il programma con 5, 5 e 5?",
        "options": [
          "Tutti diversi",
          "Uno diverso",
          "Tutti uguali"
        ],
        "answer": 2,
        "explanation": "Tutti e tre i valori coincidono, quindi viene eseguito il primo ramo if."
      }
    },
    {
      "id": "regine-scacchiera",
      "level": "AVANZATO 01",
      "title": "Verificare se due regine si attaccano",
      "summary": "Usa righe, colonne e diagonali per controllare le posizioni su una scacchiera 8 × 8.",
      "goals": [
        "Validare le coordinate da 1 a 8",
        "Riconoscere righe e colonne condivise",
        "Verificare l'allineamento diagonale"
      ],
      "explanation": "Nel gioco degli scacchi, una regina attacca un'altra regina se le due posizioni sono sulla stessa riga, sulla stessa colonna o sulla stessa diagonale. La diagonale si riconosce quando il valore assoluto della differenza delle ascisse è uguale al valore assoluto della differenza delle ordinate.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Scanner;\n\npublic class RegineScacchiera {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"x della prima regina (1-8): \");\n        int xa = input.nextInt();\n        System.out.print(\"y della prima regina (1-8): \");\n        int ya = input.nextInt();\n        System.out.print(\"x della seconda regina (1-8): \");\n        int xb = input.nextInt();\n        System.out.print(\"y della seconda regina (1-8): \");\n        int yb = input.nextInt();\n        input.close();\n\n        boolean coordinateValide = xa >= 1 && xa <= 8 && ya >= 1 && ya <= 8\n                && xb >= 1 && xb <= 8 && yb >= 1 && yb <= 8;\n        if (!coordinateValide) {\n            System.out.println(\"Coordinate non valide: usa valori da 1 a 8.\");\n        } else if (xa == xb && ya == yb) {\n            System.out.println(\"Le due regine non possono occupare la stessa casella.\");\n        } else if (xa == xb || ya == yb\n                || Math.abs(xa - xb) == Math.abs(ya - yb)) {\n            System.out.println(\"Le regine sono in presa.\");\n        } else {\n            System.out.println(\"Le regine non sono in presa.\");\n        }\n    }\n}",
      "output": "Prima regina: (1, 1)\nSeconda regina: (5, 5)\nLe regine sono in presa.",
      "noteTitle": "La condizione diagonale",
      "note": "Su una diagonale, lo spostamento orizzontale e quello verticale hanno la stessa grandezza assoluta. L’esercizio controlla se una regina può attaccare l’altra in una sola mossa, senza ostacoli intermedi, e rifiuta il caso impossibile in cui le due regine occupino la stessa casella.",
      "quiz": {
        "question": "Quale condizione identifica una stessa diagonale?",
        "options": [
          "xa + xb == ya + yb",
          "Math.abs(xa - xb) == Math.abs(ya - yb)",
          "xa == ya && xb == yb"
        ],
        "answer": 1,
        "explanation": "La distanza orizzontale e quella verticale devono essere uguali in valore assoluto."
      }
    },
    {
      "id": "simulazione-ippodromo",
      "level": "AVANZATO 02",
      "title": "Simulare una scommessa all'ippodromo",
      "summary": "Combina saldo, scelta dell'utente, numeri casuali e condizioni in un piccolo gioco da console.",
      "goals": [
        "Gestire una cassa e il costo delle puntate",
        "Generare un ordine d'arrivo casuale senza ripetizioni",
        "Calcolare vincite e terminare la sessione"
      ],
      "explanation": "Il programma parte da una cassa di 100 euro. Ogni turno costa 5 euro e si sceglie tra vincente (il cavallo deve arrivare primo) e piazzato (deve arrivare nei primi tre). La classifica viene generata mescolando i numeri da 1 a 10, così ogni cavallo compare una sola volta. Per uscire si sceglie 0.",
      "codeLabel": "Soluzione completa in Java",
      "code": "import java.util.Arrays;\nimport java.util.Random;\nimport java.util.Scanner;\n\npublic class Ippodromo {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        Random random = new Random();\n        int cassa = 100;\n\n        while (cassa >= 5) {\n            System.out.println(\"\\nCassa disponibile: \" + cassa + \" euro\");\n            System.out.print(\"1 = vincente, 2 = piazzato, 0 = esci: \");\n            int tipo = input.nextInt();\n            if (tipo == 0) break;\n            if (tipo != 1 && tipo != 2) {\n                System.out.println(\"Scelta non valida.\");\n                continue;\n            }\n\n            System.out.print(\"Scegli un cavallo (1-10): \");\n            int scelto = input.nextInt();\n            if (scelto < 1 || scelto > 10) {\n                System.out.println(\"Numero di cavallo non valido.\");\n                continue;\n            }\n\n            cassa -= 5;\n            int[] arrivo = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n            for (int i = arrivo.length - 1; i > 0; i--) {\n                int j = random.nextInt(i + 1);\n                int temp = arrivo[i];\n                arrivo[i] = arrivo[j];\n                arrivo[j] = temp;\n            }\n\n            System.out.println(\"Ordine d'arrivo (dal primo al decimo): \"\n                    + Arrays.toString(arrivo));\n            int posizione = 1;\n            for (int i = 0; i < arrivo.length; i++) {\n                if (arrivo[i] == scelto) {\n                    posizione = i + 1;\n                    break;\n                }\n            }\n\n            boolean vittoria = (tipo == 1 && posizione == 1)\n                    || (tipo == 2 && posizione <= 3);\n            if (vittoria) {\n                int premio = (tipo == 1) ? 50 : 10;\n                cassa += premio;\n                System.out.println(\"Hai vinto! Premio: \" + premio + \" euro.\");\n            } else {\n                System.out.println(\"Puntata persa.\");\n            }\n        }\n\n        System.out.println(\"Cassa finale: \" + cassa + \" euro.\");\n        input.close();\n    }\n}",
      "output": "Esempio possibile:\nCassa disponibile: 100 euro\nScelta: piazzato; cavallo: 4\nOrdine d'arrivo: [2, 4, 8, 1, 5, 10, 3, 6, 9, 7]\nHai vinto! Premio: 10 euro.",
      "noteTitle": "Regola economica esplicita",
      "note": "Questa versione sottrae prima la puntata di 5 euro e poi aggiunge il premio indicato (10 o 50 euro). È una scelta esplicita per rendere il modello non ambiguo: il saldo finale è una simulazione didattica, non una previsione né un sistema di scommesse reali. L'ordine casuale cambia a ogni gara.",
      "quiz": {
        "question": "Con una puntata 'piazzato', quando si vince?",
        "options": [
          "Solo se il cavallo arriva primo",
          "Se il cavallo arriva tra i primi tre",
          "Se il cavallo arriva ultimo"
        ],
        "answer": 1,
        "explanation": "Nella regola scelta per l'esercizio, piazzato significa che il cavallo selezionato arriva al primo, secondo o terzo posto."
      }
    }
  ]
};
