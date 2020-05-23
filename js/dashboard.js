var apiUrl = 'localhost/api.inventory/api/dashboard/';

$(document).ready( function(){
  fetchData();
});

function fetchData(){
  $.ajax({
    url: apiUrl+'read-overview',
    type: "GET",
    data: postData,
    dataType: "json",
    success: function(data){
      console.log(data);

      let pendingReq = '';


      for (var i = 0; i < data.data.length; i++) {
        pendingReq += '';

      }

      $('tbody').append(pendingReq);
    },
    error: function(error){
        console.log(error);
    }
  });
}

function approveReq(e){
  let idReq = e;

  $.ajax({
    url: ,
    data: ,
    dataType: "json",
    success: function(data){
      console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  });
}
