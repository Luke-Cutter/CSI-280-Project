import * as React from 'react';
import Calendar from '/src/components/Calendar.jsx';
import { Link, useParams } from 'react-router-dom';
import { getCharity } from '../utils';
{/* This will be a component that takes the charity pages hardcoded
    into opportunities page and linked accordingly
    Props: bannerImg, Position[] with Title, Overview, Hours, Location,
     Contact, About, Images[] */}

    export default function CharityPage() {
        const [charity, setCharity] = React.useState();
        const { id } = useParams();
        console.log(id);
      
        React.useEffect(() => {
            setCharity(getCharity(id));
            console.log(charity);
        }, []);

        return (
            <div>
                {charity.name}
            </div>
        )
    };