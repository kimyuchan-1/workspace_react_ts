import './App.css'

import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './Login'

import Lotto from './lotto/Lotto'
import Festival from './festival/Festival'
import FestivalContent from './festival/FestivalContent'
import TodoList from './todo/TodoList'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() { // 함수명은 파일명과 동일해야 하며, 대문자로 시작해야 함, 소문자는 html 태그로 인식함
  // jsx 컴포넌트의 함수는 반드시 return을 해야 함
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-hidden'>
        <Header/>
        <main className='w-full container mx-auto flex flex-col flex-grow overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/festival/content' element={<FestivalContent />} />
            <Route path='/todolist' element={<TodoList />}/>
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App // import 하기 위해서는 반드시 export 해야 함
