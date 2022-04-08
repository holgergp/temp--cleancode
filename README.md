# Clean-Code-"Prinzipien"

## Technische Ebene

- Code auf das Lesen, nicht auf das Schreiben optimieren (also kein "It was hard to write, so it should be hard to read" ;-))
- Eine niedrige Kopplung (wenige technischen Verbindungen) anstreben, aber eine hohe Kohäsion (enge fachliche Kopplung)
- Namensgebung: Fachliche Namen finden, die die Intention widerspiegeln (warum ist X da, wofür ist das da, welchen Zweck erfüllt das, und nicht: Wie ist es technisch implementiert)
- Implizite Annahmen vermeiden, Dinge explizit machen ("Explicit is better than implicit" (aus dem Zen of Python))
- Kommentare: Eher fachlich als technisch (das "warum" erklären, nicht das "was", stets nach der Intention fragen)
- "Beware of premature optimization": Code erst dann optimieren, wenn a) ein Performance-Problem vorliegt, und b) nachgewiesen ist, dass besagter Code die Ursache dafür ist
- Pfadfinderregel ("hinterlasse Code in einem besseren Zustand als Du ihn vorgefunden hast")
- Refactoring: Regelmäßig aufräumen und Code verbessern, ohne dessen Semantik zu verändern
- Tests: Die sind die Grundlage dafür, überhaupt Refactoring betreiben und generell umbauen zu können
- Code-Coverage: Verwenden, um Blind-Spots zu finden, aber nicht als Metrik um der Metrik willen
- Codingrichtlinien: Für Konsistenz sorgen, mentales Mapping vermeiden
- Statische Codeanalyse: Bestimmte Sprachkonstrukte fördern / verbieten
- Pair-Programming: Falls das nicht geht, dann sollte wenigstens ein Review stattfinden
- Einfachheit: KISS-Prinzip, einfache Sprachkonstrukte, …
- CI/CD-Pipeline: Automatisierte Qualitätskontrolle mit Tests, Codeanalyse, Lizenzprüfung, …

## Persönliche Ebene

- Sich hinterfragen, reflektieren, sich selbst nicht so wichtig nehmen, …
- Disziplin, Sorgfalt, Liebe zum Detail, Empathie, Motivation, Hilfsbereitschaft
- Stetiges Lernen, stetiges (sich) weiterentwickeln
- Wissen proaktiv weitergeben, sachliche Kritik äußeren / zulassen
- Meetups, Konferenzen, Blogpost, Artikel, …
- Sich die Zeit nehmen, das alles umsetzen / anderen die Zeit zugestehen
