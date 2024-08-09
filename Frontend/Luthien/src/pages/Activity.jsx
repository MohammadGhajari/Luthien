import { PieChart, Pie, Cell } from "recharts";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getCurrentUser } from "./../services/handleReqs";
import styles from "./../styles/activity.module.css";
import Loading from "./../components/Loading";
import "./../styles/activity.css";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function formatedDate(date) {
  return { date: date.split(" ")[0], time: date.split(" ")[1] };
}

function CartItem({
  children,
  title,
  date,
  hotelName,
  roomNumber,
  subBalance,
}) {
  return (
    <div className={styles["item-container"]}>
      <div className={styles["left"]}>
        <span>{formatedDate(date).date}</span>
        <span>{formatedDate(date).time}</span>
      </div>
      <div className={styles["middle"]}>{children}</div>
    </div>
  );
}

const Activity = React.memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState([]);

  const [chartData, setChartData] = useState([
    { name: "Reserve room", count: 0 },
    { name: "Cancel room", count: 0 },
    { name: "Deposite", count: 0 },
    { name: "Update profile", count: 0 },
    { name: "Update name", count: 0 },
    { name: "Update email", count: 0 },
    { name: "Update phone", count: 0 },
    { name: "Update birthday", count: 0 },
    { name: "Update nationality", count: 0 },
    { name: "Update gender", count: 0 },
    { name: "Update address", count: 0 },
    { name: "Add favorite", count: 0 },
    { name: "Delete favorite", count: 0 },
    { name: "Add review", count: 0 },
    { name: "Change password", count: 0 },
  ]);
  const colors = [
    "#c619e1",
    "#10d44b",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#7bbf28",
    "#ff4274",
    "#0069c5",
    "#279560",
    "#0db4e7",
    "#803af2",
    "#dc57c8",
    "#c7990f",
    "#97185c",
    "#1bbfa6",
    "#dc7e0c",
    "#1bdcf5",
    "#b41ff9",
    "#7cf357",
  ];

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      // const currentUser = await getCurrentUser();
      // const tempActivities = currentUser.data.data.activity;
      // const tempBarData = [
      //   { name: "Reserve room", count: 0 },
      //   { name: "Cancel room", count: 0 },
      //   { name: "Deposite", count: 0 },
      //   { name: "Update profile", count: 0 },
      //   { name: "Update name", count: 0 },
      //   { name: "Update email", count: 0 },
      //   { name: "Update phone", count: 0 },
      //   { name: "Update birthday", count: 0 },
      //   { name: "Update nationality", count: 0 },
      //   { name: "Update gender", count: 0 },
      //   { name: "Update address", count: 0 },
      //   { name: "Add favorite", count: 0 },
      //   { name: "Delete favorite", count: 0 },
      //   { name: "Add review", count: 0 },
      //   { name: "Change password", count: 0 },
      // ];

      // for (let i = 0; i < tempActivities.length; i++) {
      //   if (tempActivities[i].type === "reserve") tempBarData[0].count++;
      //   if (tempActivities[i].type === "cancel") tempBarData[1].count++;
      //   if (tempActivities[i].type === "deposite") tempBarData[2].count++;
      //   if (tempActivities[i].type === "updateProfile") tempBarData[3].count++;
      //   if (tempActivities[i].type === "updateName") tempBarData[4].count++;
      //   if (tempActivities[i].type === "updateEmail") tempBarData[5].count++;
      //   if (tempActivities[i].type === "updatePhoneNumber")
      //     tempBarData[6].count++;
      //   if (tempActivities[i].type === "updateBirthday") tempBarData[7].count++;
      //   if (tempActivities[i].type === "updateNationality")
      //     tempBarData[8].count++;
      //   if (tempActivities[i].type === "updateGender") tempBarData[9].count++;
      //   if (tempActivities[i].type === "updateAddress") tempBarData[10].count++;
      //   if (tempActivities[i].type === "addFav") tempBarData[11].count++;
      //   if (tempActivities[i].type === "deleteFav") tempBarData[12].count++;
      //   if (tempActivities[i].type === "addReview") tempBarData[13].count++;
      //   if (tempActivities[i].type === "changePass") tempBarData[14].count++;
      // }
      // tempActivities.reverse();
      // setActivities(tempActivities);
      // setChartData([...tempBarData]);

      const tempActivities = [
        {
          type: "reserve",
          date: "3/12/2022",
          data: { hotelName: "Almas", roomNumber: "124", subBalance: "50" },
        },
        {
          type: "updateProfile",
          date: "3/14/2021",
          data: {},
        },
        {
          type: "updatePhoneNumber",
          date: "3/14/2021",
          data: { lastPhone: "09907434529", newPhone: "09953564589" },
        },
        {
          type: "addFav",
          date: "3/14/2021",
          data: { hotelName: "Almas Shargh" },
        },
        {
          type: "addFav",
          date: "3/14/2024",
          data: { hotelName: "Almas Shargh 2" },
        },
        {
          type: "deposite",
          date: "3/14/2024",
          data: { addedBalance: "50", lastBalance: "200" },
        },
      ];
      const tempBarData = [
        { name: "Reserve room", count: 0 },
        { name: "Cancel room", count: 0 },
        { name: "Deposite", count: 0 },
        { name: "Update profile", count: 0 },
        { name: "Update name", count: 0 },
        { name: "Update email", count: 0 },
        { name: "Update phone", count: 0 },
        { name: "Update birthday", count: 0 },
        { name: "Update nationality", count: 0 },
        { name: "Update gender", count: 0 },
        { name: "Update address", count: 0 },
        { name: "Add favorite", count: 0 },
        { name: "Delete favorite", count: 0 },
        { name: "Add review", count: 0 },
        { name: "Change password", count: 0 },
      ];

      for (let i = 0; i < tempActivities.length; i++) {
        if (tempActivities[i].type === "reserve") tempBarData[0].count++;
        if (tempActivities[i].type === "cancel") tempBarData[1].count++;
        if (tempActivities[i].type === "deposite") tempBarData[2].count++;
        if (tempActivities[i].type === "updateProfile") tempBarData[3].count++;
        if (tempActivities[i].type === "updateName") tempBarData[4].count++;
        if (tempActivities[i].type === "updateEmail") tempBarData[5].count++;
        if (tempActivities[i].type === "updatePhoneNumber")
          tempBarData[6].count++;
        if (tempActivities[i].type === "updateBirthday") tempBarData[7].count++;
        if (tempActivities[i].type === "updateNationality")
          tempBarData[8].count++;
        if (tempActivities[i].type === "updateGender") tempBarData[9].count++;
        if (tempActivities[i].type === "updateAddress") tempBarData[10].count++;
        if (tempActivities[i].type === "addFav") tempBarData[11].count++;
        if (tempActivities[i].type === "deleteFav") tempBarData[12].count++;
        if (tempActivities[i].type === "addReview") tempBarData[13].count++;
        if (tempActivities[i].type === "changePass") tempBarData[14].count++;
      }
      tempActivities.reverse();
      setActivities(tempActivities);
      setChartData([...tempBarData]);

      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className={styles["container"]}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h3>Your activity during using our website.</h3>
          <div className={styles["charts-container"]}>
            <PieChart className="pie-chart-custome" width={400} height={400}>
              <Legend />
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <BarChart
              className="bar-chart-custome"
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#82ca9d"
                activeBar={<Rectangle fill="green" stroke="purple" />}
              />
            </BarChart>
          </div>
          <div className={styles["carts-container"]}>
            {activities.map((activity, i) =>
              activity.type === "reserve" ? (
                <CartItem date={activity.date}>
                  <h4>Reserve room</h4>
                  <p>
                    Hotel name: {activity.data.hotelName}, Room number:{" "}
                    {activity.data.roomNumber}
                  </p>
                  <p>Room price: ${Math.abs(activity.data.subBalance)}</p>
                </CartItem>
              ) : activity.type === "cancel" ? (
                <CartItem date={activity.date}>
                  <h4>Cancel room</h4>
                  <p>
                    {activity.data.hotelName}, Room number{" "}
                    {activity.data.roomNumber}
                  </p>
                  <p>Added balance: ${Math.abs(activity.data.addedBalance)}</p>
                </CartItem>
              ) : activity.type === "deposite" ? (
                <CartItem date={activity.date}>
                  <h4>Deposite</h4>
                  <p>Last balance: ${activity.data.lastBalance}</p>
                  <p>Added balance: ${Math.abs(activity.data.addedBalance)}</p>
                </CartItem>
              ) : activity.type === "updateProfile" ? (
                <CartItem date={activity.date}>
                  <h4>Update profile</h4>
                </CartItem>
              ) : activity.type === "updateName" ? (
                <CartItem date={activity.date}>
                  <h4>Update name</h4>
                  <p>Previus name: {activity.data.lastName}</p>
                  <p>New name: {activity.data.newName}</p>
                </CartItem>
              ) : activity.type === "updateEmail" ? (
                <CartItem date={activity.date}>
                  <h4>Update email</h4>
                  <p>Previus email: {activity.data.lastEmail}</p>
                  <p>New email: {activity.data.newEmail}</p>
                </CartItem>
              ) : activity.type === "updatePhoneNumber" ? (
                <CartItem date={activity.date}>
                  <h4>Update phone number</h4>
                  <p>Previus phone: {activity.data.lastPhone}</p>
                  <p>New phone: {activity.data.newPhone}</p>
                </CartItem>
              ) : activity.type === "updateBirthday" ? (
                <CartItem date={activity.date}>
                  <h4>Update birthday</h4>
                  <p>Previus birthday: {activity.data.lastBirth}</p>
                  <p>New birthday: {activity.data.newBirth}</p>
                </CartItem>
              ) : activity.type === "updateNationality" ? (
                <CartItem date={activity.date}>
                  <h4>Update nationality</h4>
                  <p>Previus nationality: {activity.data.lastNationality}</p>
                  <p>New nationality: {activity.data.newNationality}</p>
                </CartItem>
              ) : activity.type === "updateGender" ? (
                <CartItem date={activity.date}>
                  <h4>Update gender</h4>
                  <p>Previus gender: {activity.data.lastGender}</p>
                  <p>New gender: {activity.data.newGender}</p>
                </CartItem>
              ) : activity.type === "updateAddress" ? (
                <CartItem date={activity.date}>
                  <h4>Update address</h4>
                  <p>Previus address: {activity.data.lastAddress}</p>
                  <p>New address: {activity.data.newAddress}</p>
                </CartItem>
              ) : activity.type === "addFav" ? (
                <CartItem date={activity.date}>
                  <h4>Add favorite</h4>
                  <p>Hotel name: {activity.data.hotelName}</p>
                </CartItem>
              ) : activity.type === "deleteFav" ? (
                <CartItem date={activity.date}>
                  <h4>Delete favorite</h4>
                  <p>Hotel name: {activity.data.hotelName}</p>
                </CartItem>
              ) : activity.type === "addReview" ? (
                <CartItem date={activity.date}>
                  <h4>Add review</h4>
                  <p>
                    Hotel name: {activity.data.hotelName}, Rating:{" "}
                    {activity.data.rating}
                  </p>
                </CartItem>
              ) : activity.type === "changePass" ? (
                <CartItem date={activity.date}>
                  <h4>Change password</h4>
                </CartItem>
              ) : null
            )}
          </div>
        </>
      )}
    </div>
  );
});

export default Activity;
