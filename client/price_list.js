Template.price_list.helpers({
 price: function() {
  return Policies.find().sort({_id:1}).limit(5);
 } 
});
