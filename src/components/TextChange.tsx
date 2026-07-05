interface TextChangeProps {
  text: string;
  SendText: string;
  onSendMessage: (data: string) => void;
}

function TextChange({ text, SendText, onSendMessage }: TextChangeProps) {
  return (
    <div>
      <button onClick={() => onSendMessage(SendText)}>
        {text}
      </button>
    </div >
  );
}

export default TextChange