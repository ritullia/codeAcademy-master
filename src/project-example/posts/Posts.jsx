import { Outlet, useNavigate } from 'react-router-dom';

export const Posts = () => {

    const navigate = useNavigate();

    return (
        <>
        <div>List of posts</div>
        <button onClick={() => navigate("123")}>Read post 123</button>
        <Outlet />
        </>
    )
}