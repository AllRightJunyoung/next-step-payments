# React Payments 💳

<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>


## :computer: DEMO

https://user-images.githubusercontent.com/100929485/233313677-ca8fad00-bded-4492-9d81-21d3daba5f1a.mov




## ⚙️  기능 
- 가상 키보드 
- Form 유효성 검사
- Layout 수정가능 (CSS)
- Form AutoFocusing
- 카드 번호에 따라 변경되는 Card UI
- 결제 페이지 (등록된 카드에 맞는지 유효성 체크)
- PaymentApp close기능 

## :zap: 사용방법

```shell
$ npm i payment-junyoung
$ yarn add payment-junyoung
```
~~~ jsx

1. Context Provider 주입
import { PaymentAppContextProvider } from 'payment-junyoung';

<React.StrictMode>
<PaymentAppContextProvider>
   <App/>
</PaymentAppContextProvider>
</React.StrictMode>

2. 원하는 컴포넌트에 PaymentApp 주입

import { PaymentApp } from 'payment-junyoung';
function App(){
    return (
        <div>
            <PaymentApp/>
        </div>
    )
}

3. 결제가 완료되어있는지 확인하는 usePayment훅
- 장바구니 어플리케이션에 삽입가능

import { usePayment } from 'payment-junyoung';
const { isPayment } = usePayment(); // boolean
결제가 완료가 되면 isPayment 값은 true를 반환
~~~

## :books: 스토리북
- https://64465f8bbce72a66f7c2875a-molpqwtvyn.chromatic.com/?path=/story/domain-companylistmodal--default


