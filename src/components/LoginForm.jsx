import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {
            'Project-ID': "707d08aa-babd-4662-ac09-71adeebd6578",
            'User-Name': username,
            'User-Secret': password
        }
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch(err) {
            setError('inncorrect credentials.')
        }
        //username | password -> chat engine -> give message
        // work -> log in
        // error -> try new username
    };

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username"/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password"/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>
                                Start Chatting
                            </span>
                        </button>
                        <h2 className="error">{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;