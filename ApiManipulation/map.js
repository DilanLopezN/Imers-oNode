import { getPeople } from './service.js'
async function main() {
  try {
    const { results } = await getPeople('a')
    const larsFamily = results.filter(item => {
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })
    const names = larsFamily.map(person => person.name)
    console.log(names)
  } catch (error) {
    console.error(error)
  }
}
main()
