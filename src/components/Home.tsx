import { NODE_ENV } from "@shared/constants/sharedTypes";
import { useEffect } from "react";

const BACKEND_URL =
  NODE_ENV === "development"
    ? "http://localhost:5003"
    : NODE_ENV === "staging"
      ? "https://test2.evrocamedia.com:5003"
      : "https://listacart.com:5006";

export default function Home() {
  useEffect(() => {
    fetch(`${BACKEND_URL}/test/list`);
  }, []);

  return <div>Home Page</div>;
}
