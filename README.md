# repareo frontend coding challenge

Hello there!

Your task is to implement a new Stepper component
based on [these specifications in Figma](https://www.figma.com/design/gvf4xjR6f9rvaj94BPFFyZ/Frontend-Coding-Challenge?node-id=0-1&t=tHGuIxWbpBVVsH5B-1).
Make sure your component behaves as expected by
creating tests for it.

## File structure
The relevant files are these
```text
__tests__/
  components/
    stepper/
      stepper.test.tsx
      -> Implement your tests here
components/
  stepper/
    stepper.tsx  
    -> The stepper component
    steps.ts
    -> You might want to use this to
       configure the steps
hooks/
  useStepper.ts
  -> Custom hook that handles navigation
pages/
  index.tsx
  -> The main page (localhost:3000)
```

## Setting up everything

Install the dependencies
```bash
npm install
```

Start the dev server to get a preview
```bash
npm run dev
```

Check out the page on [localhost:3000](http://localhost:3000)

To run the tests
```bash
npm run test
```

## Getting started

Get started by having a look at the relevant files
and then start implementing the Stepper component in
`/components/stepper/stepper.tsx`.

## Things to consider

Please use **Tailwind CSS** to style the component.
Please **do not install any additional packages**.

Make sure the component

- aligns **exactly** with the Figma spec (we already
implemented the page layout for you, 
you just have to worry about the stepper component)
- is **reusable**
- works with **different sets of steps**
- works well on **all breakpoints**

Good luck! :)