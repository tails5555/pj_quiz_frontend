import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class SubjectBBSPostCreate extends Component{
    constructor(props) {
        super(props);
        this.state={editorContext : ""};
        this.handleEditorChange=this.handleEditorChange.bind(this);
    }
    handleEditorChange(e) {
        console.log(e.target.getContent());
    }
    _quillModules = {
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

    _quillFormats = [
        "header",
        "bold", "italic", "underline", "strike", "blockquote", "code-block",
        "list", "script", "bullet", "indent", "direction", "size", "color", "background", "font", "align", "link", "image", "video"
    ]
    render() {
        return (
            <div className="container text-center">
                <h2>퀴즈 게시물 등록</h2>
                <hr/>
                <form>
                    <div className="form-group">
                        <div className="form-group">
                            <label for="bbsPostId">게시판 선택</label>
                            <select name="bbsPostId" id="bbsPostId" value="" className="form-control">
                                <option value="1">퀴즈 공지사항</option>
                                <option value="2">점수 이의신청</option>
                                <option value="3">퀴즈 Q&A</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label for="title">게시물 제목</label>
                            <input name="title" value='' id="title" placeholder="제목은 필수입니다." type="text" className="form-control" />
                        </div>
                    </div>
                    <div className='_quill'>
                        <ReactQuill theme='snow'
                                    modules={this._quillModules}
                                    formats={this._quillFormats}
                                    toolbar={false} // Let Quill manage toolbar
                                    bounds={'._quill'}>
                            <div key="editor"
                                 ref="editor"
                                 className="quill-contents border_solid_top"
                                 dangerouslySetInnerHTML={{__html:this.state.editorContent}}
                                 style={{height : '400px'}} />
                        </ReactQuill>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label for="bbsFile">게시판 등록 파일</label>
                        <input name="bbsFile" value='' id="bbsFile" type="file" className="form-control" />
                        <br/>
                        <h6 className="text-center">게시판 파일 등록은 선택입니다.</h6>
                    </div>
                    <ul class="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            파일 1
                            <a href="#"><span class="badge badge-primary badge-pill"><i class="fas fa-trash-alt"></i></span></a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            파일 2
                            <a href="#"><span class="badge badge-primary badge-pill"><i class="fas fa-trash-alt"></i></span></a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="text-center">
                        <p>게시물 등록이 완료 되었다면 등록 버튼을 클릭하시길 바랍니다.</p>
                        <button type="submit" className="btn btn-info btn-block"><i class="fas fa-edit"></i> 글 등록</button>
                    </div>
                </form>
                <br/>
            </div>
        );
    }
}
export default SubjectBBSPostCreate;