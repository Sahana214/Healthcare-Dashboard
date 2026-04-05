const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

const username = "coalition";
const password = "skills-test";
const token = btoa(`${username}:${password}`);

export async function fetchPatients() {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });

  const data = await res.json();
  return data;
}