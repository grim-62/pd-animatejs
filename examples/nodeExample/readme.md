# Using pd-animatejs Library with Node Project

This README provides a step-by-step guide on how to integrate and use the `pd-animatejs` library in a webpack project. `pd-animatejs` is a library that provides various effects for enhancing user interfaces.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

1. Node.js and npm (Node Package Manager)
2. Basic understanding of node

## Step 1: Create a Webpack Project

1. Install the `generate-webpack` library globally using the following command:

   ```bash
   npm install -g generate-webpack
   ```

2. Generate a new webpack project using `generate-webpack`:

   ```bash
   generate-webpack ProjectName
   ```

3. Open the generated project in your preferred integrated development environment (IDE). We recommend using Visual Studio Code (VSCode).

## Step 2: Install and Use pd-animatejs

1. In the terminal, navigate to the root of your generated project.
2. Install the `pd-animatejs` library using npm:

   ```bash
   npm install pd-animatejs
   ```

3. In the `src` folder (located in the root of your project), open the `index.js` file.
4. Import the `pd-animatejs` library at the top of the `index.js` file:

   ```javascript
   import pd from 'pd-animatejs';
   ```

5. You can now utilize the effects provided by `pd` in your project. For example:

   ```javascript
   // Example usage of pd effect
   pd.mouseFollower();
   ```

## Step 3: Build and Run

1. After importing and using `pd-animatejs` in your project, you can build your webpack project using the following command:

   ```bash
   npm run build
   ```

2. Open the generated `dist` folder and locate the `index.html` file.
3. Open the `index.html` file in a web browser to see the effects applied by the `pd-animatejs` library.

## Conclusion

Congratulations! You have successfully integrated and used the `pd-animatejs` library in a webpack project. You can explore and utilize various effects provided by the library to enhance the user experience of your web application.

For more information and documentation about the available effects and customization options, please refer to the official documentation of the `pd-animatejs` library.

**Note:** This README provides a basic example of using the `pd-animatejs` library in a webpack project. Depending on your project's complexity and requirements, you may need to adjust the configurations and usage accordingly.
