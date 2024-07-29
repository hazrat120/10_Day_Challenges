// eslint-disable-next-line react/prop-types
export default function Index({ onChangeMessage }) {
  const sendMessage = () => {
    onChangeMessage("Hello how are you?.");
  };
  return (
    <div>
      <button onClick={sendMessage}>Send Message to Parent.</button>
    </div>
  );
}
