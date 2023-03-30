function ImageCard({ image_file }) {
    return (
        <div className="image-card-container">
            <img src={image_file} alt="profile-image" width="80px" />
        </div>
    )
}
export default ImageCard
