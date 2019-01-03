workflow "Publish to npm" {
  on = "push"
  resolves = ["GitHub Action for npm-1"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@e7aaefe"
  needs = ["Filters for GitHub Actions"]
  runs = "run publish:ci"
  secrets = ["NPM_AUTH_TOKEN"]
}
