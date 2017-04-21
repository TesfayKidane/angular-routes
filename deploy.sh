#!/bin/bash
ng build --prod --base-href="https://tesfaykidane.github.io/angular-routes/"
git remote add origin https://github.com/TesfayKidane/angular-routes.git
git add .
git commit -m "form update"
git push
git subtree push --prefix dist origin gh-pages
