Title: Registry
license: https://www.apache.org/licenses/LICENSE-2.0

The Apache Sourcelume Registry is the central repository for signed provenance records.
It provides a stable, queryable endpoint for dataset consumers and auditors to
verify provenance claims.

## Registry Architecture

The registry is built on **Apache Atlas** to provide robust metadata management and
lineage tracking. It supports ingestion of signed records via the Sourcelume
Attestation pipeline and exposes them through REST and GraphQL interfaces for the
Sourcelume Explorer and other machine consumers.

## Registry Repository

The Sourcelume Registry is currently being developed in its own repository:

- **[apache/sourcelume-registry](https://github.com/apache/sourcelume-registry)**

Please visit the repository to view the current drafts, open issues, and join the
discussion.
