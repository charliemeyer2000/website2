This is the second iteration of my [personal website](https://charliemeyer.xyz). The repo to my first ever website is [here](https://github.com/charliemeyer2000/website).

## Stack

1. This is a [Next.js](https://nextjs.org/) application (13.4.12) using the pages router & JS.
1. AWS - uses dev and prod environments on [DynamoDB](https://aws.amazon.com/dynamodb/) for view count storage and guestbook management.
1. [NextAuth.js](https://next-auth.js.org/) - to ensure users are authenticated with GitHub to leave a note in the guestbook.
1. [MDX](https://mdxjs.com/) - website uses MDX with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for loading MDX in `getStaticProps` and turn MDX (with components, of course) into pages.
1. [SCSS](https://sass-lang.com/) - all components are custom-styled by hand with help from SCSS.
1. [Framer-Motion](https://www.framer.com/motion/) - adding animation and interactivity w/framer.
1. [Remark Rehype](https://github.com/remarkjs/remark-rehype) - for managing image syntax, LaTeX, syntax highlighting, etc.

## Design Inspiration

This website was influenced by various blogs and design systems:

Blogs:

1. [Josh Comeau](https://www.joshwcomeau.com/)
1. [Chronark](https://chronark.com)
1. [Paco Coursey](https://paco.me/)
1. [Maxime Heckel](https://blog.maximeheckel.com/)

Design:

1. [MTA Design](https://standardsmanual.com/products/nyctacompactedition)
1. [NY Subway Signs](https://i.etsystatic.com/6628690/r/il/c18acd/1909287421/il_fullxfull.1909287421_dofm.jpg)
1. [Mini Metro](https://www.google.com/search?q=mini+metro&source=lmns&bih=925&biw=1288&hl=en&sa=X&ved=2ahUKEwinqoeXybSCAxXlkokEHft9ApgQ0pQJKAB6BAgBEAI)

## Deployment

If you want to clone this, it running it locally will not work because of the implementation of a view counter with Dynamo - you will encounter some errors. If you want to fully copy my website and have it run locally, either (a) remove the stuff that uses dynamo (two api routes, the hook usage, and view counts on each post and on the post list) or (b) make a dynamo tables with primary keys of "slug" and "note" (respectively) and add the proper api keys to an `.env.development` file (if you want a prod table, make an `.env.prod` with the correct table name & api keys). Or don't, I don't care.

```bash
# install dependencies
pnpm install

# dev - looks at .env.development
pnpm dev

# prod - looks at .env.production
pnpm start
```

This was also deployed on Vercel - as easy linking my repo and clicking "Deploy."
