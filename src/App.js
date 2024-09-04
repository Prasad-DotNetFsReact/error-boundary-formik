import React from "react";
import ErrorBoundary from "./components/Demo1/ErrorBoundary";
import SignupForm from "./components/Demo1/SignupForm";


function App() {
    return (
        <div className="App">
        <div className="App">
            <ErrorBoundary>
                <SignupForm />
            </ErrorBoundary>
        </div>
        </div>
    );
}

export default App;
