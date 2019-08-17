import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  useMemo,
} from 'react';
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

// const ThemeContext = React.createContext('light');
// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [count, setCount] = useState(1);
//   const toggleTheme = useCallback(() => {
//     setTheme(prevtheme => (prevtheme === 'light' ? 'dark' : 'light'));
//   }, []);
//   // const arrObj=[{name:0,key:1}]
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)} type="button">
//         {count}
//       </button>
//       <h3>useContext的使用方式{theme}</h3>
//       <AppBody onClick={toggleTheme} />
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
//   console.log('AppMiddle rendered', prevClick === onClick);
//   const theme = useContext(ThemeContext);
//   return (
//     <button onClick={onClick} type="button">
//       ddd
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

// const Button = memo(({ handleClick }) => {
//   const refCount = useRef(0);
//   console.log('chidRender');
//   return (
//     <button onClick={handleClick} type="button">
//       {refCount.current += 1}
//     </button>
//   );
// });
// function App() {
//   const [isOn, setIsOn] = useState(false);
//   const handleClick = useCallback(() => setIsOn(prevIsOn => !prevIsOn), []);
//   return (
//     <div>
//       <h1>{isOn ? 'on' : 'off'}</h1>
//       <Button handleClick={handleClick} />
//     </div>
//   );
// }
// export default App;

