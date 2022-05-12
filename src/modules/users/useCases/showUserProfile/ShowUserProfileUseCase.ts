import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // vai fazer uma busca de usuario pelo id
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("No user with this id was found");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
