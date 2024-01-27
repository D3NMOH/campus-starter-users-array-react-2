import "./Card.css";

export function Card(props) {
  const user = props.user;
  return (
    <div className="card">
      <img src={user.picture.large} width="70%" />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p style={{ fontSize: "10px" }}>
        <i style={{ fontSize: "1.75em" }} class="fa-solid fa-at"></i>{" "}
        {user.email}
      </p>
      <p>
        <i class="fa-solid fa-square-phone"></i> {user.phone}
      </p>
      <p>
        <i class="fa-solid fa-earth-europe"> </i> {user.location.country}
      </p>
      <p>{user.dob.age} years</p>
    </div>
  );
}
