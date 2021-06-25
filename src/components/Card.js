import './Card.css';
import classNames from "classnames";


const Card = ({ icon, header, orange, cyan, darkCyan, text }) => {
    return (
        <div className={classNames({
            card: true,
            orange: orange,
            cyan: cyan,
            darkCyan: darkCyan
          })}>
            <div className="container">
                <div className="icon-header">
                    <img src={icon} alt="Logo" />
                </div>
                <div className="center">
                    <h2 className="header">{header}</h2>
                    <p className="text">{text}</p>
                </div>
                        
                <div className="btn">Learn More</div>
            </div>
        </div>
    )
}

export default Card
