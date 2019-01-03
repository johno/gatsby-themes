workflow "publish" {
  on = "push"
  resolves = ["publish:ci"]
}

action "master" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "install" {
  uses = "johno/actions-yarn@master"
  args = "install"
  secrets = ["NPM_AUTH_TOKEN"]
  needs = ["master"]
}

action "publish:ci" {
  uses = "johno/actions-yarn@master"
  secrets = [
    "NPM_AUTH_TOKEN",
    "GITHUB_TOKEN",
  ]
  args = "publish:ci"
  needs = ["install"]
}
