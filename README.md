# wearetheblanks

## parcel install

``
$ npm install -g parcel-bundler
$ parcel --version
1.9.4
``

## development

```
$ cd src
$ parcel index.html
```

## build

```
$ git checkout gh-pages
$ cd src
$ parcel build -d .. index.html
$ [git add all files and commit]
$ git push
```
