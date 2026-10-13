 
 
 let nama = "";
        let jmlPilihan = 0;
        let arrPilihan = [];
        let pilihanTerpilih = "";
        let email = "";

    
        function prosesStep1() {
            let inputNama = document.getElementById("txtNama").value;
            let inputJml = Number(document.getElementById("txtJml").value);
            let err = document.getElementById("errStep1");

        
            if (inputNama == "") {
                err.innerText = "Nama tidak boleh kosong!";
                return;
            }
            if (inputJml <= 0 || isNaN(inputJml)) {
                err.innerText = "Jumlah pilihan harus berupa angka lebih dari 0!";
                return;
            }

            err.innerText = "";
            nama = inputNama;
            jmlPilihan = inputJml;

        
            document.getElementById("txtNama").disabled = true;
            document.getElementById("txtJml").disabled = true;

            // Generate Inputan Teks Pilihan Menggunakan Perulangan FOR
            let htmlContainer = "";
            for (let i = 1; i <= jmlPilihan; i++) {
                htmlContainer = htmlContainer + "<label>Pilihan " + i + " :</label><br>";
                htmlContainer = htmlContainer + "<input type='text' id='pilih_" + i + "'><br><br>";
            }

            document.getElementById("containerPilihan").innerHTML = htmlContainer;
            document.getElementById("step1").style.display = "none";
            document.getElementById("step2").style.display = "block";

        }

    
        function prosesStep2() {
            let err = document.getElementById("errStep2");
            arrPilihan = []; // Reset Array

        
            for (let i = 1; i <= jmlPilihan; i++) {
                let nilaiPilihan = document.getElementById("pilih_" + i).value;
                if (nilaiPilihan == "") {
                    err.innerText = "Semua Pilihan harus diisi!";
                    return;
                }
                arrPilihan.push(nilaiPilihan);
            }

            err.innerText = "";

        
            for (let i = 1; i <= jmlPilihan; i++) {
                document.getElementById("pilih_" + i).disabled = true;
            }

        
            let htmlRadio = "";
            for (let i = 0; i < arrPilihan.length; i++) {
                htmlRadio = htmlRadio + "<input type='radio' name='rbPilihan' value='" + arrPilihan[i] + "'> " + arrPilihan[i] + "<br>";
            }

            document.getElementById("containerRadio").innerHTML = htmlRadio;
            document.getElementById("step2").style.display = "none";
            document.getElementById("step3").style.display = "block";
        }

    
        function prosesStep3() {
            let err = document.getElementById("errStep3");
            let elemenRadio = document.getElementsByName("rbPilihan");
            let terpilih = false;

            // Cek Radio Button mana yang dipilih menggunakan Loop WHILE
            let index = 0;
            while (index < elemenRadio.length) {
                if (elemenRadio[index].checked) {
                    pilihanTerpilih = elemenRadio[index].value;
                    terpilih = true;
                    break;
                }
                index++;
            }

            
            if (terpilih == false) {
                err.innerText = "Silakan pilih salah satu opsi!";
                return;
            }

            err.innerText = "";

        
            for (let i = 0; i < elemenRadio.length; i++) {
                elemenRadio[i].disabled = true;
            }
            document.getElementById("step3").style.display = "none";
            document.getElementById("step4").style.display = "block";
        }

    
        function prosesStep4() {
            let inputEmail = document.getElementById("txtEmail").value;
            let err = document.getElementById("errStep4");

        
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(inputEmail)) {
                err.innerText = "Format email tidak valid! (Contoh: nama@domain.com)";
                return;
            }

            err.innerText = "";
            email = inputEmail;
            document.getElementById("txtEmail").disabled = true;

            
            let teksDaftarPilihan = "";
            for (let i = 0; i < arrPilihan.length; i++) {
                if (i == 0) {
                    teksDaftarPilihan = arrPilihan[i];
                } else if (i == arrPilihan.length - 1) {
                    teksDaftarPilihan = teksDaftarPilihan + ", dan " + arrPilihan[i];
                } else {
                    teksDaftarPilihan = teksDaftarPilihan + ", " + arrPilihan[i];
                }
            }

            
            let hasilAkhir = "Hallo, nama saya " + nama + ", email " + email + " saya mempunyai sejumlah " + jmlPilihan + " pilihan yaitu " + teksDaftarPilihan + ", dan saya memilih " + pilihanTerpilih;

            document.getElementById("txtHasil").innerText = hasilAkhir;
            document.getElementById("step4").style.display = "none";
            document.getElementById("stepHasil").style.display = "block";
        }