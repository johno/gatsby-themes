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

action "site" {
  uses = "actions/zeit-now@9fe84d5"
  secrets = ["ZEIT_TOKEN"]
  args = "--public --no-clipboard deploy ./site > $HOME/$GITHUB_ACTION.txt"
}

action "site:sha-alias" {
  uses = "actions/zeit-now@9fe84d5"
  args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
  secrets = ["ZEIT_TOKEN"]
  needs = ["site"]
}

action "site:master" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
  needs = ["site:sha-alias"]
}

action "site:alias" {
  uses = "actions/zeit-now@9fe84d5"
  args = "alias --local-config=./site/now.json"
  secrets = ["ZEIT_TOKEN"]
  needs = ["site:master"]
}
