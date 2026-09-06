# Dosresan – Version 0.1

Öppna `index.html` i en webbläsare. Ingen installation behövs. Alla filer måste ligga i samma mapp.

Tio fiktiva beräkningsövningar visas direkt. Skriv svaret och tryck Enter eller Kontrollera svar. Vid rätt svar får du 100 XP. Nästa uppgift visas automatiskt efter 1,1 sekunder. Vid fel svar tar figuren ett steg tillbaka (till rummets vänstra gräns som längst) och en ny uppgift på samma nivå visas efter 2,2 sekunder. Avklarade nivåer och XP behålls. Vid varje ny spelomgång väljs en slumpad variant per nivå, och varje fel svar ger en annan variant på samma nivå. Ledtråd finns. Komma och punkt fungerar som decimaltecken.

Efter tio rätt öppnas dörren och en resultatskärm visas. Nästa avdelning är en visuell upplåsning; fler spelbara banor ingår inte i version 0.1. Spela igen startar om. Framstegen finns endast under pågående spel och återställs vid omladdning.

## Publicera på den befintliga GitHub Pages-sidan

Lägg mappen `dosresan` i webbplatsens publicerade katalog och länka till `dosresan/index.html`. Inga externa bibliotek, tjänster eller internetanslutning krävs för själva spelet.

## Ändra uppgifterna

Alla uppgifter, facit, enheter, ledtrådar och förklaringar finns i `questions.js`. `game.js` innehåller spellogiken och `style.css` utseendet. Gränssnittet i denna version är anpassat för tio uppgifter.

Uppgifterna är konstruerade för matematisk träning med fiktiva läkemedel. De beskriver inte klinisk administrering eller behandlingsrekommendationer. Lärare bör granska innehållet före användning i undervisning.

