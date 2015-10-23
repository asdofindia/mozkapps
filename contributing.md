---
title: Contributing
layout: page
permalink: /contributing/
---

If you wanna help develop this site, the code is [here](https://github.com/asdofindia/mozkapps). Read about [how jekyll on github works](http://jekyllrb.com/docs/github-pages/).

Checkout the [existing issues](https://github.com/asdofindia/mozkapps/issues) to get started. Or create one yourself.

### Git Workflow ###
For maximum efficiency, please follow the following workflow.

First, find an issue to work on. If it doesn't exist, [create it](https://github.com/asdofindia/mozkapps/issues/new).

Before starting to code, comment on the issue and make sure you're on the same page with other contributors.

[Fork](https://github.com/asdofindia/mozkapps/fork) the repository to your own userspace and clone it to your computer

```bash
git clone git@github.com:yourname/mozkapps.git
```

Now you need to add the upstream (this repository) as a remote.

```bash
git remote add upstream git@github.com:asdofindia/mozkapps.git
git fetch upstream
```

Do not modify the gh-pages branch. This shall always remain in sync with upstream.

When you've claimed your issue and want to start working, create a new branch to add your work.

```bash
git checkout -b fetch-market
```

Do your stuff and push it to your fork.

```bash
git add .
git commit -m "Fetch app info from Market API. Fix #1"
git push origin fetch-market
```

Create a pull request from the new branch of your repo to gh-pages of this repo.

#### Modifying PR ####

After creating a pull request, you might have to make changes to it. You can make changes, commit and push to the same branch and the PR will automatically be updated.

But, to keep the commit history clean, you'll be asked to squash the commits into one. To do this, just

```bash
git rebase -i gh-pages
```

Mark all the extra commits as fixup.

Once rebase finishes successfully, force push to your branch

```bash
git push origin fetch-market --force
```

#### Fetching upstream changes ####

While you're coding on your computer, there might be new commits on the upstream repository. To fetch these to your computer do:

```bash
git checkout gh-pages
git pull --rebase upstream gh-pages
```

To update the branch you're coding in

```bash
git checkout fetch-market
git rebase gh-pages
```

Credits for this contribution guidelines goes to [@zhukov of webogram](https://github.com/zhukov/webogram/blob/master/CONTRIBUTING.md)
