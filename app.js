// $(document).ready(function(){
//     $("button").click(function(){


//         var em=$("#email").val();
//         var pwd=$("#pwd").val();
//         alert(`${em} this is your email address press ok to confrim`);
//         alert(`${pwd} this is password press ok to confrim`);
//         var myJSON_em = JSON.stringify(em);
//         var myJSON_pwd = JSON.stringify(pwd);
//       $.post("https://reqres.in/api/register",
//       {
//         myJSON_em,
//        myJSON_pwd
//       },
//       function(data,status){
//         alert("sbhfjdshfjs");
//           console.log(status);
//         alert("Data: " + data + "\nStatus: " + status);
//       }
//       );
//     });
//   });


$(document).ready(function(){
  $("button").click(function(){


      var em=$("#email").val();
      var pwd=$("#pwd").val();
      alert(`${em} this is your email address press ok to confrim`);
      alert(`${pwd} this is password press ok to confrim`);
      
      $.ajax({
        type: 'POST',
        url: '/https://reqres.in/api/register/',
        data: '{"name":"jonas"}', // or JSON.stringify ({name: 'jonas'}),
        success: function(data) { alert('data: ' + data); },
        contentType: "application/json",
        dataType: 'json'
    });
  });
});



