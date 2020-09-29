# TypeScript project template

This template covered the usage of `Parcel` for TypeScript, and a Github workflow for automatically updating GitHub Pages.

[Click here](https://pomodorozhong.github.io/typescript-project-template/.) to see the automatically builded GitHub Pages.

## Installation

```sh
git clone https://github.com/pomodorozhong/typescript-project-template.git
cd typescript-project-template
npm install
```

## Parcel usage

To watch the chage of source code and automatically rebuild:

```sh
npm run dev
```

To build only once:

```sh
npm run build
```

## Setup Github workflow

1. Create a new Github repository (instead of forking this repo, [more info](###Details-for-setting-up-the-Github-workflow))
2. Setup access token in one of these way
    + [Create ssh deploy key](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key)
    + [Personal Access Tokens](https://github.com/settings/tokens)
    + [Authenticating with the GITHUB_TOKEN - GitHub Docs](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)
3. [Change the `.github/workflows/main.yml` file accordingly](https://github.com/peaceiris/actions-gh-pages#supported-tokens)
3. Copy all the file from this repo to your repo
4. That's it, from now on every time you commit to `master` branch, your GitHub Pages will be update automatically
5. If your `gh-pages` branch can be update automatically, but there is no file in it, try to do a manual commit on `gh-pages` branch ([more info](###Details-for-setting-up-the-Github-workflow))

### Details for setting up the Github workflow

Q: Why not to fork?

> Ans: It seems that a forked repo can not use `peaceiris/actions-gh-pages` properly.

Q: Why manual commit on `gh-pages`?

> Ans: This solution is mentioned in [this issue](https://github.com/peaceiris/actions-gh-pages/issues/349#issuecomment-647016488).
