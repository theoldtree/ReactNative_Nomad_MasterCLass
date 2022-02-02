# ReactNative_Nomad_MasterCLass
ReactNative_Nomad_MasterCLass

-----------------------------


### 어플설치
```
npx create-react-native-app : native에 접근가능 + 환결설정완료되어 있음
```



### 어플 로딩
* expo apploading
    - startAsync, onFinish, onError

* expo font
    - loadAsync : 폰트를 로딩할때 쓰는 async 함수
    - useFonts를 사용하는 방법이 가장 간편한 방법

* expo asset
    - Asset.loadAsync(require('path')) : 로컬 저장소의 asset을 로딩할때 쓰는 async 함수
    - Image.prefetch('uri') : 원격으로 asset을 가져올때 쓰는 함수 -> 그냥 이미지 저장해서 load하는게 훨씬 좋음
    - useAssets를 사용하는 것이 가장 간편한 방법



### useColorScheme()
drak인지 light인지 스트링값으로 return함 



### React Navigation
* header 꾸미기
    - headerLeft 
    - headerTitle
```
[자세한 내용](https://reactnavigation.org/docs/elements#header)
```