# ReactNative_Nomad_MasterCLass
ReactNative_Nomad_MasterCLass    

-------------------------
 [공식문서 : expo](https://docs.expo.dev/)
 [공식문서 : react native](https://reactnative.dev/)
 [색 참조 사이트](https://flatuicolors.com/)   
   
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
* navigation prop
    - 모든 screen은 navigation prop을 가지고 있음, navigation안에는 여러 prop들이 들어 있음
    ```js
    default function Screen({navigation:{prop}}){
        return(
            <View>
                <Text>Screen</Text>
            </View>
        )
    }
    ```
[자세한 내용](https://reactnavigation.org/docs/navigation-prop)

* header 꾸미기
    - headerLeft 
    - headerTitle
[자세한 내용](https://reactnavigation.org/docs/elements#header)

* tab 꾸미기
[자세한 내용](https://reactnavigation.org/docs/bottom-tab-navigator)
[자세한 내용2](https://reactnavigation.org/docs/tab-based-navigation/)

* stack 
[자세한 내용](https://reactnavigation.org/docs/native-stack-navigator)

* stack + tab 두가지 방법 
    - tab화면 안에 stack을 쌓는 방법
        ```js
        <Tab.TabNav>
            <Tab.Screen name = "name" component = {Stack.StackNav}>
            <Tab.screen name = "~~" component = {~~}>
            <Tab.screen name = "~" component = {~~}">
        </Tab.TabNav>
        ```

    - tab화면 밖으로 stack을 쌓는 방법
        ```js
        <Stack.StackNav>
            <Stack.Screen name = "tab" component = {Tab.TabNav}>
            <Stack.screen name = "stack" component = {Stack.StackNav}>
        </Stack.StackNav>


        Tab.TabNAv({navigation: {navigate}}){
            ~~ navigate("stack", {screen: "name"})
        }
        ```

### Data Fetch
```js
const data = await (
    await fetch('uri')
).json()
```