## Weather Forecast

**This is a page showing weather forecasts for different cities**

**Some explanations**

I've added 12 hours to the selected date in the "weather in the past" block. This was to display the weather in the daytime, since the default time value from the input is 00:00:00. Because of this the weather for the current day is not displayed if the current time is less than 12:00 (GMT + 3). That makes sense, since the block is called "weather in the PAST" :)

The app is cross-browser and works as expected on all checked devices. For tests I used Safari, Google Chrome, Mozilla, Opera as well as mobile devices.

Things I didn't have time to do, but planning to implement in the future:

- Create custom input and select. I've tested implementation on several devices and it seems to me that it looks not so bad. But it's certainly need to be improved.
- Change the display of weather cards in the mobile version in the block "7 days weather". At the moment, one card and buttons "arrow-left" and "arrow-right" are displayed on mobile devices instead of horizontal scroll
- I had a plan to add unit tests (written with jest) and e2e tests (written with cypress)
- I also forgot to track the state of the backend (when it’s slow, there should be a loader)


## Available Scripts

In the project directory, you can run:

### `yarn install`

The command above will install all dependencies of this project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
