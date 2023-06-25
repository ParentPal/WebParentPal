import React, { useState } from "react";

const LogAktivitas = () => {
  const [modeTampilan, setModeTampilan] = useState("interaksiUmum");
  const [aktivitas, setAktivitas] = useState([
    {
      tanggal: "10 Agustus 2023",
      akun: "Jhon",
      aktivitas: [
        {
          kegiatan: "Membuat postingan artikel (Terpublis)",
          judul: "Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba",
          terpilih: false,
        },
        {
          kegiatan: "Membuat postingan artikel (Terpublis)",
          judul: "Judul Aktivitas 2",
          terpilih: false,
        },
        {
          kegiatan: "Membuat postingan artikel (Terpublis)",
          judul: "Judul Aktivitas 3",
          terpilih: false,
        },
      ],
    },
    {
      tanggal: "7 Agustus 2023",
      akun: "Mitha",
      aktivitas: [
        {
          kegiatan: "Menjawab pertanyaan dari",
          user: "Evita",
          judul: "Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba",
          terpilih: false,
        },
        {
          kegiatan: "Menjawab pertanyaan dari",
          user: "Evita",
          judul: "Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba",
          terpilih: false,
        },
        {
          kegiatan: "Menjawab pertanyaan dari",
          user: "Evita",
          judul: "Menumbuhkan Rasa Percaya Diri pada Anak, Tips yang Bisa Anda Coba",
          terpilih: false,
        },
      ],
    },
  ]);

  const [selectedAktivitas, setSelectedAktivitas] = useState(null);
  const [hapusSemua, setHapusSemua] = useState(false);
  const [urutanTerbaru, setUrutanTerbaru] = useState(true);

  const hapusSemuaAktivitas = () => {
    const updatedAktivitas = [...aktivitas];
    updatedAktivitas.forEach((tanggal) => {
      tanggal.aktivitas = tanggal.aktivitas.filter((item) => !item.terpilih);
    });
    setAktivitas(updatedAktivitas);
  };

  const toggleHapusSemua = () => {
    setHapusSemua(!hapusSemua);
    const updatedAktivitas = [...aktivitas];
    updatedAktivitas.forEach((tanggal) => {
      tanggal.aktivitas.forEach((item) => {
        item.terpilih = !hapusSemua;
      });
    });
    setAktivitas(updatedAktivitas);
  };

  const hapusAktivitas = (tanggalIndex, aktivitasIndex) => {
    const updatedAktivitas = [...aktivitas];
    updatedAktivitas[tanggalIndex].aktivitas.splice(aktivitasIndex, 1);
    setAktivitas(updatedAktivitas);
  };

  const toggleTerpilih = (tanggalIndex, aktivitasIndex) => {
    const updatedAktivitas = [...aktivitas];
    updatedAktivitas[tanggalIndex].aktivitas[aktivitasIndex].terpilih = !updatedAktivitas[tanggalIndex].aktivitas[aktivitasIndex].terpilih;
    setAktivitas(updatedAktivitas);
  };

  const tampilkanHistoriAkun = () => {
    setSelectedAktivitas({
      tanggal: "Bulan Ini",
      akun: "John Doe",
      aktivitas: [
        {
          kegiatan: "Anda mengubah kata sandi Anda",
          judul: "Kata Sandi",
          terpilih: false,
        },
        {
          kegiatan: "Anda memverifikasi akun anda",
          judul: "Akun",
          terpilih: false,
        },
      ],
    });
    setModeTampilan("historiAkun");
  };

  const tampilkanInteraksiUmum = () => {
    setSelectedAktivitas(null);
    setModeTampilan("interaksiUmum");
  };

  const toggleUrutan = () => {
    setUrutanTerbaru(!urutanTerbaru);
  };

  return (
    <div>
      <h2 style={{ color: "#07294A", fontSize: "28px", fontWeight: "bold" }}>Log Aktivitas Anda</h2>
      <div style={{ color: "#6C757E", fontSize: "18px", fontWeight: "bold" }}>
        {modeTampilan === "interaksiUmum" ? (
          <button disabled style={{ color: "#07294A" }}>
            Interaksi Umum
          </button>
        ) : (
          <button onClick={tampilkanInteraksiUmum}>Interaksi Umum</button>
        )}
        {modeTampilan === "historiAkun" ? (
          <button disabled style={{ color: "#07294A" }}>
            Histori Akun
          </button>
        ) : (
          <button onClick={tampilkanHistoriAkun}>Histori Akun</button>
        )}
      </div>
      {selectedAktivitas ? (
        <div>
          {urutanTerbaru ? (
            <button onClick={toggleUrutan} style={{ background: "#ffffff" }}>
              Balik Terlama
            </button>
          ) : (
            <button onClick={toggleUrutan} style={{ background: "#ffffff" }}>
              Balik Terbaru
            </button>
          )}
          <h3>{selectedAktivitas.tanggal}</h3>
          {selectedAktivitas.aktivitas.map((item, aktivitasIndex) => (
            <div key={aktivitasIndex}>
              <input type="checkbox" checked={item.terpilih} onChange={() => toggleTerpilih(0, aktivitasIndex)} style={{ marginRight: "5px", background: "#ffffff" }} />
              <span>{item.tanggal}</span>
              <span>{item.kegiatan}</span>
              <img src="" alt="Hapus" onClick={() => hapusAktivitas(0, aktivitasIndex)} style={{ cursor: "pointer", marginLeft: "10px" }} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div style={{ background: "#FFFFFF", width: "800px", height: "55px", borderRadius: "10px", marginBottom: "14px" }}>
            <input type="checkbox" checked={hapusSemua} onChange={toggleHapusSemua} style={{ marginLeft: "25px", marginTop: "17px", width: "18px", height: "18px" }} />
            <label style={{ color: "#07294A", fontWeight: "bold", marginLeft: "10px", fontSize: "18px" }}>Semua</label>
            <button onClick={hapusSemuaAktivitas} style={{ float: "right", background: "#DE3F44", color: "#FFFFFF", width: "70px", height: "35px", borderRadius: "5px", marginTop: "8px", marginRight: "20px" }}>
              Hapus
            </button>
          </div>
          <div style={{ background: "#FFFFFF", width: "1000px", height: "200px", borderRadius: "10px" }}>
            {aktivitas.map((tanggal, tanggalIndex) => (
              <div key={tanggalIndex}>
                <h3>{tanggal.tanggal}</h3>
                {tanggal.aktivitas.map((item, aktivitasIndex) => (
                  <div key={aktivitasIndex}>
                    <input type="checkbox" checked={item.terpilih} onChange={() => toggleTerpilih(tanggalIndex, aktivitasIndex)} style={{ marginRight: "5px", background: "#ffffff" }} />
                    <span>{item.tanggal}</span>
                    <span>{tanggal.akun}</span>
                    <span>{item.kegiatan}</span>
                    <span>{item.user}</span>
                    <span>{item.judul}</span>
                    <img src="" alt="Hapus" onClick={() => hapusAktivitas(tanggalIndex, aktivitasIndex)} style={{ cursor: "pointer", marginLeft: "10px" }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogAktivitas;
