import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUserRepository';
import UpdateProfileService from './UpdateProfileService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Troe',
      email: 'johntroe@mail.com',
    });

    expect(updateUser.name).toBe('John Troe');
    expect(updateUser.email).toBe('johntroe@mail.com');
  });

  it('should not be able update the profile from non-existing user', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'John Doe',
        email: 'john@mail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'test@mail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'john@mail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Troe',
      email: 'johntroe@mail.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updateUser.password).toBe('123123');
  });

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Troe',
        email: 'johntroe@mail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Troe',
        email: 'johntroe@mail.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
