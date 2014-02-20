Meteor.FilterCollections.publish(PriceList, {
  name: 'PriceListFC',
});


Meteor.publish("price_list", function() {
  return PriceList.find();
});
