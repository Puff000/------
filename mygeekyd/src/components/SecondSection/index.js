// 动画
import DongHuaOne from "../../assets/动画1.png"
import DongHuaTwo from "../../assets/动画2.jpeg"
// 美食
import MeiShiOne from "../../assets/美食1.png"
import MeiShiTwo from "../../assets/美食2.jpg"
// 电影
import DianYingOne from "../../assets/电影1.jpg"
import DianYingThree from "../../assets/电影3.jpeg"
// 生活
import ShengHuoOne from "../../assets/生活1.jpeg"
import ShengHuoTwo from "../../assets/生活2.jpg"
// logo
import Logo from "../../assets/995381c0-2a90-43e5-bae5-3482565b0fe7.jpg"


import { Image } from 'antd';
import React, { useState, useRef, useEffect } from "react"
import style from "./index.module.css"
import classNames from 'classnames'
const SecondSection = () => {
  const moshu = 56
  const [active, setActive] = useState('dong');
  const secondSection = useRef(null)
  const [isFixed, setIsFixed] = useState(false);
  const activate = (key) => {
    setActive(key);
    const tabContentEl = document.querySelector(`[data-id=${key}]`);
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const onScroll = () => {
    if (secondSection.current) {
      const { top } = secondSection.current.getBoundingClientRect();
      setIsFixed(top <= 0)
      const sectionNodes = secondSection.current.querySelectorAll('section')
      Array.from(sectionNodes).forEach(section => {
        const { top } = section.getBoundingClientRect();
        const key = section.getAttribute('data-id');
        if (top <= moshu) {
          setActive(key)
        }

      });
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])
  const arr = [
    { key: 'dong', name: "动画", img: [DongHuaOne, DongHuaTwo] },
    { key: 'foot', name: "美食", img: [MeiShiOne, MeiShiTwo] },
    { key: 'movie', name: "电影", img: [DianYingOne, DianYingThree] },
    { key: 'life', name: "生活", img: [ShengHuoOne, ShengHuoTwo] },
  ]
  return (
    <div className={style.secondSection} ref={secondSection}>
      <ul className={classNames({ [style.fixed]: isFixed })}>
        {arr.map(item => (
          <li key={item.key} onClick={() => { activate(item.key) }}>
            <span>{item.name}</span>
            <span className={classNames(style.line, { [style.visible]: active === item.key })} />
          </li>
        ))}
      </ul>
      <div>
        {arr.map(tab => (
          <section key={tab.key} data-id={tab.key}>
            <div>
              <h2>{tab.name}</h2>
              {/* 访问数组中的图片元素 */}
              {tab.img.map((imgSrc, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={imgSrc} // 访问当前系列中的每张图片
                  alt={`${tab.name} 图片 ${imgIndex + 1}`} // 使用项目名称和图片索引作为 alt 属性
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* 吸低按钮 */}
      <div className={classNames(style.btnWrapper, { [style.visible]: isFixed })}>
        <img src={Logo} alt="LOGO"></img>
        <a href="https://www.bilibili.com/">
          <button>App 内打开</button>
        </a>
      </div>
    </div>
  )
}

export default SecondSection