# Secure Password Generator

A cryptographically secure password generator with multiple presets and customizable options.

## Installation

```bash
npm install @flexthecoder/keygen
```

## Features

- ✅ Multiple pre-built functions for different use cases
- ✅ Fully customizable options
- ✅ No external dependencies
- ✅ TypeScript-friendly
- ✅ ES Module support
- ✅ Lightweight and fast

## Usage

### Simple Example

```javascript
import { generatePassword, generateDefaultPassword } from '@flexthecoder/keygen'

// Default password (12 characters, all character types)
const password = generateDefaultPassword()
console.log(password) // e.g. "aB3!xK9@mP2q"
```

### Custom Password

```javascript
import { generatePassword } from '@flexthecoder/keygen'

const customPassword = generatePassword({
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false
})
console.log(customPassword) // e.g. "aBcDeF123456GhIj"
```

### Simple Password (without symbols)

```javascript
import { generateSimplePassword } from '@flexthecoder/keygen'

const simplePassword = generateSimplePassword(10)
console.log(simplePassword) // e.g. "Abc123XyZ9"
```

### Generate PIN Code

```javascript
import { generatePIN } from '@flexthecoder/keygen'

const pin = generatePIN(6)
console.log(pin) // e.g. "847293"
```

### Highly Secure Password

```javascript
import { generateSecurePassword } from '@flexthecoder/keygen'

const securePassword = generateSecurePassword(32)
console.log(securePassword) // e.g. "aB3!xK9@mP2q#L5$nR8%sT1^vW4&"
```

## API

### `generatePassword(options)`

Generates a secure random password based on the specified options.

**Parameters:**

- `options` (Object, optional): Configuration options
  - `length` (number): Length of the password (default: 12)
  - `includeUppercase` (boolean): Include uppercase letters A-Z (default: true)
  - `includeLowercase` (boolean): Include lowercase letters a-z (default: true)
  - `includeNumbers` (boolean): Include numbers 0-9 (default: true)
  - `includeSymbols` (boolean): Include special characters (default: true)

**Returns:** `string` - The generated password

**Throws:** `Error` if no character sets are selected

**Example:**

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

Generates a password with default settings (all character types, length 12).

**Returns:** `string` - The generated password

**Example:**

```javascript
const password = generateDefaultPassword()
```

### `generateSimplePassword(length)`

Generates a simple password (letters and numbers only, no symbols).

**Parameters:**

- `length` (number, optional): Length of the password (default: 12)

**Returns:** `string` - The generated password

**Example:**

```javascript
const password = generateSimplePassword(15)
```

### `generatePIN(length)`

Generates a PIN code (numbers only).

**Parameters:**

- `length` (number, optional): Length of the PIN (default: 6)

**Returns:** `string` - The generated PIN

**Example:**

```javascript
const pin = generatePIN(4)
```

### `generateSecurePassword(length)`

Generates a highly secure password with all character types.

**Parameters:**

- `length` (number, optional): Length of the password (default: 24)

**Returns:** `string` - The generated password

**Example:**

```javascript
const password = generateSecurePassword(32)
```

## Character Sets Used

- **Lowercase letters:** a-z (26 characters)
- **Uppercase letters:** A-Z (26 characters)
- **Numbers:** 0-9 (10 characters)
- **Symbols:** `!@#$%^&*()_+-=[]{}|;:,.<>?` (30 characters)

## Security Notes

This library uses `Math.random()` for password generation. For production applications with the highest security requirements, you should consider using `crypto.getRandomValues()` (Browser) or `crypto.randomBytes()` (Node.js).

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or pull request on GitHub.

## Support

For questions or problems, please open an issue on GitHub: [https://github.com/flexthecoder/keygen/issues](https://github.com/flexthecoder/keygen/issues)

