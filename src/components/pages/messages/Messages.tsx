import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import type { IMessage } from "../../../types";
import { useAuth } from "../../providers/useAuth";
import { 
  Box, 
  Paper, 
  List, 
  ListItem, 
  Avatar, 
  Typography, 
  TextField, 
  IconButton,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Messages = () => {
  
  const { db, user } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [content, setContent] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [error, setError] = useState('');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessageHandler = async () => {
    const createdAt = new Date().toISOString();
    try {
      await addDoc(collection(db, "messages"), {
        senderId: user && user.id,
        receiverId,
        content,
        createdAt: createdAt,
      });
    } catch (error) {
      if (error instanceof Error && error.message) {
        setError(error.message);
      }
    }
    setContent("");

  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "messages"),
      (snapshot) => {
          const messages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as IMessage[]; 
  
          setMessages([...messages]);
        }
      );
  
      return () => unsubscribe();
    }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%',  
          height: '75vh', 
          display: 'flex', 
          flexDirection: 'column',
          borderRadius: 3,
          overflow: 'hidden'
        }}
      >
        {error && (
          <Alert severity="error" onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        <List 
          sx={{ 
            flexGrow: 1, 
            overflowY: 'auto', 
            p: 3, 
            bgcolor: '#f4f6f8',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
          }}
        >
          {messages.map((msg) => {
            const isMe = msg.senderId === user?.id;

            return (
              <ListItem
                key={msg.id}
                sx={{
                  display: 'flex',
                  flexDirection: isMe ? 'row-reverse' : 'row',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  p: 0,
                }}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: isMe ? 'primary.main' : 'grey.400', 
                    width: 36, 
                    height: 36 
                  }}
                >
                  {isMe ? <PersonIcon /> : <AccountCircleIcon />}
                </Avatar>

                <Box
                  sx={{
                    maxWidth: '75%',
                    p: 1.5,
                    borderRadius: isMe ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                    bgcolor: isMe ? 'primary.main' : 'background.paper',
                    color: isMe ? 'primary.contrastText' : 'text.primary',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {msg.content}
                  </Typography>
                </Box>
              </ListItem>
            );
          })}
          <div ref={messagesEndRef} />
        </List>

        <Box 
          sx={{ 
            p: 2, 
            bgcolor: 'background.paper', 
            borderTop: '1px solid', 
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <TextField
            fullWidth
            multiline
            maxRows={4}
            size="small"
            placeholder="Напишите сообщение..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <IconButton 
            color="primary" 
            onClick={addMessageHandler} 
            disabled={!content.trim()}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
 
export default Messages;