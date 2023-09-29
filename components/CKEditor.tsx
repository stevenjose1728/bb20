import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
  preview?: boolean
}

export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
  preview = false
}: CKeditorProps) {
  const editorRef = useRef<{ CKEditor: typeof CKEditor; ClassicEditor: typeof ClassicEditor }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <div className="uk-grid-small uk-child-width-expand@s uk-text-center" data-uk-grid>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
            ],
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}

      {
        preview && (
          <div
            className="uk-margin uk-margin-remove-top"
          >
            <p className="uk-text-bold">Preview</p>
            {
              value && (
                <div
                  dangerouslySetInnerHTML={{ __html: value }}
                  style={{
                    border: 'solid 1px gray'
                  }}
                ></div>
              )
            }
          </div>
        )
      }
    </div>
  );
}