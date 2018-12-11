# css-in-js-stress 😅

### To run the tests online go here: https://matmalkowski.github.io/css-in-js-stress/#/

Bunch of CSS-in-JS libraries compared for render times.

Currently implemented following libraries for comparison:

- Native CSS solution (no lib)
- Styled Components (2 implementations)
- aphrodite
- react-jss (jss)

## Some results

Average times for rendering 1000 components, 500 data points used for first render, 4500 data points used for re-render


| Library                   | Version | First render time | Re-render time |
| ------------------------- | :-----: | ----------------: | -------------: |
| native-css                | -       | 369.9 ms          | 29.1 ms        |
| styled-components (mixed) | v4.1.2  | 414.6 ms          | 46.6 ms        |
| react-jss                 | v8.6.1  | 426.7 ms          | 40.9 ms        |
| aphrodite                 | v2.2.3  | 429.4 ms          | 60.6 ms        |
| styled-components         | v4.1.2  | 455.8 ms          | 50.4 ms        |

## How it works

For each implementation, app will render in the browser `Container` with defined number of children `Components`. If re-renders are specified, props of those components will change N times (so they would re-render N times).

For measuring multiple full render cycles, after finishing rendering a cycle, app will navigate to next render iteration (full page reload)

All time mesurements are stored between session in `localStorage` and can be obtained in form of CSV file with raw data of all runs for analytics.

## How to run on my local

Clone the repo, `yarn install` the dependencies & `yarn build` to get the production bundle.

## Hey, seems like library X is running on old version 🤔 Can it get updated?

Sure, just ping me, or even better - fork the repo, update the dependencies and create a PR! 😊
