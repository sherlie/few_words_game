import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import type { GameRound } from './type';

const rounds: GameRound[] = [
  { question: `The brain is protected by which bone?`, answer: `Skull` },
  { question: `What is the second planet from the Sun?`, answer: `Venus` },
  { question: `What gas do humans breathe in to survive?`, answer: `Oxygen` },
  {
    question: `Which animal is known as the King of the Jungle?`,
    answer: `Lion`,
  },
];

@Controller('rounds')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): GameRound[] {
    return rounds;
  }

  @Get('random')
  getRandomRound(): GameRound {
    return rounds[Math.floor(Math.random() * rounds.length)];
  }

  @Get(':id')
  getById(@Param('id') id: number): GameRound {
    return rounds[id];
  }

  @Post()
  submitRound(@Body() gameRound: GameRound) {
    rounds.push(gameRound);
  }

  @Put(':id')
  updateRound(@Param('id') id: number, @Body() gameRound: GameRound) {
    rounds[id] = gameRound;
  }
}
