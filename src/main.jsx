import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/main_page/main.jsx'
import SubscriptionPlans from './components/main_page/subscription/subscriptions.jsx'
import Profile from './components/main_page/profile/profile.jsx'
import AIChat from './components/main_page/content_page/chat_with_ai.jsx'  
import Uploader from './components/main_page/content_page/upload.jsx'  
import Login from './components/login/login.jsx'
import ContentPage from './components/main_page/content_page/content_page.jsx'
import Registration from './components/login/registration.jsx';
import AdvLayout from './components/advertisment_page/layout.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<AdvLayout />} />
        <Route path="/registration" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="main/*" element={<MainPage />} >
          <Route path="profile" element={<Profile />}/>
          <Route path="subscription" element={<SubscriptionPlans />}/>
          <Route path="content" element={<ContentPage />}>
            <Route path="chatgpt" element={<AIChat aiName="Chat GPT"/>}/>
            <Route path="stableDiffusion" element={<AIChat aiName="Stable Diffusion"/>}/>
            <Route path="openSora" element={<AIChat aiName="Open Sora"/>}/>
            <Route path="text-to-3d" element={<AIChat aiName="Text to 3D"/>}/>
            <Route path="image-to-3d" element={<Uploader />}/>
          </Route>  
        </Route>
      </Routes>
    </main>
    </BrowserRouter>
</React.StrictMode>,
)
