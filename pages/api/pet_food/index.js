import DB from '@database'

async function allPetFood(request, response) {

    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length
    const categories = [
        'beef',
        'fish',
        'food',
        'rewards',
    ]

    response.statusCode = 200
    response.setHeader = ('Content-type', 'application/json')
    response.end(JSON.stringify({ data: allEntries, length, categories }))
}

export default allPetFood