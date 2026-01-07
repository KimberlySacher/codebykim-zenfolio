# 🎨 Globale Farbkonfiguration

## Wie ändere ich die Farben?

Öffne die Datei: **`src/index.css`**

Am Anfang der Datei findest du diesen Abschnitt:

```css
/* ============================================
   FARBEN DEFINIEREN (Hex-Werte)
   ============================================ */
:root {
  /* Hauptfarben */
  --color-light-hex: #EBEBEB;        /* Light gray background */
  --color-dark-hex: #1a1a1a;         /* Dark gray/black text */
}
```

## Einfach die Hex-Farben ändern!

**Beispiel:** Um die Hintergrundfarbe zu ändern:

```css
--color-light-hex: #EBEBEB;  /* Alte Farbe */
--color-light-hex: #F0F0F0;  /* Neue Farbe - einfach hier ändern! */
```

Die HSL-Konvertierung wird automatisch berechnet und in der gesamten Website verwendet.

## Verfügbare Farben

- **`--color-light-hex`**: Helle Hintergrundfarbe (Light Mode Background)
- **`--color-dark-hex`**: Dunkle Textfarbe (Light Mode Text)

## Wichtige Hinweise

- Die Website startet standardmäßig im **Light Mode**
- Im **Light Mode**: Heller Hintergrund (`#EBEBEB`) mit dunklem Text (`#1a1a1a`)
- Im **Dark Mode**: Dunkler Hintergrund mit hellem Text
- Alle Farben werden automatisch in HSL konvertiert
- Änderungen werden sofort in der gesamten Website übernommen
