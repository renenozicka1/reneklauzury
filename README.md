# Klauzury 2026 — René Nožička

Jednoduchá interaktivní webová stránka podle dodaných návrhů.

## Spuštění
Otevři `index.html` v prohlížeči. Audio se kvůli politice prohlížečů
přehraje až po prvním kliknutí na play (to je normální chování).

> Tip: nejlépe funguje při spuštění přes lokální server, např.
> `python3 -m http.server` ve složce projektu a otevřít `http://localhost:8000`.

## Struktura stránek (podle návrhu Bez_názvu-3)
- **Main** (návrh vlevo dole) — čtverec vlevo nahoře otevře stránku projektů
  (návrh vpravo dole). Pomlčky po stranách hlavního obrázku fungují jako
  přechod (swipe jako fotky na Instagramu) a překliknou na druhou main
  stránku (návrh vlevo nahoře). Plus (+) vpravo nahoře otevře přehrávač.
- **Projekty 1** (vpravo dole) — čtverec vlevo nahoře vrací zpět na main.
- **Main 2** (vlevo nahoře) — čtverec otevře projekty 2 (vpravo nahoře),
  plus (+) otevře přehrávač, pomlčky vrací zpět.
- **Projekty 2** (vpravo nahoře) — čtverec se vrací zpět.
- **Přehrávač** — přehrává `zkouska_verze3`. Play/pauza levým tlačítkem,
  klikem na lištu se převíjí.

## Interakce
- **Kurzor**: kolečko s `mix-blend-mode: difference` → vždy opačná barva
  než pozadí. Nad tlačítky se zvětší.
- **Tlačítka**: při najetí kurzorem se lehce zvětší (návrhy zůstávají
  beze změny — buttony a objekty jsou převzaté z Bez_názvu-2).

## Poznámka
Soubor **Bez_názvu-4.pdf** (návrh stránky přehrávače) se nenahrál.
Stránka přehrávače proto používá komponentu přehrávače z **Bez_názvu-2**
a pozadí ve stejném stylu jako ostatní stránky. Až mi `Bez_názvu-4`
pošleš znovu, upravím stránku přesně podle něj.

## Soubory
- `index.html`, `style.css`, `script.js`
- `assets/img/` — pozadí stránek a komponenty (z dodaných PDF)
- `assets/audio/zkouska_verze3.mp3` — převedeno z AIFF
