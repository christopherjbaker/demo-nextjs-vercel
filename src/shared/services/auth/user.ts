import { createClient } from "../supabase/server"

export async function getUser() {
  const client = await createClient()
  const {
    data: { user },
  } = await client.auth.getUser()

  return user
}
