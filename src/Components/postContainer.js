import PostTable from "./PostTable";
import { connect } from 'react-redux';
import { fetchPosts} from '../Components/redux/Reducers/reducers';

const mapStateToProps = (state,props) => {
    console.log("I am here in container",state);
    return {
       posts:state.post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fecthData: dispatch(fetchPosts())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostTable);