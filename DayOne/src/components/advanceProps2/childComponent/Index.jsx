/* eslint-disable react/prop-types */

// Index.prototype ={
//     name: PropTypes.string.isrequired,
// }

export default function Index(props) {
  const { onChangeMessage, onChangeName, onChangeAge, style } = props;

  const sendMessage = () => {
    onChangeMessage("Hello my dear parent!");
  };
  const sendName = () => {
    onChangeName("Hazrat Ali");
  };
  const sendAge = () => {
    onChangeAge(30);
  };

  return (
    <div>
      <button style={style} onClick={sendName}>
        Change Name
      </button>{" "}
      <br />
      <button onClick={sendAge}>Change Age</button>
      <br />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
