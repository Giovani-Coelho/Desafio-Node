import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // const id = user_id.toString();
    // vai executar a funcao de procurar o usuario pelo id
    const user = this.usersRepository.findById(user_id);
    // se nao encontrar o usuario envia um erro
    if (!user) {
      throw new Error("User id does not exists");
    }
    // se encrontrar o usuario torne ele um admin
    const turnAdmin = this.usersRepository.turnAdmin(user);

    return turnAdmin;
  }
}

export { TurnUserAdminUseCase };
