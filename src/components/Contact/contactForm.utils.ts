export interface InquiryValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  weddingDate: string;
  guestCount: string;
  budget: string;
  venue: string;
  message: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export const emptyInquiry: InquiryValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  weddingDate: "",
  guestCount: "",
  budget: "",
  venue: "",
  message: "",
};

// Deliberately permissive: one @, a dot in the domain, no spaces. Anything
// stricter rejects valid addresses, and the real check is the reply landing.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Accepts the shapes people actually type: 8015803488, 801-580-3488,
// (801) 580-3488, +1 801 580 3488.
const PHONE_RE = /^\+?[\d\s().-]{10,20}$/;

export function validateInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!values.firstName.trim())
    errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email so we can reply.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "That doesn't look like a valid email address.";
  }

  // Phone is optional, but if given it should be usable.
  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.guestCount.trim()) {
    const n = Number(values.guestCount.replace(/[^\d]/g, ""));
    if (!n || n < 1) errors.guestCount = "Please enter a number of guests.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about your day.";
  }

  return errors;
}
