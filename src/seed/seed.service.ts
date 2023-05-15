import { BadRequestException, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.inferface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { async } from 'rxjs';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel : Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ){}

  async executedSeed(){

    await this.pokemonModel.deleteMany({})

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=100');

    data.results.forEach( async ({name, url}) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      let pokemon = await this.pokemonModel.create({name,no});
    })
    return 'Seed execute';
  }
}
