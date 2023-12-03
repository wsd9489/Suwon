import logo from './logo.svg';
import youngjo from './assets/images/young.png'
import jeongjo from './assets/images/jeongjo.png'
import sadoseja from './assets/images/sadoseja.png'
import './App.css';
import BubbleChat from './components/speech_bubble';

function App() {
  const messages1 = [
    '안녕하세요! 저는 영조예요.',
    '어떤 내용을 표시할까요?',
    'React로 말풍선 채팅창을 만들어보세요.',
    '다음을 클릭하면 다음 말이 이어집니다.',
    '좋은 하루 되세요!',
  ];
  const messages2 = [
    '안녕하세요! 저는 사도세자예요.',
    '어떤 내용을 표시할까요?',
    'React로 말풍선 채팅창을 만들어보세요.',
    '다음을 클릭하면 다음 말이 이어집니다.',
    '좋은 하루 되세요!',
  ];
  const messages3 = [
    '안녕하세요! 저는 정조예요.',
    '어떤 내용을 표시할까요?',
    'React로 말풍선 채팅창을 만들어보세요.',
    '다음을 클릭하면 다음 말이 이어집니다.',
    '좋은 하루 되세요!',
  ];
  return (
    <div className="flex bg-[#8581A6] h-screen w-screen">
        <BubbleChat messages={messages1} img={youngjo}/>
    </div>
  );
}

export default App;
