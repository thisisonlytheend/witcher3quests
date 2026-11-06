# Witcher Quest Ledger

A Witcher 3 quest tracker that works offline and installs on a phone.

## Put it online with GitHub Pages
1. On github.com choose New repository. Name it `witcher-quest-ledger`, keep it Public, and create it.
2. Choose "uploading an existing file", drag in ALL the files and folders from this download (index.html, sw.js, manifest.webmanifest, .nojekyll, fonts, icons), and commit.
3. In the repository go to Settings > Pages. Under "Build and deployment" pick "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/witcher-quest-ledger/`.

## Install on Android
Open that address in Chrome, wait for it to load once, then open the menu and choose "Install app" (or "Add to Home screen"). After the first load it works with no internet. Quest links to the wiki still need a connection.

## Your progress
Progress is saved on the phone only. Use Export at the bottom of the page to copy a backup, and Import to restore it or move it to another device.

## Updating later
Replace the changed files in the repository. Change `VERSION` at the top of `sw.js` (for example "v2") so installed copies pick up the update.
