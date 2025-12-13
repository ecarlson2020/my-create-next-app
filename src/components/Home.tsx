import { API_URL } from "@shared/constants/sharedConstants";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch(`${API_URL}/test/list`);
  }, []);

  return <div>Home Page</div>;
}
