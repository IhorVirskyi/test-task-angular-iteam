import { UserRole } from './user-role.model';

export interface CurrentUser {
  first_name: string;
  last_name: string;
  role: UserRole;
}
