export default function index(props) {
  const { isParent, changeIsParent } = props;
  return (
    <div>
      <h4>Props Child</h4>
      <h1>
        {isParent
          ? "I am the child component of Parent"
          : "There might be a bug."}
      </h1>
      <button onClick={() => changeIsParent()}>Click me</button>
    </div>
  );
}
