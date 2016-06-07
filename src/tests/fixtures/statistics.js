import { addToCollection } from './_polyfill.js'

function addStatistic (statistics, count, description, startedAt) {
  return addToCollection(statistics, {
    count: count,
    description: description,
    startedAt: startedAt.toISOString()
  })
}

var statistics = addStatistic({}, 0, 'coffee(s) drank', new Date())
statistics = addStatistic(statistics, 10, 'belly rub(s) given to my dog', new Date('2016-05-01T00:00:00'))
statistics = addStatistic(statistics, 1, 'time(s) my wife understood what I was talking about', new Date('2011-08-07T13:00:00'))

export default statistics
