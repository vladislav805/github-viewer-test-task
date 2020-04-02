# GitHub public repository viewer

##
0. Create [token](https://github.com/settings/tokens) with `public_repo` and `repo:status`
0. Create `.env` in root with created token:
   ```bash
   GITHUB_TOKEN=<TOKEN>
   ```
0. Build app
   ```bash
   npm run build
   ```
   or start dev-server
   ```bash
   npm run dev
   ```