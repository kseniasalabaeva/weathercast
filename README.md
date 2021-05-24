## Weather Forecast

**This is a page showing weather forecasts for different cities**

**Some explanations**

I've added 12 hours to the selected date in the "weather in the past" block. This was to display the weather in the daytime, since the default time value from the input is 00:00:00. Because of this the weather for the current day is not displayed if the current time is less than 12:00 (GMT + 3). That makes sense, since the block is called "weather in the PAST" :)

The app is cross-browser and works as expected on all checked devices. For tests I used Safari, Google Chrome, Mozilla, Opera.

Things I didn't have time to do, but planning to implement in the future:

- Create custom input and select. I've tested implementation on several devices and it seems to me that it looks not so bad. But it's certainly need to be improved.
- Change the display of weather cards in the mobile version in the block "7 days weather". At the moment, one card and buttons "arrow-left" and "arrow-right" are displayed on mobile devices instead of horizontal scroll
- I also had a plan to add unit tests (written with jest) and e2e tests (written with cypress)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
