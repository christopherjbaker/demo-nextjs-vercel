import { Typography } from "@mui/material"
import { redirect } from "next/navigation"

import Page from "#design/Page"
import { createClient } from "#shared/services/supabase/server"

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  return (
    <Page title="Hello">
      <Typography>Hello {data.user.email}</Typography>
    </Page>
  )
}
