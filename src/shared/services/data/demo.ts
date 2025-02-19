import { createClient } from "../supabase/server"

export async function getDemos() {
  const client = await createClient()
  const { data } = await client.from("Demo").select("*")
  if (!data) return []

  return data
}
