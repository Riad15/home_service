const { useState, useEffect } = require("react")

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = "http://localhost:7000/services"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);

            })

    }, [])

    return [services, setServices];
}

export default UseServices;
