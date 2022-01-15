export default function Room({ name, description, image, alt }) {
    return (
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <img src={image} alt={alt} />
        </div>
    );
}