Initial commit

## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

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

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

Please also provide an assignment reflection in your project README.md file.
(Required)

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

What went really well and what could have gone better?

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

Describing errors or bugs you encountered while completing your assignment.

Requesting feedback about a specific part of your submission.

In today's task I was able to reach the goal of deploying to Vercel, a little unknown to me how I did it, but still completed nethertheless.

From here, it wasn't as productive as I had imagined. I started with the stretch goals that are above in this Read Me file. However I found the base code of this app to be quite overwhelming, as well as this I was trying to implement stuff I had seen in the app in different ways, so I wasn't as confident as applying these things. I ended up writing some code, researching certain areas of it online, and in the docs. To then end up deleting most of the code, I think I might've tried again to have no success. Hence why there is a profile page set up on the homepage with nothing on the profile page...

I then went on to taking a look at the bug-fixes. I managed to get the page titles to change with the post titles, which I was happy about, took a little playing around with as I was unable to complete this task in a previous assingment, so happy to have done it today.

For what was left of the day, I decided to see if I could create a delete button, as it was doing my head in that you couldn't delete the post from the homepage... Had a quick go at it but wasn't able to pass it off. I think most of it would work, I'm just having trouble selecting the elements I want to be deleted...

And on that note, despite the ups and downs of the day, I do feel as if I have some areas to look at from this project. Params in particular, and perhaps some planning. Despite this being a project that I was joining in on, I do think a little bit of planning would of helped. The organisation of the pages, what shows up where, but also, what information is where. I felt like I was blindly trying to pick up information, writing params where I wanted it and putting the same notation to try and pick it up.

It was a good experience though, taking away good lessons to be learnt. Also, it was nice to see the code, although overwhelming it's good to see this stuff as an app and the code, to see the building blocks. And the importance of planning.

Any tips or best practise's you've come into contact with or know of from joining a project would be greatly appreciated?

I feel that from this experience I have gained areas to work on mainly personally, but the next time this happens I will be a step ahead than I was the first time. If that makes sense...
