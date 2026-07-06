# To Do

- no more npm run up-prod
  - prompt (plan mode): Please see the repos in my current working directory. Note that many of the repos have the following package.json scripts: `npm run up-prod` and `npm run up-staging`. Please observe the behavior of these two scripts. Essentially, the up-prod and up-staging scripts conduct `next build` on my laptop, then upload the files generated from `next build` to my rasperry pi, followed by the generated files getting moved to the correct location via the down-staging/down-prod scripts. Note that ~/projects exists both on my laptop, as well as on my Raspberry Pi 3, which acts as my web server. The up-prod/up-staging scripts exist because `next build` handles fine on my laptop, but is very slow on my Raspberry Pi 3. Here's the good news, I just bought a Raspberry Pi 5, which runs `next build` with ease. Therefore, I would like to replace the up --> down scripts with logic that performs `next build` and then moves the generated files to the appropriate `website_location` -- all from my Raspberry Pi 5. Please help me with this. For each repo, please create a working branch called "pi5" for this work.
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
