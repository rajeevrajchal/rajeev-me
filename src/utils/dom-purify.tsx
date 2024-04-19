import createDOMPurify from "dompurify";

const DOMPurifyMethod = createDOMPurify(window);
interface DOMPurifyProps {
  text: string;
  className?: string;
}
const DOMPurify = (props: DOMPurifyProps) => {
  const { text, className } = props;
  return (
    <div
      className={className || ""}
      dangerouslySetInnerHTML={{
        __html: DOMPurifyMethod.sanitize(text),
      }}
    />
  );
};

export default DOMPurify;
