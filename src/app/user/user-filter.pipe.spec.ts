import { UserFilterPipe } from './user-filter.pipe';
import { USERS } from '../Users';
import { ACTIVATED_USERS } from './activatedUsers';
import { DEACTIVATED_USERS } from './deactivatedUser';

describe('User filter pipe', () => {
    let userFilterPipe: UserFilterPipe;
    beforeEach(() => {
        userFilterPipe = new UserFilterPipe();
    });

    it('should return active user', () => {
        expect(userFilterPipe.transform(USERS, true)).toEqual(ACTIVATED_USERS);
    });

    it('should return deactivated user', () => {
        expect(userFilterPipe.transform(USERS, true)).not.toEqual(
            DEACTIVATED_USERS
        );
    });

    it('should return deactivated user', () => {
        expect(userFilterPipe.transform(USERS, false)).toEqual(DEACTIVATED_USERS);
    });

    it('should return all the user', () => {
        expect(userFilterPipe.transform(USERS)).toEqual(USERS);
    });
});
