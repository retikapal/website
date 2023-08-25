import "./header.css"

export default function header() {
  return (
    <div className = "header">
        <div className="headerTitles">
            {/*<span className="headerTitleSm">React and Node</span>*/}
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png" alt="" />
    </div>
  )
}


