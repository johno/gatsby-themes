workflow "Publish to npm" {
  on = "push"
  resolves = ["nuxt/actions-yarn@master-1"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "nuxt/actions-yarn@master" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Filters for GitHub Actions"]
  args = "install"
}

action "nuxt/actions-yarn@master-1" {
  uses = "nuxt/actions-yarn@master"
  needs = ["nuxt/actions-yarn@master"]
  secrets = ["NPM_AUTH_TOKEN"]
  args = "publish:ci"
}
