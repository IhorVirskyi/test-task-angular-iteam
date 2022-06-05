import { CurrentUser } from 'src/app/core/models/current-user.model';

// модель залогіненого з токеном юзера (обмежую доступ до токена)

export interface UserDetails extends CurrentUser {
  token: string;
}

