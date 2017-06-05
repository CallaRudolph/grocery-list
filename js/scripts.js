$(function(){
  $("#groceryList").submit(function(event){
      event.preventDefault();
    $("#groceryList").hide();
    $(".groceries").show();


    // var groceries = ["#first", "#second", "#third", "#fourth"];

    var kinds = ["dairy", "produce", "bakery", "toiletries"];
    var groceries = kinds.map(function(kind) {
      return $("input#" + kind).val().toUpperCase();
    });
    
    var groceries = groceries.sort()

    counter = 0

    groceries.forEach(function(){
      $("ul#list").append("<li>" + groceries[counter] + "</li>")
      counter += 1
    })
  });
});
