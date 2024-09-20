import React, { useEffect, useState } from "react";
import axios from "axios";
import Sebuku from "@/Components/Sebuku";
import BukuForm from "@/Components/BukuForm";

function Buku() {
    const [datas, setDatas] = useState([]);

    const munculkanDatas = () => {
        console.log(datas);
    };

    useEffect(() => {
        axios
            .get("/api/buku")
            .then((response) => setDatas(response.data.data))
            .catch((error) => console.error("Error fetching API:", error));
    }, []);
    return (
        <>
            <center>
                <br />
                <div>SELAMAT DATANG DI HALAMAN BUKU</div>
                <br />

                <div className="flex flex-wrap items-center justify-start w-full gap-5 px-5 py-3">
                    {datas.map((value, index) => (
                        <React.Fragment key={`${value.id}-${index}`}>
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

<<<<<<< HEAD
                <BukuForm />
=======
                {/* <BukuForm /> */}
>>>>>>> 0ed7339493826ba7910da1d1a53d66571f16cd35
            </center>
        </>
    );
}

export default Buku;
