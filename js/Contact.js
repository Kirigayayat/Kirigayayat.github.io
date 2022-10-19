function validasi(){
    nama = form.nama.value;
    email = form.email.value;
    message = form.message.value;

    if(nama == "" || email == "" || message == ""){
        alert("Isi kolom tidak boleh kosong");
    } else {
        alert("Pesan telah terkirim");
        location.replace("Contact.html");
    }
}

