import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
    const editorRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        instanceRef.current = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });


        instanceRef.current.addHook('change', () => {
            const content = instanceRef.current.getMarkdown();
            onContentChange(content);
        });


        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
            }
        };
    }, [onContentChange]);

    return (
        <div>
            <div ref={editorRef} />
        </div>
    );
  // END
};

export default MarkdownEditor;
