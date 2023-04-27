import { useState } from 'react';

export const MyCheckbox = () => {
        // true
        // false
    const [liked, setLiked] = useState(true);

    const handleChange = (e) => {
        setLiked(e.target.checked)
    }

    return (
        <div style={{ margin: "50px" }}>
            <label>
                <input type="checkbox" checked={liked} onChange={handleChange} />
                Man patiko
            </label>
        <p>Tau {liked ? 'patiko' : 'nepatiko'}</p>
        </div>
    )
}