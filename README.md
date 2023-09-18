## Calculation of time between dates

### Description

Calculation of time between dates

### Usage

```js
const calculateTime = require('calculate-time');

const lng = { year: 'il', month: 'ay', day: 'gün' };

const birthDate = '1990-01-01';

const age = calculateTime(birthDate, null, lng);

console.log(age);
```

```js
const calculateTime = require('calculate-time');

const experienceTime_1 = '2010-01-01';
const experienceTime_2 = '2015-01-01';

const experience = calculateTime(experienceTime_1, experienceTime_2);

console.log(experience);
```
