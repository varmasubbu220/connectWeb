import {images} from '../redux-store/data-store'
const Slides=()=>{
    return(<>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators ">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index.toString()}
            className={index === 0 ? 'active ' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
            style={{ backgroundColor: index === 0 ? 'white' : 'grey' }}
          ></button>
        ))}
      </div>
      <div className="carousel-inner ">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
            <img src={image.imgPath} className="d-block w-100   " alt={image.label}style={{ height: '90vh' }} />
            <div className="carousel-caption d-none d-md-block ">
              <h5 class="text-light">{image.heading}</h5>
              <p class="text-light">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
        <span className="visually-hidden  ">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="bg-primary carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>)
}
export default Slides;