# FUn Mouse Effect

- 이미지에 sheen 효고가 적용
  - 가상 요소에 `linear-gradient()`를 적용
  - CSS 변수 사용
  - 가상 요소의 크기를 컨테이너 요소보다 크게 만들고 `transform`을 활용하여 슬라이딩 효과를 적용
- `document`에 `mousemove` 이벤트 리스너를 등록하여 마우스 움직임에 반응하도록 함
  - 이때 x, y 축에 대해 회전각을 -20° ~ 20° 범위에서 움직이도록 설정
  - x 축 회전각은 뷰포트 전체 높이에 대한 커서 위치의 x 좌표, y 축 회전각은 뷰포트 전체 너비에 대한 y 좌표로 계산하도록 함

## Resources

- [25 cool CSS animation examples to recreate | Creative Bloq Staff](https://www.creativebloq.com/inspiration/css-animation-examples?utm_campaign=CSS%20Animation%20Weekly&utm_medium=email&utm_source=Revue%20newsletter)
