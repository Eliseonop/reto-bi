import { UserState } from "../slices/user/models/user.state";

export interface IRootState {
    user: UserState;
}