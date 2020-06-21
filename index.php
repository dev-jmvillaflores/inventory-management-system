<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Inventory | Login</title>
  </head>
  <style media="screen">
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
box-sizing: border-box;
}

.login h6 {
opacity: 0.6;
margin: 0;
letter-spacing: 1px;
text-transform: uppercase;
}

.login h2 {
  letter-spacing: 1px;
  margin: 10px 0;
}

.login-info{
  background-color: #204369;
  color: #fff;
  padding: 20px;
}
.login-info a {
  color: #fff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
}


input{
  width: 100%;
  padding: 12px 20px;
  margin: 1% 0 3% 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
#login-btn{
  background-color: #204369;
    width: 29%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #fff;
}
@media screen and (max-width: 699px) {

  html{
    height: 100vh;
    margin: 0;
    padding: 0;
    }
    body{
    margin: 10px;
  }
  .login {
    background-color: #204369;
    display: block;
    max-width: 100%;
    max-height: 100vh;
    width: 700px;
    border-radius: 10px;
  }
  .login-info{
    background-color: #204369;
    color: #fff;
    display: block;
    margin: 0;
    position: absolute;
    border-radius: 10px;
  }
  .login-form {
    padding: 10% 8% 10% 8%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    width: 100%;
    height: 65vh;
    background-color: #f2f2f2;
    display: block;
    top:170px;
    border-radius: 10px;
  }
  .login-container {
    max-width: 100vw;
    max-height: 100vh;
    display: block;
    margin: 5% 0 0 0;
  }

}
@media screen and (min-width: 700px){
  .login {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    max-width: 100%;
    margin: 20px;
    overflow: hidden;
    width: 700px;
  }
  .login-info {
    background-color: #204369;
    color: #fff;
    padding: 30px;
    max-width: 250px;
    display: block;
  }

  .login-info a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
    text-decoration: none;
  }
  body {
    background-color: #f2f2f2;
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
  .login-form {
    padding: 5% 8% 5% 8%;
    position: relative;
    width: 100%;
    display: block;
  }
}
  </style>
  <body>
    <div class="login-container">
    	<div class="login">
    		<div class="login-info">
    			<h2>iKahon</h2>
    			<h3>Inventory Management System</h3>
    			<a href="#">Products Preview<i class="fas fa-chevron-right"></i></a>
    		</div>
    		<div class="login-form">
    			<h2 style="margin-bottom: 5%">Login</h2>
          <form class="" action="index.html" method="post">
            <label for="">Username</label><br>
            <input type="text" name="" value="" placeholder="Enter Username"><br>
            <label for="">Password</label><br>
            <input type="password" name="" value="" placeholder="Enter Password"><br>
            <button type="submit" id="login-btn"name="button">Login</button>
          </form>

    		</div>
    	</div>
    </div>
  </body>
</html>
