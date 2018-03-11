import {Login} from '../components/guest';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return{
        resetLogin : () => {}
    }
}

function mapStateToProps(state, ownProps) {
    return{
        user : state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);