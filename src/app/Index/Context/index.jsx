import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  useMemo,
  useReducer,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
// const ThemeContext = React.createContext('light');
// const App = () => {

//   const [theme, setTheme] = useState('light');
//   function toggleTheme() {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }
//   return (
//     <div>
//       <h3>useContext的使用方式</h3>
//       <ThemeContext.Provider value={theme}>
//         <AppMiddle onClick={toggleTheme} />
//       </ThemeContext.Provider>
//     </div>
//   );
// };
// const AppMiddle = ({ onClick }) => {
//   console.log('AppMiddle rendered');
//   return <AppBody onClick={onClick} />;
// };
// const AppBody = ({ onClick }) => {
//   console.log('AppBody rendered');
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <button onClick={onClick} type="button">
//           {theme}
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// };
// export default App;

const ThemeContext = React.createContext('light');
const App = () => {
  const [state, dispatch] = useReducer(reducer, { theme: 'light' });
  function reducer(reducerState, action) {
    switch (action.type) {
      case 'change':
        return { theme: reducerState.theme === 'light' ? 'dark' : 'light' };
      default:
        return reducerState;
    }
  }
  return (
    <div>
      <h3>useContext的使用方式{state.theme}</h3>
      <ThemeContext.Provider value={state.theme}>
        <AppBody dispatch={dispatch} />
      </ThemeContext.Provider>
    </div>
  );
};

const AppBody = memo(({ dispatch }) => {
  console.log('AppBody rendered');
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = dispatch;
  });
  const prevClick = prevCountRef.current;
  console.log('AppMiddle rendered', Object.is(prevClick, dispatch));
  const theme = useContext(ThemeContext);
  return (
    <button type="button" onClick={() => dispatch({ type: 'change' })}>
      {theme}
    </button>
  );
});
export default App;

// const ThemeContext = React.createContext('light');
// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [count, setCount] = useState(1);
//   const toggleTheme = useCallback(() => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }, [theme]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)} type="button">
//         {count}
//       </button>
//       <h3>useContext的使用方式{theme}</h3>
//       <ThemeContext.Provider value={theme}>
//         <AppBody onClick={toggleTheme} />
//       </ThemeContext.Provider>
//     </div>
//   );
// };

// const AppBody = memo(({ onClick }) => {
//   console.log('AppBody rendered');
//   const prevCountRef = useRef();
//   useEffect(() => {
//     prevCountRef.current = onClick;
//   });
//   const prevClick = prevCountRef.current;
//   console.log('AppMiddle rendered', Object.is(prevClick, onClick));
//   const theme = useContext(ThemeContext);
//   return (
//     <button onClick={onClick} type="button">
//       {theme}
//     </button>
//   );
// });
// export default App;

// const ThemeContext = React.createContext('light');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { theme: 'light' };
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }

//   toggleTheme() {
//     this.setState(({ theme }) => ({
//       theme: theme === 'light' ? 'dark' : 'light',
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <ThemeContext.Provider value={this.state.theme}>
//           <AppMiddle onClick={this.toggleTheme} />
//         </ThemeContext.Provider>
//       </div>
//     );
//   }
// }
// class AppMiddle extends React.PureComponent {
//   render() {
//     console.log('AppMiddle rendered');
//     const { onClick } = this.props;
//     return <AppBody onClick={onClick} />;
//   }
// }

// class AppBody extends React.PureComponent {
//   render() {
//     console.log('AppBody rendered');
//     const { onClick } = this.props;
//     return (
//       <ThemeContext.Consumer>
//         {theme => (
//           <button onClick={onClick} type="button">
//             {theme}
//           </button>
//         )}
//       </ThemeContext.Consumer>
//     );
//   }
// }
// export default App;
