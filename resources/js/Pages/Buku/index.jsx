import React, { useEffect, useState } from "react";
import axios from "axios";
import Sebuku from "@/Components/Sebuku";
import BukuForm from "@/Components/BukuForm";
import Tes from "@/Components/tes";

function Buku() {
    const [datas, setDatas] = useState({
        isFetched: false,
        datanya: [{}, {}, {}, {}, {}],
    });

    const munculkanDatas = () => {
        console.log(datas);
    };

    useEffect(() => {
        axios
            .get("/api/buku")
            .then((response) =>
                setTimeout(() => {
                    setDatas({ isFetched: true, datanya: response.data.data });
                }, 1000)
            )
            .catch((error) => console.error("Error fetching API:", error));
    }, []);
    return (
        <>
            <center>
                <br />
                <div>SELAMAT DATANG DI HALAMAN BUKU</div>
                <br />

                <div className="flex flex-wrap content-center justify-center w-full gap-5 px-5 py-3 min-h-[40rem]">
                    {datas.datanya.map((value, index) => (
                        <React.Fragment key={++datas.datanya.length}>
                            <Sebuku value={value} />
                        </React.Fragment>
                    ))}
                </div>
                {/* <button
                    className="block px-3 py-2 transition-all duration-100 ease-in-out bg-green-500 rounded shadow active:scale-95"
                    onClick={munculkanDatas}
                >
                    munculkan Datas
                </button> */}

                <BukuForm />
                <Tes />
            </center>
        </>
    );
}

export default Buku;
