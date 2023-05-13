import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/?authMechanism=SCRAM-SHA-256',{dbName:'Production'}),
    PokemonModule,
    CommonModule,
    SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
