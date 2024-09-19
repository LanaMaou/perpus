import { useEffect, useState } from "react";
import axios from "axios";

function Buku() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios
            .get("/api/buku")
            .then((response) => setDatas(response.data.data))
            .catch((error) => console.error("Error fetching API:", error));
        console.log(datas);
    }, []);
    return (
        <>
            <center>
                <div>SELAMAT DATANG DI HALAMAN BUKU</div>
                <div className="w-full px-5 py-3 bg-teal-200">
                    {datas.map((value, index) => (
                        <ul
                            key={`${value.id}-${index}`}
                            className="mb-3 text-start"
                        >
                            <li key={`${value.judul}-${index}`}>
                                {value.judul}
                            </li>
                            <li key={`${value.penulis}-${index}`}>
                                {value.penulis}
                            </li>
                            <li key={`${value.tahun_terbit}-${index}`}>
                                {value.tahun_terbit}
                            </li>
                        </ul>
                    ))}
                </div>
            </center>
        </>
    );
}

export default Buku;
