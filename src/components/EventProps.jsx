export const EventProps = () => {
  const HandleWelcomeuser = (user) => {
    alert(`Hey ${user} Welcome to My World`);
  };
  const HandleHover = () => {
    alert("Thanks for Hovering Me....");
  };
  return (
    <>
      <WelcomeUser
        onButtonClick={() => HandleWelcomeuser("Rohan")}
        onMouseHover={HandleHover}
      />
    </>
  );
};
const WelcomeUser = (props) => {
  const { onMouseHover } = props;
  const handleGreeting = () => {
    alert("Good Morning!!!!!!!!!!!");
  };
  return (
    <>
      {/* Event Handling By Using props  */}
      <button onClick={props.onButtonClick}>Click</button>
      {/* Event Handing by destruturing Props  */}
      <button onMouseEnter={onMouseHover}>Hover Me</button>

      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
