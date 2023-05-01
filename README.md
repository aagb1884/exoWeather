# exoWeather
## Dev Instructions
### first time/initial setup
1. `Git clone` into the directory of your choice
2. make sure you do an `npm install` in each of the `server` and `client` directory
3. in the server directory, make sure you do the following:
  > npm install express 
  npm install mongodb 
  npm install cors
  npm install --save-dev nodemon
4. you should then be able to run both the server and the client in separate tabs on the terminal:
  > npm run server:dev
  npm start

### Thereafter
1. do a `git pull` to ensure you've got the latest version
2. if necessary, run `npm run seeds` to populate the database
3. `git checkout -b feature/<name or ticket number>` or fix/<name or ticket number>
4. gaa / git commit -m (do this frequently)
5. when you're done with your code/feature, - i.e. before doing step 6, do a further pull main, then go back to your branch and do a `git merge main` to check for any conflicts
6. `git push origin <branchname>`
7. Open a pull request on github
8. get someone else to confirm merge on github

`git branch` - will show you all the available branches. The one you're on is in green
