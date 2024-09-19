import React, { useState, useEffect } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react";

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("/api/test")
            .then((response) => setMessage(response.data.message))
            .catch((error) => console.error("Error fetching API:", error));
    }, []);

    return (
        <div>
            <Head title="Home" />
            <h1>Welcome to Laravel with Inertia and React!</h1>
            <p>API Message: {message}</p>
        </div>
    );
}
