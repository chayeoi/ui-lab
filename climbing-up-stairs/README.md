# Climbing Up Stairs

- 컨테이너에 `perspective` 속성을 사용하여 원근감 적용
- `perspective-origin` 속성을 사용하여 소실점(관찰자가 바라보는 위치)를 퍼센티지 값으로 설정
  - 이때 수평, 수직 퍼센티지 값은 각각 보더박스의 너비와 높이에 대한 상대값으로 계산
  - 기준점은 좌측 상단이므로 `150% -150%`은 좌측 끝으로부터 우측 방향으로 보더박스의 너비 * 1.5, 우측 상단으로부터 위쪽 방향으로 1.5배만큼 이동한 위치에 소실점이 설정됨
- 홀수 번째 `.step`에는 x축 방향 회전, 짝수 번째 계단에는 x축 및 y축 방향 회전 효과를 주어 계단처럼 보이도록 함
- `white-space: nowrap`으로 단어가 온전히 보이지 않더라도 줄바꿈되지 않게 처리함으로써 애니메이션 시 글자가 툭툭 끊어져보이지 않도록 함
- 모든 `.step`에 대한 가상 요소의 `content`를 같은 내용으로 넣고, 애니메이션 지연 시간을 다르게 적용하여 글자가 흐르는 효과를 나타내도록 함

## Resources

- [Climbing up the stairs | Amit Sheen - CodePen](https://codepen.io/amit_sheen/pen/vYGdBNo)
