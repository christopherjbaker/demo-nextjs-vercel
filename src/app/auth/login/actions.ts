"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "#shared/services/supabase/server"

export async function login(formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  }

  if (typeof data.email !== "string" || typeof data.password !== "string") {
    throw new Error("Invalid form data.")
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })

  if (error) {
    return redirect("/error")
  }

  revalidatePath("/", "layout")
  return redirect("/")
}

export async function signup(formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  }

  if (
    typeof data.email !== "string" ||
    typeof data.password !== "string" ||
    typeof data.name !== "string"
  ) {
    throw new Error("Invalid form data.")
  }

  const clientUser = await createClient()
  const {
    data: { user },
    error: errorUser,
  } = await clientUser.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (errorUser || !user) {
    return redirect(`/error?error=${errorUser?.message ?? ""}`)
  }

  const clientExtra = await createClient()
  const { error: errorExtra } = await clientExtra.from("Users").insert({
    user_uid: user.id,
    name: data.name,
  })

  if (errorExtra) {
    return redirect(`/error?error=${errorExtra.message}`)
  }

  revalidatePath("/", "layout")
  return redirect("/")
}
