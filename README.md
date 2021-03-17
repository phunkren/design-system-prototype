# Design system prototype
## Critique 

> All components are shown at 100% of screen which is correct but unrealistic/ugly in some cases (could argue that's the responsibility of the component though - not storybook)
- 

## Notes 

### Figma
- Figma addon create a decorator on each story (can be added either locally or globally)
- Uses a deployed url from Figma to display the design (it can also target specific nodes within the frame)
- Using an open source [Figma design system](https://www.figma.com/file/1bzWImSTgy7SEZajf36Zu3/Shipwright-UI-Kit-Community) as an example
- Since you cannot derive any meaningful properties from the design, is there any real benefit to seeing this alongside the story?

### Composition: Referencing local storybooks 

- it looks like the order of the run commands matters. 
- to display other storybooks you have to run them before the main storybook, otherwise they show as infinitely loading
- is there any real benefit to having this, as opposed ot having multiple tabs open?


### Composition: Referencing deployed Storybooks
- Deployed Storybooks on Netlify are showing as errors (looks like a CORS error to retrieve the stories.json files)


### HMR

- Updating a prop in Button or the header in the introduction mdx did not hold reload the page, and hard refreshing also did not display the changes.
- HMR not working in any of the project- or ui-lib storybooks (composed or uncomposed)
- HMR fixed by downgrading WSL2 to WSL1
- HMR is now also working via local composition

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
- Storybook dep removed from stories, so they can be imported into the tests

---