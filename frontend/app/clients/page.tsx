import axios from "axios"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

// import _clients from "./data/clients.json"

async function fetchClients() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`)
    return res.data?.clients || [];
  } catch (error) {
    return [];
  }
}

export default async function Page() {
  const clients = await fetchClients();

  return (
    <DataTable data={clients} columns={columns} />
  )
}
