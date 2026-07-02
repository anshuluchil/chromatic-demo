# chromatic-demo

A minimal React + Storybook + Chromatic repo for learning visual regression testing.

## What's in here

Three components, each with multiple stories (states):

- **Button** — primary, danger, ghost variants × small/medium/large sizes + disabled
- **Badge** — status badges: default, success, warning, error, info
- **Card** — composes Button + Badge; shows passed/failed/pending/in-review states

Each story becomes one **Chromatic snapshot**. When you change a component, Chromatic diffs the new snapshot against the baseline and asks you to accept or reject the change.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run Storybook locally

```bash
npm run storybook
```

Opens at http://localhost:6006 — you'll see all components and their stories.

### 3. Connect to Chromatic

1. Go to https://www.chromatic.com and sign in with GitHub
2. Create a new project and copy your **project token**
3. Run your first build:

```bash
CHROMATIC_PROJECT_TOKEN=your_token_here npm run chromatic
```

This publishes your Storybook to Chromatic's cloud and captures baseline snapshots.

### 4. Make a visual change and see Chromatic catch it

Try changing a color or padding in `Button.module.css`, then run chromatic again:

```bash
CHROMATIC_PROJECT_TOKEN=your_token_here npm run chromatic
```

Chromatic will flag the diff and ask you to **Accept** (intentional) or **Deny** (regression).

## CI Integration (GitHub Actions)

The `.github/workflows/chromatic.yml` workflow runs Chromatic automatically on every push and PR.

To enable it:
1. Go to your GitHub repo → Settings → Secrets → Actions
2. Add a secret: `CHROMATIC_PROJECT_TOKEN` = your token from chromatic.com

Every pull request will now get a visual test check badge.

## Why this matters

Chromatic catches UI regressions that code review misses — a padding change in a shared component that breaks 12 other places, a color token that got overridden, a layout that breaks at a specific viewport. It's the difference between "it looks fine on my machine" and a pixel-level audit on every build.
# chromatic-demo
# chromatic-demo
# chromatic-demo
