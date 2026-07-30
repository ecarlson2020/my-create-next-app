import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { socialLinks } from "@/config/company";
import { socialLinksStyles as s } from "./SocialLinks.styles";

interface SocialLinksProps {
  /** Show the handle beside the icon (footer, contact page). */
  showHandle?: boolean;
  onDark?: boolean;
}

// Keyed by the `label` in socialLinks so adding a profile there is the only
// change needed if the client opens a Facebook or Pinterest account.
const ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Pinterest: PinterestIcon,
};

export default function SocialLinks({
  showHandle = false,
  onDark = false,
}: SocialLinksProps) {
  return (
    <Box sx={s.row}>
      {socialLinks.map((social) => {
        const Icon = ICONS[social.label] ?? InstagramIcon;
        return (
          <Box key={social.url} sx={s.pair}>
            <Box
              component="a"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${social.label} — ${social.handle}`}
              sx={{ ...s.iconLink, ...(onDark ? s.iconLinkOnDark : {}) }}
            >
              <Icon fontSize="small" />
            </Box>
            {showHandle && (
              <Typography
                component="a"
                href={social.url}
                target="_blank"
                rel="noreferrer"
                sx={{ ...s.handle, ...(onDark ? s.handleOnDark : {}) }}
              >
                {social.handle}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
