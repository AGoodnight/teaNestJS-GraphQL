import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeaResolver } from './tea.resolver';
import { TeaSchema } from './tea.schema';
import { TeaService } from './tea.service';

@Module({
    imports:[MongooseModule.forFeature([{
        name:'Tea', schema:TeaSchema
    }])],
    providers:[TeaService,TeaResolver]
})
export class TeaModule {}