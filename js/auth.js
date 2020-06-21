var apiUrl = 'http://localhost/api.inventory/api/Auth/';

$(document).ready( function(){

  $("#login-form").submit( function(e){
    e.preventDefault();
      var user = $("#username").val();
      var pass = $("#password").val();
      var loginData = {
        username:user,
        password:pass
      };
  //  console.log(JSON.stringify(loginData));
    $.ajax({
      url:apiUrl+'login-user.php.',
      method: "POST",
    //  data:JSON.stringify(loginData),
      data:loginData,
      dataType: "JSON",
      success: function(response){
        console.log(response);
      },
      error: function(error){
        console.log(error);
      }

    });
  });
});
