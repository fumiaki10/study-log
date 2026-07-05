function TextChange(props) {
  return (
    <div>
      <button onClick={() => props.onSendMessage(props.SendText)}>
        {props.text}
      </button>
    </div >
  );
}

export default TextChange