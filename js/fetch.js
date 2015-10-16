$( document ).ready(function() {
    var xmlHttp = createXmlHttpRequestObject();

    function createXmlHttpRequestObject(){
      var xmlHttp;
      if (window.ActiveXObject){
        try{
          xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
        }catch (e){
          xmlHttp = false;
        }
      }else {
        try {
          xmlHttp = new XMLHttpRequest();
        } catch (e) {
          xmlHttp = false;
        }
      }

      if(!xmlHttp)
        alert("Cant create the object");
      else {
        return (xmlHttp);
      }
    }



      if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        app = encodeURIComponent(document.getElementById('app-name').innerHTML);
        xmlHttp.open("GET", 'https://marketplace.firefox.com/api/v2/apps/app/' + app + '/', true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
      }
    

    function handleServerResponse(){
      if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200 ){
          var arr = JSON.parse(xmlHttp.responseText);
          document.getElementById("author").innerHTML = (arr.author);
          document.getElementById("size").innerHTML = (arr.file_size);

          //document.getElementById("data").innerHTML = (arr.computedString);
        }else {
          alert('something went wrong');
        }
      }
    }
});
