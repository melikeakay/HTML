function kontrol(){
    
    try{
        alert("Bilgiler Gönderiliyor");
 
   }

   catch(err){
       alert("Bilgiler Gönderilemiyor...")
   }
}

function dogrula(){
    var form=document.forms["form-group"];
    var deger=form["isim"].value;

    if(deger==" "){
        alert("Boş bırakamazsınız...");
        return false;
    }
    return true;
}