import NotificationList from "../../components/DashboardComponents/NotificationList";
import { NotificationData } from "../../data/courses";

const NotificationsPage = () => {
  const notifications = NotificationData ?? [];
  return (
    <div className="">
      <NotificationList
        data={notifications}
        isError={false}
        isLoading={false}
      />
    </div>
  );
};

export default NotificationsPage;
