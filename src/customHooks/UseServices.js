const { useState, useEffect } = require("react")

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })

    }, [])

    return [services, setServices];
}

export default UseServices;
