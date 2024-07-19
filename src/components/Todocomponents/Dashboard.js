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
import TaskAdd from "./TaskAdd";
import { useSelector } from "react-redux";
import MenuComponent from "./MenuComponent";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale
);
const Dashboard = () => {
  const booleanValue = useSelector((state) => state.value);
  console.log(booleanValue);
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
    <div className="container-fluid">
      <div className="row position-relative ">
        <div
          className="ms-2 col-md-3 d-flex flex-column align-items-center p-4"
          style={{ marginTop: "2%" }}
        >
          <div
            className="align-items-center d-flex flex-column z-1 position-absolute top-0"
            style={{ marginTop: "3%" }}
          >
            <img
              src="user.jpg"
              alt="Profile"
              className="img-fluid rounded-circle mb-4 "
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p className=" ">Profile Information</p>
          </div>
          <div
            className="d-flex flex-column ps-4 pe-4 pb-4 border z-0 text-center "
            style={{ marginTop: "10%", width: "70%", paddingTop: "30%" }}
          >
            <div
              className="mt-4 pt-4 border p-2 w-100 d-flex flex-column text-start "
              style={{ paddingTop: "40%" }}
            >
              <p>
                <Icon name="clipboard outline" />
                All Tasks
              </p>
              <p>
                <Icon name="calendar" />
                Today
              </p>
              <p>
                <Icon name="star outline" />
                Important
              </p>
              <p>
                {" "}
                <Icon name="map" />
                Planned
              </p>
              <p>
                <Icon name="clipboard check" />
                Assigned to me
              </p>
            </div>
            <div className="my-4 border py-4 text-start">
              <Icon name="add" /> Add list
            </div>
            <div className="text-start border p-2">
              <p className="fw-semibold ">Today Task</p>
              <p>11</p>
              <div className="d-flex justify-content-center border w-100">
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            booleanValue ? "col-md-6" : "col-md-8"
          } p-3 mt-4 border h-25 text-start`}
        >
          <TaskAdd />
        </div>
        {booleanValue?<MenuComponent />:null}
      </div>
    </div>
  );
};

export default Dashboard;
