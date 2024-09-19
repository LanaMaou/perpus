import axios from "axios";
import React, { useEffect, useState } from "react";

const Buku = () => {
    const [dataBuku, setDataBuku] = useState({});

    useEffect(() => {
        axios
            .get("/api/buku")
            .then((response) => setDataBuku(response.data))
            .catch((error) => console.log(error));
    }, []);

    // console.log(dataBuku.data?.map((buku) => buku.judul));
    return (
        <>
            <div>Selamat datang dihalaman Buku</div>
            <div>
                {dataBuku &&
                    dataBuku.data?.map((buku, index) => (
                        <div key={index} className="bg-blue-500 w-1/2">
                            <div>{buku.judul}</div>
                            <div>{buku.penulis}</div>
                            <div>{buku.deskripsi}</div>
                            <div>{buku.tahun_terbit}</div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Buku;
