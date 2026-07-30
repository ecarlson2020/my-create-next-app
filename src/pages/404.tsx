import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import Seo from "@/components/common/Seo/Seo";
import { navItems } from "@/config/nav";
import { BURGUNDY, TRACKED_CAPS } from "@/theme";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="That page has moved or no longer exists."
        noindex
      />
      <Section>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 640,
            mx: "auto",
            py: { xs: 4, md: 10 },
          }}
        >
          <SectionHeading
            eyebrow="404"
            title="That page has moved."
            intro="The link you followed doesn't exist anymore. Everything else is still right here."
            centered
          />
          <Box
            sx={{
              mt: 6,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.href}
                component={Link}
                href={item.href}
                sx={{ ...TRACKED_CAPS, fontSize: "0.66rem", color: BURGUNDY }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
          <Button
            component={Link}
            href="/contact"
            sx={{ mt: 6, backgroundColor: BURGUNDY, color: "common.white" }}
          >
            Inquire
          </Button>
        </Box>
      </Section>
    </>
  );
}
