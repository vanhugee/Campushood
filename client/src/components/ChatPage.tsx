import { ChatBox } from './ChatBox'; // Assuming you have a ChatBox component

const chatContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align chat boxes in the center horizontally
    justifyContent: 'center', // Center chat boxes vertically
    marginTop: '20px', // Add margin to separate chat boxes
};

const chatBoxContainerStyle: React.CSSProperties = {
    maxHeight: 'calc(100vh - 200px)', // Set a maximum height for the chat box container
    overflowY: 'auto', // Enable vertical scrolling
    width: '100%', // Ensure the container takes up full width
    
};

export function ChatPage() {
    return (
        <div style={chatContainerStyle}>
            <div style={chatBoxContainerStyle}>
                <ChatBox />
                <ChatBox />
                <ChatBox />
                {/* Add more ChatBox components as needed */}
            </div>
        </div>
    );
}
