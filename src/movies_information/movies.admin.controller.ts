import { Controller } from '@nestjs/common';
import { MoviesServices } from './movies.services';

@Controller('/api/admin/movies')
export class MoviesAdminController {
  constructor(private readonly moviesService: MoviesServices) {}
}
