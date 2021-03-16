# Design system prototype
## Notes 

### Running locally 

- it looks like the order of the run commands matters. 
- to display other storybooks you have to load them before the mainb storybook, otherwise it just shows as infinitely loading 


### Deployed Storybooks
- Deployed Storybooks are showing as errors


### HMR

- Updating a prop in Button or the header in the introduction mdx did not hold reload the page, and hard refreshing also did not display the changes.

### TypeScript 

- `config` argument in main.js refs function currently returns undefined.
- I've added an empty object as a fallback for now. 
- [Added PR](https://github.com/storybookjs/storybook/pull/14246) to fix broken docs 


### Chromatic 

- Fails on original publish command (`npx chromatic --project-token=123bfcf2945e`)
- 'Operation timed out' error on `Building your Storybook`
    → Command failed: build-storybook -- --output-dir /tmp/chromatic--1786-KBW1zs9n3E04

---

## Goals

- 