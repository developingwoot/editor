# Sour Mash

A simple project using Electron, React, and Webpack

Clone then Run

`npm install`

If you do not already have the grunt-cli installed Run

`npm install -g grunt-cli`

This is developed using React and TypeScript so you will need to install TypeScript
globally and then link it back to this project.

If you do not have TypeScript installed Run, if already installed skip this step

`npm install -g typescript`

Now we can link it back to this project by running

`npm link typescript`

You also will need to install electron if it is not already installed

`npm install -g electron`

Now you should be able to open two terminals in the first running

`grunt dev`

Once you are at the Waiting... text you can in the other window running

`npm run electron`

The app should then start up.