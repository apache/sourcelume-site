Title: Apache Sourcelume
Template: index
license: https://www.apache.org/licenses/LICENSE-2.0

<div class="sourcelume-hero">

<p class="sourcelume-eyebrow">Apache Sourcelume</p>

# Verifiable provenance for AI training data

<p class="sourcelume-lede">Apache Sourcelume is open-source instrumentation for AI training-data
provenance — a metadata specification, a reference registry, and tooling that let dataset
curators and model producers publish signed, independently verifiable records of where their
data came from and what terms it carries.</p>

<p class="sourcelume-actions">
<a class="sourcelume-btn sourcelume-btn-primary" href="get-involved.html">Get involved</a>
</p>

</div>

Most training corpora carry licensing and provenance information that is missing, wrong, or
unverifiable — a 2024 audit found license-omission rates above 70% across popular dataset-hosting
sites. Sourcelume doesn't adjudicate whether a dataset's stated terms are accurate; it gives
producers a shared, neutral way to document custody and licensing so that claims can be checked
independently.

<div class="sourcelume-cards">

<div class="sourcelume-card">

## Specification

A versioned, JSON-LD metadata schema for dataset origin, custody chain, and licensing —
built to align with OTDI, the DPI annotation taxonomy, Croissant, and the SPDX AI Profile rather
than compete with them.


</div>

<div class="sourcelume-card">

## Registry

A reference implementation built on Apache Atlas, exposing REST and GraphQL APIs so trainers and
auditors can search, filter, and query provenance records at scale.

</div>

<div class="sourcelume-card">

## Attestation

A signing and verification library — C2PA-compatible where applicable — that lets producers
cryptographically sign what they assert, and lets anyone independently check the record's
provenance.

</div>

</div>

## Where to go next

| Page | What you'll find                          |
| --- |-------------------------------------------|
| [About](about.html) | About Apache Sourcelume                   |
| [Get involved](get-involved.html) | Mailing list, chat, and how to contribute |
| [FAQ](faq.html) | Short answers to common questions         |
