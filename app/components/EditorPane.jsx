
import { useEffect, useState } from 'react';

const EditorPane = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/snippets/atomic-integer.html')
      .then((response) => response.text())
      .then((data) => {
        const transformedContent = transformContent(data);
        setContent(transformedContent);
      });
  }, []);

  const transformContent = (originalContent) => {
    let transformed = originalContent
      .replace(/<0 comment>/g, '<span class="comment">')
      .replace(/<0 keyword>/g, '<span class="keyword">')
      .replace(/<0 default>/g, '<span class="default">')
      .replace(/<0 literal>/g, '<span class="literal">')
      .replace(/<1 comment>/g, '<span class="comment">')
      .replace(/<1 keyword>/g, '<span class="keyword">')
      .replace(/<1 default>/g, '<span class="default">')
      .replace(/<1 literal>/g, '<span class="literal">')
      .replace(/<2 comment>/g, '<span class="comment">')
      .replace(/<2 keyword>/g, '<span class="keyword">')
      .replace(/<2 default>/g, '<span class="default">')
      .replace(/<2 literal>/g, '<span class="literal">')
      .replace(/<\/0 default>/g, '</span>')
      .replace(/<\/1 default>/g, '</span>')
      .replace(/<\/2 default>/g, '</span>')
      // Add more replacements as needed for other placeholders
      .replace(/\n/g, '<br>'); // Replace newline characters with <br> for HTML rendering

    return transformed;
  };

  return (
    <>
      <div
        style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#f9f9f9',
          padding: '16px',
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <style jsx global>{`
        .comment { color: #6a9955; }
        .keyword { color: #569cd6; }
        .default { color: #d4d4d4; }
        .literal { color: #b5cea8; }
      `}</style>
    </>
  );
};

export default EditorPane;

/*className="w-1/2 h-full bg-gray-200 p-4 overflow-y-auto"*/