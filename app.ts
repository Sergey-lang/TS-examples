// KEY OF
interface IUser {
    name: string;
    age: number;
}

type KeysOfUser = keyof IUser;
const key: KeysOfUser = 'age';


function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user: IUser = {
    name: 'Vasia',
    age: 30
}

const userName = getValue(user, 'name')

// EXAMPLE
interface Data {
    group: number;
    name: string;
}

const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'},
]

interface IGroup<T> {
    [key: string]: T[]
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
    return array.reduce<IGroup<T>>((acc, item) => {
        const itemKeyValue = item[key];
        let currentItemKeyValue = acc[itemKeyValue];
        if (Array.isArray(currentItemKeyValue)) {
            currentItemKeyValue.push(item)
        } else {
            currentItemKeyValue = [item]
        }
        acc[itemKeyValue] = currentItemKeyValue
        return acc;
    }, {})
}

console.log(group<Data>(data, 'group'))

// TYPE OF
let strOrNum: string | number = 5;

if (Math.random() > 0.5) {
    strOrNum = 5
} else {
    strOrNum = 'srt'
}

if (typeof strOrNum === 'string') {
    // ???
}

let srt2OrNumber: typeof strOrNum;

const user = {
    name: 'Vasia'
}
//get type from user ==> get keys from type
type keyOfUser = keyof typeof user;

enum Direction {
    UP,
    Down
}

// get enum names
type d = keyof typeof Direction;

// INDEX OF
interface Role {
    name: string
}

interface Permission {
    endDate: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const user1: User = {
    name: 'Vasia',
    roles: [],
    permission: {
        endDate: new Date()
    }
}

const nameUser = user1['name']; // JS
const roleNames = 'roles';
type rolesType = User['roles']; // TS
type rolesType2 = User[typeof roleNames]; // TS

type roleType = User['roles'][number];
type dateType = User['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const;
type role2Types = typeof roles[number]
