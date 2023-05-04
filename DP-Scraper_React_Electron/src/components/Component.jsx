import '../index.css';

const Component = () => {
    return (
        <>
        </>
    )
}

const Card = (props) => {

    const classes = () => {
        const clss = props.class ? ' ' + props.class  : '';
        return 'card' + clss;
    }

    return (
        <div className={classes()}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
            </div>
        </div>
    )
}



export default Card;

