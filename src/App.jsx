import * as React from "react";
import './App.css';

import Layout from "./layout/Layout.jsx";
import { AppointmentManagement1 } from "./components/component/AppointmentManagement1.jsx";
import { Availbility } from "./components/component/Availbility.jsx";
import { Availability2 } from "./components/component/Availability2.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home.jsx";

const Appoint3 = React.lazy (() => import("./components/component/Appoint3.jsx"));
const BookingCalender = React.lazy (() => import("./components/component/BookingCalender.jsx"))
const BookingCalender2 = React.lazy (() => import("./components/component/BookingCalender2.jsx"))
const BookingCalender3 = React.lazy (() => import("./components/component/BookingCalender3.jsx"))
const BookingCalender4 = React.lazy (() => import("./components/component/BookingCalender4.jsx"))
const BookingCalender5 = React.lazy (() => import("./components/component/BookingCalender5.jsx"))
const SchedulingComponent = React.lazy (() => import("./components/component/SchedulingComponent.jsx"))

/*
 *   <Availability2 path="5"></Availability2>
 <BookingCalender path="6"></BookingCalender>
 <BookingCalender2 path="7"></BookingCalender2>
 <BookingCalender3 path="8"></BookingCalender3>
 <BookingCalender4 path="9"></BookingCalender4>
 <BookingCalender5 path="10"></BookingCalender5>
 <SchedulingComponent path="11"></SchedulingComponent>

 *
 * */


function App () {

    return (

      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
           <Route
             path="1"
             element={
                 <React.Suspense fallback={<>...</>}>
                       <Appoint3></Appoint3>
                      </React.Suspense>
             }
           />
          <Route path="2" element={<AppointmentManagement1></AppointmentManagement1>}></Route>
          <Route path="3" element={<Availbility></Availbility>}></Route>
          <Route path="4" element={<React.Suspense> <Availability2/></React.Suspense>}></Route>
              <Route path="5" element={<React.Suspense><BookingCalender></BookingCalender></React.Suspense>}></Route>
            <Route path="6" element={<React.Suspense><BookingCalender2></BookingCalender2></React.Suspense>}></Route>

            <Route path="7" element={<React.Suspense><BookingCalender3></BookingCalender3></React.Suspense>}></Route>

            <Route path="8" element={<React.Suspense><BookingCalender4></BookingCalender4></React.Suspense>}></Route>
            <Route path="9" element={<React.Suspense><BookingCalender5></BookingCalender5></React.Suspense>}></Route>

            <Route path="10" element={<React.Suspense><SchedulingComponent></SchedulingComponent></React.Suspense>}></Route>


          </Route>
        </Routes>
    )
}

export default App
