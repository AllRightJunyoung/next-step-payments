


# React Payments 💳

<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>








## :computer: DEMO (장바구니페이지 삽입)

### 1. 카드 등록 

https://user-images.githubusercontent.com/100929485/234496014-65ab7b30-0359-4c85-8e50-fbc64971a2e0.mov


### 2. 결제 완료

https://user-images.githubusercontent.com/100929485/234496111-421ade78-2073-44d7-addc-7ca710115c81.mov



### 3. 결제 실패
https://user-images.githubusercontent.com/100929485/234496223-af323665-35bf-4773-84de-c8c320ba091a.mov



## ⚙️  기능 
- 가상 키보드 
- Form 유효성 검사
- Layout 수정가능 (CSS) 
- Form AutoFocusing
- 카드 번호에 따라 변경되는 Card UI
- 결제 페이지 (등록된 카드가 맞는지도 유효성 체크)
- PaymentApp close버튼 Handler

## :zap: 사용방법

```shell
$ npm i payment-junyoung
$ yarn add payment-junyoung
```

### 1. Context Provider 주입 (필수)

~~~ jsx
import { PaymentAppContextProvider } from 'payment-junyoung';

<React.StrictMode>
<PaymentAppContextProvider>
   <App/>
</PaymentAppContextProvider>
</React.StrictMode>

~~~ 

### 2. 원하는 컴포넌트에 PaymentApp 주입

~~~ jsx

import { PaymentApp } from 'payment-junyoung';
function App(){
    return (
        <div>
            <PaymentApp/>
        </div>
    )
}

~~~

### 3. 결제가 완료되어있는지 확인하는 usePayment훅
- isPayment를 값을 통해 결제가 된지 확인이 가능

~~~ jsx

import { usePayment } from 'payment-junyoung';
const { isPayment } = usePayment(); // boolean
결제가 완료가 되면 isPayment 값은 true를 반환

~~~

### 4. PaymenApp의 Close 버튼 handler (onCloseButton)

~~~ jsx

<PaymentApp onCloseButton={() => dispatch(handlePaymentApp(false))} />
~~~


## :books: 스토리북
- https://64465f8bbce72a66f7c2875a-molpqwtvyn.chromatic.com/?path=/story/domain-companylistmodal--default



