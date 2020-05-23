var apiUrl = 'http://localhost/api.inventory/api/Products/';

$(document).ready( function() {
  load_data();

  var serial_number = $("#serial_number").val();
  var product_name = $("#product_name").val();
  var product_price = $("#product_price").val();
  var product_quantity = $("#product_quantity").val();

  $("#addButton").click( function(e){
    document.getElementById('serial_number').setAttribute("value", "");
    document.getElementById('product_name').setAttribute("value", "");
    document.getElementById('product_price').setAttribute("value", "");
    document.getElementById('product_quantity').setAttribute("value", "");
  });

/*-------------------------------------------------------------------*/
  $('#add-product-form').submit( function(e){
    event.preventDefault();
    var form = $(this);

    var postData = {
      serial_number: serial_number,
      product_name: product_name,
      product_quantity: product_price,
      product_price: product_quantity
    }
    console.log(JSON.stringify(postData));
    $.ajax({
        url: apiUrl+"add-product.php",
        method: "POST",
        data: JSON.stringify(postData),
        dataType: "json",
        success: function(response){
             console.log(response);
              load_data();
        },
      error: function(error){
          console.log(error);
        }
    });
    location.reload(true);
  });//end-add-product-form-submit

  /*-------------------------------------------------------------------*/

  $('#update-product-form').submit( function(e){
    event.preventDefault();

    var updateData = {
        serial_number: $("#u_serial_number").val(),
        product_name:$("#u_product_name").val(),
        product_quantity:$("#u_product_quantity").val(),
        product_price:$("#u_product_price").val()
    }
    console.log(JSON.stringify(updateData));
    $.ajax({
        url: apiUrl+"update-product.php",
        method: "POST",
        data: JSON.stringify(updateData),
        dataType: "json",
        success: function(response){
             console.log(response);
              load_data();
        },
      error: function(error){
          console.log(error);
        }
    });
    location.reload(true);
  });//end-add-product-form-submit

/*-------------------------------------------------------------------*/

$('#serial_number').keyup( function(e){
    var serial_no = $('#serial_number').val();
    console.log(serial_no);
      console.log("OK");
      $.ajax({
        url: apiUrl+"verify-sn.php",
        method: "GET",
        data: {serial_number:serial_no},
        dataType: "JSON",
        success: function(response){
          console.log(response);
          if(serial_no.length == 8){
             if(response.Found=='0'){
                var check = `<i id="c"class='fas fa-check valid'></i>`;
                document.getElementById('verify').innerHTML = check;
              }
                if(response.Found=='1'){
                var ubcheck = `<i id="c"class='fas fa-times not-valid'></i>`;
                document.getElementById('verify').innerHTML = ubcheck;
              }
          }else{
            document.getElementById('c').style.display = "none";
          }
        },
        error: function(error){
          console.log(error)
        }

      });

});

  /*-------------------------------------------------------------------*/
  $("#keyword").keyup( function(e){
    var keyword = $("#keyword").val();
    console.log(keyword);
    $.ajax({
      type: "GET",
      url: apiUrl+"search-product.php",
      data: {keyword:keyword},
      dataType: "json",
      success: function (data) {
      console.log(data);

        if(data.Found=='0'){
          let no_found = `<tr><td colspan='6' style='color: #a1a1a1'>No Product Found</td></tr>`;
          document.getElementById('data').innerHTML = no_found;
        }else{
          let rowData = '';
          let totalPrice = 0;
          console.log("asd"+data.data[0].product_quantity);
          for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i].product_quantity);
            if(data.data[i].product_quantity=="0"){
              rowData += `<tr style='color:red'>
                              <td id='serial-number'>${data.data[i].serial_number}</td>
                              <td>${data.data[i].product_name}</td>
                              <td><strong>PHP</strong> ${data.data[i].product_price}</td>
                              <td>${data.data[i].product_quantity}</td>
                              <td><strong>PHP</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                              <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                            </tr>`;
            }else {
              rowData += `<tr>
                              <td id='serial-number'>${data.data[i].serial_number}</td>
                              <td>${data.data[i].product_name}</td>
                              <td><strong>PHP</strong> ${data.data[i].product_price}</td>
                              <td>${data.data[i].product_quantity}</td>
                              <td><strong>PHP</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                              <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                            </tr>`;
            }

          }
          document.getElementById('data').innerHTML = rowData;
        }

      },
      error: function(error){
        console.log(error);
      }
    });
  }); //end-search-function

}); //end-ready-function


/*-------------------------------------------------------------------*/
function delete_product(id){
  location.reload(true);
  fetch(apiUrl+`delete-product.php?id=${id}`).then( function(response){
    return response.json();
  }).then( function(data){
    console.log(data);
  });
}


/*-------------------------------------------------------------------*/

function open_update_form_modal(id){
  var modal = document.getElementById("update-item-modal");
  var span = document.getElementsByClassName("close_2")[0];
  modal.style.display = "block";
  console.log(id);
  read_single_product(id);

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function read_single_product(id){
  fetch(apiUrl+`read-single-product.php?id=${id}`).then( function(response){
    return response.json();
  }).then( function(data){
    console.log(data);


    document.getElementById('u_serial_number').setAttribute("value", `${data.serial_number}`);
    document.getElementById('u_product_name').setAttribute("value", `${data.product_name}`);
    document.getElementById('u_product_price').setAttribute("value", `${data.product_price}`);
    document.getElementById('u_product_quantity').setAttribute("value", `${data.product_quantity}`);
  });
}


/*-------------------------------------------------------------------*/
function load_data(){
  $.ajax({
      type: "GET",
      url: apiUrl+"read-products.php",
      dataType: "json",
      success: function (data) {
      console.log(data);

        if(data.product_quantity=='0'){
          //$('#data').append(`<tr><td colspan='6' style='color: #a1a1a1'>No Product Recorded Yet</td></tr>`);
          let no_found = `<tr><td colspan='6' style='color: #a1a1a1'>No Product Recorded Yet</td></tr>`;
          document.getElementById('data').innerHTML = no_found;
        }else{
          let rowData = '';
          let totalPrice = 0;
          for (var i = 0; i < data.data.length; i++) {
            if(data.data[i].product_quantity=="0"){
              rowData += `<tr style='color:#bf2419'>
                              <td id='serial-number'>${data.data[i].serial_number}</td>
                              <td>${data.data[i].product_name}</td>
                              <td><strong>PHP</strong> ${data.data[i].product_price}</td>
                              <td>${data.data[i].product_quantity}</td>
                              <td><strong>PHP</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                              <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                            </tr>`;
            }else {
              rowData += `<tr>
                              <td id='serial-number'>${data.data[i].serial_number}</td>
                              <td>${data.data[i].product_name}</td>
                              <td><strong>PHP</strong> ${data.data[i].product_price}</td>
                              <td>${data.data[i].product_quantity}</td>
                              <td><strong>PHP</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                              <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                            </tr>`;
            }
          }
          //$('#data').append(rowData);
          document.getElementById('data').innerHTML = rowData;
        }
      },
      error: function(error){
        console.log(error);
      }
  });
} //end-load-data-function
