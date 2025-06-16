import type { Notification } from "../../data/types/NotificationTypes";
import { formatDate } from "../../utils/utilities";

const NotificationDetail = ({
  notification,
}: {
  notification: Notification;
}) => {
  return (
    <div className="space-y-5">
      <div className="absolute top-4 left-9 ">
        <h4 className="font-bold text-lg">{notification.title}</h4>
        <p className="text-sm text-gray-400">
          {formatDate(notification.created_at ?? "")}
        </p>
      </div>
      <div className="mt-10 text-sm space-y-4">
        <p className="">{notification.content}</p>
      </div>
    </div>
  );
};
export default NotificationDetail;
