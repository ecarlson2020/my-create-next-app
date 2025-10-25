import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:5003/test/list");
  }, []);

  return <div>Home Page</div>;
}
