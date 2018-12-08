# css-in-js-stress 😅
### To run the tests online go here: https://monkey3310.github.io/css-in-js-stress/#/
Bunch of CSS-in-JS libraries compared for render times.

Currently implemented following libraries for comparison:
* Native CSS solution (no lib)
* Styled Components (2 implementations)

## How it works

For each implementation, app will render in the browser `Container` with defined number of children `Components`. If re-renders are specified, props of those components will change N times (so they would re-render N times). 

For mesuring multiple full render cycles, after finishing rendering a cycle, app will navigate to next render iteration (full page reload)

All time mesurements are stored between session in `localStorage` and can be obtained in form of CSV file with raw data of all runs for analitics.

## How to run on my local

Clone the repo, `yarn install` the dependencies & `yarn build` to get the production bundle.

## Hey, seems like library X is running on old version 🤔 Can it get updated?

Sure, just ping me, or even better - fork the repo, update the dependencies and create a PR! 😊
