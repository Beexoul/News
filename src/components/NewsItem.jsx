
const NewsItem = ( {title,description,src,url}) => {
  return (
    <div>
      <div className="col-sm-6 display: flex; card-group mb-sm-0 card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"380px"}}>
    <img src={src}  className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"School bus catches fire outside Bangkok and 25 on board are feared dead, government officials say - The Associated Press"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
  )
}

export default NewsItem