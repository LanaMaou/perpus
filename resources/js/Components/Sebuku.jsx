function Sebuku({ value }) {
    return (
        <>
            <ul className="shadow-md overflow-hidden shadow-gray-300 flex items-center justify-center mb-3 text-blue-100 bg-red-400 rounded-md w-[30rem] h-[14rem] text-start bg-opacity-90">
                <li
                    className="flex-[1] bg-red-200 h-full flex justify-center items-center p-2"
                    key={`${value.id}-gambarnya`}
                >
                    <div className="w-full h-full overflow-hidden rounded-l-lg rounded-r-sm shadow shadow-gray-400">
                        <img
                            className="object-cover"
                            src="https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg"
                            alt="Bumi Tere Liye"
                        />
                    </div>
                </li>
                <ul className="flex-[2] bg-red-500 h-full flex justify-start items-start flex-col p-2">
                    <li
                        className="m-1 font-bold"
                        key={`${value.id}-${value.judul}`}
                    >
                        {value.judul}
                    </li>
                    <li className="m-1" key={`${value.id}-${value.penulis}`}>
                        by {value.penulis}.
                    </li>
                    <li
                        className="m-1 text-sm"
                        key={`${value.id}-${value.deskripsi}`}
                    >
                        {value.deskripsi}.
                    </li>
                    <li
                        className="m-1 mt-3 text-xs font-semibold"
                        key={`${value.id}-${value.tahun_terbit}`}
                    >
                        <i>tahun terbit {value.tahun_terbit}</i>
                    </li>
                </ul>
            </ul>
        </>
    );
}

export default Sebuku;
