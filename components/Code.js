import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from '@/components/css/Code.module.css';

export default function Code(props) {
  const { className, ...otherProps } = props;
  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={atomOneDark}
      className={styles.code}
      customStyle={{
        flex: 1,
        background: "transparent",
      }}
      {...otherProps}
    />
  ) : (
    <code className={className} {...otherProps} />
  );
}
