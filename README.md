# Wolkennest 🍼☁️

Eine elegante, mobiloptimierte Website für den Verkauf von Babyprodukten.

## Farbpalette

Die Website nutzt sanfte Pastellfarben, die perfekt zum Thema Baby passen:

- **Peach** (#FFD6C2) - Warmes, sanftes Orange
- **Rose** (#FAD4D4) - Zartes Rosa
- **Cream** (#FFFAF5) - Warmes Cremeweiß
- **Sage** (#D4E5D2) - Dezentes Grün
- **Lavender** (#E5D4E8) - Sanftes Lila

## Features

✅ **Vollständig responsiv** - Optimiert für Desktop, Tablet und Mobile  
✅ **Sanfte Farbverläufe** - Angenehme, nicht überladene Optik  
✅ **Smooth Animations** - Flüssige Übergänge und Hover-Effekte  
✅ **Mobile Navigation** - Hamburger-Menü mit sanfter Animation  
✅ **Warenkorb-Funktion** - Interaktive Buttons mit Feedback  
✅ **Newsletter-Anmeldung** - Formular mit visuellem Feedback  

## Dateistruktur

```
wolkenlest-website/
├── index.html      # Hauptseite mit allen Sections
├── styles.css      # Komplettes Styling (Mobile-First)
├── script.js       # Interaktive Funktionen
└── README.md       # Diese Datei
```

## Öffnen der Website

Einfach die `index.html` in einem Browser öffnen oder auf einen Webserver hochladen.

## Anpassung

### Bilder einfügen
Die Platzhalter (Emojis) können durch echte Bilder ersetzt werden:

1. Bilder in einen `images/`-Ordner legen
2. In `index.html` die `div`-Elemente mit Klasse `*-placeholder` durch `<img>`-Tags ersetzen:

```html
<!-- Vorher -->
<div class="product-placeholder">🧸</div>

<!-- Nachher -->
<img src="images/produkt-name.jpg" alt="Produkt Name">
```

### Farben anpassen
Die Farben können in `styles.css` unter `:root` geändert werden.

### Produkte hinzufügen
Neue Produkte können im `products-grid`-Bereich in `index.html` kopiert werden.

## Technologien

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Nunito + Playfair Display)

---

Erstellt mit 💝 für Wolkenlest
