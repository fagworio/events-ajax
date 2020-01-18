<p align="center">
  <img src="https://github.com/LottaLeben/frontend-test/blob/master/logo.png" alt="lottaleben" />
</p>

# Event Overview with Datepicker Filter

> **Patrick Söllner - Frontend Developer**  
> April 29, 2019

- [1. Introduction](#1-introduction)
- [2. Rules](#2-rules)
  - [2.1 General](#21-general)
  - [2.2 Templates](#22-templates)
  - [2.3 Build](#23-build)
  - [2.4 Javascript](#24-javascript)
  - [2.5 SCSS](#25-scss)
- [3. Contribution](#3-contribution)
- [4. Challenge briefing](#4-challenge-briefing)
  - [4.1 Data structure](#41-data-structure)
  - [4.2 Frontend](#42-frontend)
  - [4.3 Testing](#43-testing)

## 1. Introduction

This document shall provide all the necessary information about the challenge and the rules that need to be respected.

## 2. Rules

To combine lots of projects with lots of developers, we take reusability and code maintenance very seriously. Without going to much into detail here, there are some aspects we require you to show us in the test project.

### 2.1 General

- Never create your own little blackbox.
- Be transparent.
- Show development progress on GitHub.
- Coding standards matter! Always follow the specified rules for the used language.
- Help others understand your work. Meaningful code comments, class/function/variable names or both.
- Performance, accessibility, best practices and SEO (events are not SEO relevant) are very important to us - you can use [Lighthouse](https://developers.google.com/web/tools/lighthouse/) as a helper tool to check your document.
- If you have questions: Always ask!

### 2.2 Templates

- Never use inline scripts or styles.
- Never use camelCase for classes or data attributes.
- Always use camelCase for ids.
- Always utilise HTML5 semantics ([Info 1](https://codepen.io/mi-lee/post/an-overview-of-html5-semantics) + [Info 2](http://diveinto.html5doctor.com/semantics.html)).
- You can use simple HTML here or a template engine.
- Use bootstrap [components](https://getbootstrap.com/docs/4.0/components/)/[utilities](https://getbootstrap.com/docs/4.0/utilities/) if possible.
- Utilise meaningful data attributes to pass data from HTML to JS.

### 2.3 Build

- Use [Webpack](https://webpack.js.org/) as the build tool and module bundler.
- Bundle the app to output a single JS and a single CSS file.
- If you use the newest features from a languages (i.E. ES6 features) make sure to think about [backwards compatibility](#43-testing).
- If you decided to use a template engine make sure to compile the files here.

### 2.4 Javascript

- Use [jQuery Coding Standards](http://lab.abhinayrathore.com/jquery-standards/) if you want to use jQuery.
- Use a meaningful file structure with a single app entry point.
- Utilise [ES6 classes](http://2ality.com/2015/02/es6-classes-final.html) for the Datepicker component.
  - Although you shouldn't use a library for the Datepicker itself you are allowed to use one for datetime handling.
- Use ajax to filter the results by date (either jQuery or plain JS).
- Keep in mind to split HTML template and JS logic.
- For information on how to document your JavaScript code, see [http://usejsdoc.org/](http://usejsdoc.org/).
- We use the ESLint library to lint our code. You can find a configuration file [here](https://github.com/LottaLeben/frontend-test/blob/master/eslint.json).

### 2.5 SCSS

- Use bootstrap [theming](https://getbootstrap.com/docs/4.0/getting-started/theming/) for component, color scheme and font styling.
  - Alternatively you can also use [Bootstrap Material](https://fezvrasta.github.io/bootstrap-material-design/)
- Use bootstrap card component to display the teaser data.
- Provide user feedback for the filter interaction and different states of the UI (active, hover).
- Use general styling coding standards - [https://sass-guidelin.es/](https://sass-guidelin.es/).
- Always avoid [Magic numbers](https://www.codereadability.com/magic-numbers-in-css/).
- Always use REM Units (Media queries excluded) as described [here](https://snook.ca/archives/html_and_css/font-size-with-rem)
- Use SCSS documentation as described [here](http://sassdoc.com/annotations/).
- We use the stylelint library to lint our code. You can find a configuration file [here](https://github.com/LottaLeben/frontend-test/blob/master/stylelint.json).

In our daily development lifecycle we enforce those guidelines and code is only deployed/shipped if continuous integration tests pass. We will do the same with your provided code.

## 3. Contribution

There are two ways of taking part in this test/challenge:

1. Send your GitHub username to dev@lottaleben.de and i'll provide you with a repository within our organisation.
2. Create a public repository and add dev@lottaleben.de to it.

## 4. Challenge briefing

The goal is to create and finally provide an event overview filterable by day as an html page.

This is what the submitted package should be able to do (from the user perspective):

- Start the html page in a browser.
- See an overview of all events as teasers (recurring dates too) starting with the newest event in a monthly view (no past dates).
- Use a Datepicker to filter the overview without reload.

### 4.1 Data structure

The events will be provided as a JSON object from an [external url](). Events can have the following data:

- Title
- Description
- Image (Optional)
- Start (date and time as timestamp)
- End (date and time as timestamp)
- Recurrence (none, daily, monthly, yearly)
- Costs/entrance fees
- External link (i.E. for event website)
- Venue (name + address data)
- Category

The event data should be clearly visible inside the teaser. Event images are stored in the same directory.
Optional fields should only be displayed if they are filled.

### 4.2 Frontend

You should decide on a simple color scheme and layout for your page. Navigation, logo and footer are not necessary.
The job here is to create a template with styling which will initially be filled with all events that take place in the current month. This should happen via JavaScript.
How you display the above mentioned event data inside the teaser is entirely up to you. The page should be fully responsive.

**Datepicker/Filter**:

- The datepicker should consist of a monthly view of selectable days for the current year.
- It should be possible to navigate between months to select a date from the future.
- By clicking on a day the teaser overview should be limited via AJAX to only show results from that day (Passed dates should not be selectable).

**Teaser Overview**:

- Layout should consist of teaser cards for the events.
- The events should be displayed by month - it should be possible to navigate between the months.
- The data should only be available for the current year.

### 4.3 Testing

Testing is a big part of the general frontend development process. We have certain requirements for browsers and devices that must be passed so an item can be approved.
That is why we have provided you with a list of said requirements.

**Desktop**:

- Mozilla Firefox
- Google Chrome
- Apple Safari
- Microsoft Internet Explorer/Edge

**Mobile**:

- Apple Safari
- Google Chrome

Make sure to use the latest version of the browsers stated above.

**Devices**:

The application should at least work on the following devices:

- Samsung Galaxy S9
- iPhone 6/7/8/X
- Samsung Galaxy Note 9
- iPad
- iPad Pro
- Desktop Devices (Windows, Mac, Linux) >= 1200px
