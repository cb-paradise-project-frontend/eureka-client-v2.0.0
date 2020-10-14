const Scale = {};

Scale.List = [
  0,
  5,
  10,
  20,
  50,
  100,
  200,
  500,
  1000,
  1500,
  2000,
  5000,
  9999,
];

Scale.Max = Scale.List.length - 1;
Scale.Min = 1;

export default Scale;
