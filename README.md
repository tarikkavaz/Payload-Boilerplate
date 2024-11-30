# Payload Website Template 

This is a Clone of the [Payload CMS Website Template](https://github.com/payloadcms/payload) with an additional Collection of Products and settings for [Resend](https://resend.com/) as Form email service.

## Development Instructions

### Quick Start

To spin up this example locally, follow these steps:

1. Clone the repo:
```bash
git clone https://github.com/tarikkavaz/Payload-Boilerplate.git
```
2. Copy the example environment variables:
```bash
cd Payload-Boilerplate && cp .env.example .env
```
3. Install dependencies and start the dev server:
```bash
pnpm install && pnpm dev
```
4. Open the app in your browser:

   open http://localhost:3000

That's it! Changes made in `src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow steps 1 and 2 from above, the docker-compose file will automatically use the `.env` file in your project root.

2. Next run:
```bash
docker compose up
```
3. Follow steps 4 and 5 from above to login and create your first admin user.

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

### Seed

To seed the database with a few pages, posts, and projects you can click the 'seed database' link from the admin panel.

The seed script will also create a demo user for demonstration purposes only:

- Demo Author
  - Email: `demo-author@payloadcms.com`
  - Password: `password`

> NOTICE: seeding the database is destructive because it drops your current database to populate a fresh one from the seed template. Only run this command if you are starting a new project or can afford to lose your current data.

### Production

To run Payload in production, you need to build and start the Admin panel. To do so, follow these steps:

1. Invoke the `next build` script by running:
```bash
pnpm build
```
2. Finally run:
```bash
pnpm start
```
   to run Node in production and serve Payload from the `.build` directory.

When you're ready to go live, see Deployment below for more details. 

See the Initial [README](README-Init.md) file for more instructions.  