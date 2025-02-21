import { createClient } from "../supabase/server"

export async function getUser() {
  const clientUser = await createClient()
  const {
    data: { user },
    error: errorUser,
  } = await clientUser.auth.getUser()

  if (errorUser || !user) throw new Error()

  const clientExtra = await createClient()
  const { data: extra, error: errorExtra } = await clientExtra
    .from("Users")
    .select("*")
    .eq("user_uid", user.id)
    .limit(1)
    .single()

  if (errorExtra || !extra) throw new Error()

  return {
    ...extra,
    email: user.email,
    phone: user.phone,
    role: user.role,
    is_anonymous: user.is_anonymous,
    user,
  }
}
