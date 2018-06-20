let user = {
    name: 'Carla',
    age: 27,
    location: 'London'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

let template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        <p>{getLocation(user.location)}</p>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
