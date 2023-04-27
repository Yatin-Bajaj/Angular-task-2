import { UserFilterPipe } from './user/user-filter.pipe';

describe('UserFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new UserFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
