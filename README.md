
## Naam van het project:
Eindopdracht - Module Frond End Frameworks - **Real Estate Care App**

## Ontwerper:
Ronald Zuidhof - [ROZsolutions.com](http://www.rozsolutions.com)
ervaringsniveau - Junior developer

## Datum:
01-05-24

## Inhoudsopgave
* [Technologieën](#technologieën:)
* [Beschrijving van de applicatie](#beschrijving-applicatie:)
* [Werking applicatie](#werking-applicatie:)
* [Test gebruikers](#test-gebruikers:)
* [Structuur applicatie](#structuur-applicatie:)
* [Openstaande punten](#openstaande-punten:)
* [Verantwoording toepassen standards](#verantwoording-toepassen-standards:)
* [Project status](#project-status:)
* [Bronverwijzingen](#bronverwijzingen:)

## Technologieën:
Project/Opdracht is gemaakt met:
* Visual Studio Code V1.88.1 (editor) (https://code.visualstudio.com/)
* Node.js V18.18.2 (https://nodejs.org/)
* Vue.js V3.2.13 (https://vuejs.org/)
* Packages VUE (**package.json** in main directory application)
* Haroopad 0.13.1 (MarkDown editor) (http://pad.haroopress.com/)
* Winzip (https://www.winzip.com/)

## Beschrijving applicatie:
Dit project is opgezet als Eindopdracht, Met betrekking tot de module Front End Frameworks. Deze opdracht is voor
afsluiting van de module. De applicatie is als SPA (single page application) ontwikkeld met het Frond End Framework
**Vue.js**.

De applicatie is ontwikkeld voor het bedrijf **RealEstateCare** dit is een dienstverlenende organisatie die voor
verschillende opdrachtgevers zoals woningcoörporaties en vastgoed ontwikkelaars woningingen onderhoud, verbetert
en inspecteert. Deze applicatie zal gebruikt gaan worden tijdens de inspecties die een inspecteur uitvoerd in een
woning met behulp van een mobiel apparaat (Smartphone/Tablet)


## Werking applicatie:

De pagina kan geopend worden via de link (https://rz-real-estate-care-app.netlify.app). als de applicatie geladen
is en er ingelogd is met de juiste gebruikers gegevens zal de gebruiker naar het boofdscherm gestuurd worden. op dit
scherm zijn er 3 delen gedefineerd:

<ins>Bovenste deel:</ins> Hierin zijn de iconen te vinden voor:
- **Uitloggen** - Uitloggen van de actieve gebruiker
- **Instellingen** - Instellingen pagina openen van de actieve gebruiker
- **Meldingen** - Meldingen beheren van de actieve gebruiker

<ins>Middelste deel:</ins> Hier is de inhoud van de applicatie te vinden, De hoofdpagina laadt hier 4 buttons:
- **Gepland** - Dit opent de pagina waarin de geplande inspecties getoond worden in een lijst. Als op 1 inspectie
geklikt wordt dan wordt het detail aanzicht geladen van deze inspectie. Hierin worden vervolgens ook de diverse
rapporten van de desbetreffende inspectie getoond. **Het is hier alleen mogelijk om de inspecties in te zien
aanpassingen maken is hier <ins>Niet</ins> mogelijk **.
- **Uitgevoerd** - Dit opent de pagina waarin de uitgevoerde inspecties getoond worden in een lijst. Als op 1 inspectie
geklikt wordt dan wordt het detail aanzicht geladen van deze inspectie. Hierin worden vervolgens ook de diverse
rapporten van de desbetreffende inspectie getoond. **Het aanpassen van de inspectie en rapporten is hier mogelijk als
een gebruiker hier voldoende rechten voor heeft (gebruikersgroep)**.
- **Documentatie** - Dit opent de pagina waarin de documenten getoond worden in een lijst die voor de inspecties gebruikt
worden.  Als deze aangeklikt worden dan het betreffende PDF document geopend (**dummy PDF document**)
- **Instellingen** - Dit opent de pagina waarin de instellingen van de actieve gebruikers aangepast kunnen worden. Zoals
 bijvoorbeeld de voor en of achternaam van de gebruiker (**gebruikersnaam en groep kan <ins>Niet</ins> aangepast worden**)

<ins>Onderste deel:</ins> Hierin zijn de iconen te vinden voor: <ins>**Dit deel is nog niet actief**</ins>
- Actieve taken
- Zoeken
- Informatie

## test gebruikers:
Hieronder is een overzicht te vinden van een aantal "Test" gebruikers:

| Gebruikersnaam | Wachtwoord | SMS code | Groep |
| -------------- | -----------| -------- | ----- |
| ronald | Ronald | 56789 | Administrator
| miranda | Miranda | 56789 | Gebruiker
| roman | Roman | 56789 | Gebruiker
| piet | Piet | 56789 | Gebruiker
| sara | Sara | 56789 | Gast

## Structuur applicatie:

Hieronder is de opbouw/stuctuur van de code van de applicatie te vinden (Directory <ins>src</ins>):
- **Assets:**
 - fonts - Font die gebruikt worden in de applicatie
 - json - json files met data voor (Documents en Users)
 - logo - Logo bestanden voor de applicatie
- **Components** - Componenten die in de applicatie gebruikt worden.
- **Composables** - Componenten die door de gehele applicatie gebruikt worden.
- **Models** - Class definities van de diverse classes van de applicatie.
- **Router** - Router die de navigatie binnen de applicatie afhandelt
- **Services** - Services voor communicatie met de backend (API) (**My-Json-Server**)
- **Store:**
 - Modules - Losse modules van de store opgedeeld voor betere onderhoudbaarheid applicatie.
 - Index.js - Algemene store gebaseerd op VUEX (FLUX)
- **Views** - Views voor het laden van de daarwerklijke HTML template voorzien van Modules (Javascript)

## Openstaande punten:
De volgende punten zijn nog niet uitgevoerd/werkend:
- <ins>Alleen Inspectie 1 (**10-02-2024 Pietstraat 12 Breda**) bevat data </ins>: Omdat de online service van My-Json-server
(https://my-json-server.typicode.com/) maar maximaal JSON bestanden van 10Kb ondersteund was het niet
mogelijk om meer inspecties van data te voorzien. **In de genoemde inspectie zijn wel alle data entries aanwezig.**
- <ins>Aanpassingen die gemaakt worden in een uitgevoerde inspecties worden niet opgeslagen</ins>: Deze wordt nu in het
VUE store object opgeslagen. Deze worden vervolgens niet naar de backend (database) geupdate omdat hier
nog geen API voor beschikbaar is. Zodra de inspectie overview (lijst) geladen wordt wordt het store object voor
insepecties overschreven door de service die deze ophaald via de API van de **My-Json-Server**.
- <ins>Lokale JSON bestanden voor **Users** en **Documents**</ins>: Er is geen API voorzien voor gebruikers en documenten
beheer daarom heb ik deze nu in lokale JSON bestanden opgeslagen zodat het wel centraal opgeslagen is. De
gebruikers wachtwoorden en groepen zijn nu niet veilig opgeslagen. Deze zullen in de toekomst in de database
op de server (backend) "Hashed" opgeslagen worden.
- <ins>SMSCode werkt nog niet</ins>: Ook hier is nog geen API voor met de backend dus wordt hier iedere keer de standaard
code **56789** gebruikt.
- <ins>Uploaden van bestanden van een mobiel device naar de server (foto's)</ins>: Aangezien er geen backend beschikbaar
is om bestanden af te handelen zijn er een aantal **"test"** bestanden (Documents en images) geplaatst in de **Public** directory

## Verantwoording toepassen standards:
Hieronder is een toelichting te vinden over de toegepaste standards voor:
- **Security:** Veiligheid mbt het invoeren en vertrouwen van data die de gebruiker invoerd is voor VUE niet nodig aangezien
de invoer door VUe zelf al "escaped" wordt. Het gehele inlog proces van gebruikers is op dit moment nog niet veilig omdat
er nog geen API beschikbaar is om dit veilig met de server (backend) af te handelen. Vue zorgt er automatische voor dat
HTML content "escaped" wordt.
- **Usability:**
 - <ins>Elementen moeten herkenbaar zijn voor de geberuiker</ins>: Er is gebruik gemaakt van standaard iconen en links, waar nodig
zijn aanvullende teksten toegevoegd om te verduidelijken wat er verwacht wordt.
 - <ins>De gebruiker moet in controle blijven</ins>: Er worden geen acties gestart zonder dat er eerst een bevesitging of actie door de
gebruiker zelf is uitgevoerd.
 - <ins>De bediening moet consequent zijn</ins>: Iconen en componenten worden door de gehele applicatie hergebruikt. Ook is de
styling voor de gehele applicatie overal gelijk.
 - <ins>Het systeem moet helpen voorkomen dat een gebruiker een fout maakt</ins>: Velden waarbij een gebruiker input moet geven
zijn voorzien van begeleidende labels en iconenen en acties zijn overal gelijk.
 - <ins>Herkennen gaat voor op herinneren</ins>: Een gebruiker kan met een minimale uitleg de applicatie gebruiken en herkennen
wat functies doen.
 - <ins>De bediening moet flexibel en eenvoudig te herinneren zijn</ins>: Het is zowel mogelijk om de applicatie vanaf een Desktop
als op een mobiel apparaat te gebruiken. Herinneren is niet nodig omdat standaard toegepast principes worden toegepast.
 - <ins>Het systeem moet niet meer informatie laten zien dan benodigd</ins>: Het is mogelijk om meer informatie te tonen door
bijvoorbeeld delen van een inspectie "uit te klappen" deze kunnen hierdoor ook weer verborgen worden.
 - <ins>Het systeem moet de gebruiker van goede feefback voorzien</ins>: De gebruiker wordt gestuurd met inputs als er maar een
aantal mogelijkheden zijn. Als er bijvoorbeeld verkeerd ingelogd wordt zal er een melding getoond worden
 - <ins>Er moet een mogelijkheid zijn om meer informatie te vinden/contact</ins>: Hiervoor is de "Informatie" knop in het onderste deel
van de applicatie voorzien. **Dit is op dit moment nog niet actief**
 - <ins>Gebruikers test voor oplevering van de applicatie</ins>: Aangezien het hier nu nog om een prototype gaat is het nog niet met een
"focus" groep getest. Er is wel getest in diverse mobiele beeldverhoudingen in een web browser.
- **Accessibility:** Er is gebruik gemaakt van de WCAG chrome extension tool om te controleren of de applicatie ook voor mensen.
met een "beperking" te gebruiken is. Hier zijn tijdens de ontwikkeling diverse punten uit gekomen die hierna dan ook aangepast
zijn. Er is nog een melding mbt de **NOSCRIPT** tag. Deze is niet opgelost omdat anders voor mensen die de applicatie willen
gebruiken zonder "Javascript" het niet duidelijk kan zijn waarom de applicatie niet functioneert.
- **guides/best practices:** aan de hand van documentatie van de VUE style guide (https://v2.vuejs.org/v2/style-guide/)
is de gehele code gecontroleerd en is de structuur/benamingen aangepast om aan de best practices te voldoen.

## Project status:
Het project heeft op dit moment de status: **compleet(ingeleverd)**.

## Bronverwijzingen:
- LOI Online - Module Front End Frameworks (https://www.loi.nl/)
- Boek - Frond-end frameworks (LOI uitgifte)
- Boek - Vue.js (Peter Kassenaar) (https://www.vanduurenmedia.nl/EAN/9789463561136/Web_Development_Library_-_Vue_js)
