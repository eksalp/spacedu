import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footer">
        <div className="top">

            <div>
                <h1>xyz</h1>
                <p>This is the Footer.</p>
            </div>
            <div>
                <a href="/">
                <i className="fab fa-facebook-square"></i>
                </a>
                <a href="/">
                 <i className="fab fa-instagram-square"></i>
                </a>
                <a href="/">
                <i className="fab fa-youtube-square"></i>
                </a>
                <a href="/">
                <i className="fab fa-twitter-square"></i>
                </a>
            </div>
        </div>





        <div className="bottom">
            
            <div>
                <h4>First column</h4>
                <a href="/">A</a>
                <a href="/">B</a>
                <a href="/">C</a>
                <a href="/">D</a>
            </div>

            <div>
                <h4>second column</h4>
                <a href="/">A</a>
                <a href="/">B</a>
                <a href="/">C</a>
                <a href="/">D</a>
            </div>

            <div>
                <h4>Third column</h4>
                <a href="/">A</a>
                <a href="/">B</a>
                <a href="/">C</a>
                <a href="/">D</a>
            </div>

            <div>
                <h4>Fourth column</h4>
                <a href="/">A</a>
                <a href="/">B</a>
                <a href="/">C</a>
                <a href="/">D</a>
            </div>
        </div>


        </div>
    )
}

export default Footer;