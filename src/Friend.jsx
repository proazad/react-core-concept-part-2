export default function Friend({friend}){
    const {name, email, username, address} = friend;
    const {street, suite, city, zipcode, geo} = address;
    const {lat, lng} = geo;
    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
            <p>Address: {street}, {suite},{city},{zipcode}</p>
            <p>Geo Location: <br />
                <span>Latidute: {lat}</span>, 
                <span>Longititude: {lng}</span>
            </p>

        </div>
    )
}