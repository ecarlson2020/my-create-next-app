import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { awards } from "@/config/company";
import { awardsStyles as s } from "./Awards.styles";

interface AwardsProps {
  eyebrow?: string;
  /** Lightens the eyebrow and tiles the dark badge for burgundy sections. */
  onDark?: boolean;
  /** Smaller, left-aligned badges without an eyebrow — used in the footer. */
  compact?: boolean;
}

/**
 * The Knot Best of Weddings badges the client has won, newest first. These are
 * the awarding body's own artwork and are rendered unmodified — the only
 * adaptation is a cream tile behind the black 2025 badge on dark sections.
 * The year is part of each badge, so no caption is added.
 */
export default function Awards({
  eyebrow = "Recognition",
  onDark = false,
  compact = false,
}: AwardsProps) {
  return (
    <Box sx={{ ...s.root, ...(compact ? { alignItems: "flex-start" } : {}) }}>
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
              // Only the dark-artwork badge needs the tile; the pink one reads
              // fine straight onto burgundy.
              ...(onDark && award.image === "award-knot-2025"
                ? s.badgeOnDark
                : {}),
            }}
          >
            <OptimizedImage name={award.image} alt={award.alt} sizes="120px" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
