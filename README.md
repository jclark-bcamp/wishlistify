# Project 2 - Wishlistify

## Table of Contents
- [Team](#team)
- [Roles](#roles)
- [About](#about)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Tools](#tools)
- [Features](#features)
- [Implementation Steps](#implementation-steps)
- [Sample Snippets](#sample-snippets)
- [Links](#links)

# Team

- **Janessa Clark**  
- **Hannah Hoffman**  
- **Washington Villavicencio**  
- **Johnathan Chastain**  
- **Timothy Rice**  

# Roles

**Wishlistify Outline (WIP)**:
  - Landing Page: Design, responsiveness, and content integration.
  - User Login and JWT Authentication: Secure login/logout, token expiration, and session management.
  - User Account Page: Interface for managing wish lists.
  - "Add Gift" Button with Info Modal: Collect item details (modal details TBD).
  - Wishlist Table Display: Define and implement table structure.
  - Amazon API Integration (Feasibility TBD): Research and implement if applicable.

# About

Have you ever been asked any of these questions?

* "What do you want for Christmas?"
* "What do you want for your birthday?"
* "What do you think I should get Johnathan for Easter?"


If so, use Wishlistify to build a list that is easily shareable!

# User Story

AS A family member
I WANT to share my wish list
SO THAT I can receive the gifts of my dreams


# Acceptance Criteria

GIVEN a registry list with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the wish list page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action


# Tools

- Vite
- Discord
- VS Code
- GitBash
- GitHub
- PostgreSQL
- Sequalize
- Node.js
- Express.js

# Links

- Deployed Program:

- GitHub Repository:

