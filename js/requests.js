var apiUrl = 'http://localhost/api.inventory/api/Requests/';
$(document).ready( function(){
load_data();

});

function load_data(){
  $.ajax({
      type: "GET",
      url: apiUrl+"read-requests.php",
      dataType: "json",
      success: function (data) {
      console.log(data);

        /*if(data.product_quantity=='0'){
          //$('#data').append(`<tr><td colspan='6' style='color: #a1a1a1'>No Product Recorded Yet</td></tr>`);
          let no_found = `<tr><td colspan='6' style='color: #a1a1a1'>No Request</td></tr>`;
          document.getElementById('data').innerHTML = no_found;
        }else{
          let rowData = '';
          let totalPrice = 0;
          for (var i = 0; i < data.data.length; i++) {
            rowData += `<tr>
                            <td id='serial-number'>${data.data[i].request_number}</td>
                            <td>${data.data[i].product_name}</td>
                            <td><strong>PHP</strong> ${data.data[i].product_price}</td>
                            <td>${data.data[i].product_quantity}</td>
                            <td><strong>PHP</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                            <td><button type='button' id='action-button' name='button'  onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                          </tr>`;
          }
          //$('#data').append(rowData);
          document.getElementById('data').innerHTML = rowData;
        }*/
      },
      error: function(error){
        console.log(error);
      }
  });
}
