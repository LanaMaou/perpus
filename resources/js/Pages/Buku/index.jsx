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
                <div className=" px-5 py-3 w-10/12">
                    {datas.map((value, index) => (
                        <ul
                            key={`${value.id}-${index}`}
                            className="mb-3 text-start bg-blue-700 bg-opacity-90 px-5 py-2 rounded-md text-blue-100 w-1/2 h-32"
                        >
                            <li>
                                {value.judul}
                            </li>
                            <li>
                                {value.penulis}
                            </li>
                            <li>
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
