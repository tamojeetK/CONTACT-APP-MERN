# CONTACT-APP-MERN

## Description

This project is a React application that utilizes React Router for client-side routing. It provides various routes for different pages, such as home, login, register, create contact, display all contacts, and edit contact. The application also uses context providers for authentication and displaying toast notifications.

The main goal of this project is to demonstrate how to create a multi-page application with React and manage routing using React Router. It serves as a starting point for building more complex applications that require navigation between different pages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Components](#components)


## Installation

To install the project and its dependencies, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/tamojeetK/CONTACT-APP-MERN.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CONTACT-APP-MERN
   ```

3. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

4. Start the server: 

   ```bash
   npm start
   ```

5. Open another terminal and navigate to the frontend folder:

   ```bash
   cd frontend
   ```

6. Install the dependencies: `npm install`
7. Start the frontend: `npm start`
8. Open your browser and go to http://localhost:3000

This will install all the necessary packages specified in the `package.json` file.

## Usage

To start the React application, use the following command:

```bash
npm start
```

This command will start the development server and open the application in your default web browser at [http://localhost:3000](http://localhost:3000). You can now navigate through the different pages of the application.

The application is built with React and utilizes React Router for managing the routing. Each page is represented by a React component and is rendered based on the corresponding route. The application uses context providers to manage authentication and toast notifications.

## Routes

The application defines the following routes:

- `/`: Renders the Home component, which serves as the homepage of the application.
- `/login`: Renders the Login component, where users can log in to access restricted features.
- `/register`: Renders the Register component, where new users can register an account.
- `/create`: Renders the CreateContact component, allowing users to create a new contact.
- `/mycontacts`: Renders the AllContact component, which displays all the user's contacts.
- `/edit/:id`: Renders the EditContact component, where users can edit the details of a specific contact identified by the `id` parameter.

These routes are defined using the React Router `Route` component, and they are rendered within a `Switch` component. The `Switch` component ensures that only one route is rendered at a time, matching the first route that matches the current URL.

## Components

The application is composed of the following components:

- `Layout`: A reusable layout component that provides a common structure and styling for all pages. It includes a header, footer, and content area.
- `Home`: The homepage component that displays a welcome message and provides links to other pages.
- `Login`: The login page component that allows users to authenticate themselves by providing their credentials.
- `Register`: The registration page component where new users can create an account by providing their details.
- `CreateContact`: The page component for creating a new contact. It includes a form where users can enter contact details such as name, email, and phone number.
- `AllContact`: The page component that displays all the user's contacts in a tabular format.
- `EditContact`: The page component for editing a specific contact. It pre-fills the form with the contact's current details and allows users to update them.

These components are organized in a modular way, making it easy

 to understand and maintain the codebase. Each component is responsible for its specific functionality and can be reused across different parts of the application.
***
