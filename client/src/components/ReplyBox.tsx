/* import React, { useState } from 'react';
import { ReplyButton } from './ReplyButton';

export function ReplyBox(){
    const [replyMessages, setReplyMessages] = useState<{body: string; }[]>([]);
    const handleReply = (body: string) => {
        setReplyMessages([...replyMessages, { body }]);
    };
    return(
        <div>
            <ReplyButton onPost={handleReply}/>
        </div>
    );
}/*  */
import React, { useState } from 'react';
import { ReplyButton } from './ReplyButton';
interface ReplyBoxProps {
    postId: number;
    userId: string;
    onPost: (reply: string) => void; // Callback function to handle posting a reply
}
export function ReplyBox({ onPost }: ReplyBoxProps) {
    const [reply, setReply] = useState('');
    const handleClick = () => {
        onPost(reply); // Call the onPost function with the entered reply
        setReply(''); // Clear the reply input after posting
    };
    return (
        <div className="replyContainer">
            <input type="text" value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Enter reply" />
            <button onClick={handleClick}>Reply</button>
        </div>
    );
}