import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import ReactCodeMirror from "@uiw/react-codemirror";

const CodeEditorWindow = ({ onChange, language, code, theme, fontSize, forProblemsPage = true, isInterview = false }) => {

  const handleEditorChange = (value) => {
    if (isInterview) onChange(value);
    else onChange('code', value);
  };

  // const getcode = ()=>{
      //  const details = axios.get("http://localhost:3001/list")
  // }

  return (
    <div className="code-editor-container"  style={{ fontSize: fontSize, height: '500px' , }}>
      <ReactCodeMirror
        value={code}
        onChange={handleEditorChange}
        extensions={[language === 'python3' ? python() : language === 'cpp' ? cpp() : language === 'java' ? java() : javascript()]}
        theme={theme === 'dark' ? vscodeDark : eclipse}
        style={{ fontSize: fontSize, height: '100%' , }}
      />
    </div>
  );
};

export default CodeEditorWindow;
