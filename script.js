// ==========================
// E-TICKET
// ==========================

document.getElementById("ticketForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Tiket berhasil dipesan!");
});

// ==========================
// AUDIO GUIDE
// ==========================

function playAudio(){

    const audio =
    document.getElementById("audioGuide");

    audio.play();
}

// ==========================
// QR SCANNER BUDAYA
// ==========================

function onScanSuccess(decodedText){

    let hasil =
    document.getElementById("hasilBudaya");

    if(decodedText === "SIGER"){

        hasil.innerHTML = `
        <h3>👑 Mahkota Siger</h3>

        <p>
        Siger merupakan mahkota adat Lampung yang
        melambangkan kehormatan, kebesaran,
        dan identitas masyarakat Lampung.
        </p>

        <img src="mahkota siger.png" width="250">
        `;
    }

    else if(decodedText === "KAIN TAPIS LAMPUNG"){

        hasil.innerHTML = `
        <h3>🧵 Kain Tapis Lampung</h3>

        <p>
        Kain Tapis adalah kain tradisional khas Lampung
        yang dihiasi sulaman benang emas.
        </p>

        <img src="KaintapisLampung.png" width="250">
        `;
    }

    else if(decodedText === "RUMAH ADAT LAMPUNG"){

        hasil.innerHTML = `
        <h3>🏠 Rumah Adat Lampung</h3>

        <p>
        Rumah adat Lampung merupakan bangunan tradisional
        masyarakat Lampung.
        </p>

        <img src="Rumah Adat Lampung.webp" width="250">
        `;
    }

    else if(decodedText === "MENARA SIGER"){

        hasil.innerHTML = `
        <h3>🏛 Menara Siger</h3>

        <p>
        Menara Siger adalah ikon Provinsi Lampung
        yang berada di Bakauheni.
        </p>

        <img src="menarasiger.jpg" width="250">
        `;
    }

    else{

        hasil.innerHTML = `
        <h3>Data Tidak Ditemukan</h3>
        <p>QR Code tidak dikenali sistem.</p>
        `;
    }
}

const scanner =
new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: 250
    }
);

scanner.render(onScanSuccess);

function logout(){

    let konfirmasi = confirm("Apakah Anda yakin ingin logout?");

    if(konfirmasi){

        alert("Logout Berhasil");

        window.location.href = "login.html";
    }
}

function toggleMenu(){

    document
    .getElementById("navbar")
    .classList
    .toggle("active");
}

// Tutup menu setelah klik link
document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        document
        .getElementById("navbar")
        .classList
        .remove("active");

    });

});

function onScanTiket(decodedText){

    let hasil = document.getElementById("hasilTiket");

    console.log(decodedText);

    if(decodedText.trim().toUpperCase() === "TIKET-SIGER-2026"){

        hasil.innerHTML = `
        <h3>✅ Tiket Valid</h3>
        <p>Selamat datang di Menara Siger.</p>
        `;

    }else{

        hasil.innerHTML = `
        <h3>❌ Tiket Tidak Valid</h3>
        <p>Isi QR yang terbaca: ${decodedText}</p>
        `;
    }
}

const tiketScanner =
new Html5QrcodeScanner(
    "readerTiket",
    {
        fps: 10,
        qrbox: 250
    }
);

tiketScanner.render(onScanTiket);