# Portofolio Gitahadi

A personal portfolio website for Ketut Gitahadi Merta, built with Next.js and
TypeScript to present his profile and experience.

## 🚀 Features

- **Modern UI/UX**: Sleek design with premium aesthetics, carefully curated typography, and smooth micro-interactions.
- **Interactive Animations**: Powered by Framer Motion for scroll reveals, hover effects, and fluid modal transitions.
- **Profile and Experience**: Personal profile and experience sections.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing (includes a responsive infinite-scroll slider for mobile).
- **Chat history**: Stored in Supabase using a server-only service role key.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)

## 💻 Getting Started

First, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/RyHarJr/portofoliov2.git

# Navigate to the project directory
cd portofoliov2

# Install dependencies
npm install
# or yarn install / pnpm install
```

The AI chat uses Google's Gemini API through its OpenAI-compatible endpoint.
Create an API key in [Google AI Studio](https://aistudio.google.com/app/apikey),
then add it to `.env.local` in the project root (this file is ignored by Git):

```env
GEMINI_API_KEY=your-gemini-api-key
```

The chat uses Google's `gemini-flash-lite-latest` model. Restart the development
server after setting the API key. Set `NEXT_PUBLIC_BASE_URL` to the deployed
site URL before production deployment.

The contact form sends messages through Gmail SMTP. Add the sender's Gmail
address, a Google App Password (not the normal account password), and the
recipient address to `.env.local`:

```env
EMAIL_USER=your-sender@gmail.com
EMAIL_PASS=your-16-character-google-app-password
CONTACT_EMAIL=ketutgita04@gmail.com
```

Create an App Password in your Google Account after enabling 2-Step
Verification. Keep it private and restart the development server after updating
`.env.local`. The form reports a configuration error until these values are set.

### Supabase setup

1. Create a project in [Supabase](https://supabase.com/).
2. Open the project's **SQL Editor** and run
   [`supabase/migrations/20261020000000_create_chat_messages.sql`](./supabase/migrations/20261020000000_create_chat_messages.sql).
3. Copy `.env.example` to `.env.local`, then set `SUPABASE_URL` and
   `SUPABASE_SERVICE_ROLE_KEY` using the project's API settings. The service
   role key is secret: do not prefix it with `NEXT_PUBLIC_` or expose it in
   client-side code.
4. Restart the development server.

The chat API uses the service role only on the server; row-level security is
enabled and direct access for `anon` and `authenticated` roles is revoked.
Existing SQLite chat history is not copied automatically.

### Deploy to Vercel

1. Push the project to a private or public GitHub repository, then import that
   repository in Vercel. Vercel detects Next.js automatically; use `npm run build`
   as the build command and leave the output directory at its default.
2. In the Vercel project settings, add the environment variables listed in
   `.env.example`. Add API keys, the Supabase service role key, and the Gmail App
   Password as encrypted Vercel environment variables for Production (and Preview
   only if those deployments need the integrations). Set
   `NEXT_PUBLIC_BASE_URL` to the public production URL.
3. Deploy and check the home page, AI chat, and contact form. Redeploy after
   changing environment variables.

Never commit `.env.local`, paste secrets into source code, or use the
`NEXT_PUBLIC_` prefix for secrets. Keep `.env.example` limited to variable names
and non-secret placeholders. If a key is exposed, revoke or rotate it at its
provider.

Then, run the development server:

```bash
npm run dev
# or yarn dev / pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components (animations, UI elements, etc.).
- `public/`: Static assets such as images and icons.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
