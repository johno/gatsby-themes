workflow "npm" {
  on = "push"
  resolves = ["npm:publish:ci"]
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

action "site:install" {
  uses = "johno/actions-yarn@master"
  args = "install"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "site:publish" {
  uses = "actions/zeit-now@9fe84d5"
  args = "--public --no-clipboard > $HOME/$GITHUB_ACTION.txt"
  secrets = ["ZEIT_TOKEN"]
  needs = ["site:install"]
}

action "site:sha-alias" {
  uses = "actions/zeit-now@9fe84d5"
  args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
  secrets = ["ZEIT_TOKEN"]
  needs = ["site:publish"]
}

action "site:master" {
  uses = "actions/bin/filter@b2bea07"
  needs = ["site:sha-alias"]
  args = "branch master"
}

action "site:alias" {
  uses = "actions/zeit-now@9fe84d5"
  needs = ["site:master"]
  args = "alias"
  secrets = ["ZEIT_TOKEN"]
}
