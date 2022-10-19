function validate(){
    var username = document.getElementById('name');
    var password = document.getElementById('password');

    if(username.value == "kirigayayat" || password.value == "yayat1234"){
     return true;
    } else {
     alert("User atau Password anda salah");
     return false;
    }
}