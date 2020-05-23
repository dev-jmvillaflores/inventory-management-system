function viewProducts(id){
  // Get the modal
  var modal = document.getElementById("product-list-modal");

  // Get the button that opens the modal
  var btn = document.getElementById("action-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal

  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    location.reload();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
    }
  }
}

function addItem(){


  // Get the modal
  var modal = document.getElementById("add-item-modal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal

  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  document.getElementById('serial_number').setAttribute("value", "");
  document.getElementById('product_name').setAttribute("value", "");
  document.getElementById('product_price').setAttribute("value", "");
  document.getElementById('product_quantity').setAttribute("value", "");
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
  }
}
