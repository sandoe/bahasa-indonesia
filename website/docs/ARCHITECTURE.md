# Architecture Blueprint

## Goal

Build a free, scalable language-learning platform that can serve:

- teacher-led BIPA lessons
- self-study learners
- multiple UI languages
- multiple source/target language directions

without rebuilding the platform each time a new language pair is added.

## Core principles

1. Content is data, not downloads.
2. Public hosting must only contain public-safe assets.
3. Lessons must support both `teacher mode` and `self-study mode`.
4. UI language and language-learning direction are separate concerns.
5. Media starts as placeholders and is swapped later for self-produced assets.

## Routing model

Current route shape:

```text
/{locale}/{pair}/
/{locale}/{pair}/{course}/
/{locale}/{pair}/{course}/{unit}/{lesson}/
```

Examples:

```text
/da/da-id/
/da/da-id/bipa-1/
/da/da-id/bipa-1/unit-01/lesson-01/
```

Where:

- `locale` controls UI language
- `pair` controls source and target language direction
- `course` maps to BIPA 1-8
- `unit` groups lessons
- `lesson` is the teaching object

## Content model

### `courses`

Stores level metadata:

- title
- CEFR approximation
- summary
- focus areas
- palette
- supported language pairs

### `lessons`

Stores the actual learning experience:

- unit metadata
- localized title and summary
- objectives
- teacher flow
- self-study flow
- dialogue
- vocabulary
- grammar patterns
- activities
- media slots

## Rights protection

The script `scripts/audit-content.mjs` blocks lesson media entries if they use disallowed providers such as:

- `teacher-slide`
- `copyrighted-classroom`

This gives the project a basic protection layer against accidentally publishing material that should stay private or licensed-only.

## Media strategy

For now, media is `placeholder` based.

Later, each media entry can move to:

- `youtube`
- `self-hosted`

only when the asset is self-produced and safe for public release.

## Why Astro

This project is content-heavy and route-heavy. Astro fits that well because:

- static output is fast and cheap on Firebase Hosting
- content collections give structure and type safety
- the site can stay mostly static while adding interactive islands later

## Near-term roadmap

1. Expand BIPA 1 lessons into a full reference course.
2. Add reusable lexicon and grammar collections.
3. Add audio placeholders and later self-produced recordings.
4. Add React islands for quizzes, flashcards, and learner progress.
5. Add Firebase Auth and Firestore only when persistent learner state is needed.
