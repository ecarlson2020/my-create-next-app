import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import { company } from "@/config/company";
import ContactForm from "./ContactForm";
import { contactStyles as s } from "./Contact.styles";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Tell us about your wedding. Planned by Peter replies to every inquiry within ${company.responseWindow} — ${company.email} or ${company.phone}.`}
        image="hero-contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's begin"
        intro={`Fill out the form below and we will get back to you within ${company.responseWindow}. We are so excited to chat and begin planning your big day.`}
        image="hero-contact"
        imageAlt="A reception table set with white florals overlooking the Utah mountains"
      />

      <Section>
        <Box sx={s.layout}>
          <Box sx={s.aside}>
            <SectionHeading eyebrow="Reach us directly" title="Say hello" />
            <Box sx={s.group}>
              <Typography component="span" sx={s.label}>
                Email
              </Typography>
              <Box component="a" href={company.emailHref} sx={s.value}>
                {company.email}
              </Box>
            </Box>
            <Box sx={s.group}>
              <Typography component="span" sx={s.label}>
                Phone
              </Typography>
              <Box component="a" href={company.phoneHref} sx={s.value}>
                {company.phone}
              </Box>
            </Box>
            <Box sx={s.group}>
              <Typography component="span" sx={s.label}>
                Instagram
              </Typography>
              <Box
                component="a"
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer"
                sx={s.value}
              >
                {company.instagram}
              </Box>
            </Box>
            <Box sx={s.divider} />
            <Box sx={s.group}>
              <Typography component="span" sx={s.label}>
                Where we work
              </Typography>
              <Typography component="p" sx={s.plain}>
                {company.serviceAreas.join(" · ")}
              </Typography>
            </Box>
          </Box>

          <ContactForm />
        </Box>
      </Section>
    </>
  );
}
