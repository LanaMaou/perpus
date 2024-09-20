import React, { useState } from "react";
import axios from "axios";

export default function BukuForm() {
    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [tahunTerbit, setTahunTerbit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            judul,
            penulis,
            deskripsi,
            tahunTerbit,
        };

        axios
            .post("/buku", data)
            .then((response) => {
                console.log("Data berhasil dikirim:", response.data);
            })
            .catch((error) => {
                console.error("Terjadi kesalahan:", error);
            });
    };

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center w-full gap-5 mb-5"
                >
                    <label>
                        Judul:
                        <input
                            type="text"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                        />
                    </label>
                    <label>
                        Penulis:
                        <input
                            type="text"
                            value={penulis}
                            onChange={(e) => setPenulis(e.target.value)}
                        />
                    </label>
                    <label>
                        Deskripsi:
                        <input
                            type="text"
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                        />
                    </label>
                    <label>
                        Tahun Terbit:
                        <input
                            className="w-[30rem]"
                            type="text"
                            value={tahunTerbit}
                            onChange={(e) => setTahunTerbit(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
