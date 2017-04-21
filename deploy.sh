#!/bin/bash
ng build --prod --base-href="https://tesfaykidane.github.io/angular-routes/"
git add .
git commit -m "form update"
git push
git subtree push --prefix dist origin gh-pages
