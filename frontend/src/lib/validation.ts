/**
 * Strict UK Phone Number Validator for Actvise Accountancy & Tax Services
 * Actvise provides services strictly to UK-based clients, businesses and charities.
 * 
 * Rules:
 * - If using international format (+44 or 0044): MUST have EXACTLY 10 digits after +44 (e.g. +44 7949 446368 or +44 1234 567890).
 * - If using domestic UK format (starts with 0): MUST have EXACTLY 11 digits (e.g. 07949 446368 or 01234 567891).
 * - If even 1 single digit is missing or extra, an informative validation error is returned.
 * - Rejects any foreign country code (+92, +1, +91, +971, etc.) or random short inputs (123, 123456).
 */
export function validateUKPhoneNumber(phone?: string | null): { isValid: boolean; error?: string; formatted?: string } {
  if (!phone || typeof phone !== "string") {
    return {
      isValid: false,
      error: "Please enter your UK phone number (e.g. +44 1234 567890 or 07123 456789)."
    };
  }

  const trimmed = phone.trim();
  if (trimmed.length === 0) {
    return {
      isValid: false,
      error: "Please enter your UK phone number (e.g. +44 1234 567890 or 07123 456789)."
    };
  }

  // Reject explicit non-UK country prefixes
  if (trimmed.startsWith("+") && !trimmed.startsWith("+44")) {
    return {
      isValid: false,
      error: "Only UK phone numbers (+44) are accepted. Actvise provides services strictly to UK businesses and individuals."
    };
  }

  if (trimmed.startsWith("00") && !trimmed.startsWith("0044")) {
    return {
      isValid: false,
      error: "Only UK phone numbers (starting with +44 or 0) are accepted."
    };
  }

  // Strip spaces, dashes, brackets, dots
  const clean = trimmed.replace(/[\s\-\(\)\.]/g, "");

  // 1. International UK format (+44 or 0044) -> EXACTLY 10 digits required after country code
  if (clean.startsWith("+44") || clean.startsWith("0044")) {
    const prefixLen = clean.startsWith("+44") ? 3 : 4;
    let digitsAfterPrefix = clean.slice(prefixLen);
    
    // In case someone wrote +44 07949... remove redundant leading 0
    if (digitsAfterPrefix.startsWith("0")) {
      digitsAfterPrefix = digitsAfterPrefix.slice(1);
    }

    if (!/^\d+$/.test(digitsAfterPrefix)) {
      return {
        isValid: false,
        error: "Phone number contains invalid characters. Numbers only (e.g. +44 1234 567890)."
      };
    }

    if (digitsAfterPrefix.length < 10) {
      return {
        isValid: false,
        error: `UK phone number is incomplete (${digitsAfterPrefix.length} digits entered). After +44, exactly 10 digits are required (e.g. +44 1234 567890).`
      };
    }

    if (digitsAfterPrefix.length > 10) {
      return {
        isValid: false,
        error: `UK phone number has too many digits (${digitsAfterPrefix.length} digits entered). After +44, exactly 10 digits are required (e.g. +44 1234 567890).`
      };
    }

    const normalized = "0" + digitsAfterPrefix;
    if (!/^0[12378]\d{9}$/.test(normalized)) {
      return {
        isValid: false,
        error: "Invalid UK phone number prefix. UK numbers must start with 01, 02, 03, 07, or +44 (e.g. +44 1234 567890)."
      };
    }

    return { isValid: true, formatted: "+44 " + digitsAfterPrefix };
  }

  // 2. Domestic UK format starting with 0 -> EXACTLY 11 digits required
  if (clean.startsWith("0")) {
    if (!/^\d+$/.test(clean)) {
      return {
        isValid: false,
        error: "Phone number contains invalid characters. Numbers only (e.g. 07123 456789)."
      };
    }

    if (clean.length < 11) {
      return {
        isValid: false,
        error: `UK phone number is incomplete (${clean.length} digits entered). A complete UK number starting with 0 must have exactly 11 digits (e.g. 07123 456789).`
      };
    }

    if (clean.length > 11) {
      return {
        isValid: false,
        error: `UK phone number has too many digits (${clean.length} digits entered). A standard UK phone number starting with 0 has exactly 11 digits.`
      };
    }

    if (!/^0[12378]\d{9}$/.test(clean)) {
      return {
        isValid: false,
        error: "Invalid UK phone number prefix. UK numbers must start with 01, 02, 03, 07, or 08 (e.g. 07123 456789)."
      };
    }

    return { isValid: true, formatted: "+44 " + clean.slice(1) };
  }

  // 3. User entered raw 10 digits without prefix (e.g. 7949446368)
  if (/^[12378]\d{9}$/.test(clean)) {
    return { isValid: true, formatted: "+44 " + clean };
  }

  return {
    isValid: false,
    error: "Please enter a valid UK phone number starting with +44 (10 digits) or 0 (11 digits, e.g. +44 1234 567890 or 07123 456789)."
  };
}
