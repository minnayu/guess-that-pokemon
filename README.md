# guess-that-pokemon
Welcome to the guess-that-pokemon repository! 

### Deployed Site:
### https://cute-narwhal-1539b1.netlify.app/

# Project Structure
#### guess-that-pokemon/
```
$PROJECT_ROOT
├── src/
│   ├── App.js (Main page)
│   ├── styles.css (for styling elements)
│   ├── components/
│       ├── Slideshow.js (Slideshow component)
│       
```

# Installation
#### To use this project locally, follow these steps:

#### 1. Fork and clone repository to your local files

### Go to the project directory:
##### 2. `cd guess-that-pokemon`

### Install dependencies:
##### 3. `npm install`

### Start the development server:
##### 4. `npm start`

###### if having issues regarding styled-components
###### try `npm install styled-components@latest`, then `npm start` again

### Open the app in your browser at:
##### http://localhost:3000/

# Contributing
We welcome contributions from anyone, regardless of experience level! If you'd like to contribute, please follow these steps:

##### - Comment on the issue you would like to be assigned to.

##### 1. Fork and clone the repository to your own account.
##### 2. Create a new branch from the main branch: `git checkout -b my-branch-name`.
##### 3. Make your changes and commit them: `git commit -m "Add my awesome contribution"`.
##### 4. Push your changes to your forked repository: `git push origin my-branch-name`.
##### 5. Create a Pull Request to merge your changes into the main branch.
##### Please make sure to follow the code style and formatting conventions already in place. Also, be sure to test your changes thoroughly before submitting a Pull Request.

##### Once you have submitted your pull request, a moderator will review the changes and merge them in a timely manner. Keep an eye out for comments regarding your changes. Thank you!


# React Coding Standards

This document outlines the coding standards for writing React code. These standards are meant to ensure code consistency, maintainability, and readability across the codebase.

## General Principles

- Follow the react style guide: https://github.com/airbnb/javascript/tree/master/react
- Write code that is easy to read, understand, and maintain.
- Write code that is testable and has clear functionality.
- Keep your code as concise as possible, without sacrificing readability.
- Avoid unnecessary complexity and abstractions.

## File Structure

- Use a modular file structure, where each component or feature is contained in its own folder.
- Name files using `PascalCase` for components and `camelCase` for all other files (e.g., `MyComponent.js`, `myUtil.js`).
- Keep file names consistent with the component or feature they represent.

## Naming Conventions

- Use `PascalCase` for React components and `camelCase` for all other variables, functions, and file names.
- Prefix private variables and functions with an underscore (e.g., `_myPrivateFunction()`).
- Use descriptive and meaningful names that accurately represent the function or variable they represent.

## Component Structure

- Components should be small, focused, and reusable.
- Use stateless functional components when possible, as they are more performant and easier to test.
- Use class components when you need to manage state or use lifecycle methods.
- Keep components as pure as possible by minimizing side effects.
- Divide components into smaller sub-components when they become too complex.

## Props and State

- Use `props` to pass data down from parent components to child components.
- Avoid modifying `props` directly in child components; instead, use `state` to manage component-specific data.
- Use `setState()` to update `state`.
- Avoid using `forceUpdate()` and mutating `state` directly.
- Keep `state` as simple as possible, avoiding nested objects and arrays.

## Styling

- Use a consistent and organized approach to styling, such as CSS-in-JS or a CSS preprocessor.
- Avoid inline styles and hard-coded style values.
- Use a responsive design approach to ensure that your components look good on all devices.
- Use meaningful class names that accurately represent the content and purpose of the element.

## Testing

- Write tests for all components and functionality.
- Use test-driven development (TDD) to ensure that your code is testable and functional.
- Use a testing framework such as Jest or Enzyme.
- Test all possible scenarios, including edge cases and error handling.

## Documentation

- Document your code using inline comments and README files.
- Use JSDoc-style comments to document functions and components.
- Include information about the function or component's parameters, return values, and any side effects.
- Use a README file to document the purpose and functionality of the component or feature.

# Rules
To ensure that this repository is a welcoming and inclusive space for everyone, we ask that all contributors abide by the following rules:

Be respectful and considerate towards others, regardless of their background or experience level.
Avoid making personal attacks or engaging in any form of harassment.
Refrain from using offensive or derogatory language.
Stay focused on the topic at hand and avoid getting sidetracked by unrelated discussions.
If you notice any violations of these rules, please report them to the project maintainers immediately.
By contributing to this repository, you agree to abide by these rules and to uphold our shared values of inclusivity and respect. Thank you for your contributions!

