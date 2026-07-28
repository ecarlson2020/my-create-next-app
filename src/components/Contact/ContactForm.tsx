import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { company } from "@/config/company";
import { contactFormStyles as s } from "./ContactForm.styles";
import {
  emptyInquiry,
  InquiryErrors,
  InquiryValues,
  validateInquiry,
} from "./contactForm.utils";

const FIELDS: {
  name: keyof InquiryValues;
  label: string;
  type?: string;
  full?: boolean;
  multiline?: boolean;
  placeholder?: string;
}[] = [
  { name: "firstName", label: "First name" },
  { name: "lastName", label: "Last name" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone number" },
  {
    name: "weddingDate",
    label: "Wedding date (or season)",
    placeholder: "e.g. September 2027",
  },
  { name: "venue", label: "Venue (if you have one)" },
  { name: "guestCount", label: "Estimated guest count" },
  { name: "budget", label: "Estimated event budget" },
  {
    name: "message",
    label: "Anything else we should know?",
    full: true,
    multiline: true,
  },
];

export default function ContactForm() {
  const [values, setValues] = useState<InquiryValues>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (name: keyof InquiryValues, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    // Clear a field's error as soon as the visitor starts fixing it. Returning
    // the same object when there's nothing to clear lets React bail out of the
    // re-render instead of churning on every keystroke.
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  async function submitInquiry(_payload: InquiryValues): Promise<void> {
    // TODO(backend): POST to /api/inquiry/wedding. Frontend-only for now —
    // the validation and success state above are real, the network call is not.
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field so keyboard and screen-reader
      // users aren't left guessing what failed.
      const first = FIELDS.find((f) => found[f.name]);
      if (first) document.getElementById(first.name)?.focus();
      return;
    }
    await submitInquiry(values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box sx={s.success} role="status">
        <Typography component="span" sx={s.successEyebrow}>
          Thank you
        </Typography>
        <Typography variant="h3" component="h2" color="primary.main">
          Your inquiry is on its way.
        </Typography>
        <Typography variant="body1" sx={s.successBody}>
          We are so excited to chat and begin planning your big day. Someone
          from our team will be in touch within {company.responseWindow}. If you
          need us sooner, call {company.phone}.
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={s.form} noValidate>
      {FIELDS.map((field) => (
        <TextField
          key={field.name}
          id={field.name}
          name={field.name}
          label={field.label}
          type={field.type ?? "text"}
          placeholder={field.placeholder}
          value={values[field.name]}
          onChange={(e) => setField(field.name, e.target.value)}
          error={Boolean(errors[field.name])}
          helperText={errors[field.name] ?? " "}
          multiline={field.multiline}
          minRows={field.multiline ? 5 : undefined}
          sx={{ ...s.field, ...(field.full ? s.full : {}) }}
          fullWidth
        />
      ))}

      <Box sx={s.actions}>
        <Button type="submit" sx={s.submit}>
          Send
        </Button>
        <Typography component="span" sx={s.note}>
          We reply to every inquiry within {company.responseWindow}.
        </Typography>
      </Box>
    </Box>
  );
}
