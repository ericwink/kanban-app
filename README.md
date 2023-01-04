# Frontend Mentor - Kanban task management web app solution

This is a solution to the [Kanban task management web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Kanban task management web app solution](#frontend-mentor---kanban-task-management-web-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Video](#video)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [General Functionality](#general-functionality)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- **Bonus**: Allow users to drag and drop tasks to change their status and re-order them in a column
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)
- **Bonus**: Build this project as a full-stack application

### Video

https://user-images.githubusercontent.com/105669475/210582988-4b373f22-2180-4e3e-a5ae-c63158914036.mov

### Links

- Solution URL: [GitHub](https://github.com/ericwink/kanban-app)
- Live Site URL: [Kanban Task Tracker](https://kanban-ericwinkdev.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### General Functionality

The information for the user is housed in an object (data.json), which has additional layers nested within to provide information for boards, columns, tasks, subtasks. The object is loaded as state for the applicaiton, and we map through each level to pass the information down from parent components to children. App.tsx mapps through the Board objects and passes information down to the `<Boardview>` component, which provides the space to render the columns. `<Boardview>` maps through the column objects, rendering `<Column>` for each, which maps and renders `<TaskPreviewCard>`.

Each `<TaskPreviewCard>` has a child, `<TaskViewCard>`, which onClick is rendered for the user to display additional information about the task, including subtasks, details, etc.

Most of the functionality for making adjustments to the state is handled with the assistance of the Immer library, which simplifies the process of working with a deeply nested state. The Immer functions are housed in the utility folder, in the immerFunctions.ts file.

Creating boards and tasks are handled in the respective modal components, `<BoardModal>` and `<TaskModal>`. The logic for both is extrapolated into custom hooks, useMakeBoard and useMakeTask. Each starts state either with board/task data that is passed to it, or with blank values. When the user saves their changes, a new object is created and passed back to the parent, which passes the data to the appropriate Immer function, updating and returning the entire object to be updated in state.

### What I learned

One of the biggest lessons was working with deeply nested state. The .json file that was distributed with this challenge was one large object with numerous layers of nexting. Rather than try to change this, I challenged myself to work with the data as-is.

Using the Immer library was a big help, and made updating state much easier. But it was important to understand that, in React, state is immutible, so an object or array in state must be copied first, then the copy edited and passed back to the setter function. Using spread syntax on one level of a nested object is not enough!

### Continued development

This was a larger project, and in the future I may build out a back-end or implement persistence with local-storage. For now, I'd like to move onto other projects to continue building new skills. I'm currently learning NextJS so that may be on the list for new projects.

### Useful resources

- [Immer](https://immerjs.github.io/immer/) - Immer was extremely helpful for managing the deeply nested state

## Author

- Website - [EricWinkDev](https://www.ericwink.dev/)
- Frontend Mentor - [@ericwinkdev](https://www.frontendmentor.io/profile/ericwink)
- LinkedIn - [Eric Winkelspecht on LinkedIn](https://www.linkedin.com/in/eric-winkelspecht/)
