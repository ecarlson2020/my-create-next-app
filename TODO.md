# To Do

- unimported for both ui and api
- no more npm run up-prod
  - pi5 branch created, test on pi5
- move away from pi ~/pw and towards .env (see below)

## Migrating from ~/pw to .env files

### Introduction

I deploy the majority of the repos in my current working directory (e.g. foothillspicnics, listcart, etc.) to my Raspberry Pi, which serves as my web server at home. I currently store important production keys and passwords in ~/pw on my Pi. I am wanting to transition towards using .env files in their respective repos, which I have already started doing in some of the repos.

Important Note: Claude Code is running on my Pi. YOU ARE ON A PRODUCTION SYSTEM WITH LIVE WEBSITES RUNNING ON IT.

### Goal

- No more ~/pw. Just .env files.
- To ensure I don't have missing env values, I would also like to add some sort of mechanism that crashes the UI/API if all of the .env files are not in place

### Concerns

- On my Pi, I have the same ~/projects directory as you can observe locally on my laptop. When running `npm run deploy` on my Pi, are we pulling .env from ~/out or from ~/projects/<project>?
- Most of my repos have a UI (`src`) as well an `api` directory. Ideally, I would prefer to have a single `.env` file at the root of each respective repository, accessible by both the UI and API, opposed to both <repo>/.env and <repo>/api/.env. However, this may not be an industry best practive, so I am wanting you feedback here.
- On my Pi, I could set `chmod 400` on any of the files within ~/pw. On .env, I am not sure if I can do that, so I don't want to introduce a security risk there.
