import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={myCustomtheme}>
      <div className="App">My App</div>
    </ThemeProvider>
  );
};

export default App;
