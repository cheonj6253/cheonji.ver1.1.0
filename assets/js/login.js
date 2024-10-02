  document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("backbutton", function() {
      window.history.back();
    });
  });


    function filter(){

        var value, name1, item, i;

        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("item");

        for(i=0;i<item.length;i++){
          name1 = item[i].getElementsByClassName("name1");
          if(name1[0].innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "flex";
          }else{
            item[i].style.display = "none";
          }
        }
      }
	  function filter2(){

        var value, whd, item, i;

        value = document.getElementById("value2").value.toUpperCase();
        item = document.getElementsByClassName("item");

        for(i=0;i<item.length;i++){
          whd = item[i].getElementsByClassName("whd");
          if(whd[0].innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "flex";
          }else{
            item[i].style.display = "none";
          }
        }
      }
