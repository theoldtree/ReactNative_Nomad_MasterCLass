# ReactNative_Nomad_MasterCLass

ReactNative_Nomad_MasterCLass

---

[공식문서 : expo](https://docs.expo.dev/)
[공식문서 : react native](https://reactnative.dev/)
[색 참조 사이트](https://flatuicolors.com/)

### 어플설치

```
npx create-react-native-app : native에 접근가능 + 환결설정완료되어 있음
```

### ES6

```es6
const {name1: nickname1, name2: nickname2} = object
nickname1, nickname2로 각각 name1과 name2를 대치할 수 있음
```

```es6
const {name1, name2, name3, name4 ...} = object
로 object에 있는 같은명칭으로 값을 할당시킬수 있음
```

```es6
const {object1:{object2: {name}}} = {object1:{object2:{name:"something"}}}
복층구조의 object는 이와 같이 할당할 수 있음.
```

```es6
{name1 ?? name2}
name1 이면 name1을 넘겨주고 name2면 name2를 넘겨줌
```

```es6
[name1, name2, name3] = [value1, value2, value3]
위와 같은 문법으로 name1, name2, name3에 값 들을 할당시킬 수 있음
```

- Object.keys(object name) 로 object의 key array를 얻을수 있음
- Object.map(v => typeof v) 로 object안에 있던 값들의 type을 구할수 있음

### 팁

- Platform.OS ==='android', Platform.OS === 'ios'로 OS여부 확인 가능
- {} : component , () : method function
- {}을 쓸경우 return() 안에 컴포넌트를 써야 화면이 구성됨, ()을 쓸경우 return 없이도 화면 구성이 가능
- styled component을 쓴다해도 Component 에 그냥 style porp으로 스타일링 가능
- useColorScheme() : drak인지 light인지 스트링값으로 return함
- StyleSheet.absoluteFill: View의 모든 공간을 채우는 style object
- ScrollView의 refreshControl prop으로 새로고침을 관리함
- string.slice(0,number) : 글자수 자르기
- scrollview 보다는 flatlist나 sectionlist를 사용
- flatlist의 keyextractor는 string값을 넘겨주어야함
- useNavigation(): navigation prop을 생성할 수 있음
- 모든 screen은 렌더링시 기본적으로 주어지는 prop object가 있다
- Text의 lineHeight prop으로 이미지의 크기와 일치하게 글자의 높이를 설정할수 있음(센터 조정)
- useEffect(if(data){},[data]) => data가 존재할 때 화면을 다시 rendering 하여 data is undefined문제를 해결할 수 있음

### Flatlist

- scrollview대신에 사용할수 있음
- keyExtractor 값으로 string을 넘겨주어야함 => 숫자+""
- ItemSeparatorComponent로 사이사이에 들어갈 Component를 지정해줄 수 있음
- renderItem이 array.map역할을 함

```js
renderItem = ({item})=>{
    return <Component
        prop = item.name
    />
}
```


- data={array}로 item들을 넘겨줌
- listHeaderComponent나 listFooterComponent로 flatlist의 위아래를 꾸밀수 있음
- 수직 ScrollView에 수직 Flatlist를 집어 넣기 불가
- 수직 ScrollView에 수형 Flatlist 집어 넣기 가능

### 어플 로딩

- expo apploading
  - startAsync, onFinish, onError
- expo font
  - loadAsync : 폰트를 로딩할때 쓰는 async 함수
  - useFonts를 사용하는 방법이 가장 간편한 방법
- expo asset
  - Asset.loadAsync(require('path')) : 로컬 저장소의 asset을 로딩할때 쓰는 async 함수
  - Image.prefetch('uri') : 원격으로 asset을 가져올때 쓰는 함수 -> 그냥 이미지 저장해서 load하는게 훨씬 좋음
  - useAssets를 사용하는 것이 가장 간편한 방법

### React Navigation

- navigation prop - 모든 screen은 navigation prop을 가지고 있음, navigation안에는 여러 prop들이 들어 있음
  `js default function Screen({navigation:{prop}}){ return( <View> <Text>Screen</Text> </View> ) } `
  [자세한 내용](https://reactnavigation.org/docs/navigation-prop)

- header 꾸미기 - headerLeft - headerTitle
  [자세한 내용](https://reactnavigation.org/docs/elements#header)

- tab 꾸미기
  [자세한 내용](https://reactnavigation.org/docs/bottom-tab-navigator)
  [자세한 내용2](https://reactnavigation.org/docs/tab-based-navigation/)

- stack
  [자세한 내용](https://reactnavigation.org/docs/native-stack-navigator)

- stack + tab 두가지 방법

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
const data = await (await fetch("uri")).json();
```
