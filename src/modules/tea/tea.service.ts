import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeaInput } from './dto/tea.input';
import { TeaType } from './dto/tea.type';
import { Tea } from './interfaces/tea.interface';

@Injectable()
export class TeaService {

  constructor(
    @InjectModel('Tea') private teaModel:Model<Tea>
  ){}

  async findAll():Promise<TeaType[]>{
    return await this.teaModel.find().exec();
  }

  async findOne(id:number):Promise<TeaType>{
    return await this.teaModel.findById(id);
  }

  async createTea(newTea:TeaInput):Promise<TeaType>{
    const createdTea = new this.teaModel(newTea);
    return await createdTea.save();
  }

  async delete(id:number):Promise<TeaType>{
    return await this.teaModel.findByIdAndRemove(id);
  }

  async update(id:number, newTea:Tea):Promise<TeaType>{
    return await this.teaModel.findByIdAndUpdate(id,newTea,{
      new:true
    });
  }
}
