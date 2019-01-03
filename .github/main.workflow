workflow "publish" {
  on = "push"
  resolves = ["site:alias", "npm:publish:ci"]
}

action "npm:master" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "npm:install" {
  uses = "johno/actions-yarn@master"
  args = "install"
  secrets = ["NPM_AUTH_TOKEN"]
  needs = ["npm:master"]
}

action "npm:publish:ci" {
  uses = "johno/actions-yarn@master"
  secrets = [
    "NPM_AUTH_TOKEN",
    "GITHUB_TOKEN",
  ]
  args = "publish:ci"
  needs = ["npm:install"]
}
