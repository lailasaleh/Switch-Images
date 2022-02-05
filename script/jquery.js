$("#imgOne").click(function(){
  let v1 = $("#main").attr('src');
  let v2 = $("#imgOne").attr('src');
  
  $("#main").attr('src',v2);
  $("#imgOne").attr('src',v1);
 
});

$("#imgTwo").click(function(){
    let v1 = $("#main").attr('src');
    let v2 = $("#imgTwo").attr('src');
    
    $("#main").attr('src',v2);
    $("#imgTwo").attr('src',v1);
   
});

$("#imgThree").click(function(){
    let v1 = $("#main").attr('src');
    let v2 = $("#imgThree").attr('src');
    
    $("#main").attr('src',v2);
    $("#imgThree").attr('src',v1);
   
});