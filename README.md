# GitHub public repository viewer

##
1. Create [token](https://github.com/settings/tokens) with `public_repo` and `repo:status`
1. Create `.env` in root with created token:
   ```bash
   GITHUB_TOKEN=<TOKEN>
   ```
   or use `GITHUB_TOKEN=none` for non-token mode, but then there will be a limit of 60 requests in two hours.
1. Build app
   ```bash
   npm run build
   ```
   or start dev-server
   ```bash
   npm run dev
   ```