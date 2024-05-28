# Individuell examination: Strajk bowling

## Bakgrund

Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp.
Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Ditt uppdrag är att skriva unit tester med React testing library som sen kan köras för att testa av all funktionalitet när man gör en push till Github.

Du hittar de user stories som har implementerats nedan och som de ska skrivas tester för. Du behöver dock skriva acceptanskriterier för varje user story.

## User stories

Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.

Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

Som användare vill jag kunna navigera tillbaka till bokningsvyn efter bekräftelse.

## Betygskriterier

**Får godkänt ska du:**

- Gjort acceptanskriterier till varje user story som sedan blir testfall. (Hur många acceptanskriterier till varje story är svårt att säga utan det gäller att hitta en bra balans, diskutera gärna med mig här). Du kan skriva acceptanskriterierna i README:n för ditt Githubrepo.
- Gjort tester i React testing library för alla user stories som går grönt när man kör dessa.
- Mockat POST-anrop med Mock service worker.
- Alla tester finns representerade i acceptanskriterierna.
- Testerna triggas via en Github actions på main-branchen. Det bör alltså finnas en grön bock i ditt Github repo när du lämnar in examinationen.

**Får Väl Godkänt ska du:**

- Har gjort acceptanskriterier samt tester för felhantering.
  *  Att en bokning inte går att göras om alla fält inte är ifyllda.
  *  Att en bokning inte går att göra ifall antal skor inte matchas mot antal spelare
  *  Att en bokning inte går att föra ifall antalet spelare inte stämmer gentemot antalet banor (max 4 spelare per bana)
    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Acceptanskriterier
Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.
-Blankett med inputfält för respektive parameter där användaren kan ange bokningsönskemål

Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
-Sektion där användaren kan lägga till och ange skostorlek för respektive spelare
-Ifall antalet spelare och skor inte överensstämmer vid försök till bokning så visas ett felmeddelande

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.
-En knapp förknippad med respektive skofält som man kan klicka på för att ta bort ett par skor

Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).
-En knapp som samlar all data från inputfälten, spara dessa i ett object och gör en post request till APIn
-En bekräftelsesida där tid, antal spelare, antal banor samt bokningsnummer och pris visas
-Ifall alla fält inte är ifyllda visas ett felmeddelande
-Ifall antalet spelare överstiger maxantalet för de antal banor man försöker boka så visas ett felmeddelande

Som användare vill jag kunna navigera tillbaka till bokningsvyn efter bekräftelse.
-På bekräftelsesidan ska det finnas en knapp som leder användaren tillbaka till bokningssidan
