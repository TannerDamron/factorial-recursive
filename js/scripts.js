$(document).ready(function(){
  $("form#factorial").submit(function(event){
    event.preventDefault();
    var x =parseInt($("#userNumber").val());

    function factorial(x) {
      if (x < 0) return;
      if (x === 0) return 1;
      return x * factorial(x - 1);
      }
    alert(factorial(x));
  });
});
