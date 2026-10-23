export interface IInquiry {
  id?: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  source?: "contact-form" | "quote-modal" | "direct";
  status?: "pending" | "contacted" | "completed";
  createdAt: Date;
}
