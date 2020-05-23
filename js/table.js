var apiUrl = 'localhost/api.invetory/api/table/';

$(document).ready( function (){
  //load all the data on the table
  fetchData();

  $('#add-item').submit( function(event){
    event.preventDefault();
    var postData = $('#add-form').serialize();
    console.log(postData);
    $.ajax({
        url: apiUrl+"add-product.php",
        method: "POST",
        data: JSON.stringfy(postData),
        dataType: "json",
        success: function(response){
              fetchData();
        },
        error: function(error){
          console.log(error);
        }

    });
  });

  $('#delete-data').click( function(){
    var postData = {
      serial : serial
    }
    console.log(postData);
        $.ajax({
            url: apiUrl+"delete-product.php",
            method: "POST",
            data: JSON.stringfy(postData),
            dataType: "json",
            success: function(response){
                  fetchData();
            },
            error: function(error){
              console.log(error);
            }
        });
  });


});



function fetchData(){
  $.ajax({
      type: "GET",
      url: apiUrl+"read-product.php",
      dataType: "json",
      data: JSON.stringfy(postData),
      success: function (data) {
        console.log(data);

        if(data.data.lenth == 0){
          $('tbody').append(`<tr><td colspan='6' style='color: #a1a1a1'>No Product Recorded Yet</td></tr>`);
        }else{
          let rowData = '';
          let totalPrice = 0;
          for (var i = 0; i < data.data.length; i++) {
            rowData += `<tr>
                            <td id='serial-number'>${data.data[i].Serial_Number}</td>
                            <td>${data.data[i].Product_Name}</td>
                            <td>PHP ${data.data[i].Price}</td>
                            <td>${data.data[i].Quantity}</td>
                            <td>PHP ${totalPrice}</td>
                            <td><button type='button' class='action-button' name='button'><i class='fa fa-reorder'></i></button><button onclick='deleteData(${data.data[i].id})' type='button' class='action-button' id='delete-item' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                          </tr>`;
          }
          $('tbody').append(rowData);
        }

      },
      error: function(error){
        console.log(error);
      }
  });
}
