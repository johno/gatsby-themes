workflow "Publish to npm" {
  on = "push"
  resolves = ["publish"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "install" {
  uses = "johno/actions-yarn@master"
  needs = ["Filters for GitHub Actions"]
  args = "install"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "publish" {
  uses = "johno/actions-yarn@master"
  secrets = [
    "NPM_AUTH_TOKEN",
    "GITHUB_TOKEN",
  ]
  args = "publish:ci"
  needs = ["install"]
}
