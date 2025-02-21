import { Typography } from "@mui/material"
import { redirect } from "next/navigation"

import Page from "#design/Page"
import { getDemos } from "#shared/services/data/demo"
import { getUser } from "#shared/services/auth/user"

export default async function PrivatePage() {
  const user = await getUser()
  if (!user) {
    return redirect("/auth/login")
  }

  const demos = await getDemos()

  return (
    <Page title="Hello">
      <Typography>Hello {user.email}</Typography>
      {demos.map(({ id, label }) => (
        <Typography key={id}>{label}</Typography>
      ))}
    </Page>
  )
}
