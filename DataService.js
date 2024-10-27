import * as d3 from 'd3';

export const loadData = async () => {
  const data = await d3.csv('/data/ev_data.csv');
  return data;
};