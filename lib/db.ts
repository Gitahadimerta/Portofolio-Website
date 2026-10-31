import { getSupabaseClient } from "@/lib/supabase"

export interface ChatMessageRecord {
  id: string
  session_id: string
  sender: "user" | "bot"
  text: string
  created_at: string
}

export async function saveMessage(params: {
  id: string
  sessionId: string
  sender: "user" | "bot"
  text: string
  createdAt: number
}): Promise<void> {
  const { error } = await getSupabaseClient().from("chat_messages").insert({
    id: params.id,
    session_id: params.sessionId,
    sender: params.sender,
    text: params.text,
    created_at: new Date(params.createdAt).toISOString(),
  })

  if (error) {
    throw error
  }
}

export async function getSessionMessages(
  sessionId: string
): Promise<ChatMessageRecord[]> {
  const { data, error } = await getSupabaseClient()
    .from("chat_messages")
    .select("id, session_id, sender, text, created_at")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: true })

  if (error) {
    throw error
  }

  return data
}

export async function getRecentHistory(
  sessionId: string,
  limit = 10
): Promise<{ role: "user" | "assistant"; content: string }[]> {
  const { data, error } = await getSupabaseClient()
    .from("chat_messages")
    .select("sender, text")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    throw error
  }

  return data.reverse().map((r) => ({
    role: r.sender === "user" ? ("user" as const) : ("assistant" as const),
    content: r.text,
  }))
}

export async function clearSessionMessages(sessionId: string): Promise<void> {
  const { error } = await getSupabaseClient()
    .from("chat_messages")
    .delete()
    .eq("session_id", sessionId)

  if (error) {
    throw error
  }
}
