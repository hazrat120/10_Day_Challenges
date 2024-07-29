// eslint-disable-next-line react/prop-types
export default function Index({ isparent, ChangeIsParent }) {
  return (
    <div>
      <h1>
        {isparent
          ? "I am the child component of Parent2."
          : "There might be a bug2."}
      </h1>
      <button onClick={() => ChangeIsParent()}>Click and Parent</button>
    </div>
  );
}
