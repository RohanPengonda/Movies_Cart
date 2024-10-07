function Profile() {
  return (
    <>
      <ProfileCart
        name="Alice"
        age={25}
        greetings={
          <div>
            <strong>Hello Alice, keep it up great work!!!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming,Codding</p>
        <button>Contact Me</button>
      </ProfileCart>
      <ProfileCart
        name="Bob"
        age={25}
        greetings={
          <div>
            <strong>Hello Bob, keep it up great work!!!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming,Codding</p>
        <button>Contact Me</button>
      </ProfileCart>
    </>
  );
}
export default Profile;

function ProfileCart(props) {
  // Another Method of using props and children fetchs the child components of Profile
  // const { name, age, greetings, children } = props;
  return (
    <>
      {/* calling props using aother method */}
      {/* <h2>Name: {name}</h2> */}
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.greetings}</p>
      <div>{props.children}</div>
    </>
  );
}
