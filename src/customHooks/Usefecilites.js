import { useEffect, useState } from "react";


const Usefceilites = () => {
    const [facilities, setfacilities] = useState([]);
    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => {
                setfacilities(data)
            })
    }, [])

    return [facilities, setfacilities];
}

export default Usefceilites;