/**
 * Strict UK Phone Number Validator for Actvise Accountancy & Tax Services
 * Actvise provides services strictly to UK-based clients, businesses and charities.
 * 
 * Accepted formats:
 * - International format: +44 7949 446368, +44 1234 567890, +447123456789, 0044 7949 446368
 * - Domestic UK format: 07949 446368, 01484 123456, 020 7946 0919, 0300 123 4567, 0800 123 4567
 * 
 * Rejects:
 * - Non-UK country codes (+92, +1, +91, +971, etc.)
 * - Incomplete or short inputs (e.g. 123, 123456)
 * - Invalid prefixes or lengths
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

  // Convert to domestic UK format starting with 0
  let normalized = clean;
  if (normalized.startsWith("+44")) {
    normalized = "0" + normalized.slice(3);
  } else if (normalized.startsWith("0044")) {
    normalized = "0" + normalized.slice(4);
  } else if (normalized.startsWith("44") && (normalized.length === 12 || normalized.length === 13)) {
    normalized = "0" + normalized.slice(2);
  }

  // Reject non-numeric characters
  if (!/^\d+$/.test(normalized)) {
    return {
      isValid: false,
      error: "Phone number contains invalid characters. Please enter numbers only (e.g. +44 1234 567890)."
    };
  }

  // Length checks
  if (normalized.length < 10) {
    return {
      isValid: false,
      error: "Phone number is too short or incomplete. Please enter a full UK phone number (e.g. +44 1234 567890)."
    };
  }

  if (normalized.length > 11) {
    return {
      isValid: false,
      error: "Phone number is too long. Standard UK phone numbers are 10-11 digits (e.g. +44 1234 567890)."
    };
  }

  // UK Telecoms Numbering Format (Ofcom standard):
  // 1: Geographic area codes (e.g. 01484 Huddersfield) (10 or 11 digits: ^01\d{8,9}$)
  // 2: Geographic major cities (e.g. 020 London) (11 digits: ^02\d{9}$)
  // 3: Non-geographic UK-wide (11 digits: ^03\d{9}$)
  // 7: UK Mobile numbers (07xxx xxxxxx) (11 digits: ^07\d{9}$)
  // 8: Freephone & business rates (10 or 11 digits: ^08\d{8,9}$)
  const UK_PHONE_REGEX = /^0(1\d{8,9}|2\d{9}|3\d{9}|7\d{9}|8\d{8,9})$/;

  if (!UK_PHONE_REGEX.test(normalized)) {
    return {
      isValid: false,
      error: "Invalid UK phone number. UK numbers must start with 01, 02, 03, 07, or +44 (e.g. +44 1234 567890)."
    };
  }

  // Format nicely as international UK standard
  let formatted = trimmed;
  if (!formatted.startsWith("+44") && normalized.startsWith("0")) {
    formatted = "+44 " + normalized.slice(1);
  }

  return {
    isValid: true,
    formatted
  };
}
