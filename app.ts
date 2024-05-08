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

