import { useEffect, useRef, useState } from 'react';
import '../../css/fav.css';

import imgDay from '../../assets/day.png'
import imgOne from '../../assets/oneNight.png'
import imgTwo from '../../assets/twoNight.png'

import imgAlone from '../../assets/alone.png'
import imgCouple from '../../assets/couple.png'
import imgFamily from '../../assets/family.png'
import imgGroup from '../../assets/group.png'

import imgShop from '../../assets/shopping.png'
import imgForest from '../../assets/forest.png'
import imgAct from '../../assets/activity.png'
import imgFood from '../../assets/food.png'
import imgHot from '../../assets/fireworks.png'

import imgKor from '../../assets/korean.png'
import imgChn from '../../assets/chinese.png'
import imgJp from '../../assets/japanese.png'
import imgItl from '../../assets/italian.png'
import imgCafe from '../../assets/cafe.png'




const Fav = () => {
    const [show, setShow] = useState(0);
    const containerRef = useRef(null);
    const showHandle = (text) => {
        setShow(prev => text);
    }
    const endChoice = () => {
        alert('고마워요');
        setShow(prev => 0);
    }
    useEffect(()=>{
        containerRef.current.style.marginLeft = `-${show}px`;
    },[show])
    return (
        <div id='fav'>
            <div className="container"
                ref={containerRef}
            >
                <div className='start'>
                    <div className="title">
                        <h1>
                            <span>당신의 취향</span>을 알려주세요
                            <i className="fa-solid fa-quote-left left"></i>
                            <i className="fa-solid fa-quote-right right"></i>
                        </h1>
                        <span>
                            간단한 정보만 알려주시면 마음에 드는 코스를 알려 드릴게요!
                        </span>
                    </div>
                    <button onClick={()=>showHandle(1160)}>취향 선택하기</button>
                </div>
                <div className="date">
                    <div className="title">
                        <h1>인원수를 선택해 주세요.</h1>
                    </div>
                    <div className="menu">
                        <div className="item"
                            onClick={()=>showHandle(2340)}
                        >
                            <div className="img">
                                <img src={imgDay} />
                            </div>
                            <span>당일 여행</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(2340)}
                        >
                            <div className="img">
                                <img src={imgOne} />
                            </div>
                            <span>1박 2일</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(2340)}
                        >
                            <div className="img">
                                <img src={imgTwo} />
                            </div>
                            <span>2박 3일</span>
                        </div>
                    </div>
                </div>
                <div className='people'>
                    <div className="title">
                        <h1>여행 기간을 선택해 주세요.</h1>
                    </div>
                    <div className="menu">
                        <div className="item"
                            onClick={()=>showHandle(3520)}
                        >
                            <div className="img">
                                <img src={imgAlone} />
                            </div>
                            <span>나홀로</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(3520)}
                        >
                            <div className="img">
                                <img src={imgCouple} />
                            </div>
                            <span>커플</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(3520)}
                        >
                            <div className="img">
                                <img src={imgFamily} />
                            </div>
                            <span>가족</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(3520)}
                        >
                            <div className="img">
                                <img src={imgGroup} />
                            </div>
                            <span>단체</span>
                        </div>
                    </div>
                </div>
                <div className='people'>
                    <div className="title">
                        <h1>선호하는 여행지를 선택해 주세요.</h1>
                    </div>
                    <div className="menu">
                        <div className="item"
                            onClick={()=>showHandle(4660)}
                        >
                            <div className="img">
                                <img src={imgShop} />
                            </div>
                            <span>쇼핑</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(4660)}
                        >
                            <div className="img">
                                <img src={imgForest} />
                            </div>
                            <span>자연</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(4660)}
                        >
                            <div className="img">
                                <img src={imgAct} />
                            </div>
                            <span>액티비티</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(4660)}
                        >
                            <div className="img">
                                <img src={imgFood} />
                            </div>
                            <span>맛집</span>
                        </div>
                        <div className="item"
                            onClick={()=>showHandle(4660)}
                        >
                            <div className="img">
                                <img src={imgHot} />
                            </div>
                            <span>핫플</span>
                        </div>
                    </div>
                </div>
                <div className='people'>
                    <div className="title">
                        <h1>어떤 맛집을 가고 싶나요?</h1>
                    </div>
                    <div className="menu">
                        <div className="item"
                            onClick={endChoice}
                        >
                            <div className="img">
                                <img src={imgKor} />
                            </div>
                            <span>한식</span>
                        </div>
                        <div className="item"
                            onClick={endChoice}
                        >
                            <div className="img">
                                <img src={imgChn} />
                            </div>
                            <span>중식</span>
                        </div>
                        <div className="item"
                            onClick={endChoice}
                        >
                            <div className="img">
                                <img src={imgJp} />
                            </div>
                            <span>일식</span>
                        </div>
                        <div className="item"
                            onClick={endChoice}
                        >
                            <div className="img">
                                <img src={imgItl} />
                            </div>
                            <span>양식</span>
                        </div>
                        <div className="item"
                            onClick={endChoice}
                        >
                            <div className="img">
                                <img src={imgCafe} />
                            </div>
                            <span>카페</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Fav;