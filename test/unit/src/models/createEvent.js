const expect = require('chai').expect
const Event = require('../../../../src/models/eventModel');

let preEvent;
beforeEach(() => {
  preEvent = new Event({ id: '1A', user: 'cemobas', eventId: 'foo1', venueId: 'venue1', cap: 3, price: {amount: 3, currency: 'pln' }, short: 'I am short', description: 'I am long', tags:['foo', 'bar'], date: Date.now() });
  preEvent.save()
      .then(() => console.log('Event 1A saved.'));
});
afterEach(() => preEvent.remove({}));

describe('Event management', () => {
  it('creates an event', () => {
      const event = new Event({ id: '2A', user: 'cemobas', eventId: 'foo2', venueId: 'venue1', cap: 3, price: {amount: 3, currency: 'pln' }, short: 'I am short', description: 'I am long', tags:['foo', 'bar'], date: Date.now() });
      return event.save() //takes some time and returns a promise
          .then(() => {
            expect(!event.isNew).to.equal(true);
          });
  });

  it('finds event by eventId', () => {
    return Event.findOne({ eventId: 'foo1' })
        .then((e) => {
            expect(preEvent.eventId === 'foo1').to.equal(true);
        });
  })
});
