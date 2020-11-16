import Button from 'react-bootstrap/Button';

//like button component
const Like = (props) =>{
    return(
        <Button 
            onClick= {props.likeIt} 
            style={{marginLeft:"20pt"}} 
            variant="info">Like
        </Button>
    )
}
export default Like