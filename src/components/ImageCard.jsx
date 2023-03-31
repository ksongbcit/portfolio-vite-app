function ImageCard({ image_file, width, alt_name }) {
    return (
        <div className="image-card-container">
            <img src={image_file} alt={alt_name} width={width} />
        </div>
    )
}
export default ImageCard
