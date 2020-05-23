<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Inventory | Transactions</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css">
    <link rel="stylesheet" href="assets/css/modal.css">
    <script src="assets/js/jquery.min.js" charset="utf-8"></script>
    <script src="js/requests.js" charset="utf-8"></script>
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
        <li ><a href="product"><i style="color: white" class="fa fa-database"></i> Products</a></li>
        <li class="active"><a href="transactions"><i style="color: white" class="fa fa-history"></i> Transactions</a></li>
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
      <h2 id="page-title"><i class="fa fa-history"></i> Transactions</h2>
      <hr style="width: 97%;float:left">
      <br>
      <div class="form-container" id="form-container">
        <input type="search" name="" value="" placeholder="Search Here">
        <select id="filter" class="" name="">
          <option value="">All</option>
          <option value="">Classification</option>
          <option value="">Product Name</option>
          <option value="">Quantity</option>
          <option value="">Total Price</option>
        </select>

        <button type="button" id="addButton"name="button"><i class="fa fa-print"></i> Print Report</button>
      </div>
      <div class="card-box-lg">
        <!--Table Start-->
        <div class="" id="table-container">
          <table border="0" id="dataTable">
              <tr id="thead">
                <th>Transaction Number <i class="fa fa-sort" id="sort-button" onclick=""></i></th>
                <th>Store Name <i class="fa fa-sort" onclick=""></i></th>
                <th>Date <i class="fa fa-sort" onclick=""></i></th>
                <th>Total Price <i class="fa fa-sort" onclick=""></i></th>
                <th>Action</th>
              </tr>
              <tbody id="data">

              </tbody>
            <tr id="thead">
              <th>Transaction Number <i class="fa fa-sort" id="sort-button" onclick=""></i></th>
              <th>Store Name <i class="fa fa-sort" onclick=""></i></th>
              <th>Date <i class="fa fa-sort" onclick=""></i></th>
              <th>Total Price <i class="fa fa-sort" onclick=""></i></th>
              <th>Action</th>
            </tr>
          </table>
        </div><!--table-container-end-->
      </div>

      <!-- The Modal -->
      <div id="product-list-modal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <strong>Transaction #:</strong> 1111111111<br><br>
          <strong><i class="fa fa-list"></i> Product List</strong>
          <hr style="width:100%;float:left;">
          <div class="" id="table-container" style="margin: 4% 0 0 0">
            <table border="0" id="dataTable">
              <tr id="thead">
                <th>Serial Number <i class="fa fa-sort" id="sort-button" onclick=""></i></th>
                <th>Product Name <i class="fa fa-sort" onclick=""></i></th>
                <th>Quantity <i class="fa fa-sort" onclick=""></i></th>
                <th>Total Price <i class="fa fa-sort" onclick=""></i></th>
              </tr>
              <tbody>
                <tr>
                  <td>1111111111</td>
                  <td>Coca Cola</td>
                  <td>100</td>
                  <td><strong>PHP</strong> 10.00</td>
                </tr>
                <tr>
                  <td>2111111111</td>
                  <td>Coca Cola</td>
                  <td>100</td>
                  <td><strong>PHP</strong> 10.00</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>


      <script src="assets/js/modal.js" charset="utf-8"></script>
    </div><!--main-container-end-->
  </body>
</html>
