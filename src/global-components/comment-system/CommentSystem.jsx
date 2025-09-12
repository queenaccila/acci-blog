import CommentInput from './CommentInput'

function CommentSystem( postSlug ) {
    return(
        <CommentInput currentPostSlug={postSlug}/>
    );
}

export default CommentSystem;