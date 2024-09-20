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
                <div className="w-10/12 px-5 py-3 ">
                    {datas.map((value, index) => (
                        <ul
                            key={`${value.id}-${index}`}
                            className="w-1/2 h-32 px-5 py-2 mb-3 text-blue-100 bg-blue-700 rounded-md text-start bg-opacity-90"
                        >
                            <li>{value.judul}</li>
                            <li>{value.penulis}</li>
                            <li>{value.tahun_terbit}</li>
                        </ul>
                    ))}
                </div>
            </center>
        </>
    );
}

export default Buku;
