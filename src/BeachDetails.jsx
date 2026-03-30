import { useParams, useNavigate } from "react-router-dom";

function BeachDetails({ beaches }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const beach = beaches.find((b) => b.id === Number(id));

    if (!beach) {
        return <h2>Beach not found</h2>;
    }
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button onClick={() => navigate("/")}>⬅️ Back</button>
            <h1>{beach.name}</h1>
            <p>{beach.location}</p>
            <img
                src={beach.image_url}
                style={{ width: "80%", borderRadius: "12px" }}
            />
            <p style={{ marginTop: "20px" }}>
                {beach.description}
            </p>
        </div>
    );
}

export default BeachDetails;