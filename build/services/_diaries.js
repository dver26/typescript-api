"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const diaryEntries = [
    {
        id: 1,
        date: '2017-01-01',
        weather: types_1.Weather.Rainy,
        visibility: types_1.Visibility.Poor,
        comment: "Pretty scary flight, I'm glad I'm alive"
    },
    {
        id: 2,
        date: '2017-04-01',
        weather: types_1.Weather.Sunny,
        visibility: types_1.Visibility.Good,
        comment: "Everything went better than expected, I'm learning much"
    },
    {
        id: 3,
        date: '2017-04-15',
        weather: types_1.Weather.Windy,
        visibility: types_1.Visibility.Good,
        comment: "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        id: 4,
        date: '2017-05-11',
        weather: types_1.Weather.Cloudy,
        visibility: types_1.Visibility.Good,
        comment: 'I almost failed the landing but I survived'
    }
];
exports.default = diaryEntries;
