import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  constructor(
    private readonly httpSerice: HttpService
  ){}

  async executeSeed(){
    const { data } = await this.httpSerice.axiosRef.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ];
    })

    return data.results;
  }
}