import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function renderQuill({input, size, meta: { touched, error, invalid, warning }}) {
    const _quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video']
        ]
    }

    const _quillFormats = [
        "header",
        "bold", "italic", "underline", "strike", "blockquote", "code-block",
        "list", "script", "bullet", "indent", "direction", "size", "color", "background", "font", "align", "link", "image", "video"
    ]
    const warningStyle = {color : 'orange'};
    const dangerStyle = {color : 'red'};
    return(
        <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
            <div className="help-block">
                {touched && ((error && <span style={dangerStyle}>{error}</span>) || (warning && <span style={warningStyle}>{warning}</span>))}
                <br/>
            </div>
            <ReactQuill
                theme='snow'
                {...input}
                modules={_quillModules}
                formats={_quillFormats}
                toolbar={false} // Let Quill manage toolbar
                onChange={(newValue, delta, source) => {
                    if(source==='user'){
                        input.onChange(newValue);
                    }
                }}
                onBlur={(range, source, quill) => {
                    input.onBlur(quill.getHTML());
                }}
                style={{height : `${size}px`}}
            />
        </div>
    );
}
export default renderQuill;