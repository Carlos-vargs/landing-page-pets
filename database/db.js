import allData from './data'

class Database {
    constructor() { }

    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const asArray = Object.values(allData)
                await randomDelay()
                resolve(asArray)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const randomDelay = () =>
    new Promise((resolve) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random() * (max - min + 1)) + min

        setTimeout(resolve, delay)
    })

export default Database