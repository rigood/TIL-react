# Intersection Observer API

📆 2022. 10. 25. 화요일

[📙 Tutorial : Learn Intersection Observer In 15 Minutes](https://youtu.be/2IbRtjez6ag)

<br>

- Intersection Observer API

  - 관찰중인 요소가 뷰포트와 `교차`하는지 감지하는 API
  - 교차한다 = 관찰 중인 요소가 뷰포트 화면 내에 있다.

<br>

- 사용방법

  - IntersectionObserver 인스턴스를 생성한다.

  <br>

  ```javascript
  // const 변수명 = new IntersectionObserver(콜백함수, 옵션);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        //   if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      threshold: 1,
      //   root:
      //   rootMargin: "-100px",
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
  ```

  - `콜백함수` : 관찰이 시작되면 무엇을 할 지 콜백함수로 나타낸다.

    - `entries`는 관찰중인 요소를 가리킨다.  
      관찰중인 요소를 인자로 받아서, 그 요소들로 무엇을 할지 코드를 작성한다.

    - 위 예제에서는 관찰중인 요소가 교차중일때(`isIntersecting`, 요소가 뷰포트 내에 위치할 때)  
      show 라는 클래스를 붙여주고, 교차중이 아닐 때에는(뷰포트를 벗어날 때) 클래스를 제거하고 있다.

    - 주석으로 처리한 부분은, 관찰중인 요소가 뷰포트 내로 들어오면(isIntersecting)  
      `unobserve` 메서드를 통해 관찰을 중단하는 코드이다.

  - `옵션` : 객체 형식으로 옵션을 지정한다.

    - `threshold` 는 한계점이라는 뜻으로, isIntersecting 여부를 판단하는 기준이 된다.  
      threshold가 1이면, 요소 전체가 뷰포트 내에 위치할 때 교차되었다고 간주하고,  
      threshold가 0.5이면, 요소 절반이 보일 때 교차되었다고 간주한다.

    - `root` 는 화면의 기준을 무엇으로 할 지 정하는 옵션인데,  
      보통 전체 화면(뷰포트)를 기준으로 하기 때문에 거의 쓰이지 않는 옵션이라고 한다.

    - `rootMargin` 은 화면 영역을 margin으로 조절할 수 있는 옵션으로,  
      rootMargin이 -100px이라면 화면을 위아래 100px만큼 축소한다는 의미이고,  
      rootMargin이 100px이라면 화면을 위아래 100px만큼 확대한다는 의미이다.

<br>

- `observe` 메서드를 통해 대상을 관찰한다.

  - 위 예제에서는 querySelectorAll을 통해 card들을 가져오고,  
    forEach를 통해 observer(IntersectionObserver 인스턴스)가 각각의 카드를 관찰하도록 지정하고 있다.

  <br>
