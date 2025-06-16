export type NotificationStatus = "Read" | "Unread";
export interface Notification {
  id: number;
  title: string;
  content: string;
  is_read: NotificationStatus;
  created_at: string | null;
  updated_at: string | null;
}
