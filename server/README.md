# Descrizione del backend, dei pacchetti, e delle api

Ecco una breve descrizione dei pacchetti, di come devono funzionare e concettualmente cosa fanno.

## Utils

Partiamo dal pacchetto utils, che porta dentro di se tutte le funzioni che vengono utilizzate genericamente dagli altri pacchetti e serve esclusivamente a creare dei wrapper generici per rendere il codice piu pulito e universale.

Il file `globals.go` porta con se tutte le variabili globali:

1. `ServerPort` => la porta in cui viene hostato il server
2. `ServerUrl` => L'indirizzo in cui viene hostato il server
3. `DatabaseUrl` => L'indirizzo del database, preso da una variabile d'ambiente
4. `TwitterApi` => L'indirizzo delle api di twitter
5. `Client` => Il client http che serve i dati (praticamente quello che gestisce le richieste web in entrata)
6. `Router` => Il router che smista le richieste http

Strutture dati utilizzate in `globals_structure.go`:

1. `User` => La struttura dati dell'utente
2. `Tweet` => La struttura dati di un tweet
3. `Dict` => La struttura dati del dizionario
4. `TwitterMediaStructure`, `GeoPosition`, `PublicMetrics` => Strutture dati necessarie per creare la struttura `Tweet`

Cose importanti in `utils.go`:

1. `UnmarshalToJson` => Tranforma una richiesta in un json, strutturato come la struttura dati che gli viene passata come generics
2. `TestError` => Un wrapper del solito controllo dell'errore
3. `IsLoggedIn` => Un middleware che controlla se si e' loggati.

## Database

Il pacchetto database dipende solo da `utils`, e il suo obbiettivo e' **la gestione del database, quindi tutto cio che non e' all'interno del pacchetto database non deve in nessun modo utilizzare richieste dirette al db**

La struttura dati restituita e' `utils.User`

1. `GetUserByEmail`
2. `GetUserById`
3. `InsertUser`
4. `InitDbTest` => Server per inizializzare il database prima di eseguire un test, **va eseguito prima di tutti i test che utilizzano i db.**

## TwitterApi

Un insieme di wrapper che si occupano di interrogare Twitter, prendere il dato richiesto, e trasformarlo nella struttura dati `Tweet` che utilizziamo all'esterno e salviamo nel db. Dipende da `database` e da `utils`

Dentro `caster` ci sono le funzioni per convertire dalle strutture dati di twitter a quella interna `Tweet` che utilizziamo noi

Dentro `requestMaker` ci sono le funzioni per effettuare le richieste a twitter gestendo i parametri nel modo corretto, alla fine l'unica funzione da chiamare e' `makeTwitterRequest`.

Dentro `structureList` ci sono le strutture dati di twitter. Esportiamo `TwitterUserStructure` perche' e' l'unica che deve venire utilizzata all'interno del nostro codice, fuori da questo pacchetto.

Dentro `api` ci sono tutte le funzioni che vanno richiamate all'esterno del pacchetto, prendono tutte un parametro e restituiscono la struttura dati `Tweet` con i/il tweet che corrisponde al parametro passato, sono tutte abbastanza autoesplicative:

1. `GetUserInfoByUsername`
2. `GetUserInfoByUserId`
3. `GetTwsById`
4. `GetTwsByHashtag`
5. `GetTwsByKeyword`
7. `GetTwsByUsername`
8. `GetNextTokenReq`

## Api

Gestisce l'api web, quindi tutte le api del server web. Dipende da tutto il resto.

Dentro `init` inizializziamo il server web.

Dentro `login` ci sono tutte le api di login, registrazione, e controllo autenticazione.

Dentro `tweet` ci sono tutte le api che restituiscono tweet.
