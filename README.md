# Chirps

I made this project with my friends who are new to fullstack web development and want to learn some latest techs with me. Below are the app flow (got inspiration from X/twitter!)

![image](https://github.com/brmxy/chirps/assets/68318936/ffb12376-2072-4db2-8a87-52aeec9581ad)

# How-to

- First make sure to have [Nodejs v20++](https://nodejs.org/en/download) and install latest [PNPM](https://pnpm.io/installation).

- Run `pnpm install`

- Copy `.env.example` file and rename it to `.env.local`

> NOTE: Update environment based on your need (check docker-compose or use your local tools)

- For development run `pnpm run dev` from root project

- For production build run `pnpm run build`

- For preview or staging using docker run `docker compose -f "docker-compose.yml" up -d --build`
