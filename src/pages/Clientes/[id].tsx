import { useRouter } from "next/router"

export default function Clientes() {
  const { query } = useRouter()
  return <h1>cliente{JSON.stringify(query)}</h1>
}