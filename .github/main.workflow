workflow "Publish to npm" {
  on = "push"
  resolves = ["yarn publish:ci"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "yarn install" {
  uses = "johno/actions-yarn@master"
  needs = ["Filters for GitHub Actions"]
  args = "yarn install"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "yarn publish:ci" {
  uses = "johno/actions-yarn@master"
  secrets = [
    "NPM_AUTH_TOKEN",
    "GITHUB_TOKEN",
  ]
  args = "publish:ci"
  needs = ["yarn install"]
}
