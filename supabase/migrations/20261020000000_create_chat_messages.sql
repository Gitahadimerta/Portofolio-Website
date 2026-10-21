create table if not exists public.chat_messages (
  id text primary key,
  session_id uuid not null,
  sender text not null check (sender in ('user', 'bot')),
  text text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_chat_messages_session_created
  on public.chat_messages (session_id, created_at);

alter table public.chat_messages enable row level security;

revoke all on table public.chat_messages from public, anon, authenticated;
grant all on table public.chat_messages to service_role;
