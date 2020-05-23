<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Inventory | Login</title>
    <link rel="stylesheet" href="assets/css/index.css">
    <script src="assets/js/jquery.min.js" charset="utf-8"></script>
    <script src="js/auth.js" charset="utf-8"></script>
  </head>
  <body>
    <div class="container">
      <div class="">
        <h2 style="color: #fff">Login</h2>
      </div>
      <form id="login-form">
        <div class="formcontainer">
          <label for="">Username</label>
          <input type="text" name="username" id="username" value="" placeholder="Enter your username" required>
        </div>
        <div class="formcontainer">
          <label for="">Password</label>
          <input type="password" name="password" id="password"value="" autocomplete="" placeholder="************" required>
        </div>
        <div class="formcontainer">
          <button type="submit" name="button">Login</button>
        </div>
      </form>
    </div>

  </body>
</html>
