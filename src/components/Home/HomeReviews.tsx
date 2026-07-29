import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import { homeReviewsStyles as s } from "./HomeReviews.styles";

export default function HomeReviews() {
  return (
    <Box component="section" sx={s.root}>
      <Box sx={s.media}>
        <OptimizedImage
          name="gallery-35"
          alt="Newlyweds celebrating outside a church with their wedding party"
          cover
          sizes="100vw"
        />
      </Box>
      <Box sx={s.scrim} />
      <Container maxWidth="lg" sx={s.content}>
        <Testimonials eyebrow="Word on the aisle" />
      </Container>
    </Box>
  );
}
