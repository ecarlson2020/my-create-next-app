import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { galleryKeys } from "@/utils/images";
import { galleryStyles as s } from "./Gallery.styles";

const KEYS = galleryKeys();

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const go = useCallback((delta: number) => {
    setOpen((current) => {
      if (current === null) return current;
      // Wrap around at both ends so the arrows never dead-end.
      return (current + delta + KEYS.length) % KEYS.length;
    });
  }, []);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <>
      <Box sx={s.columns}>
        {KEYS.map((name, i) => (
          <Box
            key={name}
            component="button"
            type="button"
            sx={s.tile}
            onClick={() => setOpen(i)}
            aria-label={`Open photo ${i + 1} of ${KEYS.length}`}
          >
            <OptimizedImage
              name={name}
              alt={`Wedding planned and designed by Planned by Peter — photo ${i + 1}`}
              // The first two rows sit just below the hero; lazy-loading them
              // leaves the grid visibly empty the moment a visitor scrolls.
              eager={i < 8}
              sizes="(max-width: 600px) 48vw, (max-width: 900px) 46vw, 24vw"
            />
          </Box>
        ))}
      </Box>

      <Dialog
        open={open !== null}
        onClose={() => setOpen(null)}
        fullScreen
        sx={s.lightbox}
        aria-label="Gallery viewer"
      >
        <Box sx={s.lightboxInner}>
          <IconButton
            onClick={() => setOpen(null)}
            sx={{ ...s.control, ...s.close }}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={() => go(-1)}
            sx={{ ...s.control, ...s.prev }}
            aria-label="Previous photo"
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() => go(1)}
            sx={{ ...s.control, ...s.next }}
            aria-label="Next photo"
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>

          {open !== null && (
            <Box sx={s.lightboxImage}>
              <OptimizedImage
                name={KEYS[open]}
                alt={`Wedding planned and designed by Planned by Peter — photo ${open + 1}`}
                priority
                sizes="100vw"
              />
            </Box>
          )}

          {open !== null && (
            <Typography component="span" sx={s.counter}>
              {open + 1} / {KEYS.length}
            </Typography>
          )}
        </Box>
      </Dialog>
    </>
  );
}
