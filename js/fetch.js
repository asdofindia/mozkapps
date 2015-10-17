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
          fs = convert (arr.file_size);
          document.getElementById("author").innerHTML = (arr.author);
          document.getElementById("size").innerHTML = (fs).toFixed(2);
          document.getElementById("icon").innerHTML = "<img src=" + arr.icons[64] + ">";

          //document.getElementById("data").innerHTML = (arr.computedString);
        }else {
          alert('something went wrong');
        }
      }
    }

    function convert(f) {
      fkb=(f/1024*100000)/100000;
      fmb=(f/1048576*100000)/100000;
      fgb=(f/1073741824*100000)/100000;
      ftb=(f/1099511627776*100000)/100000;

      if(fgb >= 1){
        document.getElementById("sizedesc").innerHTML = " GB";
        return fgb;
      }
      else if(fmb >= 1){
        document.getElementById("sizedesc").innerHTML = " MB";
        return fmb;
      }
      else if(fkb >= 1){
        document.getElementById("sizedesc").innerHTML = " KB";
        return fkb;
      }
      else{
        document.getElementById("sizedesc").innerHTML = " Bytes";
        return f;
      }
    }
});
