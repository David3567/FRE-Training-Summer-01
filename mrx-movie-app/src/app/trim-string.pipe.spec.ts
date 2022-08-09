import { TrimStringPipe } from './trim-string.pipe';

describe('TrimStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimStringPipe();
    expect(pipe).toBeTruthy();
  });
});
