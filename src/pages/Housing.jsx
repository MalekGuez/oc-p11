import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousel";
import Stars from "../components/Stars";

const Housing = () => {
    const navigateTo = useNavigate();
    const { id } = useParams();

    const [details, setDetails] = useState({});

    const getDetails = async () => {
        try {
            const response = await fetch("../logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            });
            const json = await response.json();
            const foundDetails = json.find((l) => l.id === id);
            if (foundDetails) {
                setDetails(foundDetails);
            } else {
                navigateTo('/404');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getDetails();
    }, [id]);

    return (
        <div className="kasa-housing">
            {details && Object.keys(details).length > 0 && (
            <>
                <Carousel images={details.pictures} />

                <div className="kasa-housing__details">
                    <div className="kasa-housing__title">
                        <h1>{details.title}</h1>
                        <p>{details.location}</p>
                    </div>
                    <div className="kasa-housing__host">
                        <span className="kasa-housing__host__name"> {details.host.name.split(' ').map((part, index) => (
                            <span key={index}>
                                {index > 0 && <br />} 
                                {part}
                            </span>
                        ))}</span>
                        <img className="kasa-housing__host__image" src={details.host.picture} alt="" />
                    </div>
                </div>

                <div className="kasa-housing__sub-details">
                    <div className="kasa-housing__tags">
                    {details.tags && details.tags.map((value, index) => (
                        <div key={index} className="kasa-housing__tag">{value}</div>
                    ))}
                    </div>
                    <div className="kasa-housing__rating">
                        <Stars rating={details.rating} />
                    </div>
                    <div className="kasa-housing__sub-details--phone">
                        <Stars rating={details.rating} />
                        <div className="kasa-housing__host">
                        <span className="kasa-housing__host__name"> {details.host.name.split(' ').map((part, index) => (
                                <span key={index}>
                                    {index > 0 && <br />} 
                                    {part}
                                </span>
                            ))}
                        </span>
                            <img className="kasa-housing__host__image" src={details.host.picture} alt="" />
                        </div>
                    </div>
                </div>
                <div className="kasa-housing__dropdowns">
                    <Dropdown title="Description" data={details.description} />
                    <Dropdown title="Équipements" data={details.equipments} />
                </div>
            </>)
            }
           
        </div>
    );
}

export default Housing;