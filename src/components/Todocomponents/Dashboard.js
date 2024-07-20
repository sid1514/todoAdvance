import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "semantic-ui-react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useSelector } from "react-redux";
import TaskAdd from "./TaskAdd";
import MenuComponent from "./MenuComponent";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale
);

const Dashboard = ( { toggleSidBar }) => {
  const toggleValue = useSelector((state) => state.auth.value);

  const data = {
    labels: ["done", "pending"],
    datasets: [
      {
        data: [400, 100],
        backgroundColor: ["#3F9142", "#142E15"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "54%",
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="container-fluid shadow-lg">
      <div className="row position-relative ">
        {toggleSidBar ? <Sidebar /> : null}
        <div
          className={`${
            toggleValue ? "col-md-5" : "col-md-8"
          } p-3 mt-4 border-0 h-25 shadow-lg ${
            !toggleSidBar ? "ms-4 justify-content-center" : "text-start"
          } `}
        >
          <TaskAdd />
        </div>
        {toggleValue && <MenuComponent toggleValue={toggleValue} />}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const data = {
    labels: ["done", "pending"],
    datasets: [
      {
        data: [400, 100],
        backgroundColor: ["#3F9142", "#142E15"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "54%",
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="ms-2 col-md-3 d-flex flex-column align-items-center p-4 ">
      <div
        className="custom-image-size align-items-center d-flex flex-column z-1 position-absolute top-0 "
        style={{ marginTop: "1%" }}
      >
        <img
          src="user.jpg"
          alt="Profile"
          className="img-fluid rounded-circle mb-4"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <p>Profile Information</p>
      </div>
      <div
        className="d-flex flex-column ps-4 pe-4 pb-4 border-0 z-0 text-center bg-color shadow-lg"
        style={{ marginTop: "10%", width: "70%", paddingTop: "30%" }}
      >
        <div
          className="custome-margin md:mt-4 pt-4 border-0 p-2 w-100 d-flex flex-column text-start bg-white rounded"
          style={{ paddingTop: "40%" }}
        >
          <p>
            <Icon name="clipboard outline" /> All Tasks
          </p>
          <p>
            <Icon name="calendar" /> Today
          </p>
          <p>
            <Icon name="star outline" /> Important
          </p>
          <p>
            <Icon name="map" /> Planned
          </p>
          <p>
            <Icon name="clipboard check" /> Assigned to me
          </p>
        </div>
        <div className="my-4 border-0 py-4 text-start bg-white font-size">
          <Icon name="add" /> Add list
        </div>
        <div className="text-start border-0 p-2 bg-white font-size">
          <p className="fw-semibold">Today Task</p>
          <p className="border-bottom pb-2">11</p>
          <div className="d-flex justify-content-center border-0 w-100">
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
