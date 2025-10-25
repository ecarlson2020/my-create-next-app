import { useEffect } from "react";

// const NODE_ENV = process.env.NODE_ENV as "development" | "production" | "staging";
const NODE_ENV = 'staging'

const BACKEND_URL =
  NODE_ENV === "development"
    ? "http://localhost:5003"
    : NODE_ENV === "staging"
      ? "https://listacart.com:5003"
      : "https://listacart.com:5006";

export default function Home() {
  useEffect(() => {
    fetch(`${BACKEND_URL}/test/list`);
  }, []);

  return <div>Home Page</div>;
}
