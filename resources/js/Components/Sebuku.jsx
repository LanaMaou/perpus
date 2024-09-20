function Sebuku({
    value = {
        id: null,
        judul: null,
        penulis: null,
        deskripsi: null,
        tahun_terbit: null,
    },
}) {
    return (
        <>
            <ul
                className={`shadow-md overflow-hidden shadow-gray-300 flex items-center justify-center mb-3 text-blue-100 rounded-md w-[30rem] h-[14rem] text-start bg-opacity-90 ${
                    !value.id && "opacity-80"
                }`}
            >
                <li
                    className="flex-[1] bg-gray-200 h-full flex justify-center items-center p-2"
                    key={`${value.id}-gambarnya`}
                >
                    {value.penulis ? (
                        <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-l-lg rounded-r-sm shadow shadow-gray-400">
                            <img
                                className="object-cover"
                                src="https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg"
                                alt="Bumi Tere Liye"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full animate-skeleton-image"></div>
                    )}
                </li>
                <ul className="flex-[2] bg-red-500 h-full flex justify-start items-start flex-col p-2">
                    <li
                        className="w-full m-1 font-bold"
                        key={`${value.id}-${value.judul}`}
                    >
                        {value.judul || (
                            <div className="w-[15rem] h-[1.5rem] animate-skeleton"></div>
                        )}
                    </li>
                    <li className="m-1" key={`${value.id}-${value.penulis}`}>
                        {value.penulis ? (
                            `by ${value.penulis}.`
                        ) : (
                            <div className="w-[10rem] h-[1.5rem] animate-skeleton"></div>
                        )}
                    </li>
                    <li
                        className="m-1 text-sm"
                        key={`${value.id}-${value.deskripsi}`}
                    >
                        {value.deskripsi || (
                            <div className="w-[18rem] h-[5rem] animate-skeleton"></div>
                        )}
                    </li>
                    <li
                        className="m-1 mt-3 text-xs font-semibold"
                        key={`${value.id}-${value.tahun_terbit}`}
                    >
                        <i>
                            {value.tahun_terbit ? (
                                `tahun terbit ${value.tahun_terbit}`
                            ) : (
                                <div className="w-[8rem] h-[1.5rem] animate-skeleton"></div>
                            )}
                        </i>
                    </li>
                </ul>
            </ul>
        </>
    );
}

export default Sebuku;
