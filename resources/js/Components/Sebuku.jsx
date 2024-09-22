function Sebuku({
    value = {
        id: null,
        judul: null,
        penulis: null,
        deskripsi: null,
        tahun_terbit: null,
    },
}) {
    function cutText(mydeskripsi, batasText) {
        let deskripsi = mydeskripsi.split(" ");

        if (deskripsi.length > batasText) {
            deskripsi = deskripsi
                .slice(0, batasText)
                .map((value, index) =>
                    value.split("").length > 44
                        ? `${value.split("").slice(0, 35).join("")}...`
                        : value
                );
        } else {
            deskripsi = deskripsi.map((value, index) => {
                return value.split("").length > 44
                    ? `${value.split("").slice(0, 35).join("")}...`
                    : value;
            });
        }
        return deskripsi.length > batasText - 1
            ? `${deskripsi.join(" ")}...`
            : deskripsi.join(" ");
    }

    return (
        <>
            <ul
                className={`shadow-md overflow-hidden shadow-gray-300 flex items-center justify-center text-blue-100 rounded-md w-[29rem] bg-yellow-600 text-start bg-opacity-90 text-sm ${
                    !value.id && "opacity-80"
                }`}
            >
                <li className="flex-[1] bg-slate-400 h-[15rem] flex justify-center items-center p-2">
                    {value.penulis ? (
                        <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-l-lg rounded-r-sm shadow shadow-gray-400">
                            <img
                                className="object-cover h-full"
                                src="https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg"
                                alt="Bumi Tere Liye"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full animate-skeleton-image"></div>
                    )}
                </li>
                <ul className="flex-[2] bg-slate-200 h-[15rem] flex justify-start content-start flex-col text-black relative">
                    <li className="text-lg relative w-full mt-3 mb-2 px-3 font-bold flex justify-start items-end after:transition-all after:duration-500 after:ease-in-out hover:after:w-[90%] after:w-[30%] after:bg-gray-500 after:h-[0.1rem] after:rounded-md after:absolute after:-bottom-1 text-balance">
                        {value.judul || (
                            <div className="w-[15rem] h-[1.5rem] animate-skeleton"></div>
                        )}
                    </li>
                    <li className="w-full h-full px-3 py-1 overflow-hidden text-sm truncate text-start text-balance">
                        {value.deskripsi ? (
                            cutText(value.deskripsi, 10)
                        ) : (
                            <div className="w-[18rem] h-[5rem] animate-skeleton"></div>
                        )}
                    </li>
                    <li className="h-[3rem] px-3 py-2 text-xs flex gap-1 flex-col justify-start items-end bg-red-300">
                        {value.penulis ? (
                            <p>{`by ${value.penulis}.`}</p>
                        ) : (
                            <div className="w-[10rem] h-[1.5rem] animate-skeleton"></div>
                        )}
                        {value.tahun_terbit ? (
                            <p className="font-semibold">{`Published at ${value.tahun_terbit}`}</p>
                        ) : (
                            <div className="w-[8rem] h-[1.5rem] animate-skeleton"></div>
                        )}
                    </li>
                </ul>
            </ul>
        </>
    );
}

export default Sebuku;
