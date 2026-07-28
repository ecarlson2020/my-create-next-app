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
 * App shell. The home page is the only route whose hero runs under a
 * transparent header, so the offset and the header treatment are both keyed off
 * it here rather than threaded through every page as a prop.
 */
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <Box sx={s.shell}>
      <Box component="a" href="#main" sx={s.skipLink}>
        Skip to content
      </Box>
      <Header overHero={isHome} />
      <Box
        component="main"
        id="main"
        sx={{ ...s.main, ...(isHome ? {} : s.mainOffset) }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
