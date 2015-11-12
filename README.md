# jboss-set
A basic web page that allows SET members to quickly find the URL to a component
repository based upon a specified release stream.  

Page can be viewed [here](https://ryanemerson.github.io/jboss-set/).


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Deployment
Once your changes are complete, execute the following steps:

1. Run `./package.sh` to download the latest json streams file and package the web page + streams into the dist folder.
2. Commit all of your changes.
3. Execute `./deploy.sh` to push a subtree (dist folder) of the src branch to the remote gh-pages branch.
