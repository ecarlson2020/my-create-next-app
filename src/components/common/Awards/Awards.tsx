import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { awards } from "@/config/company";
import { awardsStyles as s } from "./Awards.styles";

interface AwardsProps {
  eyebrow?: string;
  /** Lightens the eyebrow and tiles each badge for burgundy sections. */
  onDark?: boolean;
  /** Smaller, right-aligned badges without an eyebrow — used in the footer. */
  compact?: boolean;
}

/**
 * Every award and press badge the client displays, in their own order.
 *
 * Two of the five are "featured in" press badges rather than awards, so the
 * default eyebrow says "Recognition" — calling the row awards would overstate
 * it. The artwork belongs to each awarding body and is rendered unmodified; the
 * only adaptation is a cream tile on dark sections. The year is part of every
 * badge, so no caption is added.
 */
export default function Awards({
  eyebrow = "Recognition",
  onDark = false,
  compact = false,
}: AwardsProps) {
  return (
    <Box sx={{ ...s.root, ...(compact ? { alignItems: "stretch" } : {}) }}>
      {!compact && (
        <Typography
          component="p"
          sx={{ ...s.eyebrow, ...(onDark ? s.eyebrowOnDark : {}) }}
        >
          {eyebrow}
        </Typography>
      )}
      <Box sx={{ ...s.row, ...(compact ? s.rowCompact : {}) }}>
        {awards.map((award) => (
          <Box
            key={award.image}
            sx={{
              ...s.badge,
              ...(compact ? s.badgeCompact : {}),
              ...(onDark ? s.badgeOnDark : {}),
            }}
          >
            <OptimizedImage
              name={award.image}
              alt={award.alt}
              sizes="120px"
              style={s.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
