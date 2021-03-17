# Design system prototype
## Notes 

### Composition: Referencing local storybooks 

- it looks like the order of the run commands matters. 
- to display other storybooks you have to load them before the main storybook, otherwise they show as infinitely loading 


### Composition: Referencing deployed Storybooks
- Deployed Storybooks are showing as errors


### HMR

- Updating a prop in Button or the header in the introduction mdx did not hold reload the page, and hard refreshing also did not display the changes.
- HMR not working in any of the project- or ui-lib storybooks (composed or uncomposed) 

### TypeScript 

- `config` argument in main.js refs function currently returns undefined.
- I've added an empty object as a fallback for now. 
- [Added PR](https://github.com/storybookjs/storybook/pull/14246) to fix broken docs
- Config is now working after updating refs function signature


### Chromatic 

- Fails on original publish command (`npx chromatic --project-token=123bfcf2945e`)
- 'Operation timed out' error on `Building your Storybook`
    → Command failed: build-storybook -- --output-dir /tmp/chromatic--1786-KBW1zs9n3E04
- Tiers look expensive


### Unit testing

- Plan to use Storybook stories to unit test with Jest and React Testing lib

---

## Goals

### Usage examples

### Story creation instructions

### Are we covered for items in the current styleguide?

### Retire styleguide in favour of Storybook

### Steps to have Storybook deployed to dev
- 