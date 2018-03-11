import {connect} from 'react-redux';
import {commonLoadServiceBBSPostTitle, commonLoadServiceBBSPostTitleSuccess, commonLoadServiceBBSPostTitleFailure, resetCommonLoadServiceBBSPostTitle,
         commonLoadServiceBBSPostList, commonLoadServiceBBSPostListSuccess, commonLoadServiceBBSPostListFailure, resetCommonLoadServiceBBSPostList} from "../actions/common_serviceBBS_action";
import {ServiceBBSPostList} from "../components/common";

function mapStateToProps(state){
    return{
        selectTitle : state.serviceBBS.selectTitle,
        bbsPostList : state.serviceBBS.bbsPostList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchServiceBBSPostTitle : (subDomain) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonLoadServiceBBSPostTitle(token, subDomain)).then((response) => {
                !response.error ? dispatch(commonLoadServiceBBSPostTitleSuccess(response.payload)) : dispatch(commonLoadServiceBBSPostTitleFailure(response.payload.data));
            })
        },
        fetchServiceBBSPostList : (subDomain) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonLoadServiceBBSPostList(token, subDomain)).then((response) => {
                !response.error ? dispatch(commonLoadServiceBBSPostListSuccess(response.payload)) : dispatch(commonLoadServiceBBSPostListFailure(response.payload.data));
            })
        },
        resetFetchServiceBBSPostTitle : () => {
            dispatch(resetCommonLoadServiceBBSPostTitle());
        },
        resetFetchServiceBBSPostList : () => {
            dispatch(resetCommonLoadServiceBBSPostList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBBSPostList);