import { useEffect, useState } from "react";
import axios from "axios";
import Sebuku from "@/Components/Sebuku";

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
                        <>
                            <Sebuku
                                key={`${value.id}-${index}`}
                                value={value}
                            />
                        </>
                    ))}
                </div>
            </center>
        </>
    );
}

export default Buku;
