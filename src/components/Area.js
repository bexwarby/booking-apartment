export default function Area({ name, description, image, alt }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <img
                className="photo"
                src={image}
                alt={alt}
            />
        </div>
    )
};
