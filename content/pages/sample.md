Title: Sample
license: https://www.apache.org/licenses/LICENSE-2.0

The Apache Sourcelume Sample is a small end-to-end demonstration: a tiny character-level
language model trained on public-domain text, with its training-data provenance documented and
published along the way.

## What the sample demonstrates

The sample walks the flow that Sourcelume is built for, using two record types from the
specification:

- **A provenance record** — documents the training corpus itself: where the text came from,
  which license terms it carries, and how it was prepared.
- **A training provenance record** — documents which dataset was used to train which model,
  in which training phase, and how completely the training data is disclosed.

The sample intentionally creates both records itself instead of assuming records it did not
author — a producer publishes what it can actually sign for.

## Try it

The sample lives in its own repository:

- **[apache/sourcelume-sample](https://github.com/apache/sourcelume-sample)**

The [README](https://github.com/apache/sourcelume-sample/blob/main/README.md) contains the
quick start: train the model, validate both records against the current schemas, and publish
them to a Sourcelume Registry instance. Everything runs locally on a small corpus, and the
repository README describes the current state of each step, including the steps that
deliberately do not work yet.
