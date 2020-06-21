var apiUrl = 'http://localhost/api.inventory/api/';

function post(url, data){
  var res = "";
  $.ajax({
      url: apiUrl+`${url}.php`,
      method: "POST",
      data: JSON.stringify(data),
      dataType: "json",
      success: function(response){
        return reponse;
      },
    error: function(error){
        return error;
      }
  });
  return res;
}

function get(url, data){
  var res = "";
  $.ajax({
    url: apiUrl+`${url}.php`,
    method: "GET",
    data: data,
    dataType: "JSON",
    async: false,
    success: function(response){
      console.log(response);
      res = response;
    },
    error: function(error){
      console.log(error);
        res = error;
    }
  });
  return res;
}

$(document).ready( function() {
  load_data();

/*-------------------------------------------------------------------*/
  $('#add-product-form').submit( function(e){
    e.preventDefault();
    var response = post('Products/add-product', {
      serial_number: $("#serial_number").val(),
      product_name:  $("#product_name").val(),
      product_quantity: $("#product_price").val(),
      product_price: $("#product_quantity").val()
    });
    console.log(response);
    document.getElementById('serial_number').setAttribute("value", "");
    document.getElementById('product_name').setAttribute("value", "");
    document.getElementById('product_price').setAttribute("value", "");
    document.getElementById('product_quantity').setAttribute("value", "");
    location.reload(true);
  });//end-add-product-form-submit

  /*-------------------------------------------------------------------*/

  $('#update-product-form').submit( function(e){
    e.preventDefault();
    var response = post('Products/update-product', {
        serial_number: $("#u_serial_number").val(),
        product_name: $("#u_product_name").val(),
        product_quantity:$("#u_product_quantity").val(),
        product_price: $("#u_product_price").val()
    });
    location.reload(true);
  });//end-add-product-form-submit

/*-------------------------------------------------------------------*/

$('#serial_number').keyup( function(e){
      var response = get('Products/verify-sn',{
          serial_number:serial_no = $('#serial_number').val()
      });
      console.log(response);
      if(serial_no.length == 8){
         if(response.Found=='0'){
            var check = `<i id="c"class='fas fa-check valid' style="margin-bottom:5px"> Okay</i>`;
            document.getElementById('verify').innerHTML = check;
          }
            if(response.Found=='1'){
            var ubcheck = `<i id="c"class='fas fa-times not-valid' style="margin-bottom:5px"> Already Existing</i>`;
            document.getElementById('verify').innerHTML = ubcheck;
          }
      }else{
        document.getElementById('c').style.display = "none";
      }
});

  /*-------------------------------------------------------------------*/
  $("#keyword").keyup( function(e){
    console.log(keyword);
    var data = get('Products/search-product', {
      keyword: $("#keyword").val()
    });
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
                          <td><strong>&#8369</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                          <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                        </tr>`;
        }else {
          rowData += `<tr>
                          <td id='serial-number'>${data.data[i].serial_number}</td>
                          <td>${data.data[i].product_name}</td>
                          <td><strong>PHP</strong> ${data.data[i].product_price}</td>
                          <td>${data.data[i].product_quantity}</td>
                          <td><strong>&#8369</strong> ${parseFloat(data.data[i].product_price)*+(data.data[i].product_quantity)}</td>
                          <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                        </tr>`;
        }
      }
      document.getElementById('data').innerHTML = rowData;
    }
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
  fetch(apiUrl+`Products/read-single-product.php?id=${id}`).then( function(response){
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
  var data = get('Products/read-products', '');
  console.log(data);
  if(data.product_quantity=='0'){
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
                        <td><strong>&#8369</strong> ${data.data[i].product_price}</td>
                        <td>${data.data[i].product_quantity}</td>
                        <td><strong>&#8369</strong> ${parseFloat(data.data[i].product_price)}</td>
                        <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                      </tr>`;
      }else{
        rowData += `<tr>
                        <td id='serial-number'>${data.data[i].serial_number}</td>
                        <td>${data.data[i].product_name}</td>
                        <td><strong>&#8369</strong> ${data.data[i].product_price}</td>
                        <td>${data.data[i].product_quantity}</td>
                        <td><strong>&#8369</strong> ${parseFloat(data.data[i].product_price)*data.data[i].product_quantity}</td>
                        <td><button type='button' id='action-button' name='button' onclick='open_update_form_modal(${data.data[i].ID})'><i class="far fa-edit"></i></button><button onclick='delete_product(${data.data[i].ID})' type='button' id='action-button' val='${data.data[i].id}' name='button'><i class='fa fa-remove'></i></button></td>
                      </tr>`;
      }
    }
    document.getElementById('data').innerHTML = rowData;
  }
} //end-load-data-function
