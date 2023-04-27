import { Outlet, useNavigate } from "react-router-dom"

export const Comments = () => {

    const navigate = useNavigate();

    return (
        <>
        <div>Comments for post 123</div>
        <button onClick={() => navigate("commentInfo")}>Click to see comment info</button>
        <Outlet />
        </>
    )
}