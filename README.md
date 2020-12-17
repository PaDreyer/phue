Was muss noch gemacht werden:

Scripts:
npm run prod
-> baut Vue und startet danach Php. Die kompilierten Dateien sind im backend/build/frontend Ordner. Die Index.html muss eingebunden werden und standardmäßig ausgegeben.
Des weiteren müssen alle benötigten Assets aus backend/build/frontend/ ausgeliefert werden.

npm run dev
-> php backend wird gestartet und danach VueDev Server mit Hotreload

Alles läuft auf localhost:8080 ab