---
id: 5
title: "TOC"
created_at: "2026-03-02"
category: "dev_blog"
featured: false
---

# TOC
![TOC_example](/images/TOC/Toc_example.png)
[원문](https://velog.io/@juunini/%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%8A%94-%EA%B5%AC%EC%84%B8%EB%8C%80%EC%9D%98-%EB%A0%88%EA%B1%B0%EC%8B%9C%EB%8B%A4)

벨로그나 티스토리, 또는 이런 '직접 만든 블로그' 에서 이런 h1 ~ h2 태그의 목차가 따라다닌다.  
스크롤 위치에 따라 현재 읽고 있는 섹션이 강조되고, 클릭하면 해당 위치로 링크되는 기능을 가지고 있는데, 한 번 만들어 보자.   

# 구현
[참고 포스팅](https://thisyujeong.dev/blog/toc-generator)  
article 내부의 h1과 h2를 수집하여 현재 화면에 보이는 heading을 감지하여 상태로 관리한다.  

## States
```tsx
const [currentId, setCurrentId] = useState<string>('');
const [headingEls, setHeadingEls] = useState<Element[]>([]);
```
currentId  
→현재 활성화된 heading의 ID & 하이라이트 기준값.  
heading에 ID를 부여하기 위해서는 마크다운 렌더링 컴포넌트에서 rehype-slug를 넣어줘야 한다.  

headingEls  
→수집된 DOM, 본문의 h1과 h2.  

## IntersectionObsever
IntersectionObserver는 말 그대로 이 요소가 화면에 들어와 있는지를 감지하는 API.  

```tsx
const observerOption = {
    threshold: 0.4,
    rootMargin: '-76px 0px 0px 0px'
};
```
threshold 0.4  
→ heading이 40% 이상 보일 때 교차로 판단

rootMargin -76px  
→ 고정된 헤더 높이만큼 보정

```tsx
function getIntersectionObserver(setState: Dispatch<SetStateAction<string>>){
    let direction = '';
    let prevYposition = 0;
    
    const checkScrollDirection = (prevY: number) => {
        if(window.scrollY === 0 && prevY === 0){
            return;
        }

        else if(window.scrollY > prevY){
            direction = 'down';
        }

        else{
            direction = 'up';
        }

        prevYposition = window.scrollY;
    };

    const observer  = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            checkScrollDirection(prevYposition);

            if((direction === 'down' && !entry.isIntersecting) || (direction === 'up' && entry.isIntersecting)){
                setState(entry.target.id);
            }
        });
    }, observerOption);

    return observer;
}
``` 
Observer는 보이거나, 보이지 않음만 알려 주므로 위/아래 스크롤 방향을 직접 계산할 필요가 있다.  
이에 따라 아래로 스크롤할 때 기존 heading이 화면에서 벗어나면 다음 heading이 현재 위치가 되고, 위로 스크롤할 때 이전 heading이 화면에 보이면 그걸 현재 위치로 설정한다.  

## Component
```tsx
export default function Toc(){
    const [currentId, setCurrentId] = useState<string>('');
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll('article h1, article h2'));
        setHeadingEls(headingElements);
        headingElements.forEach((el) => observer.observe(el));
        return () => {
            headingElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    if (headingEls.length === 0){
        return null;
    }

    return (
        <nav className = 'fixed right-16 top-40 hidden xl:block w-52'>
            <p className = 'text-[10px] text-text-3 tracking-[3px] mb-3'>// toc</p>
            <ul className = 'border-l border-accent pl-4 space-y-2'>
                {headingEls.map((el) => {
                    const active = currentId === el.id;
                    return(
                        <li 
                            key = {el.id}
                            style = {{ marginLeft: el.tagName === 'H2' ? '1rem' : 0 }}
                            className = {`block text-[11px] tracking-wide transition-colors duration-200 leading-relaxed
                                            ${active ? 'text-accent' : 'text-text-3 hover:text-text-2'}`}
                        >
                            <a href = {`#${el.id}`} className = 'block w-full h-full'>
                                {el.textContent}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}
```


# EOF
![TOC](/images/TOC/Toc_res.png)
Tada