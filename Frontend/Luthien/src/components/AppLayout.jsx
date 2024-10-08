import { Outlet } from "react-router-dom";
import styles from "./../styles/app-layout.module.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import MainContainer from "./../components/MainContainer";

export default function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </div>
  );
}
