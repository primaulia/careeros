export interface QuestType {
  id: number;
  user_id: string;
  type: string;
  status: string;
  experience_points: number;
  due_date: string;
  company?: {
    id: number;
    name: string;
    logo_url: string;
    linkedin_url: string;
  };
  contact?: {
    id: number;
    first_name: string;
    last_name: string;
    profile_image: string;
    linkedin_url: string;
  };
  job?: {
    id: number;
    title: string;
  };
  created_at: string;
}
