export class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = 100;
        this.attack = 40;
        this.defence = 16;
    }
}


export default class Team {
    constructor() {
        this.teamArr = []
    }

    add(obj) {
        this.teamArr.push(obj)
    }

    [Symbol.iterator]() {
        let index = 0;
        const current = this.teamArr
        return {
            next() {
                return {
                    value: current[index], done: index++ >= current.length
                }
            }
        }
    }
}


const test = new Character('Rail', 'Human')
const test1 = new Character('Igor', 'Camel')
const test2 = new Character('Oleg', 'Demon')
const newTeam = new Team()
newTeam.add(test)
newTeam.add(test1)
newTeam.add(test2)

for (let character of newTeam) {
    console.log(`Player: ${character.name} <--> Role: ${character.type}`)
}

