let buton = document.querySelector(".btn");
buton.addEventListener("click", () => {
    // Adım-1:HTML etiketi olarak aldık:
    let toastDiv = document.querySelector(".toast");

    // Adım-2:Bootstrap nesnesi haline çevirdik:
    let toast = new bootstrap.Toast(toastDiv);

    // Adım-3: BS nesnesini kullanarak açtık
    toast.show();
});