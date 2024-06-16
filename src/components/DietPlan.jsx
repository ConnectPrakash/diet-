import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DietPlan.css';

function DietPlan() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        switch (parseInt(id)) {
            case 1:
                navigate('/keto');
                break;
            case 2:
                navigate('/mediterranean');
                break;
            case 3:
                navigate('/vegan');
                break;
            case 4:
                navigate('/paleo');
                break;
            case 5:
                navigate('/intermittent-fasting');
                break;
            default:
                navigate('/profile');
        }
    }, [id, navigate]);

    return (
        <div>
            <p>Hello from DietPlan</p>
        </div>
    );
}

export default DietPlan;
