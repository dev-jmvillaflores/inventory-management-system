<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Inventory | Products</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css">
    <link rel="stylesheet" href="assets/css/modal.css">
    <script src="assets/js/jquery.min.js" charset="utf-8"></script>
    <script src="js/products.js" charset="utf-8"></script>

  </head>
  <body>

    <aside class="sidebar">
      <div class="" id="user-container">
        <img id="user-image" src="assets/img/default_male.png" alt="" width="40px">
        <h5 id="user-access">Administrator</h5>
      </div>
      <hr style="border: .4px solid #4c4c4c; width: 90%">

      <ul id="menu">
        <li><a href="dashboard"><i style="color: white" class="fa fa-line-chart"></i> Dashboard</a></li>
        <li class="active"><a href="product"><i style="color: white" class="fa fa-database"></i> Products</a></li>
        <li><a href="transactions"><i style="color: white" class="fa fa-history"></i> Transactions</a></li>
        <li><a href="setting"><i style="color: white" class="fa fa-gear"></i> Setting</a></li>
      </ul>
      <hr style="border: .3px solid #4c4c4c; width: 90%">
      <ul id="menu">
        <li><a href="dashboard"><i style="color: white" class="fa fa-sign-out"></i> Logout</a></li>
      </ul>
      <div class="" id="brand-container">
        <strong>iKahon</strong><br>
        <small>Inventory System</small>
      </div>
    </aside>


    <div class="container">
      <h2 id="page-title"><i class="fa fa-database"></i> Products</h2>
      <hr style="width: 97%;float:left">
      <br>
      <div class="form-container" id="form-container">
        <input type="search" id="keyword" name="" value="" placeholder="Search Here">
        <select id="filter" class="" name="">
          <option value="">All</option>
          <option value="">Classification</option>
          <option value="">Product Name</option>
          <option value="">Quantity</option>
          <option value="">Total Price</option>
        </select>
        <button type="button" id=""name="button"><i class="fa fa-print"></i> Print Report</button>
        <button type="button" id="addButton"name="button" onclick="addItem()"><i class="fa fa-plus"></i> Add Item</button>

      </div>

      <div class="card-box-lg">
        <h4 style="margin-top:5px;margin-bottom:5px"><i class="fa fa-list"></i> Product List</h4>
        <hr style="width:100%;float:left;">
        <!--Table Start-->
        <div class="" id="table-container">
          <table border="0" id="dataTable">
              <tr id="thead">
                <th>Serial Number <i class="fa fa-sort" id="sort-button" onclick=""></i></th>
                <th>Product Name <i class="fa fa-sort" onclick=""></i></th>
                <th>Price <i class="fa fa-sort" onclick=""></i></th>
                <th>Quantity <i class="fa fa-sort" onclick=""></i></th>
                <th>Total Price <i class="fa fa-sort" onclick=""></i></th>
                <th>Action</th>
              </tr>
            <tbody id="data">

            </tbody>
            <tr id="thead">
              <th>Serial Number <i class="fa fa-sort" id="sort-button" onclick=""></i></th>
              <th>Product Name <i class="fa fa-sort" onclick=""></i></th>
              <th>Price <i class="fa fa-sort" onclick=""></i></th>
              <th>Quantity <i class="fa fa-sort" onclick=""></i></th>
              <th>Total Price <i class="fa fa-sort" onclick=""></i></th>
              <th>Action</th>
            </tr>
          </table>
        </div><!--table-container-end-->
      </div>
      <script src="assets/js/modal.js" charset="utf-8"></script>
        <!-- The Modal -->
        <div id="add-item-modal" class="modal">
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Add Product</h3>
            <hr style="width:95%;float:left;">
            <form class="" method="post" id="add-product-form">
              <label for="">Serial Number</label><br>
              <input type="text" id="serial_number" maxlength="8" required name="serial_number" value="" placeholder="xxxxxxxx" onkeypress="return event.charCode >= 48 && event.charCode <= 57">  <span id="verify"></span><br>
              <label for="">Product Name</label><br>
              <input type="text" id="product_name" required name="product_name" value="" placeholder="Enter Product Name"><br>
              <label for="">Product Quantity</label><br>
              <input type="text" id="product_quantity" required onkeypress="return event.charCode >= 48 && event.charCode <= 57"  name="product_quantity" value="" ><br>
              <label for="">Product Price</label><br>
              <input type="text" id="product_price" required name="product_price" value="" placeholder="Enter Product Price">
              <br>
              <button type="submit" id="add-product" class="submit-button">Add Product</button>
            </form>
          </div>
        </div>

        <div id="update-item-modal" class="modal">
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close_2">&times;</span>
            <h3>Update Product</h3>
            <hr style="width:95%;float:left;">
            <form class="" method="post" id="update-product-form">
              <label for="">Serial Number</label><br>
              <input type="text" id="u_serial_number" required disabled  maxlength="8" name="serial_number" onkeypress="return event.charCode >= 48 && event.charCode <= 57"> <span id="verify"></span><br>
              <label for="">Product Name</label><br>
              <input type="text" id="u_product_name" required name="product_name" value="" placeholder="Enter Product Name"><br>
              <label for="">Product Quantity</label><br>
              <input type="text" id="u_product_quantity" required onkeypress="return event.charCode >= 48 && event.charCode <= 57" name="product_quantity" value="" ><br>
              <label for="">Product Price</label><br>
              <input type="text" id="u_product_price" required name="product_price" value="" placeholder="Enter Product Price">
              <br>
              <button type="submit" id="update-product" >Update Product</button>
            </form>
          </div>
        </div>

    </div><!--main-container-end-->
  </body>
</html>
