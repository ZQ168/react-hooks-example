import React, { useState, useEffect, useReducer } from 'react';

// export default function Example() {
//   const [state, dispatch] = useReducer(reducer, initialArg, int);

//   return (
//     <div style={{ position: 'relative' }}>
//       <h3>useReducer</h3>

//     </div>
//   );
// }

// 第一步：创建需要共享的context
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    // 第二步：使用 Provider 提供 ThemeContext 的值，Provider所包含的子树都可以直接访问ThemeContext的值
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
// Toolbar 组件并不需要透传 ThemeContext
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // 第三步：使用共享 Context
  const theme = useContext('ThemeContext');
  render() {
    return <Button theme={theme} />;
  }
}
export default App;