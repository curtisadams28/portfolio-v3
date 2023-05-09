import "./tags.scss";
function Tag(props) {
  return (
    <div className="tags">
      {props.tagArray.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
}

export default Tag;