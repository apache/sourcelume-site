Title: Community
license: https://www.apache.org/licenses/LICENSE-2.0

## Providing changes in a pull request

The best way to contribute changes is to fork the relevant Apache Sourcelume repository on GitHub and open a pull request with your changes.

Current Apache Sourcelume repositories include:

- [`sourcelume-site`](https://github.com/apache/sourcelume-site) — website content and configuration
- [`sourcelume-spec`](https://github.com/apache/sourcelume-spec) — Sourcelume specification work
- [`sourcelume-registry`](https://github.com/apache/sourcelume-registry) — registry implementation work

For website changes, use [`apache/sourcelume-site`](https://github.com/apache/sourcelume-site). To make your pull request easier to review and apply, please follow these conventions:

- Create a branch for your change.
- Base pull requests on the `main` branch.
- Keep pull requests focused. Smaller pull requests are easier to review and merge.
- If your pull request has conflicts with `main`, please rebase your branch.
- If you have several commits for the same change, consider squashing them into one commit before the pull request is merged.
- Follow the scouts rule: leave the project a little cleaner than you found it.
- For substantive website changes, run the project checks before opening or updating your pull request:

```bash
make check
```

For example, to work on the website repository:

```bash
# after forking apache/sourcelume-site on GitHub
git clone https://github.com/<your-username>/sourcelume-site.git
cd sourcelume-site
git checkout -b my-branch origin/main
git remote add upstream https://github.com/apache/sourcelume-site.git
```

Keep your branch up to date with `main`:

```bash
git fetch upstream
git pull --rebase upstream main
```

Then push your branch to your GitHub fork and open a pull request against `apache/sourcelume-site`:

```bash
git push origin my-branch
```

If your pull request does not seem to be moving forward, feel free to leave a brief comment on the pull request asking for an update.

## Becoming a committer

If you're interested in becoming a committer, please refer to this Apache [Contributor Guide](https://infra.apache.org/new-committers-guide.html) for more information.

## Committers

| Name | Apache ID | PMC Member | Affiliation |
| --- | --- | --- | --- |
| Jamie Goodyear | jgoodyear | ✓ | Savoirtech |
| Andrew Musselman | akm | ✓ | ASF Tooling |
| Calvin Kirs | kirs | ✓ | |
| Dave Fisher | wave | ✓ | unaffiliated |
| Jeff Genender | jgenender | ✓ | Savoirtech |
| Achim Nierbeck | anierbeck | ✓ | codecentric |
| JB Onofré | jbonofre | ✓ | |
| Raúl Cumplido | raulcd | ✓ | QuantStack |
