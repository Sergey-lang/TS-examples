// DECORATORS

interface IUserService {
    users: number;

    getUsersInDB(): number;
}

// @setUserCountAdvanced
// @setUsers(10)
// @setUserCountAdvanced2(10)
@CreatedAt
class UserService implements IUserService {
    users: number = 1000;

    @Log
    getUsersInDB(): number {
        return this.users
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0;
}

function setUserCountAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log(new UserService().getUsersInDB())

// DECORATOR FACTORY

function setUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users;
    }
}

function setUserCountAdvanced2(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        }
    }
}

type CreatedAt = {
    createdAt: Date;
}

function CreatedAt<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

console.log((new UserService() as IUserService & CreatedAt).createdAt)

// METHOD DECORATOR
function Log(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any) => any>) {
    const oldValue = descriptor.value;
    descriptor.value = () => {
        console.log('no error')
    }
}

// Logger decorator example
function Catch({rethrow}: { rethrow: boolean } = {rethrow: true}) {
    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any) => any>) => {
        const method = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                return await method?.apply(target, args)
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message)
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        }
    }
}