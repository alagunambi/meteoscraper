Template.price_list.helpers({
 price: function() {
  return PriceList.find({}, {sort: {_id: -1}, limit: 5});
 }
});

PriceListFilter = new Meteor.FilterCollections(PriceList, {
  name: "PriceListFC",
  template: 'price_list',
  filters: {
    "trip": {
      title: 'Trip Types',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'optional',
    },
  }, 
  sort:{
    order: ['desc', 'asc'],
    amount0: ['desc', 'asc'],
    amount1: ['desc', 'asc'],
    amount2: ['desc', 'asc'],
    amount3: ['desc', 'asc'],
    amount4: ['desc', 'asc'],
  },
});
