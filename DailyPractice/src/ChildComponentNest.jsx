export const ChildComponentNest = ({ props }) => {
  const toggleNestList = (e) => {
    e.stopPropagation();
  };
  return (
    <ul>
      {props.map((item) => (
        <li onClick={toggleNestList}>
          {item.text}
          {item.children?.length > 0 && (
            <ChildComponentNest props={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};
