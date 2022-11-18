import React, { useEffect, useState } from "react";
import { getSomeStatistics } from "../../../api/report-service";
import { login } from "../../../api/user-service";
import DashBoardItem from "./DashboardItem";
import { IoIosPeople } from "react-icons/io";
import {
  RiPencilLine,
  RiBook3Line,
  RiPrinterLine,
  RiDashboardLine,
  RiHandCoinLine,
  RiHandbagLine,
  RiCalendarCheckLine,
} from "react-icons/ri";
const Dashboard = () => {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const icon = [
    <RiBook3Line />,
    <RiPencilLine />,
    <RiPrinterLine />,
    <RiDashboardLine />,
    <RiHandCoinLine />,
    <RiHandbagLine />,
    <RiCalendarCheckLine />,
    <IoIosPeople />,
  ];
  const loadReports = async () => {
    try {
      setLoading(true);
      const resp = await getSomeStatistics();
      console.log(resp.data);
      const list = Object.entries(resp.data);
      /*  const arr = icon.map((item) => {
        return list.map((listItem) => [...listItem, item]);
      }); */
      console.log(list);
      setReport(list);
      console.log(report);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    loadReports();
  }, []);
  return (
    <div className="dashboard">
      {loading &&
        report.map((reportItem, index) => {
          return (
            <DashBoardItem
              key={index}
              reportName={reportItem[0]}
              reportNum={reportItem[1]}
              reportIcon={icon[index]}
            />
          );
        })}
    </div>
  );
};
export default Dashboard;
