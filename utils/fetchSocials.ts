import { Social } from "./../typings";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000" // Use local development API endpoint
    : process.env.NEXT_PUBLIC_BASE_URL; // Use production API endpoint

export const fetchSocials = async () => {
  const res = await fetch(`${API_BASE_URL}/api/getSocials`);

  if (!res.ok) {
    throw new Error(`Fetch failed with status ${res.status}`);
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
