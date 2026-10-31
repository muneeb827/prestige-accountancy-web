/**
 * Strict UK Mobile Number Validator for Actvise Accountancy & Tax Services
 * Formatted and validated strictly according to Ofcom UK telecommunications standards:
 * 
 * 1. Domestic Format (Image 1, 3, 4):
 *    - MUST begin with 07 (allocated mobile prefixes 071-075, 077-079).
 *    - MUST have EXACTLY 11 digits total (e.g. 07123 456789 or 07949 446368).
 * 
 * 2. International Format (Image 2, 4, 5):
 *    - Drop the leading zero and add country code +44 (or 0044).
 *    - MUST begin with +44 7 (or 0044 7).
 *    - MUST have EXACTLY 10 digits after +44 (e.g. +44 7123 456789 or +44 7949 446368).
 * 
 * 3. Exact digit count enforcement:
 *    - Any number with less or more digits is strictly rejected with a clear message.
 *    - Any non-UK country code (+92, +1, +91, +971, etc.) or random digits (123, 123456) is rejected.
 */
export function validateUKPhoneNumber(phone?: string | null): { isValid: boolean; error?: string; formatted?: string } {
  if (!phone || typeof phone !== "string") {
    return {
      isValid: false,
      error: "Please enter your UK mobile number (e.g. +44 7123 456789 or 07123 456789)."
    };
  }

  const trimmed = phone.trim();
  if (trimmed.length === 0) {
    return {
      isValid: false,
      error: "Please enter your UK mobile number (e.g. +44 7123 456789 or 07123 456789)."
    };
  }

  // Reject explicit non-UK country prefixes
  if (trimmed.startsWith("+") && !trimmed.startsWith("+44")) {
    return {
      isValid: false,
      error: "Only UK mobile numbers (+44 7...) are accepted. Actvise provides services strictly to UK businesses and individuals."
    };
  }

  if (trimmed.startsWith("00") && !trimmed.startsWith("0044")) {
    return {
      isValid: false,
      error: "Only UK mobile numbers (starting with +44 7 or 07) are accepted."
    };
  }

  // Strip spaces, dashes, brackets, dots
  const clean = trimmed.replace(/[\s\-\(\)\.]/g, "");

  // 1. International UK format (+44 or 0044)
  if (clean.startsWith("+44") || clean.startsWith("0044")) {
    const prefixLen = clean.startsWith("+44") ? 3 : 4;
    let digitsAfterPrefix = clean.slice(prefixLen);

    // If user mistakenly typed +44 07..., drop the redundant leading 0
    if (digitsAfterPrefix.startsWith("0")) {
      digitsAfterPrefix = digitsAfterPrefix.slice(1);
    }

    if (!/^\d+$/.test(digitsAfterPrefix)) {
      return {
        isValid: false,
        error: "Mobile number contains invalid characters. Numbers only (e.g. +44 7123 456789)."
      };
    }

    // Must start with 7
    if (!digitsAfterPrefix.startsWith("7")) {
      return {
        isValid: false,
        error: "Invalid UK mobile prefix. After +44, UK mobile numbers must begin with 7 (e.g. +44 7123 456789)."
      };
    }

    // Must have exactly 10 digits
    if (digitsAfterPrefix.length < 10) {
      return {
        isValid: false,
        error: `UK mobile number is incomplete (${digitsAfterPrefix.length} digits entered). After +44, exactly 10 digits starting with 7 are required (e.g. +44 7123 456789).`
      };
    }

    if (digitsAfterPrefix.length > 10) {
      return {
        isValid: false,
        error: `UK mobile number has too many digits (${digitsAfterPrefix.length} digits entered). After +44, exactly 10 digits are required (e.g. +44 7123 456789).`
      };
    }

    return { isValid: true, formatted: "+44 " + digitsAfterPrefix };
  }

  // 2. Domestic UK format (starts with 0)
  if (clean.startsWith("0")) {
    if (!/^\d+$/.test(clean)) {
      return {
        isValid: false,
        error: "Mobile number contains invalid characters. Numbers only (e.g. 07123 456789)."
      };
    }

    // Must start with 07
    if (!clean.startsWith("07")) {
      return {
        isValid: false,
        error: "Invalid UK mobile prefix. UK mobile numbers must begin with 07 (e.g. 07123 456789)."
      };
    }

    // Must have exactly 11 digits
    if (clean.length < 11) {
      return {
        isValid: false,
        error: `UK mobile number is incomplete (${clean.length} digits entered). A complete UK mobile number starting with 07 must have exactly 11 digits (e.g. 07123 456789).`
      };
    }

    if (clean.length > 11) {
      return {
        isValid: false,
        error: `UK mobile number has too many digits (${clean.length} digits entered). A standard UK mobile number starting with 07 has exactly 11 digits.`
      };
    }

    return { isValid: true, formatted: "+44 " + clean.slice(1) };
  }

  // 3. User entered raw 10 digits starting with 7 (e.g. 7949446368)
  if (/^7\d{9}$/.test(clean)) {
    return { isValid: true, formatted: "+44 " + clean };
  }

  return {
    isValid: false,
    error: "Please enter a valid UK mobile number starting with 07 (11 digits) or +44 7 (10 digits, e.g. +44 7123 456789 or 07123 456789)."
  };
}
