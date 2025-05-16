import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser() {
  const user = await fetchData<User>("https://qweasdzxc/user1");
  console.log(user.name);
}
console.log(getUser);