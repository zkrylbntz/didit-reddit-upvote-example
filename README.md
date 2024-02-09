## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and common on posts in a multi-threaded nested list.

The project is built using Next.js with the /app router and Tailwind CSS, and uses NextAuth for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User settings
- [ ] Searching posts
- [ ] Subreddits (separate communities, that isn't just one big list of posts)
- [ ] Moderation tools / reporting objectionable comments
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User badges
- [ ] User trophies
- [ ] User flairs

## Setup instructions

1. Clone the repo
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (used for if we enable password logins)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/apps/new))
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/apps/new))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
