import * as React from "react";
import './App.css';
import Home from "./page/home.jsx";

import Calendar from "./components/Calendar.jsx";

import { Router } from "@reach/router";
import Layout from "./layout/Layout.jsx";
function App () {

    return (
        <Router>
            <Layout path="/">
                <Home path="/"></Home>
            </Layout>
        </Router>
    )
}

export default App
