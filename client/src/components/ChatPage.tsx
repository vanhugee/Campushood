import { ChatBox } from './ChatBox'; // Assuming you have a ChatBox component
import '../styles/ChatPage.css'

export function ChatPage() {
    return (
        <div className='chatContainerStyle'>
            <div className='chatBoxContainerStyle'>
                <ChatBox />
                <ChatBox />
                <ChatBox />
                {/* Add more ChatBox components as needed */}
            </div>
        </div>
    );
}
