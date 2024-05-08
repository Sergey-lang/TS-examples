"use strict";
const key = 'age';
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'Vasia',
    age: 30
};
const userName = getValue(user, 'name');
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(array, key) {
    return array.reduce((acc, item) => {
        const itemKeyValue = item[key];
        let currentItemKeyValue = acc[itemKeyValue];
        if (Array.isArray(currentItemKeyValue)) {
            currentItemKeyValue.push(item);
        }
        else {
            currentItemKeyValue = [item];
        }
        acc[itemKeyValue] = currentItemKeyValue;
        return acc;
    }, {});
}
console.log(group(data, 'group'));
// TYPE OF
let strOrNum = 5;
if (Math.random() > 0.5) {
    strOrNum = 5;
}
else {
    strOrNum = 'srt';
}
if (typeof strOrNum === 'string') {
    // ???
}
let srt2OrNumber;
const user = {
    name: 'Vasia'
};
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
const user1 = {
    name: 'Vasia',
    roles: [],
    permission: {
        endDate: new Date()
    }
};
const nameUser = user1['name']; // JS
const roleNames = 'roles';
const roles = ['admin', 'user', 'super-user'];
