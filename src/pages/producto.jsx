import { Outlet } from "react-router-dom";

export default function Producto() {
    return (
        <>
            <h1>hola producto</h1>
            <p>mi primer producto </p>

            <Outlet />
        </>
    )
}