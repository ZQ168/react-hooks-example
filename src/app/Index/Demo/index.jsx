import React from 'react';

import { DynamicBarChart } from './DynamicBarChart';

import helpers from './helper';
import mocks from './mock';

const App = () => (
  <DynamicBarChart
    barGapSize={10}
    data={helpers.generateData(10, mocks.defaultChart, {
      prefix: 'Iteration',
    })}
    iterationTimeout={100}
    showTitle
    startRunningTimeout={2500}
  />
);

export default App;
