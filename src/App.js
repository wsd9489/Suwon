import React, { useState } from 'react';
import logo from './logo.svg';
import youngjo from './assets/images/youngjo.png'
import youngjo_angry from './assets/images/youngjo_angry.png'
import jeongjo from './assets/images/jeongjo.png'
import jeongjo_shine from './assets/images/jeongjo_shine.png'
import jeongjo_cry from './assets/images/jeongjo_cry.png'
import sadoseja from './assets/images/sadoseja.png'
import sadoseja_sad from './assets/images/sadoseja_sad.png'
import './App.css';
import BubbleChat from './components/speech_bubble';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    alert('끝끝~');
    // 여기에서 필요한 완료 처리를 수행할 수 있습니다.
  };
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
        {step === 1 && <BubbleChat messages={messages1} img={youngjo} onNext={handleNext} />}
        {step === 2 && <BubbleChat messages={messages2} img={sadoseja} onNext={handleNext} />}
        {step === 3 && <BubbleChat messages={messages3} img={jeongjo} onNext={handleFinish} />}
    </div>
  );
}

export default App;
