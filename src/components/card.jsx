function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <ul className="card-description">
          <li className="card-universe">Вселенная: {props.universe}</li>
          <li className="card-alterego">Альтер эго: {props.alterego}</li>
          <li className="card-occupation">
            Род деятельности: {props.occupation}
          </li>
          <li className="card-friends">Друзья: {props.friends}</li>
          <li className="card-superpowers">Суперсилы: {props.superpowers}</li>
        </ul>
        <img src={props.imgLink} alt={props.title} />
        <p className="card-info">{props.info}</p>
      </div>
    </div>
  );
}
export default Card;
