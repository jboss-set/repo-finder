# jboss-set
A basic web page that allows SET members to quickly find the URL to a component
repository based upon a specified release stream.  

Page can be viewed [here](https://ryanemerson.github.io/jboss-set/).


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & Development

### Prerequistes
1. Node.js
2. bower

### Local Installation
1. git clone <repo_finder_url>
2. cd repo-finder
2. npm install
3. bower install

### Local Development
Run `grunt` for building and `grunt serve` for local dev server.  

Note, you may need to run the commands with the --force option.  

## Deployment
Once your changes are complete, execute the following steps:

1. Run `./package.sh` to download the latest json streams file and package the web page + streams into the dist folder.
2. Commit all of your changes.
3. Execute `./deploy.sh` to push a subtree (dist folder) of the src branch to the remote gh-pages branch.
