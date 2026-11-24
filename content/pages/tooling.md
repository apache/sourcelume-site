Title: Tooling
license: https://www.apache.org/licenses/LICENSE-2.0

Apache Sourcelume Tooling provides build-system plugins and modules that generate,
validate, and publish Sourcelume provenance records as part of a project's normal build
and release workflow.

## Available plugins

| Plugin | Ecosystem | Commands / Targets |
| --- | --- | --- |
| `sourcelume-maven-plugin` | Java / Maven | `sourcelume:generate`, `sourcelume:validate`, `sourcelume:publish` |
| `sourcelume-python-plugin` | Python | `sourcelume generate`, `sourcelume validate`, `sourcelume publish` |
| `sourcelume-cmake-module` | C / C++ / CMake | `sourcelume_generate`, `sourcelume_validate`, `sourcelume_publish` |

## What the plugins do

Each plugin follows the same three-step workflow against a [Sourcelume Registry](registry.html):

1. **Generate** — extracts coordinates, license, creators, and origin from the project's
   build metadata (`pom.xml`, `pyproject.toml`, or `CMakeLists.txt`) into a
   `provenance-record.json` following the [v0.0.1 specification](specification.html).
2. **Validate** — checks the record against the registry's `POST /records/validate`
   endpoint.
3. **Publish** — submits the record to `POST /records` byte-for-byte unchanged so digests
   and detached signatures stay intact, and fails the build if the registry stores the
   record as `INCOMPLETE`.

Pre-authored records — including non-dataset types such as `TrainingProvenanceRecord` —
can also be validated and published directly without regenerating from build metadata.

## Try it

Tooling lives in its own repository with runnable sample projects for Maven, Python, and
CMake under `examples/`:

- **[apache/sourcelume-tooling](https://github.com/apache/sourcelume-tooling)**

To see the Python plugin used in a full model-training loop against a local registry,
visit the [Sample](sample.html).
