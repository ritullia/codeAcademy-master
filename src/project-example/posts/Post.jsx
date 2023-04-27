import { Outlet, useNavigate } from "react-router-dom"

export const Post = () => {

    const navigate = useNavigate();

    return (
        <>
        <div>
            One single post
        </div>
        <button onClick={() => navigate("comments")} >Read comments</button>
        <Outlet />
        </>
    )
}