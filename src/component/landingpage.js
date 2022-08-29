import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    let navigate = useNavigate();

    return(
        <div>
            <p>React Project Landing page</p>
            <button className='border-2' onClick = {() => navigate('/myprofile')}>Go to landing page</button>

        </div>
    )
}