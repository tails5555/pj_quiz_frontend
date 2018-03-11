import React from 'react';
import {Field} from 'redux-form';
import renderField from './renderField';
import renderQuill from './renderQuill';
const renderQuestion = ({ fields, meta: { error, submitFailed } }) => {
    let errorStyle={
        color : 'red'
    }
    return (
        <div>
            <div className="text-right">
                {submitFailed && error && <span style={errorStyle}>{error}</span>}&nbsp;&nbsp;
                <button type="button" className="btn btn-primary" onClick={() => fields.push({})}>
                    <i class="fas fa-plus-circle"></i> 문항 추가
                </button>
            </div>
            <hr/>
            {fields.map((question, index) => (
                <div key={index}>
                    <h4>문항 #{index + 1}</h4>
                    <div className="form-group">
                        <Field
                            name={`${question}.no`}
                            type="text"
                            component={renderField}
                            label="문제 번호"
                            placeholder="문제 번호를 입력하세요."
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>문제 내용</label>
                        <Field name={`${question}.context`} size={400} component={renderQuill} />
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="form-group">
                        <label>모범 답안</label>
                        <Field name={`${question}.modelAnswer`} size={300} component={renderQuill} />
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="form-group">
                        <label>배점에 해당되지 않고 보기 문제인 경우에는 체크를 하시길 바랍니다. &nbsp;&nbsp;</label>
                        <Field
                            name={`${question}.bundled`}
                            component="input"
                            type="checkbox"
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            name={`${question}.fullScore`}
                            type="text"
                            component={renderField}
                            label="배점"
                            placeholder="배점을 입력하세요."
                        />
                    </div>
                    <div className="text-right">
                        {submitFailed && error && <span style={errorStyle}>{error}</span>}&nbsp;&nbsp;
                        <button
                            type="button"
                            onClick={() => fields.remove(index)}
                            className="btn btn-danger"
                        >
                            <i class="fas fa-trash"></i> 문항 삭제
                        </button>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-primary" onClick={() => fields.push({})}>
                            <i class="fas fa-plus-circle"></i> 문항 추가
                        </button>
                    </div>
                    <hr/>
                </div>
            ))}
        </div>
    );
}
export default renderQuestion;