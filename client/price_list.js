Template.price_list.helpers({
 price: function() {
  return PriceList.find({}, {sort: {_id: -1}, limit: 5});
 }
});
