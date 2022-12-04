import "./styles.css"

function Links({ url, name }){
  return(
    <div className="container-links">
      <a href={url} target="_blank">{name}</a>
    </div>
  )
}

export default Links