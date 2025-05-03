import { Injectable } from '@nestjs/common';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnalysisService {
  constructor(private readonly prismaService:PrismaService) {

  }

  async create(createAnalysisDto: CreateAnalysisDto) {
    return "return";
  }

  findAll() {
    return `This action returns all analysis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analysis`;
  }

  update(id: number, updateAnalysisDto: UpdateAnalysisDto) {
    return `This action updates a #${id} analysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} analysis`;
  }
}
