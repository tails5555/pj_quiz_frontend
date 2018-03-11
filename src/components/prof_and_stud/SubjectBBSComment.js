import React, {Component} from 'react';
class SubjectBBSComment extends Component{
    render(){
        return(
            <div>
                <h4>댓글 한 마디</h4>
                <form>
                    <div class="media">
                        <img class="mr-3" alt="profile"/>
                        <div class="media-body">
                            <h5 class="mt-0">사용자[학생]</h5>
                            <textarea className="form-control"></textarea>
                            <hr/>
                            <div className="text-right">
                                <button className="btn btn-info"><i class="fas fa-pen-square"></i> 작성하기</button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr/>
                <div class="media">
                    <img class="mr-3" alt="profile"/>
                    <div class="media-body">
                        <h5 class="mt-0">사용자[학생]</h5>
                        <h5 class="mt-0">2018/03/?? ??:??:??</h5>
                        댓글을 남깁니다
                    </div>
                </div>
                <hr/>
                <div class="media">
                    <img class="mr-3" alt="profile"/>
                    <div class="media-body">
                        <h5 class="mt-0">사용자[교수]</h5>
                        <h5 class="mt-0">2018/03/?? ??:??:??</h5>
                        댓글을 남깁니다
                    </div>
                </div>
                <hr/>
                <div class="media">
                    <img class="mr-3" alt="profile"/>
                    <div class="media-body">
                        <h5 class="mt-0">사용자[관리자]</h5>
                        <h5 class="mt-0">2018/03/?? ??:??:??</h5>
                        댓글을 남깁니다
                    </div>
                </div>
                <hr/>
                <br/>
            </div>
        )
    }
}
export default SubjectBBSComment;