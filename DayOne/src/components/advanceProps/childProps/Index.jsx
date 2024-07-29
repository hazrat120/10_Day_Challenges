// eslint-disable-next-line react/prop-types
export default function Index({ onMessageChange }) {
  const sendMessage = () => {
    onMessageChange("Hello From Child");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send message to parent</button>
    </div>
  );
}
