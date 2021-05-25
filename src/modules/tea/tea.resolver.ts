import { Resolver, Query, Args, ResolveField, Parent, Int, Mutation } from "@nestjs/graphql";
import { TeaInput } from "./dto/tea.input";
import { TeaType } from "./dto/tea.type";
import { Tea } from "./interfaces/tea.interface";
import { TeaService } from "./tea.service";


@Resolver(of => TeaType)
export class TeaResolver{
    constructor(
        private teaService:TeaService
    ){}

    @Query(returns => [TeaType])
    async teas():Promise<TeaType[]>{
        return this.teaService.findAll();
    }

    @Mutation(returns => TeaType)
    async createTea(
        @Args('input') input:TeaInput
    ):Promise<TeaType>{
        return this.teaService.createTea(input);
    }

    @Mutation(returns=>TeaType)
    async updateTea(
        @Args('id') id:number,
        @Args('input') input:TeaInput
    ):Promise<TeaType>{
        return this.teaService.update(id,input as Tea);
    }

    @Mutation(returns=>TeaType)
    async deleteTea(
        @Args('id') id:number
    ):Promise<TeaType>{
        return this.teaService.delete(id);
    }

}