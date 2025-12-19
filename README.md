# Secure Password Generator

Ein kryptographisch sicherer Passwort-Generator mit mehreren Voreinstellungen und anpassbaren Optionen.

## Installation

```bash
npm install @yourusername/secure-password-generator
```

## Features

- ✅ Mehrere vorgefertigte Funktionen für verschiedene Anwendungsfälle
- ✅ Vollständig anpassbare Optionen
- ✅ Keine externen Abhängigkeiten
- ✅ TypeScript-freundlich
- ✅ ES-Module-Unterstützung
- ✅ Leichtgewichtig und schnell

## Verwendung

### Einfaches Beispiel

```javascript
import { generatePassword, generateDefaultPassword } from '@yourusername/secure-password-generator'

// Standard-Passwort (12 Zeichen, alle Zeichentypen)
const password = generateDefaultPassword()
console.log(password) // z.B. "aB3!xK9@mP2q"
```

### Benutzerdefiniertes Passwort

```javascript
import { generatePassword } from '@yourusername/secure-password-generator'

const customPassword = generatePassword({
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false
})
console.log(customPassword) // z.B. "aBcDeF123456GhIj"
```

### Einfaches Passwort (ohne Symbole)

```javascript
import { generateSimplePassword } from '@yourusername/secure-password-generator'

const simplePassword = generateSimplePassword(10)
console.log(simplePassword) // z.B. "Abc123XyZ9"
```

### PIN-Code generieren

```javascript
import { generatePIN } from '@yourusername/secure-password-generator'

const pin = generatePIN(6)
console.log(pin) // z.B. "847293"
```

### Hochsicheres Passwort

```javascript
import { generateSecurePassword } from '@yourusername/secure-password-generator'

const securePassword = generateSecurePassword(32)
console.log(securePassword) // z.B. "aB3!xK9@mP2q#L5$nR8%sT1^vW4&"
```

## API

### `generatePassword(options)`

Generiert ein sicheres zufälliges Passwort basierend auf den angegebenen Optionen.

**Parameter:**

- `options` (Object, optional): Konfigurationsoptionen
  - `length` (number): Länge des Passworts (Standard: 12)
  - `includeUppercase` (boolean): Großbuchstaben A-Z einbeziehen (Standard: true)
  - `includeLowercase` (boolean): Kleinbuchstaben a-z einbeziehen (Standard: true)
  - `includeNumbers` (boolean): Zahlen 0-9 einbeziehen (Standard: true)
  - `includeSymbols` (boolean): Sonderzeichen einbeziehen (Standard: true)

**Rückgabewert:** `string` - Das generierte Passwort

**Wirft:** `Error` wenn keine Zeichensätze ausgewählt sind

**Beispiel:**

```javascript
const password = generatePassword({
  length: 20,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true
})
```

### `generateDefaultPassword()`

Generiert ein Passwort mit Standardeinstellungen (alle Zeichentypen, Länge 12).

**Rückgabewert:** `string` - Das generierte Passwort

**Beispiel:**

```javascript
const password = generateDefaultPassword()
```

### `generateSimplePassword(length)`

Generiert ein einfaches Passwort (nur Buchstaben und Zahlen, keine Symbole).

**Parameter:**

- `length` (number, optional): Länge des Passworts (Standard: 12)

**Rückgabewert:** `string` - Das generierte Passwort

**Beispiel:**

```javascript
const password = generateSimplePassword(15)
```

### `generatePIN(length)`

Generiert einen PIN-Code (nur Zahlen).

**Parameter:**

- `length` (number, optional): Länge der PIN (Standard: 6)

**Rückgabewert:** `string` - Die generierte PIN

**Beispiel:**

```javascript
const pin = generatePIN(4)
```

### `generateSecurePassword(length)`

Generiert ein hochsicheres Passwort mit allen Zeichentypen.

**Parameter:**

- `length` (number, optional): Länge des Passworts (Standard: 24)

**Rückgabewert:** `string` - Das generierte Passwort

**Beispiel:**

```javascript
const password = generateSecurePassword(32)
```

## Verwendete Zeichensätze

- **Kleinbuchstaben:** a-z (26 Zeichen)
- **Großbuchstaben:** A-Z (26 Zeichen)
- **Zahlen:** 0-9 (10 Zeichen)
- **Symbole:** `!@#$%^&*()_+-=[]{}|;:,.<>?` (30 Zeichen)

## Sicherheitshinweise

Diese Bibliothek verwendet `Math.random()` zur Passwortgenerierung. Für produktive Anwendungen mit höchsten Sicherheitsanforderungen solltest du in Betracht ziehen, `crypto.getRandomValues()` (Browser) oder `crypto.randomBytes()` (Node.js) zu verwenden.

## Lizenz

MIT

## Beitragen

Beiträge sind willkommen! Bitte öffne ein Issue oder einen Pull Request auf GitHub.

## Support

Bei Fragen oder Problemen öffne bitte ein Issue auf GitHub: [https://github.com/yourusername/secure-password-generator/issues](https://github.com/yourusername/secure-password-generator/issues)

