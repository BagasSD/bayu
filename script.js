var dataRental = [];

function showDataMobil() {
  var listDataMobil = document.getElementById("table");

  listDataMobil.innerHTML = "";

  if (dataRental.length === 0) {
    listDataMobil.innerHTML = "<p class='text-center'>Belum ada data</p>";
  } else {
    for (let i = 0; i < dataRental.length; i++) {
      var btnEdit =
        "<a href='#' class='bg-blue-500 px-4 py-2 rounded text-white' onclick='editMobil(" +
        i +
        ")'>Edit</a>";
      var btnHapus =
        "<a href='#' class='bg-red-700 px-4 py-2 rounded text-white' onclick='deleteMobil(" +
        i +
        ")'>Hapus</a>";
      listDataMobil.innerHTML += `<div class="border-2 print:border-0 px-3 py-6 rounded-lg">
            <div class="grid grid-cols-2">
                <div>
                    Nama
                </div>
                <div>
                  ${dataRental[i].nama_pelanggan}
                </div>
            </div>
            <hr class='py-3'/>
            <div class="grid grid-cols-2">
                <div>
                    Mobil
                </div>
                <div>
                  ${dataRental[i].merek_mobile}
                </div>
            </div>
            <hr class='py-3'/>
            <div class="grid grid-cols-2">
              <div>
                  Lama Pinjam
              </div>
              <div>
                ${dataRental[i].jumlah_hari} Hari
              </div>
            </div>
            <hr class='py-3'/>
            <div class="grid grid-cols-2">
                <div>
                    
                </div>
                <div>
                    Total ${formatRupiah(dataRental[i].total, "Rp ")}
                </div>
            </div>
            <hr class='py-3'/>
            <div class="flex space-x-3 justify-end print:hidden">
                ${btnEdit}
                ${btnHapus}
            </div>
        </div>`;
    }
  }

  const sum = dataRental.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  const totalBayarPrint = document.getElementById("total_bayar_in_print");

  totalBayar.innerHTML = formatRupiah(sum, "Rp");
  totalBayarPrint.innerHTML = formatRupiah(sum, "Rp");
}

function cekTotalHarga(namaPelanggan, jenisMobil, jumlah_hari) {
  if (jenisMobil == "Mazda" && jumlah_hari > 5) {
    const total = jumlah_hari * 1000000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Mazda" && jumlah_hari > 2) {
    const total = jumlah_hari * 3000000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Mazda") {
    const total = jumlah_hari * 3500000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Toyota" && jumlah_hari > 10) {
    const total = jumlah_hari * 2000000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Toyota" && jumlah_hari > 2) {
    const total = jumlah_hari * 2500000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Toyota") {
    const total = jumlah_hari * 3000000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  }
  //
  else if (jenisMobil == "Porsce" && jumlah_hari > 10) {
    const total = jumlah_hari * 210000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Porsce" && jumlah_hari > 2) {
    const total = jumlah_hari * 2600000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Porsce") {
    const total = jumlah_hari * 3100000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  }
  //
  else if (jenisMobil == "Bmw" && jumlah_hari > 10) {
    const total = jumlah_hari * 3100000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Bmw" && jumlah_hari > 2) {
    const total = jumlah_hari * 3600000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Bmw") {
    const total = jumlah_hari * 4100000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  }
  //
  else if (jenisMobil == "Chev" && jumlah_hari > 10) {
    const total = jumlah_hari * 2400000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Chev" && jumlah_hari > 2) {
    const total = jumlah_hari * 2800000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Chev") {
    const total = jumlah_hari * 3700000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  } else if (jenisMobil == "Ford") {
    const total = jumlah_hari * 10000000;
    return {
      nama_pelanggan: namaPelanggan,
      merek_mobile: jenisMobil,
      jumlah_hari: jumlah_hari,
      total: total,
    };
  }
}

function addMobil() {
  var namaPelanggan = document.getElementById("nama_pelanggan").value;
  var jenisMobil = document.getElementById("jenis_mobil").value;
  var jumlah_hari = document.getElementById("jumlah_hari").value;
  if (namaPelanggan === "") {
    alert("Maaf nama pelanggan tidak boleh kosong");
  } else {
    const newDataRental = cekTotalHarga(namaPelanggan, jenisMobil, jumlah_hari);
    dataRental.push(newDataRental);
    showDataMobil();
  }
}

function editMobil(id) {
  var newjumlah_hari = prompt("Edit jumlah_hari", dataRental[id].jumlah_hari);
  const detailNamaPelanggan = dataRental[id].nama_pelanggan;
  const detailJenisMobil = dataRental[id].merek_mobile;

  const newDataRental = cekTotalHarga(
    detailNamaPelanggan,
    detailJenisMobil,
    newjumlah_hari || dataRental[id].jumlah_hari
  );

  dataRental[id] = newDataRental;
  showDataMobil();
}

function deleteMobil(id) {
  dataRental.splice(id, 1);
  showDataMobil();
}

function formatRupiah(angka, prefix) {
  let number_string = angka.toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}

showDataMobil();
