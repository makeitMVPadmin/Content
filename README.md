
# MakeItMVP Launch Academy Starter Repository

Welcome to the MakeItMVP Launch Academy Starter Repository! This repository is designed to provide new junior developers with a structured starting point for their assigned projects. It's built using React and Sass to help you get up and running quickly.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To begin working on your project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/MakeItMVP/LaunchAcademyStarter.git
   ```
````

2. Change your working directory to the cloned repository:

   ```bash
   cd LaunchAcademyStarter
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Add your Firebase config values:

   ```
     1) Create a .env file in the root directory (do not just rename .env.sample)
     2) In Firebase, go to the project you want to connect to
     3) Go to "Project settings"
     4) Scroll down to "Your apps" and select the app you want to connect to
     5) Copy each value to your .env file
     6) Prepend each key with REACT_APP
   ```

5. Add OpenAI Key to .env

   ```
   REACT_APP_OPENAI_API_KEY={Your OpenAI API key}
   ```

6. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to see your project running.

7. Now you're ready to start building your project using the provided structure!

## Project Structure

The project structure is organized as follows:

```
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── ...
│   ├── styles/
│   │   ├── main.scss
│   │   ├── ...
│   ├── index.js
├── public/
│   ├── index.html
│   ├── ...
├── package.json
├── README.md
```

- `src/`: Contains the main source code for your project, including React components and styles.
- `public/`: Contains static assets and your project's HTML template.
- `package.json`: Defines project dependencies and scripts.

Feel free to customize the project structure to fit your specific project requirements.

## Technologies

This starter repository uses the following technologies:

- React: A JavaScript library for building user interfaces.
- Sass: A CSS extension language that adds features like variables, nesting, and more.

You can expand upon these technologies as needed for your project.

## Contributing

We welcome contributions from the community. If you have suggestions or improvements for this starter repository, please open an issue or create a pull request. For more information on how to contribute, check our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).

```

```
