<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Inventory | Dashboard</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/media_queries.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">


  </head>
  <body>
    <aside class="sidebar">
      <div class="" id="user-container">
        <img id="user-image" src="assets/img/default_admin.png" alt="" width="100%">
        <h5 id="user-access">Administrator</h5>
      </div>

      <ul id="menu">
        <li  class="active"><a href="dashboard"><i style="color: white" class="fa fa-line-chart"></i> <span id="menu-list-label">Dashboard</span></a></li>
        <li><a href="product"><i style="color: white" class="fa fa-database"></i> <span id="menu-list-label">Products</span></a></li>
        <li><a href="transactions"><i style="color: white" class="fa fa-history"></i> <span id="menu-list-label">Transactions</span></a></li>
        <li><a href="setting"><i style="color: white" class="fa fa-gear"></i> <span id="menu-list-label">Setting</span></a></li>
      </ul>
      <ul id="menu">
        <li><a href="dashboard"><i style="color: white" class="fa fa-sign-out"></i> <span id="menu-list-label">Logout</span></a></li>
      </ul>
      <div class="" id="brand-container">
        <strong>iKahon</strong><br>
        <small style="font-size: 10px;font-weight: 600;">Inventory Management System</small>
      </div>
    </aside>
    <div class="container">
      <h2 id="page-title"><i class="fa fa-line-chart"></i> Dashboard</h2>
      <hr style="width: 97%;float:left;border: .5px solid  ">
      <br>
        <div class="card-box-row">
          <div class="card-box-column"  >
            <div class="card-box" >
              <h3 >9</h3>
              <label>Products</label>
            </div>
          </div>
          <div class="card-box-column"  >
            <div class="card-box">
              <h3 >5</h3>
              <label>Out of Stocks</label>
            </div>
            </div>
            <div class="card-box-column"  >
            <div class="card-box">
              <h3>1</h3>
              <label>Pending Requests</label>
            </div>
            </div>
        </div>

      <div class="card-box-md" style="margin-right: 15px;">
        <h4 style="margin-top:15px;margin-bottom:5px"><i class="fa fa-truck" style="color: #444444"></i> Pending Requests</h4>
        <hr style="width:100%;float:left;">
        <table id="dataTable">
          <tr id="thead">
            <th>Store Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tbody>
            <tr>
              <td>Tindahan Store</td>
              <td>January 1, 2020</td>
              <td><button type="button" id="action-button"name="button"><i class="fa fa-list"></i></button><button type="button" name="button" id="action-button"><i class="fa fa-remove"></i></button><button type="button" id="action-button"name="button"><i class="fa fa-check"></i></button></td>
            </tr>
          </tbody>
          <tr id="thead">
            <th>Store Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </table>
      </div>

      <div class="card-box-md" >
        <h4 style="margin-top:15px;margin-bottom:5px"><i class="fa fa-level-down" style="color: #444444"></i> Out of Stocks</h4>
        <hr style="width:100%;float:left;">
        <table id="dataTable">
          <tr id="thead">
            <th>Serial Number</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          <tbody>
            <tr>
              <td>12345678</td>
              <td>Milo</td>
              <td>1</td>
              <td> <button type="button" id="action-button"name="button"><i class="fa fa-check"></i></button></td>
            </tr>
          </tbody>
          <tr id="thead">
            <th>Serial Number</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
