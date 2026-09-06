# How to setup your environment

This document explains how to set up a local development environment for working on
the Apache Sourcelume website.

The site is built with [Pelican](https://getpelican.com/) and uses Python tooling for
local checks and previews.

## Prerequisites

Install the following tools:

- Python 3.11 or newer
- [uv](https://docs.astral.sh/uv/)
- Git

On macOS, `uv` can be installed with:

```bash
brew install uv
```

Or with the official installer:

```bash
curl -LsSf [https://astral.sh/uv/install.sh](https://astral.sh/uv/install.sh) | sh
```

On Windows, `uv` can be installed with:

```bash
winget install astral.sh.uv
```

## Create the local environment

From the project root, run:

```bash
uv sync
```

This creates a local virtual environment and installs the project dependencies from
`pyproject.toml`.

## Activate the environment

```bash
source .venv/bin/activate
```

You can confirm the environment is active with:

```bash
python --version
```

## Run local checks

Before committing substantive changes, run:

```bash
make check
```

This helps catch issues that may otherwise fail during CI/CD or ASF infrastructure
builds.

## Preview the site locally

If the project provides a local build target, run:

```bash
make build
```

or:

```bash
make serve
```

Check the `Makefile` for the exact available targets.

## Notes about Pelican and ASF infrastructure

The authoritative website build runs on ASF infrastructure.

Some Pelican behavior may rely on ASF-specific Pelican plugins from:

```text
https://github.com/apache/infrastructure-pelican
```

If a local build fails because of missing ASF Pelican plugins, refer to that project’s
setup instructions.

## Updating dependencies

Do not run:

```bash
pip freeze > requirements.txt
```

for normal development.

Dependencies should be managed through the project’s Python dependency configuration.
If dependency changes are needed, update the appropriate project files and include the
reason in the pull request.

## Testing

```bash
uv sync
make check
uv run pelican content -s pelicanconf.py -o output
cd output
python -m http.server 8000
cd ..
rm -rf output
```
