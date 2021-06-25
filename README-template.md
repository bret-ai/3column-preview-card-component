# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](.public/finalDesignLook/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/bret-ai/3column-preview-card-component)
- Live Site URL: [Add live site URL here](https://gracious-curie-21b5c6.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I challenge helped me learn about applying classes conditional using classnames package, i.e. creating distinct components with 'individual behavior'. Instead of long if and else if statements.

To see how you can add code snippets, see below:

```js
const Card = ({ children, icon, header, orange, cyan, darkCyan, text }) => {
  return (
    <div
      className={classNames({
        card: true,
        orange: orange,
        cyan: cyan,
        darkCyan: darkCyan,
      })}
    >
      {children}
    </div>
  );
};
```

### Continued development

In my next project I will be using tailwind css or styled components to minimise the amount of code I have to write.

### Useful resources

- [resource 1](https://www.pluralsight.com/guides/applying-classes-conditionally-react) - This is the where I found the classnames library. You can read about more ways to apply classes conditionally in reactjs.

## Author

- Website - [Bret Mwenda](https://www.reckonKE.com)
- Frontend Mentor - [@bret-ai](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@mwendarr](https://www.twitter.com/mwendarr)

## Acknowledgments

I want to thank the Almighty God for the gift of life. Secondly, I would like to big up myself for finishing this challenge. For anyone reading this, "GOD BLESS YOU".
