# jboss-set
A basic web page that allows SET members to quickly find the URL to a component
repository based upon a specified release stream.  

Page can be viewed [here](https://ryanemerson.github.io/repo-finder).


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & Development

### Prerequistes
1. Node.js
2. bower
3. ruby

### Local Installation
1. git clone <repo_finder_url>
2. cd repo-finder
3. gem install compass
4. npm install
5. bower install

### Local Development
Run `grunt` for building, `grunt serve` for local dev server and `grunt serve:dist` to preview the generated distribution (how the page will appear on gh-pages).

## Deployment
Once your changes are complete, execute the following steps:

1. Run `./package.sh`
2. Commit all of your changes.
3. Execute `./deploy.sh` to push a subtree (dist folder) of the src branch to the remote gh-pages branch.  This will also push the src branch to your origin repo.  
