/**
 * KEY_GEN - Secure Password Generator
 * Standalone module for generating cryptographically secure passwords
 */

/**
 * Generates a secure random password based on specified options
 * @param {Object} options - Configuration options for password generation
 * @param {number} options.length - Length of the password (default: 12)
 * @param {boolean} options.includeUppercase - Include uppercase letters A-Z (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters a-z (default: true)
 * @param {boolean} options.includeNumbers - Include numbers 0-9 (default: true)
 * @param {boolean} options.includeSymbols - Include special symbols (default: true)
 * @returns {string} Generated password
 * @throws {Error} If no character sets are selected
 */
export function generatePassword(options = {}) {
  const {
    length = 12,
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true,
  } = options



  // Character sets
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  // Build character pool based on options
  let chars = ""
  if (includeLowercase) chars += lowercase
  if (includeUppercase) chars += uppercase
  if (includeNumbers) chars += numbers
  if (includeSymbols) chars += symbols

  // Validate that at least one character set is selected
  if (chars === "") {
    throw new Error("At least one character set must be selected")
  }

  // Generate password
  let password = ""
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    password += chars.charAt(randomIndex)
  }

  return password
}

/**
 * Generates a password with default settings (all character types, length 12)
 * @returns {string} Generated password
 */
export function generateDefaultPassword() {
  return generatePassword()
}

/**
 * Generates a simple password (only letters and numbers, no symbols)
 * @param {number} length - Length of the password (default: 12)
 * @returns {string} Generated password
 */
export function generateSimplePassword(length = 12) {
  return generatePassword({
    length,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
  })
}

/**
 * Generates a PIN code (only numbers)
 * @param {number} length - Length of the PIN (default: 6)
 * @returns {string} Generated PIN
 */
export function generatePIN(length = 6) {
  return generatePassword({
    length,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: true,
    includeSymbols: false,
  })
}


/**
 * Generates a highly secure password with all character types
 * @param {number} length - Length of the password (default: 24)
 * @returns {string} Generated password
 */
export function generateSecurePassword(length = 24) {
  return generatePassword({
    length,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  })
}


