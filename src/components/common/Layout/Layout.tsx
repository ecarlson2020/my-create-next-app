import { ReactNode } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { layoutStyles as s } from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

/**
 * App shell. Marketing pages open with a photographic hero beneath the
 * transparent navigation; article and utility pages retain the solid bar.
 */
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const hasPageHero = [
    "/",
    "/process",
    "/team",
    "/services",
    "/gallery",
    "/blog",
    "/contact",
  ].includes(router.pathname);

  return (
    <Box sx={s.shell}>
      <Box component="a" href="#main" sx={s.skipLink}>
        Skip to content
      </Box>
      <Header overHero={hasPageHero} />
      <Box
        component="main"
        id="main"
        sx={{ ...s.main, ...(hasPageHero ? {} : s.mainOffset) }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
