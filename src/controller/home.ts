import { Controller, Get, loadService } from 'chumi';
import home from '../service/home';

@Controller()
export class HomeController {
  homeSerive = loadService(home);

  @Get('/')
  async home() {
    return 'Hello Midwayjs!' + (await this.homeSerive.getInfo());
  }
}
